import styled from 'styled-components';

export const Block = styled.div`
  display: inline-block;
  background: ${(props) => props.color.background};
  border-radius: 5px;
  color: ${(props) => props.color.color};
  width: 200px;
  padding: 10px;
`;
