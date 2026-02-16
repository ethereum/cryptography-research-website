import { Box, Heading, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageMetadata } from '../components/UI';

interface TeamMemberProps {
  name: string;
  url: string;
  focus: string;
}

const TeamMember = ({ name, url, focus }: TeamMemberProps) => (
  <Box
    bg="brand.bgAlt"
    p={5}
    borderRadius="lg"
    boxShadow="sm"
    transition="all 0.2s"
    _hover={{ boxShadow: 'md' }}
  >
    <Link
      href={url}
      color='brand.lightblue'
      _hover={{ color: 'brand.orange' }}
      isExternal
    >
      <Heading as="h3" size="sm" mb={2} fontWeight={600}>
        {name}
      </Heading>
    </Link>
    <Text fontSize="sm" color="brand.textMuted">
      {focus}
    </Text>
  </Box>
);

const teamMembers: TeamMemberProps[] = [
  {
    name: 'Gottfried Herold',
    url: 'https://dblp.org/pid/47/11389.html',
    focus: 'Public key cryptanalysis.'
  },
  {
    name: 'George Kadianakis',
    url: 'https://x.com/asn_d6',
    focus: 'SNARKs; Polynomial commitments; protocol design and implementation.'
  },
  {
    name: 'Dmitry Khovratovich',
    url: 'https://www.khovratovich.info/',
    focus: 'Symmetric crypto design; cryptanalysis of schemes and protocols; zero-knowledge proofs and circuits; verifiable delay functions; and privacy and anonymity.'
  },
  {
    name: 'Antonio Sanso',
    url: 'https://www.intothesymmetry.com/',
    focus: 'Isogenies; elliptic curves; public key cryptography; cryptanalysis.'
  },
  {
    name: 'Benedikt Wagner',
    url: 'https://benedikt-wagner.dev/',
    focus: 'Distributed hash tables; data availability sampling; variants of digital signatures.'
  },
  {
    name: 'Arantxa Zapico',
    url: 'https://sites.google.com/view/arantxazapico',
    focus: 'Zero-knowledge proofs; lookup arguments, vector commitments.'
  }
];

const Team: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Team'
        description='About the team behind cryptography research at the Ethereum Foundation.'
      />

      <main>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as='h1' mb={4}>
              Team
            </Heading>
            <Text color="brand.textMuted">
              Cryptography researchers focused on Ethereum's roadmap.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </SimpleGrid>
        </VStack>
      </main>
    </>
  );
};

export default Team;
