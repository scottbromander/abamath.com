import Typography from 'typography';

const typography = new Typography({
  headerFontFamily: ['Jura', 'sans-serif'],
  bodyFontFamily: ['Arial', 'serif'],
});
const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
