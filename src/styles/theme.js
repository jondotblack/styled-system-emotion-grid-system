import { css } from '@emotion/core';

export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    seed: '#eee',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

/* 
  using Styled System variants requires an array of 
  breakpoints, aliases added for ease of use
*/
const breakpoints = ['576px', '768px', '992px', '1200px', '1400px'];
theme.breakpoints = breakpoints;
theme.breakpoints.xs = '0';
[
  theme.breakpoints.sm,
  theme.breakpoints.md,
  theme.breakpoints.lg,
  theme.breakpoints.xl,
  theme.breakpoints.xxl,
] = breakpoints;

theme.grid = {
  columns: 12,
  gutter: '24px',
  maxWidth: theme.breakpoints.xxl,
};

/* 
  generate media query helpers
  example usage: ${theme.mediaQueries.lg`
    display: none;
  `};
*/
theme.mediaQueries = Object.keys(theme.breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${theme.breakpoints[label]}) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
