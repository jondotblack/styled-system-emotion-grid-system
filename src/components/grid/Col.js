import React from 'react';
import PropTypes from 'prop-types';

import { theme } from 'styles/theme';
import isObject from 'lodash/isObject';
import isInteger from 'lodash/isInteger';

import * as Styled from './Grid.styled';

const propTypes = {
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.objectOf(PropTypes.number)]),
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.objectOf(PropTypes.number)]),
  span: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  ]),
};

const defaultProps = {
  offset: null,
  order: null,
  span: null,
};

const toPercent = (number) => {
  return `${number * 100}%`;
};

const generateSpan = (columns) => {
  if (!columns) return false;

  const styles = {
    flex: '0 0 auto',
  };

  if (isObject(columns)) {
    styles.width = Object.keys(columns).reduce(
      (acc, key) => ({
        ...acc,
        [key]: isInteger(columns[key])
          ? toPercent(columns[key] / theme.grid.columns)
          : columns[key],
      }),
      {},
    );
  } else {
    styles.width = isInteger(columns) ? toPercent(columns / theme.grid.columns) : columns;
  }

  return styles;
};

const generateOffset = (columns) => {
  if (!columns) return false;

  const styles = {};

  if (isObject(columns)) {
    styles.ml = Object.keys(columns).reduce(
      (acc, key) => ({
        ...acc,
        [key]: toPercent(columns[key] / theme.grid.columns),
      }),
      {},
    );
  } else {
    styles.ml = toPercent(columns / theme.grid.columns);
  }

  return styles;
};

const Col = (props) => {
  const { offset, order, span, ...remainingProps } = props;

  return (
    <Styled.Col
      order={order}
      {...generateSpan(span)}
      {...generateOffset(offset)}
      {...remainingProps}
    />
  );
};

Col.displayName = 'Col';

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
