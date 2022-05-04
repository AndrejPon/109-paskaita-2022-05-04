import styled from 'styled-components';

export const Hero = styled.div`
  background: ${(props) => props.color.background};
  color: ${(props) => props.color.color};
  display: inline-block;
  width: 900px;
  padding: 15px;
`;

export const Title = styled.h1`
  margin-bottom: 0;
`;
export const SubTitle = styled.h3`
  margin-top: 0;
`;
