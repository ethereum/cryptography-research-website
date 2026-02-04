import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Heading, Stack } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';

import { ExternalPost, InternalPost, PageMetadata } from '../components/UI';

import { sortByDate } from '../utils';

import { MarkdownPost, WorkItem } from '../types';
import { POSTS_DIR } from '../constants';

export const getStaticProps: GetStaticProps = async () => {
  // Load fetched team work data
  const teamWorkPath = path.join(process.cwd(), 'src/data/team-work-data.json');
  let teamWork: WorkItem[] = [];
  if (fs.existsSync(teamWorkPath)) {
    const content = fs.readFileSync(teamWorkPath, 'utf-8');
    teamWork = JSON.parse(content);
  }

  // get list of files from the posts folder
  const files = fs.existsSync(POSTS_DIR) ? fs.readdirSync(POSTS_DIR) : [];

  // get frontmatter & slug from each post
  const posts = files.map(fileName => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`${POSTS_DIR}/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter
    };
  });

  // return the pages static props
  return {
    props: {
      posts,
      teamWork
    }
  };
};

interface Props {
  posts: MarkdownPost[];
  teamWork: WorkItem[];
}

// External links from the original blog page
const externalLinks = [
  {
    title: 'A Universal Verification Equation for Data Availability Sampling',
    date: '2022-08-04',
    link: 'https://ethresear.ch/t/a-universal-verification-equation-for-data-availability-sampling/13240'
  },
  {
    title: 'Whisk: A practical shuffle-based SSLE protocol for Ethereum',
    date: '2022-01-13',
    link: 'https://ethresear.ch/t/whisk-a-practical-shuffle-based-ssle-protocol-for-ethereum/11763'
  },
  {
    title: 'Introducing Bandersnatch: a fast elliptic curve built over the BLS12-381 scalar field',
    date: '2021-06-29',
    link: 'https://ethresear.ch/t/introducing-bandersnatch-a-fast-elliptic-curve-built-over-the-bls12-381-scalar-field/9957'
  },
  {
    title: 'Inner Product Arguments',
    date: '2021-06-27',
    link: 'https://dankradfeist.de/ethereum/2021/07/27/inner-product-arguments.html'
  },
  {
    title: 'PCS multiproofs using random evaluation',
    date: '2021-06-18',
    link: 'https://dankradfeist.de/ethereum/2021/06/18/pcs-multiproofs.html'
  },
  {
    title: 'VDF Proving with SnarkPack',
    date: '2020-07-16',
    link: 'https://ethresear.ch/t/vdf-proving-with-snarkpack/10096/1'
  },
  {
    title: 'KZG polynomial commitments',
    date: '2020-06-16',
    link: 'https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html'
  }
];

const PostsResearch: NextPage<Props> = ({ posts, teamWork }) => {
  const internalPosts = posts.map(post => {
    const { slug, frontmatter } = post;
    const { title, date } = frontmatter;

    return <InternalPost key={slug} date={date} slug={slug} title={title} />;
  });

  // Convert team work items to external posts
  const teamWorkPosts = teamWork.map(item => (
    <ExternalPost
      key={item.url}
      date={item.date}
      link={item.url}
      title={`${item.title} ↗`}
      author={item.authorDisplay}
    />
  ));

  // Legacy external links from the original blog
  const legacyExternalPosts = externalLinks.map(({ date, link, title }) => (
    <ExternalPost key={link} date={date} link={link} title={`${title} ↗`} />
  ));

  // Combine all posts: internal markdown + team work + legacy external
  const allPosts = internalPosts.concat(teamWorkPosts).concat(legacyExternalPosts);

  return (
    <>
      <PageMetadata
        title='Posts & Research'
        description='View latest posts and research from the Ethereum Foundation Cryptography Research team.'
      />

      <main>
        <Heading as='h1' mb={10}>
          Posts & Research
        </Heading>

        <Stack spacing={2}>{allPosts.sort(sortByDate)}</Stack>
      </main>
    </>
  );
};

export default PostsResearch;
