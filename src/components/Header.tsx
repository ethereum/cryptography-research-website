import { Link, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

export const Header: FC = () => {
  return (
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
  );
};
