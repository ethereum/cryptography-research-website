import { Container, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { Footer, Header } from '../UI';

export const Layout: FC = ({ children }) => {
  return (
    <>
      {/* TODO: active link color */}
      {/* TODO: add ETH icon, favicon, sitemap, metatags */}
      <Header />

      <Container maxW={{ base: 'container.md', xl2: 'container.lg' }} px={6} py={16}>
        <Stack mt={{ base: 4, xl: 12 }} mb={24}>
          {children}
        </Stack>

        <Footer />
      </Container>
    </>
  );
};
