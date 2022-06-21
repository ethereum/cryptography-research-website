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
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import { PageMetadata } from '../../../components/UI';
import { PostTheme } from '../../../components/styles';

import { LEGENDRE_PRF_DATA_SOURCE } from '../../../constants';

// generate the static props for the page
export const getStaticProps: GetStaticProps = async () => {
  const fileName = fs.readFileSync(
    `${LEGENDRE_PRF_DATA_SOURCE}/concrete-instances-bounties.md`,
    'utf-8'
  );
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

const ConcreteInstancesBounties: NextPage<Props> = ({ content }) => {
  return (
    <>
      <PageMetadata
        title='Legendre PRF bounties for concrete instances'
        description='Bounties on breaking the Legendre PRF.'
      />

      <main>
        <Heading as='h1' mb={20}>
          Legendre PRF bounties for concrete instances
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

export default ConcreteInstancesBounties;
