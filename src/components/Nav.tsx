import {
  Box,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  IconButton,
  Link,
  Menu,
  MenuButton,
  Stack,
  Text,
  useDisclosure,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

import { CloseIcon, HamburgerIcon } from './UI/icons';

import { isLastItem } from '../utils';

import { NAV_LINKS } from '../constants';

export const Nav: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack mb={{ base: 2, md: 10 }} alignItems='flex-end' display={{ base: 'none', md: 'block' }}>
        <Wrap listStyleType='none' ml={0}>
          {NAV_LINKS.map(({ href, text }, idx) => (
            <WrapItem display='inline' key={href}>
              <NextLink href={href} passHref>
                <Link
                  href={href}
                  _hover={{ textDecoration: 'none', color: 'gray.800' }}
                  color='gray.500'
                  mr={isLastItem(idx, NAV_LINKS.length) ? 0 : 3}
                >
                  {text}
                </Link>
              </NextLink>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>

      <Box display={{ base: 'block', md: 'none' }}>
        <Box mt={2}>
          <Menu id='menu-button'>
            {!isOpen && (
              <MenuButton
                as={IconButton}
                aria-label='Menu'
                variant='transparent'
                icon={<HamburgerIcon h='25px' w='32px' />}
                onClick={onOpen}
              />
            )}

            {isOpen && (
              <MenuButton
                as={IconButton}
                aria-label='Close menu'
                variant='transparent'
                icon={<CloseIcon h='28px' w='28px' />}
                onClick={onClose}
                zIndex={9999}
              />
            )}
          </Menu>
        </Box>

        <Drawer onClose={onClose} isOpen={isOpen} size='full'>
          <DrawerContent>
            <DrawerBody bgGradient='linear(to-br, brand.footer.bgGradient.start 10%, brand.footer.bgGradient.end 100%)'>
              <Stack h='100%' justifyContent='center' alignItems='center'>
                <Stack spacing={6}>
                  {NAV_LINKS.map(({ href, text }, idx) => (
                    <Box key={href} py={1}>
                      <Link key={href} href={href}>
                        <Text textAlign='center' fontSize='lg'>
                          {text}
                        </Text>
                      </Link>

                      <Center display={isLastItem(idx, NAV_LINKS.length) ? 'none' : 'block'}>
                        <Divider borderColor='gray.100' opacity={1} w={80} mt={6} mb={-2} />
                      </Center>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};
