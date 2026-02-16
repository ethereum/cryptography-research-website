import { Box, Container, Flex, IconButton, useColorMode, HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import EFlogo from '../../../public/images/ef-logo.svg';

import { HOME_URL } from '../../constants';
import { Nav } from '../Nav';

export const Header: FC = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Container maxW={{ md: 'container.md', lg: 'container.lg', xl2: 'container.xl' }}>
        <Flex justifyContent='space-between' px={{ base: 2, md: 0 }} pt={6}>
          <Box mr={{ base: 8, md: 0 }} onClick={() => router.push(HOME_URL)} cursor='pointer'>
            <Image src={EFlogo} alt='Ethereum Foundation logo' height={55} width={161} priority />
          </Box>

          <HStack spacing={4}>
            <Nav />
            <IconButton
              aria-label='Toggle color mode'
              onClick={toggleColorMode}
              variant='ghost'
              size='sm'
              fontSize='lg'
              icon={<span>{colorMode === 'light' ? '🌙' : '☀️'}</span>}
            />
          </HStack>
        </Flex>
      </Container>
    </header>
  );
};
