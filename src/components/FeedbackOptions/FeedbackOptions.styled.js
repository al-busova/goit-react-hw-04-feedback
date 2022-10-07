import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 4px 8px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.blue};
  font-size: 20px;
  text-transform: capitalize;
  border: ${props => `2px solid ${props.theme.colors.blue}`};

  border-radius: 5px;
  &:hover {
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    border-color: transparent;
    cursor: pointer;
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 10px;
`;
