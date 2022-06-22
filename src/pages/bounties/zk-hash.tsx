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

import { ZK_HASH_DATA_SOURCE } from '../../constants';

// generate the static props for the page
export const getStaticProps: GetStaticProps = async () => {
  const fileName = fs.readFileSync(ZK_HASH_DATA_SOURCE, 'utf-8');
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

const ZKHash: NextPage<Props> = ({ content }) => {
  return (
    <>
      <PageMetadata
        title='ZK Hash Function Cryptanalysis Bounties'
        description='Help us understand the security of new hash functions better.'
      />

      <main>
        <Heading as='h1' mb={20}>
          ZK Hash Function Cryptanalysis Bounties
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

export default ZKHash;
