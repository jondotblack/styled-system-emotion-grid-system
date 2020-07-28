import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Grid.styled';

const propTypes = {
  fluid: PropTypes.bool,
};

const defaultProps = {
  fluid: false,
};

const Container = (props) => {
  const { fluid, ...remainingProps } = props;

  return <Styled.Container fluid={fluid} {...remainingProps} />;
};

Container.displayName = 'Container';

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
