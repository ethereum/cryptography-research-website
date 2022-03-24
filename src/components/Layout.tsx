import { Container, Link, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Header } from './';

export const Layout: FC = ({ children }) => {
  return (
    <>
      {/* TODO: active link color */}
      {/* TODO: add ETH icon, favicon, sitemap, metatags */}
      <Header />

      <Container maxW='container.md' px={6} py={16}>
        <Stack mb={24}>{children}</Stack>

        {/* TODO: move to Footer component */}
        <footer>
          <Stack>
            <Text>
              <Link
                href='mailto:cryptography@ethereum.org'
                textDecoration='underline'
                color='gray.500'
                _hover={{ color: '#667bbe' }}
              >
                cryptography@ethereum.org
              </Link>
            </Text>
            <Text>{`© ${new Date().getFullYear()} Ethereum Foundation. All rights reserved.`}</Text>
          </Stack>
        </footer>
      </Container>
    </>
  );
};
