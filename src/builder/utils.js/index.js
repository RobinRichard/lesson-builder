export const formatStyles = (styles) => {
  return Object.assign({}, ...styles.map((s) => s.getStyle()));
};
