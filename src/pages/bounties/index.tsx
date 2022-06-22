import { Heading, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Bounty, PageMetadata } from '../../components/UI/';

import { LEGENDRE_PRF_URL, MIMC_HASH_BOUNTIES_URL, ZK_HASH_BOUNTIES_URL } from '../../constants';

const Bounties: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Bounties'
        description='Find Ethereum bounties related to cryptography. '
      />

      <main>
        <Heading as='h1' mb={10}>
          Bounties
        </Heading>

        <Stack spacing={4}>
          <Bounty
            url={LEGENDRE_PRF_URL}
            title='Legendre PRF Bounties'
            postedBy='Ethereum Foundation'
            totalBounty='$31,000 USD and 31 ETH'
          >
            We are interested in how resistant the Legendre pseudo-random function is to key
            recovery attacks, as well as any other interesting results on the Legendre PRF.
          </Bounty>

          <Bounty
            url={MIMC_HASH_BOUNTIES_URL}
            title='MiMC Hash Challenge'
            postedBy='Ethereum Foundation and Protocol Labs'
            totalBounty='$20,000 USD per challenge'
          >
            The Ethereum Foundation and Protocol Labs are offering rewards for finding collisions in
            MiMCSponge, a sponge construction instantiated with MiMC-Feistel over a prime field,
            targeting 128-bit and 80-bit security, on one of two fields described below.
          </Bounty>

          <Bounty
            url={ZK_HASH_BOUNTIES_URL}
            title='ZK Hash Function Cryptanalysis Bounties'
            postedBy='Ethereum Foundation'
            totalBounty='$200,000 USD'
          >
            Help us understand the security of new hash functions better.
          </Bounty>
        </Stack>
      </main>
    </>
  );
};

export default Bounties;
