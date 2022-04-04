import { Box, Flex, Link, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import EFlogo from '../../../public/images/ef-logo.png';

import {
  BLOG_URL,
  BOUNTIES_URL,
  EVENTS_URL,
  HOME_URL,
  RESEARCH_URL,
  TEAM_URL
} from '../../constants';

export const Header: FC = () => {
  const router = useRouter();

  return (
    <header>
      <Flex justifyContent='space-between' px={{ base: 6, md: 8 }} pt={6}>
        <Box mr={{ base: 8, md: 0 }} onClick={() => router.push(HOME_URL)} cursor='pointer'>
          <Image src={EFlogo} alt='Ethereum Foundation logo' height={50} width={146.66} />
        </Box>

        <Stack mb={{ base: 2, md: 10 }} alignItems='flex-end'>
          <Wrap listStyleType='none' ml={0}>
            <WrapItem display='inline'>
              <NextLink href={HOME_URL} passHref>
                <Link
                  href={HOME_URL}
                  _hover={{ textDecoration: 'none', color: 'gray.800' }}
                  color='gray.500'
                  mr={3}
                >
                  home
                </Link>
              </NextLink>
            </WrapItem>
            <WrapItem display='inline'>
              <NextLink href={BLOG_URL} passHref>
                <Link
                  href={BLOG_URL}
                  _hover={{ textDecoration: 'none', color: 'gray.800' }}
                  color='gray.500'
                  mr={3}
                >
                  blog
                </Link>
              </NextLink>
            </WrapItem>
            <WrapItem display='inline'>
              <NextLink href={RESEARCH_URL} passHref>
                <Link
                  href={RESEARCH_URL}
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
                  href={BOUNTIES_URL}
                  _hover={{ textDecoration: 'none', color: 'gray.800' }}
                  color='gray.500'
                  mr={3}
                  isExternal
                >
                  bounties ↗
                </Link>
              </NextLink>
            </WrapItem>
            <WrapItem display='inline'>
              <NextLink href={TEAM_URL} passHref>
                <Link
                  href={TEAM_URL}
                  _hover={{ textDecoration: 'none', color: 'gray.800' }}
                  color='gray.500'
                  mr={3}
                >
                  team
                </Link>
              </NextLink>
            </WrapItem>
            <WrapItem display='inline'>
              <NextLink href={EVENTS_URL} passHref>
                <Link
                  href={EVENTS_URL}
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
