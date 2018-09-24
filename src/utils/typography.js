import Typography from 'typography';
// import gray from 'gray-percentage';
// import type { OptionsType } from 'Types';
// import verticalRhythm from 'compass-vertical-rhythm';
// import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

const typography = new Typography({
  title: 'Abamath',
  googleFonts: [
    {
      name: 'Jura',
      styles: [],
    },
    {
      name: 'Domine',
      styles: [],
    },
  ],
  headerFontFamily: ['Jura', 'sans-serif'],
  bodyFontFamily: ['Arial', 'serif'],
  overrideStyles: () => ({
    '.nav-company-name': {
      color: 'black',
      fontSize: '30px',
      lineHeight: '2.2',
      fontFamily: 'Domine',
    },
    button: {
      fontFamily: 'Jura',
    },
    'h2, h3': {
      padding: '1%',
      margin: '1.5%',
      textAlign: 'center',
    },
    h2: {
      fontSize: '190%',
    },
    h3: {
      fontSize: '120%',
    },
    p: {
      color: 'black',
      padding: '2%',
    },
  }),
});
const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
