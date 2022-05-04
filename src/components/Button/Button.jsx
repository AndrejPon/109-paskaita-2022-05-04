import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

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

const Button = ({ children, color, type }) => {
  return (
    <S.Button type={type} color={colors[color]}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: 'success',
};
export default Button;
