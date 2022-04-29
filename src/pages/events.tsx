import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageMetadata } from '../components/UI';

const Events: NextPage = () => {
  return (
    <>
      {/* TODO: add description */}
      <PageMetadata title='Events' description='' />

      <main>
        <Heading as='h1' mb={10}>
          Events
        </Heading>

        <Stack mb={6}>
          <Heading as='h2' size='lg' fontWeight={600} mb={2}>
            Cryptographic Frontier 2022, Trondheim
          </Heading>

          <Text mb={10}>
            <Link
              href='https://sites.google.com/view/cryptographic-frontier-2022/'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
            >
              <strong>Open Problems in Decentralized Computation at Eurocrypt 2022:</strong>
            </Link>{' '}
            this workshop brings the most interesting and challenging open cryptographic questions that Ethereum, Filecoin and other blockchain systems face, to the attention of academia.  We will cover a large spectrum of research topics, such as vector commitments, SNARKs, shuffles, authenticated data structures and more. We will start the day with an update on to the problems discussed at last year&apos;s workshop.
          </Text>
          <Heading as='h2' size='lg' fontWeight={600} mb={2}>
            Cryptographic Frontier 2021, Zagreb
          </Heading>

          <Text>
            <Link
              href='https://sites.google.com/view/cryptofrontier21'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
            >
              <strong>Open Problems in Ethereum Research at Eurocrypt 2021:</strong>
            </Link>{' '}
            this workshop brought the most interesting and challenging open cryptographic questions
            that Ethereum faces to the attention of academia. We covered a large spectrum of
            research topics, such as multisignatures, commitments, verifiable delay functions,
            secure computation, zk-friendly hash functions and more.
          </Text>
        </Stack>
      </main>
    </>
  );
};

export default Events;
