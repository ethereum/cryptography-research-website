/* eslint-disable react/no-children-prop */
import fs from 'fs';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { Heading, Link, ListItem, OrderedList, Stack, Text, UnorderedList } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import { getParsedDate } from '../../utils';

// generating the paths for each post
export const getStaticPaths: GetStaticPaths = () => {
  // get list of all files from our posts directory
  const files = fs.readdirSync('src/posts');
  // generate a path for each one
  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace('.md', '')
    }
  }));
  // return list of paths
  return {
    paths,
    fallback: false
  };
};

// generate the static props for the page
export const getStaticProps: GetStaticProps = async context => {
  const slug = context.params?.slug as string;
  const fileName = fs.readFileSync(`src/posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content
    }
  };
};

interface Props {
  frontmatter: {
    [key: string]: any;
  };
  content: string;
}

export const PostTheme = {
  h2: ({ children }: any) => {
    return (
      <Heading as='h2' size='lg' fontWeight={600} mt={10} mb={5}>
        {children}
      </Heading>
    );
  },
  h3: ({ children }: any) => {
    return (
      <Heading as='h3' fontSize='24px' fontWeight={600} mt={10} mb={5}>
        {children}
      </Heading>
    );
  },
  h4: ({ children }: any) => {
    return (
      <Heading as='h4' size='md' fontWeight={600} mt={10} mb={5}>
        {children}
      </Heading>
    );
  },
  p: ({ children }: any) => {
    return (
      <Text mb={4} size='sm'>
        {children}
      </Text>
    );
  },
  ol: ({ children }: any) => {
    return (
      <OrderedList ml={8} mb={10}>
        {children}
      </OrderedList>
    );
  },
  ul: ({ children }: any) => {
    return (
      <UnorderedList ml={8} mb={10}>
        {children}
      </UnorderedList>
    );
  },
  li: ({ children }: any) => {
    return <ListItem>{children}</ListItem>;
  },
  a: ({ children, href }: any) => {
    return (
      <Link
        textDecoration='none'
        color='#14add2'
        _hover={{ color: '#f38b75', textDecoration: 'underline' }}
        href={href}
      >
        {children}
      </Link>
    );
  }
};

const Post: NextPage<Props> = ({ frontmatter, content }) => {
  const { title, author, date } = frontmatter;
  const parsedDate = getParsedDate(date);

  return (
    <main>
      <Heading as='h1' mb={1}>
        {title}
      </Heading>

      <Heading as='h2' size='xs' fontWeight={400} mb={10} color='gray.500'>
        {author} | {parsedDate}
      </Heading>

      <ReactMarkdown
        components={ChakraUIRenderer(PostTheme)}
        children={content}
        remarkPlugins={[gfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
      />
    </main>
  );
};

export default Post;
