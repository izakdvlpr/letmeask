import styled from 'styled-components';

export const Container = styled.button`
  height: 50px;

  padding: 0 32px;
  margin-top: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;

  color: #ffffff;

  border: 0;
  border-radius: 8px;

  cursor: pointer;

  transition: filter 0.2s;

  background: #835afd;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
  
  &:disabled {
    opacity: 0.6;
    
    cursor: not-allowed;
  }
`;
