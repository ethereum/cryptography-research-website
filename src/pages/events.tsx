import { Heading, Stack, Text } from '@chakra-ui/react';
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
            Cryptographic Frontier 2021, Zagreb
          </Heading>

          <Text>
            <strong>Open Problems in Ethereum Research at Eurocrypt 2021:</strong> This workshop
            brought the most interesting and challenging open cryptographic questions that Ethereum
            faces to the attention of academia. We covered a large spectrum of research topics, such
            as multisignatures, commitments, verifiable delay functions, secure computation,
            zk-friendly hash functions and more. Event webpage.
          </Text>
        </Stack>
      </main>
    </>
  );
};

export default Events;
