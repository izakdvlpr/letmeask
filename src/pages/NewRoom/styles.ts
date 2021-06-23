import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
`;

export const Aside = styled.aside`
  height: 100vh;

  padding: 120px 80px;

  flex: 7;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #ffffff;

  background: #835afd;

  img {
    max-width: 320px;
  }

  strong {
    margin-top: 16px;

    font: 700 36px 'Poppins', sans-serif;

    line-height: 42px;
  }

  p {
    margin-top: 16px;

    font-size: 24px;

    color: #f8f8f8;

    line-height: 32px;
  }
`;

export const Main = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 320px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  text-align: center;
  
  h2 {
    margin: 64px 0 24px;
    
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
  }

  > img {
    align-self: center;
  }

  p {
    margin-top: 16px;
    
    font-size: 14px;
    
    color: #737380;
    
    a {
      color: #e559f9;
    }
  }
`;

export const Form = styled.form`
  input {
    height: 50px;

    padding: 0 16px;

    border: 1px solid #a8a8b3;
    border-radius: 8px;

    background: #ffffff;
  }

  button {
    margin-top: 16px;
  }

  input,
  button {
    width: 100%;
  }
`;

export const CreateRoom = styled.button`
  height: 50px;

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

  background: #ea4334;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

const separatorCSS = css`
  height: 1px;

  content: '';

  flex: 1;

  background: #a8a8b3;
`;

export const Separator = styled.div`
  margin: 32px 0;

  display: flex;
  align-items: center;

  font-size: 14px;

  color: #a8a8b3;

  &::before {
    margin-right: 16px;

    ${separatorCSS}
  }

  &::after {
    margin-left: 16px;

    ${separatorCSS}
  }
`;
