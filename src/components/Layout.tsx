import { Container, Link, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

export const Layout: FC = ({ children }) => {
  return (
    <>
      {/* TODO: move to Header component */}
      {/* TODO: active link color */}
      {/* TODO: add ETH icon, favicon, sitemap, metatags */}
      <header>
        <Stack mb={{ base: 2, md: 10 }} alignItems='flex-end' px={{ base: 6, md: 8 }} pt={6}>
          <Wrap listStyleType='none' ml={0}>
            <WrapItem display='inline'>
              <NextLink href={'/'} passHref>
                <Link
                  href={'/'}
                  _hover={{ textDecoration: 'none', color: 'gray.800' }}
                  color='gray.500'
                  mr={3}
                >
                  home
                </Link>
              </NextLink>
            </WrapItem>
            <WrapItem display='inline'>
              <NextLink href={'/blog'} passHref>
                <Link
                  href={'/blog'}
                  _hover={{ textDecoration: 'none', color: 'gray.800' }}
                  color='gray.500'
                  mr={3}
                >
                  blog
                </Link>
              </NextLink>
            </WrapItem>
            <WrapItem display='inline'>
              <NextLink href={'/research'} passHref>
                <Link
                  href={'/research'}
                  _hover={{ textDecoration: 'none', color: 'gray.800' }}
                  color='gray.500'
                  mr={3}
                >
                  research
                </Link>
              </NextLink>
            </WrapItem>
            <WrapItem display='inline'>
              <NextLink href={'/bounties'} passHref>
                <Link
                  href={'/bounties'}
                  _hover={{ textDecoration: 'none', color: 'gray.800' }}
                  color='gray.500'
                  mr={3}
                >
                  bounties
                </Link>
              </NextLink>
            </WrapItem>
            <WrapItem display='inline'>
              <NextLink href={'/team'} passHref>
                <Link
                  href={'/team'}
                  _hover={{ textDecoration: 'none', color: 'gray.800' }}
                  color='gray.500'
                  mr={3}
                >
                  team
                </Link>
              </NextLink>
            </WrapItem>
            <WrapItem display='inline'>
              <NextLink href={'/events'} passHref>
                <Link
                  href={'/events'}
                  _hover={{ textDecoration: 'none', color: 'gray.800' }}
                  color='gray.500'
                >
                  events
                </Link>
              </NextLink>
            </WrapItem>
          </Wrap>
        </Stack>
      </header>

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
