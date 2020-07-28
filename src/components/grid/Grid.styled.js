import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { flexbox, layout } from 'styled-system';

import { Box, Flex } from 'components/box';

export const Container = styled(Box)`
  width: 100%;
  max-width: ${({ theme }) => theme.grid.maxWidth};
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${({ fluid }) =>
    fluid &&
    css`
      max-width: 100%;
    `}
`;

export const Row = styled(Flex)`
  flex: 1 0 100%;
  flex-wrap: wrap;

  ${({ theme }) =>
    css`
      margin-right: calc(${theme.grid.gutter} / -2);
      margin-left: calc(${theme.grid.gutter} / -2);
    `}
`;

export const Col = styled(Box)`
  position: relative;
  flex: 1 0 0%;
  width: 100%;
  max-width: 100%;

  ${({ theme }) =>
    css`
      padding-right: calc(${theme.grid.gutter} / 2);
      padding-left: calc(${theme.grid.gutter} / 2);
    `}

  ${flexbox}
  ${layout}
`;
