import { Text } from '@chakra-ui/react';
import { InlineMath } from 'react-katex';
import type { NextPage } from 'next';

import { PageMetadata, Publication, ResearchArea } from '../components/UI';

const Research: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Research'
        description='Explore the cryptography research and papers published by the Ethereum Foundation'
      />

      <main>
        <ResearchArea subtitle='Data Availability Sampling' mb={10}>

        <Publication
            title='FRIDA: Data Availability Sampling from FRI'
            authors='Mathias Hall-Andersen, Mark Simkin, Benedikt Wagner'
            conference='Crypto 2024'
            link='https://eprint.iacr.org/2024/248.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                As blockchains like Ethereum continue to grow, clients with limited resources can no longer store the entire chain. 
                Light nodes that want to use the blockchain, without verifying that it is in a good state overall, can just download the block headers without the corresponding block contents. 
                As those light nodes may eventually need some of the block contents, they would like to ensure that they are in principle available.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Data availability sampling, introduced by Bassam et al., is a process that allows light nodes to check the availability of data without download it. 
                In a recent effort, Hall-Andersen, Simkin, and Wagner have introduced formal definitions and analyzed several constructions. 
                While their work thoroughly lays the formal foundations for data availability sampling, the constructions are either prohibitively expensive, use a trusted setup, or have a download complexity for light clients scales with a square root of the data size.
              </em>
            </Text>
            <Text fontSize='sm'>
              <em>
              In this work, we make a significant step forward by proposing an efficient data availability sampling scheme without a trusted setup and only polylogarithmic overhead. 
              To this end, we find a novel connection with interactive oracle proofs of proximity (IOPPs). 
              Specifically, we prove that any IOPP meeting an additional consistency criterion can be turned into an erasure code commitment, and then, leveraging a compiler due to Hall-Andersen, Simkin, and Wagner, into a data availability sampling scheme. 
              This new connection enables data availability to benefit from future results on IOPPs. 
              We then show that the widely used FRI IOPP satisfies our consistency criterion and demonstrate that the resulting data availability sampling scheme outperforms the state-of-the-art asymptotically and concretely in multiple parameters.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Foundations of Data Availability Sampling'
            authors='Mathias Hall-Andersen, Mark Simkin, Benedikt Wagner'
            link='https://eprint.iacr.org/2023/1079.pdf'
            year={2023}
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Towards building more scalable blockchains, an approach known as data availability
                sampling (DAS) has emerged over the past few years. Even large blockchains like
                Ethereum are planning to eventually deploy DAS to improve their scalability. In a
                nutshell, DAS allows the participants of a network to ensure the full availability
                of some data without any one participant downloading it entirely. Despite the
                significant practical interest that DAS has received, there are currently no formal
                definitions for this primitive, no security notions, and no security proofs for any
                candidate constructions. For a cryptographic primitive that may end up being widely
                deployed in large real-world systems, this is a rather unsatisfactory state of
                affairs.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                In this work, we initiate a cryptographic study of data availability sampling. To
                this end, we define data availability sampling precisely as a clean cryptographic
                primitive. Then, we show how data availability sampling relates to erasure codes. We
                do so by defining a new type of commitment schemes which naturally generalizes
                vector commitments and polynomial commitments. Using our framework, we analyze
                existing constructions and prove them secure. In addition, we give new constructions
                which are based on weaker assumptions, computationally more efficient, and do not
                rely on a trusted setup, at the cost of slightly larger communication complexity.
                Finally, we evaluate the trade-offs of the different constructions.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Fast amortized KZG proofs'
            authors='Dankrad Feist, Dmitry Khovratovich'
            year={2023}
            link='https://eprint.iacr.org/2023/033'
          >
            <Text fontSize='sm'>
              <em>
                In this note we explain how to compute n KZG proofs for a polynomial of degree d in time superlinear of (n + d). 
                Our technique is used in lookup arguments and vector commitment schemes.
              </em>
            </Text>
          </Publication>
      
          <Publication
            title='Halo Infinite: Proof-Carrying Data from Additive Polynomial Commitments'
            authors='Dan Boneh, Justin Drake, Ben Fisch, Ariel Gabizon'
            conference='Crypto 2021.'
            link='https://eprint.iacr.org/2020/1536.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Polynomial commitment schemes (PCS) have recently been in the spotlight for their
                key role in building SNARKs. A PCS provides the ability to commit to a polynomial
                over a finite field and prove its evaluation at points. A succinct PCS has
                commitment and evaluation proof size sublinear in the degree of the polynomial. An
                efficient PCS has sublinear proof verification. Any efficient and succinct PCS can
                be used to construct a SNARK with similar security and efficiency characteristics
                (in the random oracle model).
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                Proof-carrying data (PCD) enables a set of parties to carry out an indefinitely long
                distributed computation where every step along the way is accompanied by a proof of
                correctness. It generalizes incrementally verifiable computation and can even be
                used to construct SNARKs. Until recently, however, the only known method for
                constructing PCD required expensive SNARK recursion. A system called Halo first
                demonstrated a new methodology for building PCD without SNARKs, exploiting an
                aggregation property of the Bulletproofs innerproduct argument. The construction was
                heuristic because it makes non-black-box use of a concrete instantiation of the
                Fiat-Shamir transform. We expand upon this methodology to show that PCD can be
                (heuristically) built from any homomorphic polynomial commitment scheme (PCS), even
                if the PCS evaluation proofs are neither succinct nor efficient. In fact, the Halo
                methodology extends to any PCS that has an even more general property, namely the
                ability to aggregate linear combinations of commitments into a new succinct
                commitment that can later be opened to this linear combination. Our results thus
                imply new constructions of SNARKs and PCD that were not previously described in the
                literature and serve as a blueprint for future constructions as well.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Aggregatable subvector commitments for stateless cryptocurrencies'
            authors='Alin Tomescu, Ittai Abraham, Vitalik Buterin, Justin Drake, Dankrad Feist, Dmitry
            Khovratovich'
            conference='SCN 2020.'
            link='https://eprint.iacr.org/2020/527.pdf'
          >
            <Text fontSize='sm'>
              <em>
                An aggregatable subvector commitment (aSVC) scheme is a vector commitment (VC)
                scheme that can aggregate multiple proofs into a single, small subvector proof. In
                this paper, we formalize aSVCs and give a construction from constant-sized
                polynomial commitments. Our construction is unique in that it has linear-sized
                public parameters, it can compute all constant-sized proofs in quasilinear time, it
                updates proofs in constant time and it can aggregate multiple proofs into a
                constant-sized subvector proof. Furthermore, our concrete proof sizes are small due
                to our use of pairing-friendly groups. We use our aSVC to obtain a payments-only
                stateless cryptocurrency with very low communication and computation overheads.
                Specifically, our constant-sized, aggregatable proofs reduce each block&apos;s proof
                overhead to a single group element, which is optimal. Furthermore, our subvector
                proofs speed up block verification and our smaller public parameters further reduce
                block size.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Efficient polynomial commitment schemes for multiple points and polynomials'
            authors='Dan Boneh, Justin Drake, Ben Fisch, Ariel Gabizon'
            year={2020}
            link='https://eprint.iacr.org/2020/081.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We present an enhanced version of the Kate, Zaverucha and Goldberg polynomial
                commitment scheme [KZG10] where a single group element can be an opening proof for
                multiple polynomials each evaluated at a different arbitrary subset of points.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                As a sample application we “plug in” this scheme into the PLONK proving
                system[GWC19] to obtain improved proof size and prover run time at the expense of
                additional verifier G2 operations and pairings, and additional G2 SRS elements.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                We also present a second scheme where the proof consists of two group elements and
                the verifier complexity is better than previously known batched verification methods
                for [KZG10].
              </em>
            </Text>
          </Publication>
        </ResearchArea>

        <ResearchArea subtitle='Leader Election' mb={10}>

        <Publication
            title='Jackpot: Non-Interactive Aggregatable Lotteries'
            authors='Nils Fleischhacker, Mathias Hall-Andersen, Mark Simkin, Benedikt Wagner'
            link='https://eprint.iacr.org/2023/1570.pdf'
            year={2023}
          >
            <Text mb={4} fontSize='sm'>
              <em>
                In proof-of-stake blockchains, liveness is ensured by repeatedly selecting random groups of parties as leaders, who are then in charge of proposing new blocks and driving consensus forward, among all their participants. 
                The lotteries that elect those leaders need to ensure that adversarial parties are not elected disproportionately often and that an adversary can not tell who was elected before those parties decide to speak, as this would potentially allow for denial-of-service attacks. 
                Whenever an elected party speaks, it needs to provide a winning lottery ticket, which proves that the party did indeed win the lottery. 
                Current solutions require all published winning tickets to be stored individually on-chain, which introduces undesirable storage overheads. 
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                In this work, we introduce <i>non-interactive aggregatable lotteries</i> and show how these can be constructed efficiently. 
                Our lotteries provide the same security guarantees as previous lottery constructions, but additionally allow any third party to take a set of published winning tickets and aggregate them into one short digest. 
                We provide a formal model of our new primitive in the universal composability framework. 
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
              As one of our main technical contributions, which may be of independent interest, we introduce aggregatable vector commitments with simulation-extractability and present a concretely efficient construction thereof in the algebraic group model in the presence of a random oracle. 
                We show how these commitments can be used to construct non-interactive aggregatable lotteries. 
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
              We have implemented our construction, called <i>Jackpot</i>, and provide benchmarks that underline its concrete efficiency.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Distributed Shuffling in Adversarial Environments'
            authors='Kasper Green Larsen, Maciej Obremski, Mark Simkin'
            conference='ITC 2023.'
            link='https://eprint.iacr.org/2022/560.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We study mix-nets in the context of cryptocurrencies. Here we have many
                computationally weak shufflers that speak one after another and want to jointly
                shuffle a list of ciphertexts {<InlineMath math={'(c_1, \\ldots, c_n)'} />}. Each
                shuffler can only permute {<InlineMath math={'k \\ll n'} />} ciphertexts at a time.
                An adversary {<InlineMath math={'\\mathcal{A}'} />} can track some of the
                ciphertexts and adaptively corrupt some of the shufflers.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                We present a simple protocol for shuffling the list of ciphertexts efficiently. The
                main technical contribution of this work is to prove that our simple shuffling
                strategy does indeed provide good anonymity guarantees and at the same time
                terminates quickly.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                Our shuffling algorithm provides a strict improvement over the current shuffling
                strategy in Ethereum's block proposer elections. Our algorithm is secure against a
                stronger adversary, provides provable security guarantees, and is comparable in
                efficiency to the current approach.
              </em>
            </Text>
          </Publication>
          
          <Publication
            title='Curdleproofs'
            authors='Gottfried Herold, George Kadianakis, Dmitry Khovratovich, Mary Maller, Mark Simkin, Zhenfei Zhang'
            link='https://github.com/asn-d6/curdleproofs/blob/main/doc/curdleproofs.pdf'
            year = {2022}
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Curdleproofs is a zero-knowledge shuffle argument which is inspired by the work of Bayer and Groth [BG12].
                Curdleproofs has applications to secret leader elections which prevents DDOS attacks on the Ethereum Proof of Stake consensus layer.
                Curdleproofs runs over a public coin setup in any group where the DDH assumption holds.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                Curdleproofs is built from well established inner product arguments and does not need a trusted setup.
                The prover and verifier both run in linear time asymptotically which small constants because there is no reduction to NP constraints.
                Their concrete run time is highly practical:  shuffling 252 elements requires 0.5 seconds for the prover and 25 milliseconds for the verifier on an Intel i7-8550U CPU at 1.80GHz over the BLS12-381 curve.
                The proof size is logarithmic (dominated by <InlineMath math={'10 \\log (\\ell)'} /> for <InlineMath math={'\\ell'} /> the number of elements).
              </em>
            </Text>
          </Publication>
        </ResearchArea>

        <ResearchArea subtitle='Verifiable Delay Functions and Random Beacons' mb={10}>
          
          <Publication
            title='Time-Based Cryptography From Weaker Assumptions: Randomness Beacons, Delay Functions and More'
            authors='Damiano Abram, Lawrence Roy, Mark Simkin'
            link='https://eprint.iacr.org/2024/769.pdf'
            year='2024'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                The assumption that certain computations inherently require some sequential time has established itself as a powerful tool for cryptography. 
                It allows for security and liveness guarantees in distributed protocols that are impossible to achieve with classical hardness assumptions. 
                Unfortunately, many constructions from the realm of time-based cryptography are based on new and poorly understood hardness assumptions, which tend not to stand the test of time (cf. Leurent et al. 2023, Peikert & Tang 2023).
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                In this work, we make progress on several fronts. 
                We formally define the concept of a delay function and present a construction thereof from minimal assumptions. 
                We show that these functions, in combination with classical cryptographic objects that satisfy certain efficiency criteria, would allow for constructing delay encryption, which is otherwise only known to exist based on a new hardness assumption about isogenies. 
                We formally define randomness beacons as they are used in the context of blockchains, and we show that (linearly homomorphic) time-lock puzzles allow for efficiently constructing them.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                Our work puts time-based cryptography on a firmer theoretical footing, provides new constructions from simpler assumptions, and opens new avenues for constructing delay encryption.
              </em>
            </Text>
          </Publication>
          
          <Publication
            title='Cryptanalysis of Algebraic Verifiable Delay Functions'
            authors='Alex Biryukov, Ben Fisch, Gottfried Herold, Dmitry Khovratovich, Gaëtan Leurent, María Naya-Plasencia, Benjamin Wesolowski'
            conference='Crypto 2024'
            link='https://eprint.iacr.org/2024/873.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Verifiable Delay Functions (VDF) are a class of cryptographic primitives aiming to guarantee a minimum computation time, even for an adversary with massive parallel computational power. 
                They are useful in blockchain protocols, and several practical candidates have been proposed based on exponentiation in a large finite field: Sloth++, Veedo, MinRoot. 
                The underlying assumption of these constructions is that computing an exponentiation <InlineMath math={'x^e'} /> requires at least <InlineMath math={'\\log_2 e'} /> sequential multiplications. 
                In this work, we analyze the security of these algebraic VDF candidates. 
                In particular, we show that the latency of exponentiation can be reduced using parallel computation, against the preliminary assumptions.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Towards a Quantum-Resistant Weak Verifiable Delay Function'
            authors='Luciano Maino, Thomas Decru, Antonio Sanso'
            conference='Latincrypt 2023'
            link='https://eprint.iacr.org/2023/1197.pdf'
          >

            <Text fontSize='sm'>
              <em>
              In this paper, we present a new quantum-resistant weak Verifiable Delay Function based on a purely algebraic construction. 
              Its delay depends on computing a large-degree isogeny between elliptic curves, whereas its verification relies on the computation of isogenies between products of two elliptic curves. 
              One of its major advantages is its expected fast verification time. 
              However, it is important to note that the practical implementation of our theoretical framework poses significant challenges. 
              We examine the strengths and weaknesses of our construction, analyze its security and provide a proof-of-concept implementation.
              </em>
            </Text>
          </Publication>
          
          <Publication
            title='Origami: Fold a Plonk for Ethereum’s VDF'
            authors='Zhenfei Zhang, Ethereum Foundation'
            link='https://eprint.iacr.org/2023/384'
            year={2023}
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We present Origami verifiable delay function, build from the MinRoot hash and our
                dedicated plonk proof system that utilizes a tailored custom gate and a folding
                scheme. MinRoot VDF is the leading candidate for Ethereum adoption. For N iterations
                of MinRoot hash function, the overall cost of Origami is N +o(N ) group operations;
                improving the previous best known result of 6N from a Nova based solution. The proof
                size is 128k + 224 bytes if we fold the proofs for k times; and may be further
                reduce to around 960 bytes, regardless of k, via a standard recursive prover.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Bingo: Adaptivity and Asynchrony in Verifiable Secret Sharing and Distributed Key Generation'
            authors='Ittai Abraham; Philipp Jovanovic; Mary Maller; Sarah Meiklejohn; Gilad Stern'
            link='https://eprint.iacr.org/2022/1759.pdf'
            conference='Crypto 2023.'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We present <InlineMath math={'\\mathsf{Bingo}'} />, an adaptively secure and
                optimally resilient packed asynchronous verifiable secret sharing (PAVSS) protocol
                that allows a dealer to share <InlineMath math={'f+1'} /> secrets with a total
                communication complexity of <InlineMath math={'O(\\lambda n^2)'} /> words, where{' '}
                <InlineMath math={'\\lambda'} /> is the security parameter and{' '}
                <InlineMath math={'n'} /> is the number of parties.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Using <InlineMath math={'\\mathsf{Bingo}'} />, we obtain an adaptively secure
                validated asynchronous Byzantine agreement (VABA) protocol that uses{' '}
                <InlineMath math={'O(\\lambda n^3)'} /> expected words and constant expected time,
                which we in turn use to construct an adaptively secure high-threshold asynchronous
                distributed key generation (ADKG) protocol that uses{' '}
                <InlineMath math={'O(\\lambda n^3)'} /> expected words and constant expected time.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                To the best of our knowledge, our ADKG is the first to allow for an adaptive
                adversary while matching the asymptotic complexity of the best known static ADKGs.
              </em>
            </Text>
          </Publication>

          <Publication
            title='MinRoot: Candidate Sequential Function for Ethereum VDF'
            authors='Dmitry Khovratovich, Mary Maller, Pratyush Ranjan Tiwari'
            conference='SBC 2022.' // You can fill in the conference details if applicable, or remove this line if not relevant.
            link='https://eprint.iacr.org/2022/1626'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We present a candidate sequential function for a VDF protocol to be used within the
                Ethereum ecosystem. The new function, called MinRoot, is an optimized iterative
                algebraic transformation and is a strict improvement over competitors VeeDo and
                Sloth++. We analyze various attacks on sequentiality and suggest weakened versions
                for public scrutiny. We also announce bounties on certain research directions in
                cryptanalysis.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Reaching Consensus for Asynchronous Distributed Key Generation'
            authors='	Ittai Abraham, Philipp Jovanovic, Mary Maller, Sarah Meiklejohn, Gilad Stern, Alin Tomescu'
            conference='PODC 2021.'
            link='https://arxiv.org/pdf/2102.09041.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We give a protocol for Asynchronous Distributed Key Generation (A-DKG) that is
                optimally resilient (can withstand {<InlineMath math={'f \\leq n/3'} />} faulty
                parties), has a constant expected number of rounds, has{' '}
                {<InlineMath math={'\\tilde{\\mathcal{O}}(n^3)'} />} expected communication
                complexity, and assumes only the existence of a PKI. Prior to our work, the best
                A-DKG protocols required {<InlineMath math={'\\Omega(n)'} />} expected number of
                rounds, and {<InlineMath math={'\\Omega(n^4)'} />} expected communication.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                Our A-DKG protocol relies on several building blocks that are of independent
                interest. We define and design a Proposal Election (PE) protocol that allows parties
                to retrospectively agree on a valid proposal after enough proposals have been sent
                from different parties. With constant probability the elected proposal was proposed
                by a nonfaulty party. In building our PE protocol, we design a Verifiable Gather
                protocol which allows parties to communicate which proposals they have and have not
                seen in a verifiable manner. The final building block to our A-DKG is a Validated
                Asynchronous Byzantine Agreement (VABA) protocol. We use our PE protocol to
                construct a VABA protocol that does not require leaders or an asynchronous DKG
                setup. Our VABA protocol can be used more generally when it is not possible to use
                threshold signatures.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Aggregatable Distributed Key Generation'
            authors='Kobi Gurkan, Philipp Jovanovic, Mary Maller, Sarah Meiklejohn, Gilad Stern, Alin
            Tomescu'
            conference='Eurocrypt 2021.'
            link='https://eprint.iacr.org/2021/005.pdf'
          >
            <Text fontSize='sm'>
              <em>
                In this paper, we introduce a distributed key generation (DKG) protocol with
                aggregatable and publicly-verifiable transcripts. Compared with prior
                publicly-verifiable approaches, our DKG reduces the size of the final transcript and
                the time to verify it from {<InlineMath math={'\\mathcal{O}(n^2)'} />} to{' '}
                {<InlineMath math={'\\mathcal{O}(n \\log n)'} />}, where n denotes the number of
                parties. As compared with prior non-publicly-verifiable approaches, our DKG
                leverages gossip rather than all-to-all communication to reduce verification and
                communication complexity. We also revisit existing DKG security definitions, which
                are quite strong, and propose new and natural relaxations. As a result, we can prove
                the security of our aggregatable DKG as well as that of several existing DKGs,
                including the popular Pedersen variant. We show that, under these new definitions,
                these existing DKGs can be used to yield secure threshold variants of popular
                cryptosystems such as El-Gamal encryption and BLS signatures. We also prove that our
                DKG can be securely combined with a new efficient verifiable unpredictable function
                (VUF), whose security we prove in the random oracle model. Finally, we
                experimentally evaluate our DKG and show that the perparty overheads scale linearly
                and are practical. For 64 parties, it takes 71 ms to share and 359 ms to verify the
                overall transcript, while for 8192 parties, it takes 8 s and 42.2 s respectively.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Verifiable Delay Functions from Supersingular Isogenies and Pairings'
            authors='Luca De Feo, Simon Masson, Christophe Petit, Antonio Sanso'
            conference='Asiacrypt 2019.'
            link='https://eprint.iacr.org/2019/166.pdf'
          >
            <Text fontSize='sm'>
              <em>
                We present two new Verifiable Delay Functions (VDF) based on assumptions from
                elliptic curve cryptography. We discuss both the advantages and some drawbacks of
                our constructions, we study their security and we demonstrate their practicality
                with a proof-of-concept implementation.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Post-Quantum Verifiable Random Function from Symmetric Primitives in PoS Blockchain'
            authors='Maxime Buser, Rafael Dowsley, Muhammed F. Esgin, Shabnam Kasra Kermanshahi, Veronika Kuchta, Joseph K. Liu, Raphael Phan, and Zhenfei Zhang'
            conference='ESORICS 2022.'
            link='https://eprint.iacr.org/2021/302.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Verifiable Random Functions (VRFs) play a key role in Proof-of-Stake blockchains
                such as Algorand to achieve highly scalable consensus, but currently deployed VRFs
                lack post-quantum security, which is crucial for future-readiness of blockchain
                systems. This work presents the first quantum-safe VRF scheme based on symmetric
                primitives. Our main proposal is a practical many-time quantum-safe VRF
                construction, X-VRF, based on the XMSS signature scheme. An innovation of our work
                is to use the state of the blockchain to counter the undesired stateful nature of
                XMSS by constructing a blockchain-empowered VRF. While increasing the usability of
                XMSS, our technique also enforces honest behavior when creating an X-VRF output so
                as to satisfy the fundamental uniqueness property of VRFs. We show how X-VRF can be
                used in the Algorand setting to extend it to a quantum-safe blockchain and provide
                four instances of X-VRF with different key life-time. Our extensive performance
                evaluation, analysis and implementation indicate the effectiveness of our proposed
                constructions in practice. Particularly, we demonstrate that X-VRF is the most
                efficient quantum-safe VRF with a maximum proof size of 3 KB and a possible TPS of
                449 for a network of thousand nodes.
              </em>
            </Text>
          </Publication>
        </ResearchArea>

        <ResearchArea subtitle='Zero-Knowledge Proofs' mb={10}>
        <Publication
            title='Beyond the circuit: How to Minimize Foreign Arithmetic in ZKP Circuits'
            authors='Michele Orrù, George Kadianakis, Mary Maller, Greg Zaverucha'
            year={2024}
            link='https://eprint.iacr.org/2024/265.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
              Zero-knowledge circuits are frequently required to prove gadgets that are not optimised for the constraint system
              in question. A particularly daunting task is to embed foreign arithmetic such as Boolean operations, field arithmetic,
              or public-key cryptography. We construct techniques for offloading foreign arithmetic from a zero-knowledge circuit
              including (i) equality of discrete logarithms across different groups; (ii) scalar multiplication without requiring elliptic
              curve operations; (iii) proving knowledge of an AES encryption. To achieve our goal, we employ techniques inherited
              from rejection sampling and lookup protocols. We implement and provide concrete benchmarks for our protocols.
              </em>
            </Text>
          </Publication>

          <Publication
            title='zk-Bench: A Toolset for Comparative Evaluation and Performance Benchmarking of SNARKs.'
            authors='Jens Ernstberger, Stefanos Chaliasos, George Kadianakis, Sebastian Steinhorst, Philipp Jovanovic, Arthur Gervais, Benjamin Livshits, Michele Orrù'
            link='https://eprint.iacr.org/2023/1503.pdf'
            year={2023}
          >
            <Text mb={4} fontSize='sm'>
              <em>
              Zero-Knowledge Proofs (ZKPs), especially Succinct Non-interactive ARguments of Knowledge (SNARKs), have garnered significant attention in modern cryptographic applications. 
              Given the multitude of emerging tools and libraries, assessing their strengths and weaknesses is nuanced and time-consuming. 
              Often, claimed results are generated in isolation, and omissions in details render them irreproducible. 
              The lack of comprehensive benchmarks, guidelines, and support frameworks to navigate the ZKP landscape effectively is a major barrier in the development of ZKP applications. 
              </em>
            </Text>

            <Text  mb={4} fontSize='sm'>
              <em>
              In response to this need, we introduce zk-Bench, the first benchmarking framework and estimator tool designed for performance evaluation of public-key cryptography, with a specific focus on practical assessment of general-purpose ZKP systems. 
              To simplify navigating the complex set of metrics and qualitative properties, we offer a comprehensive open-source evaluation platform, which enables the rigorous dissection and analysis of tools for ZKP development to uncover their trade-offs throughout the entire development stack; from low-level arithmetic libraries, to high-level tools for SNARK development. 
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                Using zk-Bench, we (i) collect data across 13 different elliptic curves implemented across 9 libraries, (ii) evaluate 5 tools for ZKP development and (iii) provide a tool for estimating cryptographic protocols, instantiated for the Plonk proof system, achieving an accuracy of 6 − 32% for ZKP circuits with up to millions of gates. 
                By evaluating zk-Bench for various hardware configurations, we find that certain tools for ZKP development favor compute-optimized hardware, while others benefit from memory-optimized hardware. 
                We observed performance enhancements of up to 40% for memory-optimized configurations and 50% for compute-optimized configurations, contingent on the specific ZKP development tool utilized.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Baloo: Nearly Optimal Lookup Arguments'
            authors='Arantxa Zapico, Ariel Gabizon, Dmitry Khovratovich, Mary Maller, Carla Ràfols'
            year={2022}
            link='https://eprint.iacr.org/2022/1565'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We present "Baloo", the first protocol for lookup tables where the prover work is
                linear on the amount of lookups and independent of the size of the table. "Baloo" is
                built over the lookup arguments of Caulk and Caulk+, and the framework for linear
                relations of Ràfols and Zapico.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Our protocol supports <i>commit-and-prove expansions</i>: the prover selects the
                subtable containing the elements used in the lookup, that is unknown to the
                verifier, commits to it and later prove relation with the committed element. This
                feature makes "Baloo" especially suitable for prover input-output relations on hash
                functions, and in particular to instantiate the Ethereum Virtual Machine (EVM).
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                We provide an implementation of Baloo, as well as benchmarks for comparison with
                existing protocols.
              </em>
            </Text>
          </Publication>

          <Publication
            title='flookup: Fractional decomposition-based lookups in quasi-linear time independent of table size'
            authors='Ariel Gabizon, Dmitry Khovratovich'
            year={2022}
            link='https://eprint.iacr.org/2022/1447'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We present two protocols for checking the values of a committed polynomial{' '}
                {<InlineMath math={'\\phi (X) '} />} over a mutliplicative subgroup{' '}
                {<InlineMath math={'H \\subset \\mathbb{F}'} />} of size {<InlineMath math={'m'} />}{' '}
                are contained in a table {<InlineMath math={'T\\in \\mathbb{F}^N'} />}. After a
                preprocessing step, the prover algorithm runs in time{' '}
                {<InlineMath math={'O(m\\log ^2 m)'} />}. This improves a recent result of
                Caulk+[PK22] for the same problem with run time {<InlineMath math={'O(m^2)'} />},
                that in turn improved another recent result with run time{' '}
                {<InlineMath math={'O(m^2+m\\log N)'} />} Caulk[ZBK+22]. We pose further improving
                this complexity to {<InlineMath math={'O(m\\log m)'} />} as the next important
                milestone for efficient zk-SNARK lookups.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Caulk: Lookup Arguments in Sublinear Time'
            authors='Arantxa Zapico, Vitalik Buterin, Dmitry Khovratovich, Mary Maller, Anca Nitulescu, Mark Simkin'
            conference='CCS 2022.'
            link='https://eprint.iacr.org/2022/621'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We present <i>position-hiding linkability</i> for vector commitment schemes: one can
                prove in zero knowledge that one or {<InlineMath math={'m'} />} values that comprise
                commitment {<InlineMath math={'\\textsf{cm}'} />} all belong to the vector of size{' '}
                {<InlineMath math={'N'} />} committed to in {<InlineMath math={'\\C'} />}. Our
                construction {<InlineMath math={'\\textsf{Caulk}'} />} can be used for membership
                proofs and lookup arguments and outperforms all existing alternatives in prover time
                by orders of magnitude.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                For both single- and multi-membership proofs the{' '}
                {<InlineMath math={'\\textsf{Caulk}'} />} protocol beats SNARKed Merkle proofs by
                the factor of 100 even if the latter is instantiated with Poseidon hash.
                Asymptotically our prover needs {<InlineMath math={'O(m^2 + m\\log N)'} />} time to
                prove a batch of {<InlineMath math={'m'} />} openings, whereas proof size is{' '}
                {<InlineMath math={'O(1)'} />} and verifier time is{' '}
                {<InlineMath math={'O(\\log(\\log N))'} />}.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                As a lookup argument, {<InlineMath math={'\\textsf{Caulk}'} />} is the first scheme
                with prover time sublinear in the table size, assuming{' '}
                {<InlineMath math={'O(N\\log N)'} />} preprocessing time and{' '}
                {<InlineMath math={'O(N)'} />} storage. It can be used as a subprimitive in
                verifiable computation schemes in order to drastically decrease the lookup overhead.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>Our scheme comes with a reference implementation and benchmarks.</em>
            </Text>
          </Publication>

          <Publication
            title='SNARKBlock: Federated Anonymous Blocklisting from Hidden Common Input Aggregate Proofs'
            authors='Michael Rosenberg; Mary Maller; Ian Miers'
            link='https://eprint.iacr.org/2021/1577.pdf'
            conference='S&P 2022.'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Zero-knowledge blocklists allow cross-platform blocking of users but,
                counter-intuitively, do not link users identities inter- or intra-platform, or to
                the fact they were blocked. Unfortunately, existing approaches (Tsang et al. '10)
                require that servers do work linear in the size of the blocklist for each
                verification of a non-membership proof.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                We design and implement <InlineMath math={'\\mathsf{SNARKBlock}'} />, a new protocol
                for zero-knowledge blocklisting with server-side verification that is logarithmic in
                the size of the blocklist. <InlineMath math={'\\mathsf{SNARKBlock}'} /> is also the
                first approach to support ad-hoc, federated blocklisting: websites can mix and match
                their own blocklists from other blocklists and dynamically choose which identity
                providers they trust.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Our core technical advance, of separate interest, is the{' '}
                <InlineMath math={'\\mathsf{HICIAP}'} /> zero-knowledge proof system, which
                addresses a common problem in privacy-preserving protocols: using zero-knowledge
                proofs for repeated but unlinkable interactions. Rerandomzing a Groth16 proof
                achieves unlinkability without the need to recompute the proof for every
                interaction. But this technique does not apply to applications where each
                interaction includes multiple Groth16 proofs over a common hidden input (e.g., the
                user's identity). Here, the best known approach is to commit to the hidden input and
                feed it to each proof, but this creates a persistent identifier, forcing
                recomputation. <InlineMath math={'\\mathsf{HICIAP}'} /> resolves this problem by
                aggregating <InlineMath math={'n'} /> Groth16 proofs into one{' '}
                <InlineMath math={'O(\\log n)'} />
                -sized, <InlineMath math={'O(\\log n)'} />
                -verification time proof which also shows that the input proofs share a hidden
                input. Because <InlineMath math={'\\mathsf{HICIAP}'} /> is zero-knowledge, repeated
                shows of the same aggregate or an updated aggregate are unlinkable even though the
                underlying Groth16 proofs are never recomputed.
              </em>
            </Text>
          </Publication>

          <Publication
            title='SnarkPack: Practical SNARK Aggregation'
            authors='Nicolas Gailly, Mary Maller, Anca Nitulescu'
            conference='FC 2022.'
            link='https://eprint.iacr.org/2021/529.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Zero-knowledge SNARKs (zk-SNARKs) are non-interactive proof systems with short and
                efficiently verifiable proofs that do not reveal anything more than the correctness
                of the statement. zk-SNARKs are widely used in decentralised systems to address
                privacy and scalability concerns.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                A major drawback of such proof systems in practice is the requirement to run a
                trusted setup for the public parameters. Moreover, these parameters set an upper
                bound to the size of the computations or statements to be proven, which results in
                new scalability problems.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                We design and implement SnarkPack, a new argument that further reduces the size of
                SNARK proofs by means of aggregation. Our goal is to provide an off-the-shelf
                solution that is practical in the following sense: (1) it is compatible with
                existing deployed SNARK systems, (2) it does not require any extra trusted setup.
                SnarkPack is designed to work with Groth16 scheme and has logarithmic size proofs
                and a verifier that runs in logarithmic time in the number of proofs to be
                aggregated. Most importantly, SnarkPack reuses the public parameters from Groth16
                system.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                SnarkPack can aggregate 8192 proofs in 8.7s and verify them in 163ms, yielding a
                verification mechanism that is exponentially faster than other solutions. SnarkPack
                can be used in blockchain applications that rely on many SNARK proofs such as
                Proof-of-Space or roll-up solutions.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Proofs for inner pairing products and applications'
            authors='Benedikt Bünz, Mary Maller, Pratyush Mishra, Nirvan Tyagi, Psi Vesely'
            conference='Asiacrypt 2021.'
            link='https://eprint.iacr.org/2019/1177.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We present a generalized inner product argument and demonstrate its applications to
                pairing-based languages. We apply our generalized argument to proving that an inner
                pairing product is correctly evaluated with respect to committed vectors of n source
                group elements. With a structured reference string (SRS), we achieve a
                logarithmic-time verifier whose work is dominated by 6 log n target group
                exponentiations. Proofs are of size 6 log n target group elements, computed using 6n
                pairings and 4n exponentiations in each source group. We apply our inner product
                arguments to build the first polynomial commitment scheme with succinct
                (logarithmic) verification,
                {<InlineMath math={'\\mathcal{O}(\\sqrt{d})'} />} prover complexity for degree{' '}
                {<InlineMath math={'d'} />} polynomials (not including the cost to evaluate the
                polynomial), and a CRS of size {<InlineMath math={'\\mathcal{O}(\\sqrt{d})'} />}.
                Concretely, this means that for d = 228, producing an evaluation proof in our
                protocol is 76
                {<InlineMath math={'\\times'} />} faster than doing so in the KZG [KZG10] commitment
                scheme, and the CRS in our protocol is 1,000
                {<InlineMath math={'\\times'} />} smaller: 13MB vs 13GB for KZG. This gap only grows
                as the degree increases. Our polynomial commitment scheme is applicable to both
                univariate and bivariate polynomials.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                As a second application, we introduce an argument for aggregating n Groth16 zkSNARKs
                into an {<InlineMath math={'\\mathcal{O}(\\log n)'} />} sized proof. Our protocol is
                significantly more efficient than aggregating these SNARKs via recursive composition
                [BCGMMW20]: we can aggregate about 130,000 proofs in 25min, while in the same time
                recursive composition aggregates just 90 proofs.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                Finally, we show how to apply our aggregation protocol to construct a low-memory
                SNARK for machine computations. For a computation that requires time T and space S,
                our SNARK produces proofs in space{' '}
                {<InlineMath math={'\\tilde{\\mathcal{O}}(S + T)'} />}, which is significantly more
                space efficient than a monolithic SNARK, which requires space{' '}
                {<InlineMath math={'\\tilde{\\mathcal{O}}(S \\cdot T)'} />}.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Snarky Ceremonies'
            authors='Markulf Kohlweiss, Mary Maller, Janno Siim, Mikhail Volkhov'
            conference='Asiacrypt 2021.'
            link='https://eprint.iacr.org/2021/219.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Succinct non-interactive arguments of knowledge (SNARKs) have found numerous
                applications in the blockchain setting and elsewhere. The most efficient SNARKs
                require a distributed ceremony protocol to generate public parameters, also known as
                a structured reference string (SRS). Our contributions are two-fold:
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                &ndash; We give a security framework for non-interactive zero-knowledge arguments
                with a ceremony protocol.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                &ndash; We revisit the ceremony protocol of Groth&apos;s SNARK [Bowe et al., 2017].
                We show that the original construction can be simplified and optimized, and then
                prove its security in our new framework. Importantly, our construction avoids the
                random beacon model used in the original work.
              </em>
            </Text>
          </Publication>
        </ResearchArea>

        <ResearchArea subtitle='Hash Functions' mb={10}>
          <Publication
            title='Hash Functions Monolith for ZK Applications: May the Speed of SHA-3 be With You'
            authors='Lorenzo Grassi; Dmitry Khovratovich; Reinhard Lüftenegger; Christian Rechberger; Markus Schofnegger; Roman Walch'
            link='https://eprint.iacr.org/2023/1025.pdf'
            year={2023}
          >
            <Text mb={4} fontSize='sm'>
              <em>
                The rising popularity of computational integrity protocols has led to an increased
                focus on efficient domain-specific hash functions, which are one of the core
                components in these use cases. For example, they are used for polynomial commitments
                or membership proofs in the context of Merkle trees. Indeed, in modern proof systems
                the computation of hash functions is a large part of the entire proof's complexity.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                In the recent years, authors of these hash functions have focused on components
                which are verifiable with low-degree constraints. This led to constructions like
                Poseidon, Rescue, Griffin, Reinforced Concrete, and Tip5, all of which showed
                significant improvements compared to classical hash functions such as SHA-3 when
                used inside the proof systems.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                In this paper, we focus on lookup-based computations, a specific component which
                allows to verify that a particular witness is contained in a lookup table. We work
                over 31-bit and 64-bit finite fields <InlineMath math={'\\mathbb{F}_p'} />
                , both of which are used in various modern proof systems today and allow for fast
                implementations. We propose a new 2-to-1 compression function and a SAFE hash
                function, instantiated by the Monolith permutation. The permutation is significantly
                more efficient than its competitors, both in terms of circuit friendliness and plain
                performance, which has become one of the main bottlenecks in various use cases. This
                includes Reinforced Concrete and Tip5, the first two hash functions using lookup
                computations internally. Moreover, in Monolith we instantiate the lookup tables as
                functions defined over <InlineMath math={'\\mathbb{F}_2'} />
                while ensuring that the outputs are still elements in{' '}
                <InlineMath math={'\\mathbb{F}_p'} />. Contrary to Reinforced Concrete and Tip5,
                this approach allows efficient constant-time plain implementations which mitigates
                the risk of side-channel attacks potentially affecting competing lookup-based
                designs. Concretely, our constant time 2-to-1 compression function is faster than a
                constant time version of Poseidon2 by a factor of 7. Finally, it is also the first
                arithmetization-oriented function with a plain performance comparable to SHA3-256,
                essentially closing the performance gap between circuit-friendly hash functions and
                traditional ones.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Generic Security of the SAFE API and Its Applications'
            authors='Dmitry Khovratovich, Mario Marhuenda Beltrán, Bart Mennink'
            year={2023}
            link='https://eprint.iacr.org/2023/520.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We provide security foundations for SAFE, a recently introduced API framework for
                sponge-based hash functions tailored to prime-field-based protocols. SAFE aims to
                provide a robust and foolproof interface, has been implemented in the Neptune hash
                framework and some zero-knowledge proof projects, but currently lacks any security
                proof.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                In this work we identify the SAFECore as versatile variant sponge construction
                underlying SAFE, we prove indifferentiability of SAFECore for all (binary and prime)
                fields up to around {<InlineMath math={'|\\mathbb{F}_p|^{c/2}'} />} queries, where{' '}
                {<InlineMath math={'\\mathbb{F}_p'} />} is the underlying field and{' '}
                {<InlineMath math={'c'} />} the capacity, and we apply this security result to
                various use cases.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                We show that the SAFE-based protocols of plain hashing, authenticated encryption,
                verifiable computation, non-interactive proofs, and commitment schemes are secure
                against a wide class of adversaries, including those dealing with multiple
                invocations of a sponge in a single application. Our results pave the way of using
                SAFE with the full taxonomy of hash functions, including SNARK-, lattice-, and
                x86-friendly hashes.
              </em>
            </Text>
          </Publication>

          <Publication
            title='SAFE: Sponge API for Field Elements'
            authors='JP Aumasson, Taurus and Inference; Dmitry Khovratovich, Ethereum Foundation and Dusk Network; Bart Mennink, Radboud University Nijmegen; Porçu Quine, Lurk Lab and Protocol Labs'
            link='https://eprint.iacr.org/2023/522.pdf'
            year={2023}
          >
            <Text mb={4} fontSize='sm'>
              <em>
                From hashing and commitment schemes to Fiat-Shamir and encryption, hash functions
                are everywhere in zero-knowledge proofsystems (ZKPs), and minor performance changes
                in ``vanilla'' implementations can translate in major discrepancies when the hash is
                processed as a circuit within the proofsystem.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Protocol designers have resorted to a number of techniques and custom modes to
                optimize hash functions for ZKPs settings, but so far without a single established,
                well-studied construction. To address this need, we define the Sponge API for Field
                Elements (SAFE), a unified framework for permutation-based schemes (including AEAD,
                Sigma, PRNGs, and so on). SAFE eliminates the performance overhead, is pluggable in
                any field-oriented protocol, and is suitable for any permutation algorithm.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                SAFE is implemented in Filecoin's Neptune hash framework, which is our reference
                implementation (in Rust). SAFE is also being integrated in other prominent ZKP
                projects. This report specifies SAFE and describes some use cases.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                Among other improvements, our construction is among the first to store the protocol
                metadata in the sponge inner part in a provably secure way, which may be of
                independent interest to the sponge use cases outside of ZKP.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Poseidon2: A Faster Version of the Poseidon Hash Function'
            authors='Lorenzo Grassi, Ponos Technology; Dmitry Khovratovich, Ethereum Foundation; Markus Schofnegger, Horizen Labs'
            link='https://eprint.iacr.org/2023/323.pdf'
            conference='AFRICACRYPT 2023.'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Zero-knowledge proof systems for computational integrity have seen a rise in
                popularity in the last couple of years. One of the results of this development is
                the ongoing effort in designing so-called arithmetization-friendly hash functions in
                order to make these proofs more efficient. One of these new hash functions,
                Poseidon, is extensively used in this context, also thanks to being one of the first
                constructions tailored towards this use case. Many of the design principles of
                Poseidon have proven to be efficient and were later used in other primitives, yet
                parts of the construction have shown to be expensive in real-word scenarios.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                In this paper, we propose an optimized version of Poseidon, called Poseidon2. The
                two versions differ in two crucial points. First, Poseidon is a sponge hash
                function, while Poseidon2 can be either a sponge or a compression function depending
                on the use case. Secondly, Poseidon2 is instantiated by new and more efficient
                linear layers with respect to Poseidon. These changes allow to decrease the number
                of multiplications in the linear layer by up to 90% and the number of constraints in
                Plonk circuits by up to 70%. This makes Poseidon2 the currently fastest
                arithmetization-oriented hash function without lookups.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Besides that, we address a recently proposed algebraic attack and propose a simple
                modification that makes both Poseidon and Poseidon2 secure against this approach.
              </em>
            </Text>

            <Text fontSize='sm'>
              <strong>Note:</strong> Updated cryptanalysis results for the original Poseidon.
            </Text>
          </Publication>

          <Publication
            title='Reinforced Concrete: A Fast Hash Function for Verifiable Computation'
            authors='Lorenzo Grassi, Dmitry Khovratovich, Reinhard Lüftenegger, Christian Rechberger, Markus Schofnegger, Roman Walch'
            link='https://eprint.iacr.org/2021/1038'
            conference='CCS 2022.'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We propose a new hash function Reinforced Concrete, which is the first generic
                purpose hash that is fast both for a zero-knowledge prover and in native x86
                computations. It is suitable for a various range of zero-knowledge proofs and
                protocols, from set membership to generic purpose verifiable computation. Being up
                to 15x faster than its predecessor Poseidon hash, Reinforced Concrete inherits
                security from traditional time-tested schemes such as AES, whereas taking the
                zero-knowledge performance from a novel and efficient decomposition of a prime field
                into compact buckets.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                The new hash function is suitable for a wide range of applications like
                privacy-preserving cryptocurrencies, verifiable encryption, protocols with state
                membership proofs, or verifiable computation. It may serve as a drop-in replacement
                for various prime-field hashes such as variants of MiMC, Poseidon, Pedersen hash,
                and others.
              </em>
            </Text>
          </Publication>

          <Publication
            title='T5: Hashing Five Inputs with Three Compression Calls'
            authors='Yevgeniy Dodis, Dmitry Khovratovich, Nicky Mouha, Mridul Nandi'
            conference='ITC 2021.'
            link='https://eprint.iacr.org/2021/373.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We prove that this construction matches Stam’s bound, by providing{' '}
                {<InlineMath math={'\\tilde{\\mathcal{O}}(q^2 / 2^n)'} />} collision security and{' '}
                {<InlineMath math={'\\mathcal{O}(q^3 / 2^{2n} + nq/2^n)'} />} preimage security (the
                latter term dominates in the region of interest, when{' '}
                {<InlineMath math={'q \\leq 2^{n/2}'} />}). In particular, it provides birthday
                security for hashing 5 inputs using three 2n-to-n compression calls, instead of only
                4 inputs in prior constructions.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Thus, we get a sequential variant of the Merkle-Damgard (MD) hashing, where t
                message blocks are hashed using only {<InlineMath math={'3t/4'} />} calls to the
                2n-to-n compression functions; a 25% saving over traditional hash function
                constructions. This time reduces to {<InlineMath math={'t/4'} />} (resp.{' '}
                {<InlineMath math={'t/2'} />}) sequential calls using 3 (resp. 2) parallel execution
                units; saving a factor of 4 (resp. 2) over the traditional MD-hashing, where
                parallelism does not help to process one message.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                We also get a novel variant of a Merkle tree, where t message blocks can be
                processed using 0.75({<InlineMath math={'t'} />} &minus; 1) compression function
                calls and depth {<InlineMath math={'0.86 \\log_2 t'} />}, thereby saving 25% in the
                number of calls and 14% in the update time over Merkle trees. We provide two modes
                for a local opening of a particular message block: conservative and aggressive. The
                former retains the birthday security, but provides longer proofs and local
                verification time than the traditional Merkle tree.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                For the aggressive variant, we reduce the proof length to a 29% overhead compared to
                Merkle trees ({<InlineMath math={'1.29 \\log_2 t'} />} vs{' '}
                {<InlineMath math={'\\log_2 t'} />}), but the verification time is now 14% faster (
                {<InlineMath math={'0.86 \\log_2 t'} />} vs {<InlineMath math={'\\log_2 t'} />}
                ). However, birthday security is only shown under a plausible conjecture related to
                the 3-XOR problem, and only for the (common, but not universal) setting where the
                root of the Merkle tree is known to correspond to a valid t-block message.
              </em>
            </Text>
          </Publication>
        </ResearchArea>

        <ResearchArea subtitle='Threshold Cryptography' mb={10}>

          <Publication
            title='Fully Adaptive Schnorr Threshold Signatures'
            authors='Elizabeth Crites, Chelsea Komlo, Mary Maller'
            conference='Crypto 2023.'
            link='https://eprint.iacr.org/2023/445'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We prove adaptive security of a simple three-round threshold Schnorr signature
                scheme, which we call Sparkle. The standard notion of security for threshold
                signatures considers a static adversary – one who must declare which parties are
                corrupt at the beginning of the protocol. The stronger adaptive adversary can at any
                time corrupt parties and learn their state. This notion is natural and practical,
                yet not proven to be met by most schemes in the literature.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                In this paper, we demonstrate that Sparkle achieves several levels of security based
                on different corruption models and assumptions. To begin with, Sparkle is statically
                secure under minimal assumptions: the discrete logarithm assumption (DL) and the
                random oracle model (ROM). If an adaptive adversary corrupts fewer than t/2 out of a
                threshold of t + 1 signers, then Sparkle is adaptively secure under a weaker variant
                of the one-more discrete logarithm assumption (AOMDL) in the ROM. Finally, we prove
                that Sparkle achieves full adaptive security, with a corruption threshold of t,
                under AOMDL in the algebraic group model (AGM) with random oracles. Importantly, we
                show adaptive security without requiring secure erasures. Ours is the first proof
                achieving full adaptive security without exponential tightness loss for any
                threshold Schnorr signature scheme; moreover, the reduction is tight.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Snowblind: A Threshold Blind Signature in Pairing-Free Groups'
            authors='Elizabeth Crites, Chelsea Komlo, Mary Maller, Stefano Tessaro, Chenzhi Zhu'
            conference='Crypto 2023.'
            link='https://eprint.iacr.org/2023/1228.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Both threshold and blind signatures have, individually, received a considerable
                amount of attention. However, little is known about their combination, i.e., a
                threshold signature which is also blind, in that no coalition of signers learns
                anything about the message being signed or the signature being produced. Several
                applications of blind signatures (e.g., anonymous tokens) would benefit from
                distributed signing as a means to increase trust in the service and hence reduce the
                risks of key compromise. This paper builds the first blind threshold signatures in
                pairing-free groups. Our main contribution is a construction that transforms an
                underlying blind non-threshold signature scheme with a suitable structure into a
                threshold scheme, preserving its blindness.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                The resulting signing protocol proceeds in three rounds, and produces signatures
                consisting of one group element and two scalars. The underlying non-threshold blind
                signature schemes are of independent interest, and improve upon the current state of
                the art (Tessaro and Zhu, EUROCRYPT ’22) with shorter signatures (three elements,
                instead of four) and simpler proofs of security. All of our schemes are proved
                secure in the Random Oracle and Algebraic Group Models, assuming the hardness of the
                discrete logarithm problem.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Threshold Private Set Intersection with Better Communication Complexity'
            authors='Satrajit Ghosh, Mark Simkin'
            conference='PKC 2023.'
            link='https://eprint.iacr.org/2023/919.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Given {<InlineMath math={'\\ell'} />} parties with sets{' '}
                {<InlineMath math={'X_1, \\ldots, X_{\\ell}'} />} of size{' '}
                {<InlineMath math={'n'} />}, we would like to securely compute the intersection{' '}
                {<InlineMath math={'\\cap_{i=1}^{\\ell} X_i'} />}, if it is larger than{' '}
                {<InlineMath math={'n-t'} />} for some threshold {<InlineMath math={'t'} />},
                without revealing any other additional information. It has previously been shown
                (Ghosh and Simkin, Crypto 2019) that this function can be securely computed with a
                communication complexity that only depends on {<InlineMath math={'t'} />} and in
                particular does not depend on {<InlineMath math={'n'} />}. For small values of{' '}
                {<InlineMath math={'t'} />}, this results in protocols that have a communication
                complexity that is sublinear in the size of the inputs. Current protocols either
                rely on fully homomorphic encryption or have an at least quadratic dependency on the
                parameter {<InlineMath math={'t'} />}.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                In this work, we construct protocols with a quasilinear dependency on{' '}
                {<InlineMath math={'t'} />} from simple assumptions like additively homomorphic
                encryption and oblivious transfer. All existing approaches, including ours, rely on
                protocols for computing a single bit, which indicates whether the intersection is
                larger than {<InlineMath math={'n-t'} />} without actually computing it. Our key
                technical contribution, which may be of independent interest, takes any such
                protocol with secret shared outputs and communication complexity{' '}
                {<InlineMath math={'\\mathcal{O}(\\lambda \\ell \\cdot \\mathsf{poly}(t))'} />},
                where {<InlineMath math={'\\lambda'} />} is the security parameter, and transforms
                it into a protocol with communication complexity{' '}
                {
                  <InlineMath
                    math={'\\mathcal{O}(\\lambda^2 \\ell t \\cdot \\mathsf{polylog}(t))'}
                  />
                }
                .
              </em>
            </Text>
          </Publication>

          <Publication
            title='Stronger Lower Bounds for Leakage-Resilient Secret Sharing'
            authors='Charlotte Hoffmann, Mark Simkin'
            link='https://eprint.iacr.org/2023/1017.pdf'
            conference='Latincrypt 2023.'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Threshold secret sharing allows a dealer to split a secret{' '}
                {<InlineMath math={'s'} />} into {<InlineMath math={'n'} />} shares, such that any{' '}
                {<InlineMath math={'t'} />} shares allow for reconstructing{' '}
                {<InlineMath math={'s'} />}, but no {<InlineMath math={'t-1'} />} shares reveal any
                information about {<InlineMath math={'s'} />}. Leakage-resilient secret sharing
                requires that the secret remains hidden, even when an adversary additionally obtains
                a limited amount of leakage from every share.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Benhamouda et al. (CRYPTO'18) proved that Shamir's secret sharing scheme is one bit
                leakage-resilient for reconstruction threshold{' '}
                {<InlineMath math={'r \\geq 0.85n'} />} and conjectured that the same holds for{' '}
                {<InlineMath math={'t = cn'} />} for any constant{' '}
                {<InlineMath math={'0 \\leq c \\leq 1'} />}. Nielsen and Simkin (EUROCRYPT'20)
                showed that this is the best one can hope for by proving that Shamir's scheme is not
                secure against one-bit leakage when {<InlineMath math={'t = c n / \\log n'} />}.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                In this work, we strengthen the lower bound of Nielsen and Simkin. We consider noisy
                leakage-resilience, where a random subset of leakages is replaced by uniformly
                random noise. We prove a lower bound for Shamir's secret sharing, similar to that of
                Nielsen and Simkin, which holds even when a constant fraction of leakages is
                replaced by random noise. To this end, we first prove a lower bound on the share
                size of any noisy-leakage-resilient sharing scheme. We then use this lower bound to
                show that there exist universal constants {<InlineMath math={'c_1'} />},{' '}
                {<InlineMath math={'c_2'} />}, such that for infinitely many n, it holds that
                Shamir's secret sharing scheme is not noisy-leakage-resilient for{' '}
                {<InlineMath math={'t \\leq c_1 n / \\log n'} />}, even when a{' '}
                {<InlineMath math={'c_2'} />} fraction of leakages are replaced by random noise.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Better than Advertised Security for Non-interactive Threshold Signatures'
            authors='Mihir Bellare; Elizabeth Crites; Chelsea Komlo; Mary Maller; Stefano Tessaro; Chenzhi Zhu'
            conference='Crypto 2022.'
            link='https://eprint.iacr.org/2021/1375.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We give a unified syntax, and a hierarchy of definitions of security of increasing
                strength, for non-interactive threshold signature schemes. These are schemes having
                a single-round signing protocol, possibly with one prior round of
                message-independent pre-processing.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                We fit FROST1 and BLS, which are leading practical schemes, into our hierarchy, in
                particular showing they meet stronger security definitions than they have been shown
                to meet so far. We also fit in our hierarchy a more efficient version FROST2 of
                FROST1 that we give.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                These definitions and results, for simplicity, all assume trusted key generation.
                Finally, we prove the security of FROST2 with key generation performed by an
                efficient distributed key generation protocol.
              </em>
            </Text>
          </Publication>

          <Publication
            title='How to Prove Schnorr Assuming Schnorr: Security of Multi-and Threshold Signatures'
            authors='Elizabeth Crites, Chelsea Komlo, Mary Maller'
            year={2021}
            link='https://eprint.iacr.org/2021/1375.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                In this paper, we present new techniques for proving the security of multi- and
                threshold signature schemes under discrete logarithm assumptions in the random
                oracle model. The purpose is to provide a simple framework for analyzing the
                relatively complex interactions of these schemes in a concurrent model, thereby
                reducing the risk of attacks. We make use of proofs of possession and prove that a
                Schnorr signature suffices as a proof of possession in the algebraic group model
                without any tightness loss. We introduce and prove the security of a simple,
                three-round multisignature SimpleMuSig.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                Using our new techniques, we prove the concurrent security of a variant of the
                MuSig2 multisignature scheme that includes proofs of possession as well as the FROST
                threshold signature scheme. These are currently the most efficient schemes in the
                literature for generating Schnorr signatures in a multiparty setting. Our variant of
                MuSig2, which we call SpeedyMuSig, has faster key aggregation due to the proofs of
                possession.
              </em>
            </Text>
          </Publication>
        </ResearchArea>

        <ResearchArea subtitle='Lattice Cryptography' mb={10}>

        <Publication
            title='Threshold raccoon: Practical threshold signatures from standard lattice assumptions'
            authors='Rafaël Del Pino, Shuichi Katsumata, Mary Maller, Fabrice Mouhartem, Thomas Prest, Markku-Juhani Saarinen'
            conference='Eurocrypt 2024.'
            link='https://eprint.iacr.org/2024/184.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
              Threshold signatures improve both availability and security of digital signatures by splitting the
              signing key into N shares handed out to different parties. Later on, any subset of at least T parties can
              cooperate to produce a signature on a given message. While threshold signatures have been extensively
              studied in the pre-quantum setting, they remain sparse from quantum-resilient assumptions.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'> 
              <em>            
                We present the first efficient lattice-based threshold signatures with signature size 13 KiB and communication cost 40 KiB per user, supporting a threshold size as large as 1024 signers. We provide an
                accompanying high performance implementation. The security of the scheme is based on the same assumptions as Dilithium, a signature recently selected by NIST for standardisation which, as far as we
                know, cannot easily be made threshold efficiently.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                All operations used during signing are due to symmetric primitives and simple lattice operations;
                in particular our scheme does not need heavy tools such as threshold fully homomorphic encryption or
                homomorphic trapdoor commitments as in prior constructions. The key technical idea is to use one-time
                additive masks to mitigate the leakage of the partial signing keys through partial signatures.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Chipmunk: Better Synchronized Multi-Signatures from Lattices'
            authors='Nils Fleischhacker, Gottfried Herold, Mark Simkin, Zhenfei Zhang'
            conference='CCS 2023.'
            link='https://eprint.iacr.org/2023/1820'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Multi-signatures allow for compressing many signatures for the same message that were generated under independent keys into one small aggregated signature. 
                This primitive is particularly useful for proof-of-stake blockchains, like Ethereum, where the same block is signed by many signers, who vouch for the block's validity.
                Being able to compress all signatures for the same block into a short string significantly reduces the on-chain storage costs, which is an important efficiency metric for blockchains.
              </em>
            </Text>
            <Text mb={4} fontSize='sm'>
              <em>
                In this work, we consider multi-signatures in the synchronized setting, where the signing algorithm takes an additional time parameter as input and it is only required that signatures for the same time step are aggregatable.
                The synchronized setting is simpler than the general multi-signature setting, but is sufficient for most blockchain related applications, as signers are naturally synchronized by the length of the chain.
              </em>
            </Text>
            <Text mb={4} fontSize='sm'>
              <em>
                We present Chipmunk, a concretely efficient lattice-based multi-signature scheme in the synchronized setting that allows for signing an a-priori bounded number of messages.
                Chipmunk allows for non-interactive aggregation of signatures and is secure against rogue-key attacks.
                The construction is plausibly secure against quantum adversaries as our security relies on the assumed hardness of the short integer solution problem.
              </em>
            </Text>
            <Text mb={4} fontSize='sm'>
              <em>
                We significantly improve upon the previously best known construction in this setting by Fleischhacker, Simkin, and Zhang (CCS 2022).
                Our aggregate signature size is 5.6x smaller and for 112 bits of security our construction allows for compressing 8192 individual signatures into a multi-signature of size around 136KB.
                We provide a full implementation of Chipmunk and provide extensive benchmarks studying our construction's efficiency.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Squirrel: Efficient Synchronized Multi-Signatures from Lattices'
            authors='Nils Fleischhacker, Mark Simkin, Zhenfei Zhang'
            conference='CCS 2022.'
            link='https://eprint.iacr.org/2022/694.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                The focus of this work are multi-signatures schemes in the synchronized setting. A
                multi-signature scheme allows multiple signatures for the same message but from
                independent signers to be compressed into one short aggregated signature, which
                allows verifying all of the signatures simultaneously. In the synchronized setting,
                the signing algorithm takes the current time step as an additional input. It is
                assumed that no signer signs more than one message per time step and we aim to
                aggregate signatures for the same message and same time step. This setting is
                particularly useful in the context of blockchains, where validators are naturally
                synchronized by the blocks they sign. We present Squirrel, a concretely efficient
                lattice-based multi-signature scheme in the synchronized setting that works for a
                bounded number of {<InlineMath math={'2^{\\tau}'} />} time steps and allows for
                aggregating up to {<InlineMath math={'\\rho'} />} signatures at each step, where
                both {<InlineMath math={'\\tau'} />} and {<InlineMath math={'\\rho'} />} are public
                parameters upon which the efficiency of our scheme depends. Squirrel allows for
                non-interactive aggregation of independent signatures and is proven secure in the
                random oracle model in the presence of rogue-key attacks assuming the hardness of
                the short integer solution problem in a polynomial ring. We provide a careful
                analysis of all parameters and show that Squirrel can be instantiated with good
                concrete efficiency. For {<InlineMath math={'\\tau = 24'} />} and{' '}
                {<InlineMath math={'\\rho = 4096'} />}, a signer could sign a new message every 10
                seconds for 5 years non-stop. Assuming the signer has a cache of 112 MB, signing
                takes 68 ms and verification of an aggregated signature takes 36 ms. The size of the
                public key is 1 KB, the size of an individual signature is 52 KB, and the size of an
                aggregated signature is 771 KB.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Property-Preserving Hash Functions for Hamming Distance from Standard Assumptions. '
            authors='Nils Fleischhacker, Kasper Green Larsen, Mark Simkin'
            conference='Eurocrypt 2022.'
            link='https://eprint.iacr.org/2021/793.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Property-preserving hash functions allow for compressing long inputs{' '}
                {<InlineMath math={'x_0'} />} and {<InlineMath math={'x_1'} />} into short hashes{' '}
                {<InlineMath math={'h(x_0)'} />} and {<InlineMath math={'h(x_1)'} />} in a manner
                that allows for computing a predicate {<InlineMath math={'P(x_0, x_1)'} />} given
                only the two hash values without having access to the original data. Such hash
                functions are said to be adversarially robust if an adversary that gets to pick{' '}
                {<InlineMath math={'x_0'} />} and {<InlineMath math={'x_1'} />} after the hash
                function has been sampled, cannot find inputs for which the predicate evaluated on
                the hash values outputs the incorrect result.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                In this work, we construct robust property-preserving hash functions for the
                hamming-distance predicate which distinguishes inputs with a hamming distance at
                least some threshold {<InlineMath math={'t'} />}. The security of the construction
                is based on standard lattice hardness assumptions. Our construction has several
                advantages over the best known previous construction by Fleischhacker and Simkin
                (Eurocrypt 2021). Our construction relies on a single well-studied hardness
                assumption from lattice cryptography whereas the previous work relied on a newly
                introduced family of computational hardness assumptions.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                In terms of computational effort, our construction only requires a small number of
                modular additions per input bit, whereas the work of Fleischhacker and Simkin
                required several exponentiations per bit as well as the interpolation and evaluation
                of high-degree polynomials over large fields. An additional benefit of our
                construction is that the description of the hash function can be compressed to{' '}
                {<InlineMath math={'\\lambda'} />}. Previous work has descriptions of length{' '}
                {<InlineMath math={'\\mathcal{O}(\\ell \\lambda)'} />} bits for input bit-length{' '}
                {<InlineMath math={'\\ell'} />}.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                We prove a lower bound on the output size of any property-preserving hash function
                for the hamming distance predicate. The bound shows that the size of our hash value
                is not far from optimal.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Hybrid Dual Attack on LWE with Arbitrary Secrets'
            authors='Lei Bi, Xianhui Lu, Junjie Luo, Kunpeng Wang, and Zhenfei Zhang'
            link='https://eprint.iacr.org/2021/152.pdf'
            conference='Cybersecur. 5(1) 2022.'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                In this paper, we study the <i>hybrid dual attack</i> over Learning with Errors
                (LWE) problems for <i>any</i> secret distribution. Prior to our work, hybrid attacks
                are only considered for sparse and/or small secrets. A new and interesting result
                from our analysis shows that for most cryptographic use cases a hybrid dual attack
                outperforms a standalone dual attack, regardless of the secret distribution. We
                formulate our results into a framework of predicting the performance of the hybrid
                dual attacks. We also present a few tricks that further improve our attack. To
                illustrate the effectiveness of our result, we re-evaluate the security of{' '}
                <i>all</i> LWE related proposals in round 3 of NIST's post-quantum cryptography
                process, and improve the state-of-the-art cryptanalysis results by 2-14 bits, under
                the BKZ-core-SVP model.
              </em>
            </Text>
          </Publication>

          <Publication
            title='An SVP attack on Vortex'
            authors='Zhenfei Zhang'
            year={2022}
            link='https://eprint.iacr.org/2022/1754.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                In [BS22], the authors proposed a lattice based hash function that is useful for
                building zero-knowledge proofs with superior performance. In this short note we
                analysis the underlying lattice problem with the classic shortest vector problem,
                and show that 2 out of 15 proposed parameter sets for this hash function do not
                achieve the claimed security.
              </em>
            </Text>
          </Publication>

          <Publication
            title='TensorCrypto: High Throughput Acceleration of Lattice-based Cryptography Using Tensor Core on GPU'
            authors='Wai-Kong Lee, Hwajeong Seo, Zhenfei Zhang, and Seongoun Hwang'
            conference='IEEE Access 2021.'
            link='https://eprint.iacr.org/2021/173.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Tensor core is a specially designed hardware included in new NVIDIA GPU chips, aimed
                at accelerating deep learning applications. With the introduction of tensor core,
                the matrix multiplication at low precision can be computed much faster than using
                conventional integer and floating point units in NVIDIA GPU. In the past,
                applications of tensor core were mainly restricted to machine learning and mixed
                precision scientific computing. In this paper, we show that for the first time,
                tensor core can be used to accelerate state-of-the-art lattice-based cryptosystems.
                In particular, we employed tensor core to accelerate NTRU, one of the finalists in
                NIST post-quantum standardization. Towards our aim, several parallel algorithms are
                proposed to allow the tensor core to handle flexible matrix sizes and ephemeral key
                pair. Experimental results show that the polynomial convolution using tensor core is
                2.79× (ntruhps2048509) and 2.72× (ntruhps2048677) faster than the version
                implemented with conventional integer units of NVIDIA GPU. The proposed tensor core
                based polynomial convolution technique was applied to NTRU public key scheme
                (TensorTRU). It achieved 1.94×/1.95× (encryption) and 1.97×/2.02× (decryption)
                better performance for the two parameter sets, compared to the conventional integer
                based implementations in GPU. TensorTRU is also more than 20× faster than the
                reference implementation in CPU and 2× faster than the AVX2 implementation, for both
                encryption and decryption. To demonstrate the flexibility of the proposed technique,
                we have extended the implementation to other lattice-based cryptosystems that have a
                small modulus (LAC and two variant parameter sets in FrodoKEM). Experimental results
                show that the tensor core based polynomial convolution is flexible and useful in
                accelerating lattice-based cryptosystems that cannot utilize number theoretic
                transform in performing polynomial multiplication.
              </em>
            </Text>
          </Publication>
        </ResearchArea>

        <ResearchArea subtitle='Data Structures' mb={10}>
          <Publication
            title='Invertible Bloom Lookup Tables with Less Memory and Randomness'
            authors='Nils Fleischhacker, Kasper Green Larsen, Maciej Obremski, Mark Simkin'
            year={2023}
            link='https://eprint.iacr.org/2023/918.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                In this work we study Invertible Bloom Lookup Tables (IBLTs) with small failure
                probabilities. IBLTs are highly versatile data structures that have found
                applications in set reconciliation protocols, error-correcting codes, and even the
                design of advanced cryptographic primitives. For storing {<InlineMath math={'n'} />}{' '}
                elements and ensuring correctness with probability at least{' '}
                {<InlineMath math={'1 - \\delta'} />}, existing IBLT constructions require{' '}
                {<InlineMath math={'\\Omega( n( \\frac{ \\log 1/\\delta}{\\log n} + 1) )'} />} space
                and they crucially rely on fully random hash functions.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                We present new constructions of IBLTs that are simultaneously more space efficient
                and require less randomness. For storing {<InlineMath math={'n'} />} elements with a
                failure probability of at most {<InlineMath math={'\\delta'} />}, our data structure
                only requires{' '}
                {
                  <InlineMath
                    math={'\\mathcal{O}( n + \\log(1 / \\delta) \\log\\log(1 / \\delta) )'}
                  />
                }{' '}
                space and {<InlineMath math={'\\mathcal{O}( \\log( \\log( n ) / \\delta ) )'} />}
                -wise independent hash functions.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                As a key technical ingredient we show that hashing {<InlineMath math={'n'} />} keys
                with any {<InlineMath math={'k'} />}-wise independent hash function{' '}
                {<InlineMath math={'h: U \\mapsto [Cn]'} />} for some sufficiently large constant{' '}
                {<InlineMath math={'C'} />} guarantees with probability{' '}
                {<InlineMath math={'1 - 2^{-\\Omega(k)}'} />} that at least{' '}
                {<InlineMath math={'n / 2'} />} keys will have a unique hash value. Proving this is
                highly non-trivial as {<InlineMath math={'k'} />} approaches{' '}
                {<InlineMath math={'n'} />}. We believe that the techniques used to prove this
                statement may be of independent interest.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Compressing Encrypted Data Over Small Fields'
            authors='Nils Fleischhacker, Kasper Green Larsen, Mark Simkin'
            link='https://eprint.iacr.org/2023/946.pdf'
            year={2023}
          >
            <Text mb={4} fontSize='sm'>
              <em>
                A recent work of Fleischhacker, Larsen, and Simkin (Eurocrypt 2023) shows how to
                efficiently compress encrypted sparse vectors. Subsequently, Fleischhacker, Larsen,
                Obremski, and Simkin (Eprint 2023) improve upon their work and provide more
                efficient constructions solving the same problem. Being able to efficiently compress
                such vectors is very useful in a variety of applications, such as private
                information retrieval, searchable encryption, and oblivious message retrieval.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Concretely, assume one is given a vector{' '}
                {<InlineMath math={'(m_1, \\ldots, m_n)'} />} with at most{' '}
                {<InlineMath math={'t'} />} distinct indices {<InlineMath math={'i \\in [n]'} />},
                such that {<InlineMath math={'m_i \\neq 0'} />} and assume{' '}
                {<InlineMath math={'(\\mathsf{Gen}, \\mathsf{Enc}, \\mathsf{Dec})'} />} is an
                additively homomorphic encryption scheme. The authors show that one can compress{' '}
                {<InlineMath math={'(\\mathsf{Enc}(k, m_1), \\ldots, \\mathsf{Enc}(k, m_n))'} />},
                without knowing the secret key {<InlineMath math={'k'} />}, into a digest with size
                dependent on the upper bound on the sparsity {<InlineMath math={'t'} />}, but not on
                the total vector length {<InlineMath math={'n'} />}.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                Unfortunately, all existing constructions either only work for encryption schemes
                that have sufficiently large plaintext spaces or require additional encrypted
                auxiliary information about the plaintext vector.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                In this work, we show how to generalize the results of Fleischhacker, Larsen, and
                Simkin to encryption schemes with arbitrarily small plaintext spaces. Our
                construction follows the same general ideas laid out in previous works but modifies
                them in a way that allows compressing the encrypted vectors correctly with high
                probability, independently of the size of the plaintext space.
              </em>
            </Text>
          </Publication>

          <Publication
            title='How to Compress Encrypted Data'
            authors='Nils Fleischhacker, Kasper Green Larsen, Mark Simkin'
            conference='Eurocrypt 2023.'
            link='https://eprint.iacr.org/2022/1413.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We study the task of obliviously compressing a vector comprised of{' '}
                {<InlineMath math={'n'} />} ciphertexts of size {<InlineMath math={'\\xi'} />} bits
                each, where at most {<InlineMath math={'t'} />} of the corresponding plaintexts are
                non-zero. This problem commonly features in applications involving encrypted
                outsourced storages, such as searchable encryption or oblivious message retrieval.
                We present two new algorithms with provable worst-case guarantees, solving this
                problem by using only homomorphic additions and multiplications by constants. Both
                of our new constructions improve upon the state of the art asymptotically and
                concretely.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Our first construction, based on sparse polynomials, is perfectly correct and the
                first to achieve an asymptotically optimal compression rate by compressing the input
                vector into {<InlineMath math={'\\mathcal{O}(t \\xi)'} />}. Compression can be
                performed homomorphically by performing{' '}
                {<InlineMath math={'\\mathcal{O}( n \\log n)'} />} homomorphic additions and
                multiplications by constants. The main drawback of this construction is a decoding
                complexity of {<InlineMath math={'\\Omega(\\sqrt{n})'} />}.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Our second construction is based on a novel variant of invertible bloom lookup
                tables and is correct with probability {<InlineMath math={'1 - 2^{-\\kappa}'} />}.
                It has a slightly worse compression rate compared to our first construction as it
                compresses the input vector into{' '}
                {<InlineMath math={'\\mathcal{O}(\\xi\\kappa t / \\log t)'} />} bits, where{' '}
                {<InlineMath math={'\\kappa \\geq \\log t'} />}. In exchange, both compression and
                decompression of this construction are highly efficient. The compression complexity
                is dominated by {<InlineMath math={'\\mathcal{O}(n \\kappa / \\log t)'} />}{' '}
                homomorphic additions and multiplications by constants. The decompression complexity
                is dominated by {<InlineMath math={'\\mathcal{O}(\\kappa t / \\log t )'} />}{' '}
                decryption operations and equally many inversions of a pseudorandom permutation.
              </em>
            </Text>
          </Publication>
        </ResearchArea>

        <ResearchArea subtitle='Elliptic Curves, Class Groups and Isogenies' mb={10}>
        <Publication
            title='Breaking the decisional Diffie-Hellman problem in totally non-maximal imaginary quadratic orders'
            authors='Antonio Sanso'
            link='https://eprint.iacr.org/2024/201.pdf'
            year={2024}
          >

            <Text fontSize='sm'>
              <em>
              This paper introduces an algorithm to efficiently break the Decisional Diffie-Hellman (DDH) assumption in totally non-maximal imaginary quadratic orders, specifically when <InlineMath math={'\\Delta_1 = 3'} />, and <InlineMath math={'f'} /> is non-prime with knowledge of a single factor. 
              Inspired by Shanks and Dedekind's work on 3-Sylow groups, we generalize their observations to undermine DDH security.
              </em>
            </Text>
          </Publication>
          
          <Publication
            title='A note on key control in CSIDH'
            authors='Antonio Sanso, Ethereum Foundation, Ruhr Universität Bochum'
            year={2022}
            link='https://eprint.iacr.org/2022/847.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                In this short note we explore a particular behaviour of the CSIDH key exchange that
                leads to a very special form of (shared) key control via the use of the quadratic
                twists. This peculiarity contained in CSIDH with regard to quadratic twists was
                already noted in the original CSDIH work and used in several subsequent papers but
                we believe spelling out this in the form of an attack might be useful to the wider
                community.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Cryptanalysis of an oblivious PRF from supersingular isogenies'
            authors='Andrea Basso, Péter Kutas, Simon-Philipp Merz, Christophe Petit, and Antonio Sanso'
            conference='Asiacrypt 2021.'
            link='https://eprint.iacr.org/2021/706.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We cryptanalyse the SIDH-based oblivious pseudorandom function from supersingular
                isogenies proposed at Asiacrypt'20 by Boneh, Kogan and Woo. To this end, we give an
                attack on an assumption, the auxiliary one-more assumption, that was introduced by
                Boneh et al. and we show that this leads to an attack on the oblivious PRF itself.
                The attack breaks the pseudorandomness as it allows adversaries to evaluate the OPRF
                without further interactions with the server after some initial OPRF evaluations and
                some offline computations. More specifically, we first propose a polynomial-time
                attack. Then, we argue it is easy to change the OPRF protocol to include some
                countermeasures, and present a second subexponential attack that succeeds in the
                presence of said countermeasures. Both attacks break the security parameters
                suggested by Boneh et al. Furthermore, we provide a proof of concept implementation
                as well as some timings of our attack. Finally, we examine the generation of one of
                the OPRF parameters and argue that a trusted third party is needed to guarantee
                provable security.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Bandersnatch: a fast elliptic curve built over the BLS12-381 scalar field'
            authors='Simon Masson, Antonio Sanso, Zhenfei Zhang'
            year={2021}
            link='https://eprint.iacr.org/2021/1152.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                In this short note, we introduce Bandersnatch, a new elliptic curve built over the
                BLS12-381 scalar field. The curve is equipped with an efficient endomorphism,
                allowing a fast scalar multiplication algorithm. Our benchmark shows that the
                multiplication is 42% faster, compared to another curve, called Jubjub, having
                similar properties. Nonetheless, Bandersnatch does not provide any performance
                improvement for either rank 1 constraint systems (R1CS) or multi scalar
                multiplications, compared to the Jubjub curve.
              </em>
            </Text>
          </Publication>

          <Publication
            title='A note on the low order assumption in class group of an imaginary quadratic number fields'
            authors='Karim Belabas, Thorsten Kleinjung, Antonio Sanso, Benjamin Wesolowski'
            year={2020}
            link='https://eprint.iacr.org/2020/1310.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                In this short note we analyze the low order assumption in the imaginary quadratic
                number fields. We show how this assumption is broken for Mersenne primes. We also
                provide a description on how to possible attack this assumption for other class of
                prime numbers leveraging some new mathematical tool coming from higher (cubic)
                number fields.
              </em>
            </Text>
          </Publication>
        </ResearchArea>

        <ResearchArea subtitle='Miscellaneous'>

        <Publication
            title='Key derivable signature and its application in blockchain stealth address'
            authors='Ruida Wang, Ziyi Li, Xianhui Lu, Zhenfei Zhang, Kunpeng Wang'
            conference='Cybersecurity, 2024'
            link='https://link.springer.com/content/pdf/10.1186/s42400-024-00231-x.pdf'
          >
            <Text fontSize='sm'>
              <em>
                Stealth address protocol (SAP) is widely used in blockchain to achieve anonymity. 
                In this paper, we formalize a key derivable signature scheme (KDS) to capture the functionality and security requirements of SAP. 
                We then propose a framework to construct key separation KDS, which follows the <i>key separation</i> principle as all existing SAP solutions to avoid the reuse of the master keys in the derivation and signature component. 
                We also study the joint security in KDS and construct a key reusing KDS framework, which implies the first compact stealth address protocol using a single key pair. 
                Finally, we provide instantiations based on the elliptic curve (widely used in cryptocurrencies) and on the lattice (with quantum resistance), respectively.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Extractable Witness Encryption for KZG Commitments and Efficient Laconic OT'
            authors='Nils Fleischhacker, Mathias Hall-Andersen, Mark Simkin'
            link='https://eprint.iacr.org/2024/264.pdf'
            year={2024}
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We present a concretely efficient and simple extractable witness encryption scheme for KZG polynomial commitments. 
                It allows to encrypt a message towards a triple <InlineMath math={'(\\mathsf{com}, \\alpha, \\beta)'} />, where <InlineMath math={'\\mathsf{com}'} /> is a KZG commitment for some polynomial <InlineMath math={'f'} />. 
                Anyone with an opening for the commitment attesting <InlineMath math={'f(\\alpha) = \\beta'} /> can decrypt, but without knowledge of a valid opening the message is computationally hidden. 
                Our construction is simple and highly efficient. 
                The ciphertext is only a single group element.
                Encryption and decryption both require a single pairing evaluation and a constant number of group operations.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
              Using our witness encryption scheme, we construct a simple and highly efficient laconic OT protocol, which significantly outperforms the state of the art in most important metrics.
              </em>
            </Text>
          </Publication>

          <Publication
            title='OCash: Fully Anonymous Payments between Blockchain Light Clients'
            authors='Adam Blatchley Hansen, Jesper Buus Nielsen, Mark Simkin'
            link='https://eprint.iacr.org/2024/246.pdf'
            year={2024}
          >
            <Text mb={4} fontSize='sm'>
              <em>
                We study blockchain-based provably anonymous payment systems between <i>light clients</i>.
                Such clients interact with the blockchain through full nodes, who can see what the light clients read and write. 
                The goal of our work is to enable light clients to perform anonymous payments, while maintaining privacy even against the full nodes through which they interact with the blockchain.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
              We formalize the problem in the universal composability model and present a provably secure solution to it. 
              In comparison to existing works, we are the first ones that simultaneously provide strong anonymity guarantees, provable security, and anonymity with respect to the full nodes. 
              Along the way, we make several contributions that may be of independent interest.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                We define and construct efficient compressible randomness beacons, which produce unpredictable values in regular intervals and allow for storing all published values in a short digest. 
                We define and construct anonymous-coin friendly encryption schemes and we show how they can be used within anonymous payment systems. 
                We define and construct strongly oblivious read-once map, which can be seen as a special data structure that needs to satisfy a stronger notion of obliviousness than what is usually considered. 
                We present a new approach, which is compatible with light clients, for mitigating doublespending attacks in anonymous cryptocurrencies.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Ramen: Souper Fast Three-Party Computation for RAM Programs'
            authors='Lennart Braun, Mahak Pancholi, Rahul Rachuri, Mark Simkin'
            year={2023}
            link='https://eprint.iacr.org/2023/310'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Secure RAM computation allows a number of parties to evaluate a function represented
                as a RAM program in a way that reveals nothing about the private inputs of the
                parties except from what is already revealed by the function output itself. In this
                work we present Ramen, which is a new protocol for computing RAM programs securely
                among three parties, tolerating up to one passive corruption. Ramen provides
                reasonable asymptotic guarantees and is concretely efficient at the same time. We
                have implemented our protocol and provide extensive benchmarks for various settings.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Asymptotically, our protocol requires a constant number of rounds and a amortized
                sublinear amount of communication and computation per memory access. In terms of
                concrete efficiency, our protocol outperforms previous solutions. For a memory of
                size {<InlineMath math={'2^{26}'} />} our memory accesses are{' '}
                {<InlineMath math={'30\\times'} />} faster in the LAN and{' '}
                {<InlineMath math={'8.7\\times'} />} faster in the WAN setting, when compared to the
                previously fastest solution by Vadapalli, Henry, and Goldberg (ePrint 2022). Due to
                our superior asymptotic guarantees, the efficiency gap is only widening as the
                memory gets larger and for this reason Ramen provides the currently most scalable
                concretely efficient solution for securely computing RAM programs.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Laconic Private Set-Intersection From Pairings'
            authors='Diego Aranha, Chuanwei Lin, Claudio Orlandi, Mark Simkin'
            conference='CCS 2022.'
            link='https://eprint.iacr.org/2022/529.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Private set-intersection (PSI) is one of the most practically relevant
                special-purpose secure multiparty computation tasks, as it is motivated by many
                real-world applications. In this paper we present a new private set-intersection
                protocol which is laconic, meaning that the protocol only has two rounds and that
                the first message is independent of the set sizes. Laconic PSI can be useful in
                applications, where servers with large sets would like to learn the intersection of
                their set with smaller sets owned by resource-constrained clients and where multiple
                rounds of interactions are not possible.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                Previously, practically relevant laconic PSI protocols were only known from
                factoring-type assumptions. The contributions of this work are twofold: 1) We
                present the first laconic PSI protocol based on assumptions over pairing-friendly
                elliptic curves; and 2) For the first time we provide empirical evaluation of any
                laconic PSI protocol by carefully implementing and optimising both our and previous
                protocols. Our experimental results show that our protocol outperforms prior laconic
                PSI protocols.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Interactive Non-Malleable Codes Against Desynchronizing Attacks in the Multi-Party Setting'
            authors='Nils Fleischhacker, Suparno Ghoshal, Mark Simkin'
            conference='ITC 2023.'
            link='https://eprint.iacr.org/2022/1004.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Interactive Non-Malleable Codes were introduced by Fleischhacker et al. (TCC 2019)
                in the two party setting with synchronous tampering. The idea of this type of
                non-malleable code is that it "encodes" an interactive protocol in such a way that,
                even if the messages are tampered with according to some class{' '}
                {<InlineMath math={'\\mathcal{F}'} />}, the result of the execution will either be
                correct, or completely unrelated to the inputs of the participating parties. In the
                synchronous setting the adversary is able to modify the messages being exchanged but
                cannot drop messages nor desynchronize the two parties by first running the protocol
                with the first party and then with the second party. In this work, we define
                interactive non-malleable codes in the non-synchronous multi-party setting and
                construct such interactive non-malleable codes for the class{' '}
                {<InlineMath math={'\\mathcal{F}^s_{\\mathsf{bounded}}'} />}. The construction is
                applicable to any multi-party protocol with a fixed message topology.
              </em>
            </Text>
          </Publication>

          <Publication
            title='The Legendre Symbol and the Modulo-2 Operator in Symmetric Schemes over Fpn'
            authors='Lorenzo Grassi, Dmitry Khovratovich, Sondre Rønjom, Markus Schofnegger'
            link='https://tosc.iacr.org/index.php/ToSC/article/view/9525/9062.pdf'
            conference='ToSC 2022.'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Motivated by modern cryptographic use cases such as multi-party computation (MPC),
                homomorphic encryption (HE), and zero-knowledge (ZK) protocols, several symmetric
                schemes that are efficient in these scenarios have recently been proposed in the
                literature. Some of these schemes are instantiated with low-degree nonlinear
                functions, for example low-degree power maps (e.g., MiMC, HadesMiMC, Poseidon) or
                the Toffoli gate (e.g., Ciminion). Others (e.g., Rescue, Vision, Grendel) are
                instead instantiated via high-degree functions which are easy to evaluate in the
                target application. A recent example for the latter case is the hash function
                Grendel, whose nonlinear layer is constructed using the Legendre symbol.
              </em>
            </Text>

            <Text mb={4} fontSize='sm'>
              <em>
                In this paper, we analyze high-degree functions such as the Legendre symbol or the
                modulo-2 operation as building blocks for the nonlinear layer of a cryptographic
                scheme over {<InlineMath math={'\\mathbb{F}_p^n'} />}. Our focus regards the
                security analysis rather than the efficiency in the mentioned use cases. For this
                purpose, we present several new invertible functions that make use of the Legendre
                symbol or of the modulo-2 operation.
              </em>
            </Text>

            <Text fontSize='sm'>
              <em>
                Even though these functions often provide strong statistical properties and ensure a
                high degree after a few rounds, the main problem regards their small number of
                possible outputs, that is, only three for the Legendre symbol and only two for the
                modulo-2 operation. By fixing them, it is possible to reduce the overall degree of
                the function significantly. We exploit this behavior by describing the first
                preimage attack on full Grendel, and we verify it in practice.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Post-Quantum Verifiable Random Function from Symmetric Primitives in PoS Blockchain'
            authors='Maxime Buser, Rafael Dowsley, Muhammed F. Esgin, Shabnam Kasra Kermanshahi, Veronika Kuchta, Joseph K. Liu, Raphael Phan, and Zhenfei Zhang'
            conference='ESORICS 2022.'
            link='https://eprint.iacr.org/2021/302.pdf'
          >
            <Text mb={4} fontSize='sm'>
              <em>
                Verifiable Random Functions (VRFs) play a key role in Proof-of-Stake blockchains
                such as Algorand to achieve highly scalable consensus, but currently deployed VRFs
                lack post-quantum security, which is crucial for future-readiness of blockchain
                systems. This work presents the first quantum-safe VRF scheme based on symmetric
                primitives. Our main proposal is a practical many-time quantum-safe VRF
                construction, X-VRF, based on the XMSS signature scheme. An innovation of our work
                is to use the state of the blockchain to counter the undesired stateful nature of
                XMSS by constructing a blockchain-empowered VRF. While increasing the usability of
                XMSS, our technique also enforces honest behavior when creating an X-VRF output so
                as to satisfy the fundamental uniqueness property of VRFs. We show how X-VRF can be
                used in the Algorand setting to extend it to a quantum-safe blockchain and provide
                four instances of X-VRF with different key life-time. Our extensive performance
                evaluation, analysis and implementation indicate the effectiveness of our proposed
                constructions in practice. Particularly, we demonstrate that X-VRF is the most
                efficient quantum-safe VRF with a maximum proof size of 3 KB and a possible TPS of
                449 for a network of thousand nodes.
              </em>
            </Text>
          </Publication>

          <Publication
            title='Reputable List Curation from Decentralized Voting'
            authors='Elizabeth Crites, Mary Maller, Sarah Meiklejohn, Rebekah Mercer'
            conference='PETS 2020.'
            link='https://eprint.iacr.org/2020/709.pdf'
          >
            <Text fontSize='sm'>
              <em>
                Token-curated registries (TCRs) are a mechanism by which a set of users are able to
                jointly curate a reputable list about real-world information. Entries in the
                registry may have any form, so this primitive has been proposed for use— and
                deployed— in a variety of decentralized applications, ranging from the simple joint
                creation of lists to helping to prevent the spread of misinformation online. Despite
                this interest, the security of this primitive is not well understood, and indeed
                existing constructions do not achieve strong or provable notions of security or
                privacy. In this paper, we provide a formal cryptographic treatment of TCRs as well
                as a construction that provably hides the votes cast by individual curators. Along
                the way, we provide a model and proof of security for an underlying voting scheme,
                which may be of independent interest.
              </em>
            </Text>
          </Publication>
        </ResearchArea>
      </main>
    </>
  );
};

export default Research;
