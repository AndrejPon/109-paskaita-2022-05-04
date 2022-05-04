import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Block.style';

const colors = {
  primary: {
    background: 'blue',
    color: 'white',
  },
  success: {
    background: 'green',
    color: 'white',
  },
  danger: {
    background: 'red',
    color: 'white',
  },
};

const Block = ({ color, children }) => {
  return <S.Block color={colors[color]}>{children}</S.Block>;
};

Block.propTypes = {
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
  children: PropTypes.node.isRequired,
};

Block.defaultProps = {
  color: 'primary',
};

export default Block;
