import styled from '@emotion/styled';
import propTypes from '@styled-system/prop-types';

import { color, flexbox, layout, space } from 'styled-system';

const Box = styled.div`
  ${color}
  ${flexbox}
  ${layout}
  ${space}
`;

Box.displayName = 'Box';

Box.propTypes = {
  ...propTypes.layout,
  ...propTypes.space,
};

export default Box;
