import { Link, Stack, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { Abstract } from './Abstract';

interface Props {
  title: string;
  authors: string;
  conference?: string;
  year?: number;
  link: string;
  children: ReactNode;
}

export const Publication: FC<Props> = ({ title, authors, conference, year, link, children }) => {
  return (
    <Stack>
      <Text mb={-1} fontWeight='bold'>
        {title}.
      </Text>
      <Text fontSize='sm'>
        <em>{authors}.</em>
      </Text>
      <Text fontSize='sm'>
        {conference ? conference : `${year}.`}{' '}
        <Link
          href={link}
          color='brand.lightblue'
          _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
          isExternal
        >
          PDF.
        </Link>
      </Text>

      <Abstract>{children}</Abstract>
    </Stack>
  );
};
