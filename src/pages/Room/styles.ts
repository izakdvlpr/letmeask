import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 24px;

  border-bottom: 1px solid #e2e2e2;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }

  > div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }

  @media (max-width: 616px) {
    flex-direction: column;
    
    > button {
      margin-top: 16px;
    }    
  }
`;

export const Main = styled.main`
  max-width: 800px;

  padding: 0 24px;
  margin: 0 auto;
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px;

  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;

    color: #29292e;
  }

  span {
    padding: 8px 16px;
    margin-left: 16px;

    font-weight: 500;
    font-size: 14;

    color: #fff;

    border-radius: 9999px;

    background: #e559f9;
  }
  
  @media (max-width: 616px) {
    flex-direction: column;
    
    text-align: center;
    
    span {
      margin-top: 12px;
    }       
  }
`;

export const Form = styled.form`  
  textarea {
    width: 100%;
    min-height: 130px;

    padding: 16px;

    border: 0;
    border-radius: 8px;

    resize: vertical;

    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

    background: #fefefe;
  }
`;

export const FormFooter = styled.footer`
  margin-top: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    font-size: 14px;
    font-weight: 500;

    color: #737380;

    button {
      border: 0;

      font-size: 14px;
      font-weight: 500;

      color: #835afd;

      text-decoration: underline;

      cursor: pointer;

      background: transparent;
    }
  }

  @media (max-width: 616px) {
    flex-direction: column;

    &:nth-child(2) {
      button {
        margin-top: 16px;
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

    font-weight: 500;
    font-size: 14px;

    color: #29292e;
  }
`;

export const QuestionList = styled.div`
  margin: 32px 0;
`;
