import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      bg: mode('#FFFFFF', '#202023')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: props => ({
      color: mode('#202023', 'rgb(255, 255, 255)')(props),
      textUnderlineOffset: 3,
      textDecorationThickness: 2,
    }),
  },
};

const fonts = {
  heading: '',
};

const colors = {
  brightTeal: '#64ffda',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
