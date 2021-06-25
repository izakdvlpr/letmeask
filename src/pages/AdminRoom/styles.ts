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

    > div {
      margin-top: 16px;

      flex-direction: column;
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

export const QuestionList = styled.div`
  margin-top: 32px;
`;
