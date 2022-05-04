import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.color.background};
  border-radius: 20px;
  color: ${(props) => props.color.color};
  padding: 10px;
`;
