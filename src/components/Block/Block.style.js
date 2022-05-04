import styled from 'styled-components';

export const Block = styled.div`
  background: ${(props) => props.color.background};
  border-radius: 10px;
  color: ${(props) => props.color.color};
  max-width: 200px;
  padding: 10px;
`;
