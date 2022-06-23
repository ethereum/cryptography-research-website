/* eslint-disable react/no-children-prop */
import { Heading } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
// import rehypeSlug from 'rehype-slug';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import { PageMetadata } from '../../components/UI';
import { PostTheme } from '../../components/styles';

import { MIMC_HASH_DATA_SOURCE } from '../../constants';

// generate the static props for the page
export const getStaticProps: GetStaticProps = async () => {
  const fileName = fs.readFileSync(MIMC_HASH_DATA_SOURCE, 'utf-8');
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

const MiMCHashChallenge: NextPage<Props> = ({ content }) => {
  return (
    <>
      <PageMetadata
        title='MiMC Hash Challenge Bounty'
        description='Rewards for finding collisions in MiMCSponge, a sponge construction instantiated with MiMC-Feistel over a prime field, targeting 128-bit and 80-bit security.'
      />

      <main>
        <Heading as='h1' mb={20}>
          MiMC Hash Challenge
        </Heading>

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

export default MiMCHashChallenge;
