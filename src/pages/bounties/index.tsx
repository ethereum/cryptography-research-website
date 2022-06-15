import { Heading, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Bounty, PageMetadata } from '../../components/UI/';

import { BOUNTIES_MIMC_HASH_URL } from '../../constants';

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

        <Stack justifyContent='center' alignItems='center'>
          <Bounty
            url={BOUNTIES_MIMC_HASH_URL}
            title='MiMC Hash Challenge'
            postedBy='Ethereum Foundation and Protocol Labs'
            totalBounty='$20,000 USD per challenge'
          >
            The Ethereum Foundation and Protocol Labs are offering rewards for finding collisions in
            MiMCSponge, a sponge construction instantiated with MiMC-Feistel over a prime field,
            targeting 128-bit and 80-bit security, on one of two fields described below.
          </Bounty>
        </Stack>
      </main>
    </>
  );
};

export default Bounties;
