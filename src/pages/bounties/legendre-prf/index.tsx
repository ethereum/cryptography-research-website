/* eslint-disable react/no-children-prop */
import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import { PageMetadata } from '../../../components/UI';
import { PostTheme } from '../../../components/styles';

import {
  LEGENDRE_PRF_BOUNTIES_URL,
  LEGENDRE_PRF_CONCRETE_INSTANCES_BOUNTIES_URL,
  LEGENDRE_PRF_DATA_SOURCE
} from '../../../constants';

// generate the static props for the page
export const getStaticProps: GetStaticProps = async () => {
  const fileName = fs.readFileSync(`${LEGENDRE_PRF_DATA_SOURCE}/index.md`, 'utf-8');
  const { content } = matter(fileName);

  return {
    props: {
      content
    }
  };
};

interface Props {
  content: string;
}

const LegendrePrf: NextPage<Props> = ({ content }) => {
  return (
    <>
      <PageMetadata
        title='The Legendre PRF'
        description='We are interested in how resistant the Legendre pseudo-random function is to key recovery attacks, as well as any other interesting results on the Legendre PRF.'
      />

      <main>
        <Heading as='h1' mb={10}>
          The Legendre PRF
        </Heading>

        <Stack mb={20}>
          <Text mb={4}>
            The Legendre pseudo-random function is a PRF that is extremely well suited for secure
            multi-party computation (MPC) and zero-knowledge proofs (ZKP) over arithmetic circuits.
          </Text>

          <Text>
            For bounties on breaking the Legendre PRF, please see{' '}
            <NextLink href={LEGENDRE_PRF_BOUNTIES_URL} passHref>
              <Link
                href={LEGENDRE_PRF_BOUNTIES_URL}
                color='brand.lightblue'
                _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              >
                bounties
              </Link>
            </NextLink>{' '}
            for algorithmic bounties and{' '}
            <NextLink href={LEGENDRE_PRF_CONCRETE_INSTANCES_BOUNTIES_URL} passHref>
              <Link
                href={LEGENDRE_PRF_CONCRETE_INSTANCES_BOUNTIES_URL}
                color='brand.lightblue'
                _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              >
                here
              </Link>
            </NextLink>{' '}
            for concrete key recovery puzzles.
          </Text>
        </Stack>

        <ReactMarkdown
          components={ChakraUIRenderer(PostTheme)}
          children={content}
          remarkPlugins={[gfm, remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
        />
      </main>
    </>
  );
};

export default LegendrePrf;
