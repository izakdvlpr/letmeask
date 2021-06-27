import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;

  border-radius: 8px;

  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  background: #fefefe;

  & + & {
    margin-top: 8px;
  }
  
  &.highlighted {
    border: 1px solid #835AFD;
    
    background: #F4F0FF;
    
    footer div span {
      color: #29292E;
    }
  }
  
  &.answered {
    background: #DBDCDD;
  }

  p {
    color: #29292e;
  }
`;

export const Footer = styled.footer`
  margin-top: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;    
    gap: 16px;
    
    button {
      border: 0;

      cursor: pointer;

      transition: filter 0.2s;

      background: transparent;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;

    border-radius: 50%;
  }

  span {
    margin-left: 8px;

    font-size: 14px;

    color: #737380;
  }
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: flex-end;

  gap: 8px;

  color: #737380;

  &.liked {
    color: #835afd;

    svg path {
      stroke: #835afd;
    }
  }
`;
