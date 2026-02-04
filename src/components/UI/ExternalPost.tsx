import { Heading, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { getParsedDate } from '../../utils';

interface Props {
  date: string;
  link: string;
  title: string;
  author?: string;
}

export const ExternalPost: FC<Props> = ({ date, link, title, author }) => {
  const parsedDate = getParsedDate(date);

  return (
    <article>
      <Heading as='h3' fontSize='sm' fontWeight={400} mb={1}>
        {author && <Text as='span' fontStyle='italic'>{author} · </Text>}{parsedDate}
      </Heading>

      <Link
        href={link}
        color='brand.lightblue'
        _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
        isExternal
      >
        <Heading as='h1' mb={4} fontSize='xl' fontWeight={500}>
          {title}
        </Heading>
      </Link>
    </article>
  );
};
