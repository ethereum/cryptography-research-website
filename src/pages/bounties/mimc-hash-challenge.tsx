import {
  Heading,
  Link,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageMetadata } from '../../components/UI';

const MiMCHashChallenge: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='MiMC Hash Challenge Bounty'
        description='Rewards for finding collisions in MiMCSponge, a sponge construction instantiated with MiMC-Feistel over a prime field, targeting 128-bit and 80-bit security.'
      />

      <main>
        <Heading as='h1' mb={10}>
          MiMC Hash Challenge
        </Heading>

        <Stack mb={10}>
          <Text>
            The{' '}
            <Link
              href='https://ethereum.org/en/'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
            >
              Ethereum Foundation
            </Link>{' '}
            and{' '}
            <Link
              href='https://protocol.ai/'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
            >
              Protocol Labs
            </Link>{' '}
            are offering rewards for finding collisions in MiMCSponge, a{' '}
            <Link
              href='https://en.wikipedia.org/wiki/Sponge_function'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
            >
              sponge construction
            </Link>{' '}
            instantiated with MiMC-Feistel over a prime field, targeting 128-bit and 80-bit
            security, on one of two fields described below.
          </Text>
        </Stack>

        <Stack>
          <Stack>
            <Heading as='h3' fontSize='2xl' fontWeight={600} mt={10} mb={4}>
              Introduction
            </Heading>

            <Stack spacing={4}>
              <Text>
                In 2017 Ethereum added support for BN254, a pairing-friendly elliptic-curve, via the{' '}
                <Link
                  href='https://github.com/ethereum/EIPs/blob/master/EIPS/eip-609.md'
                  color='brand.lightblue'
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Byzantium hard-fork
                </Link>
                , making it possible to verify SNARKs in a smart contract. Many applications use
                hashes both inside SNARKs and in smart contracts, calling for a hash function that
                is efficient in both cases.
              </Text>

              <Text>
                Protocol Labs are using BLS12-381, a pairing-friendly elliptic-curve introduced by
                the ECC team.
              </Text>

              <Text>
                MiMC has been initially introduced in a{' '}
                <Link
                  href='https://eprint.iacr.org/2016/492.pdf'
                  color='brand.lightblue'
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  paper from 2016
                </Link>
                , as a cryptographic primitive with low multiplicative complexity, making it
                attractive for SNARKs, such as{' '}
                <Link
                  href='https://eprint.iacr.org/2016/260.pdf'
                  color='brand.lightblue'
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Groth16
                </Link>
                . One particular use of interest is a hash function based on a sponge construction
                instantiated with MiMC-Feistel permutation over a prime field.
              </Text>

              <Text>
                While more low multiplicative complexity hash function have been published, MiMC is
                the earliest of the bunch and is already used in some applications on Ethereum.
              </Text>
            </Stack>
          </Stack>

          <Stack>
            <Heading as='h3' fontSize='2xl' fontWeight={600} mt={10} mb={4}>
              Challenge Details
            </Heading>

            <Stack spacing={4}>
              <Text>Rewards will be given for the following results:</Text>

              <Stack>
                <TableContainer border='1px solid #EDF2F7' borderRadius='md'>
                  <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th>Result</Th>
                        <Th>Reward</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          Collisions on the proposed 220 rounds, on either of the fields, targeting
                          128-bit security{' '}
                        </Td>
                        <Td>$20,000</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          Collisions on the proposed 220 rounds, on either of the fields, targeting
                          128-bit security
                        </Td>
                        <Td>$20,000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Stack>

              <Stack>
                <Heading as='h4' fontSize='lg' fontWeight={600} mt={10} mb={4}>
                  BN254
                </Heading>

                <TableContainer border='1px solid #EDF2F7' borderRadius='md'>
                  <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th>Parameter</Th>
                        <Th>Value</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>Field prime</Td>
                        <Td>
                          21888242871839275222246405745257275088548364400416034343698204186575808495617
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Rounds</Td>
                        <Td>220</Td>
                      </Tr>
                      <Tr>
                        <Td>Exponent</Td>
                        <Td>5</Td>
                      </Tr>
                      <Tr>
                        <Td>r</Td>
                        <Td>1</Td>
                      </Tr>
                      <Tr>
                        <Td>c</Td>
                        <Td>1</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Stack>

              <Stack>
                <Heading as='h4' fontSize='lg' fontWeight={600} mt={10} mb={4}>
                  BLS12-381
                </Heading>

                <TableContainer border='1px solid #EDF2F7' borderRadius='md'>
                  <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th>Parameter</Th>
                        <Th>Value</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>Field prime</Td>
                        <Td>
                          52435875175126190479447740508185965837690552500527637822603658699938581184513
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Rounds</Td>
                        <Td>220</Td>
                      </Tr>
                      <Tr>
                        <Td>Exponent</Td>
                        <Td>5</Td>
                      </Tr>
                      <Tr>
                        <Td>r</Td>
                        <Td>1</Td>
                      </Tr>
                      <Tr>
                        <Td>c</Td>
                        <Td>1</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Stack>
            </Stack>
          </Stack>

          <Stack>
            <Heading as='h3' fontSize='2xl' fontWeight={600} mt={10} mb={4}>
              Reference code
            </Heading>

            <Stack>
              <Text>
                Reference code for MiMCSponge on BN254 exists in the{' '}
                <Link
                  href='https://github.com/iden3/circomlibjs/blob/5164544558570f934d72d40c70779fc745350a0e/src/mimcsponge.js'
                  color='brand.lightblue'
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  circomlib
                </Link>{' '}
                code base, where the constants for the hash are generated using{' '}
                <Link
                  href='https://github.com/iden3/circomlibjs/blob/5164544558570f934d72d40c70779fc745350a0e/src/mimcsponge_printconstants.js'
                  color='brand.lightblue'
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  this code
                </Link>
                . Participants are also encouraged to examine the{' '}
                <Link
                  href='https://github.com/iden3/circomlib/blob/master/circuits/mimcsponge.circom'
                  color='brand.lightblue'
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  MiMCSponge circuit code
                </Link>
                , the{' '}
                <Link
                  href='https://github.com/iden3/circomlibjs/blob/5164544558570f934d72d40c70779fc745350a0e/src/mimcsponge_gencontract.js'
                  color='brand.lightblue'
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  MiMC-Feistel EVM bytecode
                </Link>{' '}
                and the MiMCSponge Solidity code. Rewards for significant bugs in these may also be
                offered.
              </Text>
            </Stack>
          </Stack>

          <Stack>
            <Heading as='h3' fontSize='2xl' fontWeight={600} mt={10} mb={4}>
              Submissions
            </Heading>

            <Stack>
              <Text>
                Submissions should be sent to{' '}
                <Link
                  href='mailto:mimc-challenge@ethereum.org'
                  color='brand.lightblue'
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  mimc-challenge@ethereum.org
                </Link>
                , and rewards will be given in USD, ETH or DAI. Submissions can not be anonymous.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </main>
    </>
  );
};

export default MiMCHashChallenge;
