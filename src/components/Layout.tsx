import { Container, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { Footer, Header } from './';

export const Layout: FC = ({ children }) => {
  return (
    <>
      {/* TODO: active link color */}
      {/* TODO: add ETH icon, favicon, sitemap, metatags */}
      <Header />

      <Container maxW='container.md' px={6} py={16}>
        <Stack mb={24}>{children}</Stack>

        <Footer />
      </Container>
    </>
  );
};
