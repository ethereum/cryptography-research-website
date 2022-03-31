import { Box, Flex, Link, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

import EFlogo from '../../../public/images/ef-logo.png';

export const Header: FC = () => {
  return (
    <header>
      <Flex justifyContent='space-between' px={{ base: 6, md: 8 }} pt={6}>
        <Box mr={{ base: 8, md: 0 }}>
          <Image src={EFlogo} alt='Ethereum Foundation logo' height={50} width={146.66} />
        </Box>

        <Stack mb={{ base: 2, md: 10 }} alignItems='flex-end'>
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
              <NextLink href={'https://challenges.ethereum.org/'} passHref>
                <Link
                  href={'/bounties'}
                  _hover={{ textDecoration: 'none', color: 'gray.800' }}
                  color='gray.500'
                  mr={3}
                  isExternal
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
      </Flex>
    </header>
  );
};
