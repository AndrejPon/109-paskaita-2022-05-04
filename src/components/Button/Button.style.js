import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.color.background};
  border-radius: 10px;
  color: ${(props) => props.color.color};
  padding: 10px;
  cursor: pointer;
`;
