import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, color, type }) => {
  return (
    <S.Button type={type} color={color}>
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
  type: 'primary',
};
export default Button;
