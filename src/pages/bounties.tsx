import { Heading, Link, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { PageMetadata } from '../components/UI/';

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

        <Text mb={4}>
          To improve the cryptanalysis of new RSA assumptions needed for Verifiable Delay Functions
          (VDFs), the Ethereum Foundation announced the following bounties at Real World Crypto
          2020.{' '}
          <Link
            href='https://rsa.cash/bounties'
            color='brand.lightblue'
            _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
            isExternal
          >
            rsa.cash/bounties
          </Link>
        </Text>

        <Text>
          Help us understand the security of new hash functions better. The Ethereum Foundation
          announced the following bounties in November 2021.{' '}
          <Link
            href='https://www.zkhashbounties.info/'
            color='brand.lightblue'
            _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
            isExternal
          >
            zkhashbounties.info
          </Link>
        </Text>
      </main>
    </>
  );
};

export default Bounties;
