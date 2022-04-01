---
title: 'Whisk: A practical shuffle-based SSLE protocol for Ethereum'
author: 'George Kadianakis'
date: '2022-03-30'
---

# Whisk: A practical shuffle-based SSLE protocol for Ethereum

## Introduction

We propose and specify Whisk, a privacy-preserving protocol for electing block proposers on the Ethereum beacon chain.

## Motivation

The beacon chain currently elects the next 32 block proposers at the beginning of each epoch. The results of this election are public and everyone gets to learn the identity of those future block proposers.

This information leak enables attackers to **launch DoS attacks** against each proposer *sequentially* in an attempt to disable Ethereum.

## Overview

This proposal attempts to plug the information leak that occurs during the block proposer election.

We suggest using a secret election protocol for electing block proposers. We want the election protocol to produce a **single** winner per slot and for the election results to be **secret** until winners announce themselves. Such a protocol is called a *Single Secret Leader Election* (SSLE) protocol.

Our SSLE protocol, Whisk, is a modified version of the `SSLE from DDH and shuffles` scheme from the paper ["Single Secret Leader Election" by Boneh et al](https://eprint.iacr.org/2020/025.pdf). Our [zero-knowledge proving system](https://ethresear.ch/t/provable-single-secret-leader-election/7971) is an adaptation of the [Bayer-Groth shuffle argument](http://www0.cs.ucl.ac.uk/staff/J.Groth/MinimalShuffle.pdf).

This proposal is joint work with Justin Drake, Dankrad Feist, Gottfried Herold, Dmitry Khovratovich, Mary Maller and Mark Simkin.

### High-level protocol overview

Let's start with a ten thousand feet view of the protocol.

The beacon chain first randomly picks a set of election candidates. Then and for an entire day, block proposers continuously shuffle that candidate list thousands of times. After the shuffling is finished, we use the final order of the candidate list to determine the future block proposers for the following day. Due to all that shuffling, only the candidates themselves know which position they have in the final shuffled set.

For the shuffling process to work, we don't actually shuffle the validators themselves, but cryptographic randomizable commitments that correspond to them. Election winners can *open their commitments* to prove that they won the elections.

To achieve its goals, the protocol is split into events and phases as demonstrated by the figure below. We will give a high-level summary of each one in this section, and then dive into more details on the following sections:

  * Bootstrapping event               -- where the beacon chain forks and the protocol gets introduced
  * Candidate selection event         -- where we select a set of candidates from the entire set of validators
  * Shuffling phase                   -- where the set of candidates gets shuffled and re-randomized
  * Cooldown phase                    -- where we wait for RANDAO, our [randomness beacon](https://github.com/ethereum/annotated-spec/blob/master/phase0/beacon-chain.md#seeds), to collect enough entropy so that its output is unpredictable
  * Proposer selection event          -- where from the set of shuffled candidates we select the proposers for the next day
  * Block proposal phase              -- where the winners of the election propose new blocks

![Whisk minimal](https://raw.githubusercontent.com/asn-d6/consensus-specs/23ce85b0a42ff43571ba362341359b5d2a5d76fc/specs/whisk/images/whisk_minimal.png)

### Document overview

In the [following section](#Protocol) we will be diving into Whisk; specifying in detail the cryptography involved as well as the protocol that the validators and the beacon chain need to follow.

After that, we will perform a [security analysis](#Security-analysis) of Whisk, in an attempt to understand how it copes against certain types of attacks.

Following that we will [calculate the overhead](#Overhead-analysis) that Whisk imposes on Ethereum in terms of block and state size, as well as computational overhead.

We will then move into an analysis of [alternative approaches](#Related-work) to solve the problem of validator privacy and compare their trade-offs to Whisk.

We close this proposal with a [discussion section](#Discussion) which touches upon potential simplifications and optimizations that could be done to Whisk.

## Protocol

In this section, we go through the protocol in detail.

We start by introducing the cryptographic commitment scheme used. We proceed with specifying the candidate and proposer selection events, and then we do a deep dive into the shuffling algorithm used.

We have written a [feature-complete draft consensus implementation of Whisk](https://github.com/ethereum/consensus-specs/pull/2800). Throughout this section, we link to specific parts of the code where applicable to better guide readers through the protocol.

### Commitment scheme

For the shuffling to work, we need a commitment scheme that can be randomized by third parties such that the new version is unlinkable to any previous version, yet its owner can still track the re-randomized commitment as her own. Ideally, we should also be able to open commitments in a zero-knowledge fashion so that the same commitment can be opened multiple times. We also need Alice's commitment to be *bound to her identity*, so that only she can open her commitment.

We use the commitment scheme suggested by the SSLE paper where Alice commits to a random long-term secret $k$ using a tuple $(rG, krG)$ (called a *tracker* [in this proposal](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L88)). Bob can randomize Alice's tracker with a random secret $z$ by multiplying both elements of the tuple: $(zrG, zkrG)$. Finally, Alice can prove ownership of her randomized tracker (i.e. open it) by providing a *proof of knowledge of a discrete log* (DLOG NIZK) that proves knowledge of a $k$ such that $k(zrG) == zkrG$.

Finally, we achieve *identity binding* by having Alice provide a deterministic commitment $com(k) = kG$ when she registers her tracker. We store $com(k)$ in [Alice's validator record](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L97), and use it to check that [no two validators have used the same $k$](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L266). We also use it at registration and when opening the trackers to check that both the tracker and $com(k)$ use the same $k$ using a *discrete log equivalence proof* (DLEQ NIZK). Fr more details see the [*"Selling attacks"* section](#Selling-attacks) of this document and the `duplication attack` section in the SSLE paper.

### Protocol flow

Now let's dive deeper into Whisk to understand how candidates are selected and how proposing works. For this section, we will assume that all validators have registered *trackers*. We will tackle registration later in this document.

![Whisk](https://raw.githubusercontent.com/asn-d6/consensus-specs/23ce85b0a42ff43571ba362341359b5d2a5d76fc/specs/whisk/images/whisk.png)

The protocol starts with the beacon chain using public randomness from RANDAO [to sample](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L109) 16,384 random trackers from the entire set of validators (currently around 250,000 validators). The beacon chain places those trackers into a *candidate list*.

After that and for an entire day (8,192 slots), block proposers *shuffle* and randomize the candidate list using private randomness. They also submit a zero-knowledge proof that the shuffling and randomization were performed honestly. During this shuffling phase, each shuffle only touches 128 trackers at a time; a limitation incurred by the ZKP performance and the bandwidth overhead of communicating the newly-shuffled list of trackers. The strategy used for shuffling will be detailed in the [next section](#Shuffling-phase).

After the shuffling phase is done, we use RANDAO to populate our *proposer list*; that is, to [select an ordered list](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L124) of the 8,192 winning trackers that represent the proposers of the next 8,192 slots (approximately a day). We [stop shuffling](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L251) one epoch before the *proposer selection* occurs, so that malicious shufflers can't shuffle based on the future result of the RANDAO (we call this epoch the *cooldown phase*).

Finally, for the entire next day (8,192 slots), we [sequentially map the trackers](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L174) on the proposer list to beacon chain slots. When Alice sees that her tracker corresponds to the current slot, she can open her tracker [using a DLEQ NIZK](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L156) and submit a valid *block proposal*.

This means that the *proposal phase* lasts for 8,192 slots and the same goes for the *shuffling phase*. This creates a day-long pipeline of Whisk runs, such that when the *proposal phase* ends, the *shuffling phase* has also finished and has prepared the 8,192 proposers for the next day.

### Shuffling phase

In the previous section, we glossed over the strategy used by validators to shuffle the candidate list (of size 16,384) with small shuffles (of size 128). Shuffling a big list using small shuffles (called *stirs* from now on) is not trivial, especially when a big portion of shufflers might be malicious or offline. We call our proposed algorithm **Feistelshuffle**.

##### Setup

Feistelshuffle lasts for the duration of the *shuffling phase* (8,192 slots). We [split time](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L242) into 64 rounds of 128 steps (i.e. slots) each.

We represent the set of candidates of size 16,384 as a 128x128 square *shuffling matrix* (where each cell contains a *number* between 0 and 16,383).

##### Algorithm

At every step of each round, a validator *stirs* a set of Whisk trackers [given by a row of the shuffling matrix](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L257) in sequential order (e.g. on the first step, the first row gets stirred). Each validator *stirs* by permuting and randomizing the Whisk trackers from the set.

After 128 steps, all rows of the shuffling matrix have been processed and that concludes a round.

![Feistelshuffle](https://raw.githubusercontent.com/asn-d6/consensus-specs/23ce85b0a42ff43571ba362341359b5d2a5d76fc/specs/whisk/images/feistelshuffle.png)

At the end of each round, we perform a *dispersion* transformation on the shuffling matrix. To perform the *dispersion*, we interpret every $(x,y)$ coordinate in the shuffling matrix as a plaintext and modify it using [a one-round Feistel mapping](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L210) that transforms every $(x,y)$ coordinate into another $(y,s)$ coordinate in a one-to-one fashion (see figure below).

![Feistel round](https://raw.githubusercontent.com/asn-d6/consensus-specs/23ce85b0a42ff43571ba362341359b5d2a5d76fc/specs/whisk/images/feistelround.png)

The $F$ function is a bijective nonlinear mapping, which is $y\rightarrow y^3\bmod{128}$ in our case.

The *dispersion* transformations don't need to be performed on-chain. We can perform the needed rounds of Feistel encryption at each step of Feistelshuffle when [computing the indices that should get stired](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L235).

See the [*Feistelshuffle analysis* section](#Feistelshuffle-analysis) below for a security analysis of Feistelshuffle

### Proofs of correct shuffle

During the shuffling phase, validators permute and randomize each row of the shuffling matrix using private randomness.

Validators [must use zero-knowledge proofs](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L256) to show that they have shuffled honestly: that is, to prove that the shuffle output was a permutation of the input and that the input trackers actually got randomized. If no such proofs were used, a malicious shuffler could replace all trackers with her own trackers or with garbage trackers.

Furthermore, to avoid adaptive shuffling attacks, we force validators to commit to their permutation ahead of time. Validators [register their permutation commitment](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L309) when they publish a block, and they must use that permutation the next time they publish a block. We again ensure that this is the case using zero-knowledge proofs.

We will now take a look at the zero-knowledge proofs used by Whisk.

Verifiable shuffling has been a research topic [for decades](http://www.lix.polytechnique.fr/~tomc/P2P/Papers/Theory/MIXes.pdf) due to [its application in mixnets](https://www.iacr.org/archive/eurocrypt2000/1807/18070563-new.pdf) and hence to online anonymity and digital election schemes. Already since twenty years ago, zero-knowledge proofs [based on randomizable ElGamal ciphertexts](https://www.iacr.org/archive/crypto2001/21390366.pdf) have been proposed, and in recent years we've seen proofs [based on CRS and pairings](https://eprint.iacr.org/2017/894.pdf) as well as [post-quantum proofs based on lattices](https://eprint.iacr.org/2019/357.pdf).

In Whisk we use shuffling ZKPs that solely rely on the discrete logarithm assumption and don't require a trusted setup while still maintaining decent proving and verification performance. [Our proofs](https://ethresear.ch/t/provable-single-secret-leader-election/7971) are heavily based on [previous work on shuffling arguments by Bayer and Groth](http://www0.cs.ucl.ac.uk/staff/J.Groth/MinimalShuffle.pdf) and they also incorporate more recent optimizations inspired by the inner product arguments of [Bulletproofs](https://eprint.iacr.org/2017/1066.pdf).

We have [implemented an initial PoC](https://github.com/ethresearch/Shuffle_SSLE/tree/master/rust_code/src) of the shuffling proofs and we are working on a more robust implementation that includes test vectors and can be used as a solid basis for writing production-ready code for Ethereum clients.

### Bootstrapping

In all previous sections, we've been assuming that the system has bootstrapped and that all validators have Whisk trackers and commitments associated with them. In this section, we show how to do bootstrapping.

We bootstrap Whisk by having the beacon chain [initialize all validators](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/fork.md?plain=1#L76) with [dummy predictable commitments](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L338). We then allow validators to [register a secure commitment](https://github.com/asn-d6/consensus-specs/blob/whisk_ethresearch/specs/whisk/beacon-chain.md?plain=1#L299) when they propose a new block.

This means that the system starts in an insecure state where the adversary can predict future proposers (similar to the status quo), and as more validators register secure commitments, the system gradually reaches a secure steady state.

## Security analysis

In this section, we analyze Whisk's security and privacy.

We first see how Whisk effectively expands the anonymity set of proposers. We then explore various active attacks that could be performed against Whisk: either by malicious shufflers or by the Ethereum randomness beacon (RANDAO). We close this section by demonstrating how Whisk is protected against selling attacks, where an adversary attempts to buy specific proposer slots.

### Anonymity set

The core idea of Whisk is to significantly increase the anonymity set of block proposers. In particular, the anonymity set increases from the status quo of a single validator to at least 8,192 validators (which correspond to the *number of candidates that did not get selected as proposers*)

To make this concrete, the adversary knows the identities of the validators that got selected as *candidates*. However, because of the shuffling phase, she cannot tell which of those validators got selected as *proposers* at the end of the protocol. This means that the 8,192 candidates that were not selected as proposers become the anonymity set for all proposers.

It's worth noting that those 8,192 validators actually correspond to a significantly smaller number of nodes on the P2P layer. For example, the current validator set of 250,000 validators is represented [by about 5,000 P2P nodes](https://ethernodes.org/). While it's not known how validators are distributed to this small number of nodes, for this analysis we can assume that the distribution follows something close to the Pareto principle where "20% of the nodes run 80% of the validators". Doing [a simulation with this distribution](https://gist.github.com/asn-d6/1d972421667a23a0635f65cd5d12d0e7) we find that an anonymity set of 8,192 validators corresponds to 2,108 nodes on average. That is explained by the fact that even though there are some *"heavy nodes"* that will always appear in the anonymity set and will control a hefty portion of it, there is also a long tail of *"light nodes"* that run one or two validators that helps increase the size of the anonymity set.

Whisk can also be adapted to produce a bigger anonymity set by increasing the size of the *candidate list* while keeping the size of the *proposer list* the same. However, doing such a change requires analyzing our shuffling strategy to see if Feistelshuffle can sufficiently shuffle a bigger *candidate list*. Alternatively, we could increase the size of our stirs but we would need to be certain that this does not render our ZKPs prohibitively expensive.

### Feistelshuffle analysis

In this section, we analyze the security of our Feistelshuffle strategy. While we present the main results here, a detailed analysis can be found [in the Appendix](#Appendix-A-Shuffling-strategy-security-analysis) and in a [companion paper](https://github.com/khovratovich/whisk-analysis/blob/main/WhiskAnalysis.pdf).

Our threat model assumes an active adversary who controls a fraction of the shufflers and a fraction of the candidate trackers. We also assume that a fraction of honest proposers is offline and will not be stirring at all. The goal of the adversary is to disable the network by deanonymizing and attacking proposers.

Our analysis is based on identifying the trackers that did not get stirred by honest shufflers and hence don't have an anonymity set (we call those *0-touchers*). We also quantify the anonymity set of all other trackers (called *1-touchers*). The strategy of the adversary is to always attack the *0-touchers* since those are trivial to attack, and then attack the *1-touchers* with the smallest anonymity set.

To perform our analysis we use one concrete property of the Feistelshuffle dispersion: it is **uniform**, i.e. all trackers of a single stir will be processed by distinct proposers in the next round and in the round after that. Note that this property does not hold for most of other dispersion mechanisms, including random selection of trackers and matrix transposition.

Our analysis shows that almost all *1-touchers* have an anonymity set of at least 4000 trackers. On a network where 20% of all proposers are offline, a 50% attacker can shut down 2.5% of the network every day by attacking a total of 540K nodes, or 2630 machines per proposer *on average*. For more detailed results, please see [the Appendix](#Appendix-A-Shuffling-strategy-security-analysis).

