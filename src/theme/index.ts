import { extendTheme } from '@chakra-ui/react';

import { breakpoints, colors, fonts } from './foundations';

const overrides = {
  breakpoints,
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: 'brand.bg',
        color: 'brand.text'
      }
    }
  }
};

export default extendTheme(overrides);
