import { Box, Heading, Text, SimpleGrid, VStack, HStack, Icon } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';

import { PageMetadata } from '../components/UI';

interface ProjectCardProps {
  title: string;
  description: string;
  color: string;
  icon: string;
}

const ProjectCard = ({ title, description, color, icon }: ProjectCardProps) => (
  <Box
    bg="brand.bgAlt"
    p={6}
    borderRadius="lg"
    borderLeft="4px solid"
    borderLeftColor={color}
    boxShadow="sm"
    transition="all 0.2s"
    _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
  >
    <HStack spacing={3} mb={2}>
      <Text fontSize="xl">{icon}</Text>
      <Heading as="h3" size="sm" fontWeight={600}>
        {title}
      </Heading>
    </HStack>
    <Text fontSize="sm" color="brand.textMuted">
      {description}
    </Text>
  </Box>
);

const projects = [
  {
    title: 'Post-Quantum Ethereum',
    description: 'PQ advanced signatures, PQ Data Availability Sampling, PQ everything: hashes, lattices, isogenies.',
    color: 'brand.pq',
    icon: '🛡️'
  },
  {
    title: 'L1 zkEVM Security',
    description: 'Proof system security, soundness analysis, and proof size optimizations for L1 zkEVMs.',
    color: 'brand.zkEVM',
    icon: '🔐'
  },
  {
    title: 'Poseidon',
    description: 'Algebraic hash function design and analysis.',
    color: 'brand.poseidon',
    icon: '🌊'
  },
  {
    title: 'L1 Privacy Features',
    description: 'Cryptographic protocol design: Proof Of Validator, Single-Secret Leader Election, Encrypted Mempools.',
    color: 'brand.networking',
    icon: '🕵️'
  },
  {
    title: 'Cryptography Engineering',
    description: 'Writing and maintaining software related to DAS, Lean and zkEVMs.',
    color: 'brand.das',
    icon: '⚙️'
  },
  {
    title: 'Ethereum Cryptography Foundations',
    description: 'Security analysis of core primitives: VDFs, BLS signatures, polynomial commitments, SNARK recursion.',
    color: 'brand.blue',
    icon: '🔍'
  }
];

const Home: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Home'
        description='Cryptography research group at the Ethereum Foundation.'
      />

      <main>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as='h1' mb={4} fontSize={{ base: '2xl', md: '3xl' }}>
              Cryptography Research at the Ethereum Foundation
            </Heading>
            <Text fontSize="lg" color="brand.textMuted" maxW="600px">
              Cryptographic foundations for Ethereum's future.
            </Text>
            <Text fontSize="md" color="brand.textMuted" mt={2}>
              Open source research, no patents.
            </Text>
          </Box>

          <Box>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </main>
    </>
  );
};

export default Home;
