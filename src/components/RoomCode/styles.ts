import styled from 'styled-components';

export const Container = styled.button`
  overflow: hidden;

  height: 40px;

  display: flex;

  border: 1px solid #835afd;
  border-radius: 8px;

  cursor: pointer;

  background: #fff;

  div {
    height: 100%;

    padding: 0 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #835afd;
  }

  span {
    width: 140px;

    padding: 0 16px 0 12px;

    display: block;
    align-self: center;

    flex: 1;

    font-size: 14px;
    font-weight: 500;
  }
`;
