import Typography from 'typography';

const typography = new Typography({
  headerFontFamily: ['Jura', 'sans-serif'],
  bodyFontFamily: ['Arial', 'serif'],
  overrideStyles: () => ({
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
