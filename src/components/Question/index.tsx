import { ReactNode } from 'react';

import { Container, Footer, UserInfo, LikeButton } from './styles';

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
}

function Question({ content, author, children }: QuestionProps) {
  return (
    <Container>
      <p>{content}</p>

      <Footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />

          <span>{author.name}</span>
        </UserInfo>

        <div>{children}</div>
      </Footer>
    </Container>
  );
}

export { Question, LikeButton };
