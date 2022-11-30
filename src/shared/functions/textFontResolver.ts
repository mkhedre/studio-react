import { css } from '@emotion/react';

const textFontResolver = (
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  size: number | string,
  color: string,
  fontFamily: 'Greta Arabic' | 'Graphik Arabic'
) => {
  return {
    fontFamily: fontFamily ? 'Greta Arabic' : 'Graphik Arabic',
    fontSize: size,
    fontWeight: weight,
    color,
  };
};

export const styledText = (
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  size: number | string,
  color: string,
  fontFamily: string
) =>
  css`
    font-family: ${fontFamily};
    font-weight: ${weight};
    font-size: ${size};
    color: ${color};
  `;
export default textFontResolver;
