// site URLs
export const HOME_URL = '/';
export const POSTS_RESEARCH_URL = '/posts-research';
export const TEAM_URL = '/team';
export const EVENTS_URL = '/events';
export const BOUNTIES_URL = '/bounties';

// nav
export const NAV_LINKS = [
  { href: HOME_URL, text: 'home' },
  { href: POSTS_RESEARCH_URL, text: 'posts & research' },
  { href: BOUNTIES_URL, text: 'bounties' },
  { href: TEAM_URL, text: 'team' },
  { href: EVENTS_URL, text: 'events' }
];

// metadata
export const HEAD_TITLE_LONG = 'Ethereum Foundation Cryptography Research';
export const HEAD_TITLE_SHORT = 'EF Cryptography Research';

// posts
export const POSTS_DIR = 'src/posts';

// bounties data sources
export const BOUNTIES_DATA_SOURCE = 'src/bounties-data-source';
export const ZK_HASH_DATA_SOURCE = `${BOUNTIES_DATA_SOURCE}/zk-hash.md`;
export const MIMC_HASH_DATA_SOURCE = `${BOUNTIES_DATA_SOURCE}/mimc-hash-challenge.md`;

// bounties URLs
export const MIMC_HASH_BOUNTIES_URL = '/bounties/mimc-hash-challenge';
export const LEGENDRE_PRF_BOUNTIES_URL = '/bounties/legendre-prf/algorithmic-bounties';
export const LEGENDRE_PRF_CONCRETE_INSTANCES_BOUNTIES_URL =
  '/bounties/legendre-prf/concrete-instance-bounties';
export const ZK_HASH_BOUNTIES_URL = '/bounties/zk-hash';
export const RSA_ASSUMPTIONS_URL = '/bounties/rsa/assumptions';
