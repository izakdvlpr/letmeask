import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;

  border-radius: 8px;

  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  background: #fefefe;

  & + & {
    margin-top: 8px;
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

  button {
    border: 0;

    cursor: pointer;

    background: transparent;
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

  transition: filter 0.2s;

  &.liked {
    color: #835afd;

    svg path {
      stroke: #835afd;
    }
  }

  &:hover {
    filter: brightness(0.7);
  }
`;
