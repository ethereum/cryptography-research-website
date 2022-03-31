import {
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react';

export const PostTheme = {
  h1: ({ children }: any) => {
    return (
      <Heading as='h1' display='none'>
        {children}
      </Heading>
    );
  },
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
        color='brand.lightblue'
        _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
        href={href}
      >
        {children}
      </Link>
    );
  },
  img: (img: any) => {
    return (
      <Stack my={12} alignItems='center'>
        <Image src={img.src} alt={img.alt} />
      </Stack>
    );
  },
  code: ({ children }: any) => {
    return (
      <Text as='span' p={1} bg='gray.100' borderRadius={3} fontFamily='mono' fontSize='sm'>
        {children}
      </Text>
    );
  }
};
