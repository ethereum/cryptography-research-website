import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

import { breakpoints, colors, semanticColors, fonts } from './foundations';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const overrides = {
  config,
  breakpoints,
  colors,
  fonts,
  semanticTokens: {
    colors: {
      'bg': { default: semanticColors.bg.light, _dark: semanticColors.bg.dark },
      'bgAlt': { default: semanticColors.bgAlt.light, _dark: semanticColors.bgAlt.dark },
      'text': { default: semanticColors.text.light, _dark: semanticColors.text.dark },
      'textMuted': { default: semanticColors.textMuted.light, _dark: semanticColors.textMuted.dark },
      'border': { default: semanticColors.border.light, _dark: semanticColors.border.dark },
    }
  },
  styles: {
    global: {
      body: {
        bg: 'bg',
        color: 'text'
      }
    }
  }
};

export default extendTheme(overrides);
