import { breakpoints } from './foundations/breakpoints';
import { extendTheme } from '@chakra-ui/react';

import { colors } from './foundations';

const overrides = {
  breakpoints,
  colors
};

export default extendTheme(overrides);
