import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Hero.style';

const colors = {
  success: {
    background: 'green',
    color: 'white',
  },
  danger: {
    background: 'red',
    color: 'white',
  },
};

const Hero = ({ color, title, subtitle }) => {
  return (
    <S.Hero color={colors[color]}>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Hero>
  );
};

Hero.propTypes = {
  color: PropTypes.oneOf(['success', 'danger']),
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
};

Hero.defaultProps = {
  color: 'success',
};

export default Hero;
