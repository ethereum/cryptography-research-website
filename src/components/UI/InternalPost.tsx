import { Box, Heading, HStack, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

import { getParsedDate } from '../../utils';

interface Props {
  date: string;
  slug: string;
  title: string;
  author?: string;
}

export const InternalPost: FC<Props> = ({ date, slug, title, author }) => {
  const parsedDate = getParsedDate(date);

  return (
    <Box as="article" p={4} bg="bgAlt" borderRadius="md" boxShadow="sm">
      <HStack spacing={2} mb={1}>
        <Text fontSize='sm' color="textMuted">
          {parsedDate}
        </Text>
        <Text
          fontSize="xs"
          color="textMuted"
          bg="#e5f5f2"
          px={2}
          py={0.5}
          borderRadius="sm"
        >
          Blog Post
        </Text>
      </HStack>

      <Link
        as={NextLink}
        href={`blog/${slug}`}
        color='brand.lightblue'
        _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
      >
        <Heading as='h2' fontSize='lg' fontWeight={600}>
          {title}
        </Heading>
      </Link>

      {author && (
        <Text fontSize='sm' color="textMuted" mt={1}>
          {author}
        </Text>
      )}
    </Box>
  );
};
