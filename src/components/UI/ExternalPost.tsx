import { Box, Heading, HStack, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { getParsedDate } from '../../utils';

interface Props {
  date: string;
  link: string;
  title: string;
  author?: string;
  tags?: string[];
}

const getTypeColor = (tag: string): string => {
  if (tag === 'Paper') return '#e9e5f5';
  if (tag === 'Blog Post') return '#e5f5f2';
  if (tag === 'Ethresearch Post') return '#f5f0e5';
  if (tag === 'Code') return '#e5f5e8';
  if (tag === 'Talk') return '#f5e5f0';
  return '#f0efed';
};

const isTypeTag = (tag: string): boolean => {
  return ['Paper', 'Blog Post', 'Ethresearch Post', 'Code', 'Talk'].includes(tag);
};

export const ExternalPost: FC<Props> = ({ date, link, title, author, tags = [] }) => {
  const parsedDate = getParsedDate(date);
  const typeTag = tags.find(isTypeTag);

  return (
    <Box as="article" p={4} bg="brand.bgAlt" borderRadius="md" boxShadow="sm">
      <HStack spacing={2} mb={1} flexWrap="wrap">
        <Text fontSize='sm' color="brand.textMuted">
          {parsedDate}
        </Text>
        {typeTag && (
          <Text
            fontSize="xs"
            color="brand.textMuted"
            bg={getTypeColor(typeTag)}
            px={2}
            py={0.5}
            borderRadius="sm"
          >
            {typeTag}
          </Text>
        )}
      </HStack>

      <Link
        href={link}
        color='brand.lightblue'
        _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
        isExternal
      >
        <Heading as='h2' fontSize='lg' fontWeight={600}>
          {title}
        </Heading>
      </Link>

      {author && (
        <Text fontSize='sm' color="brand.textMuted" mt={1}>
          {author}
        </Text>
      )}
    </Box>
  );
};
