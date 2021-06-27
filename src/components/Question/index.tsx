import { ReactNode } from 'react';
import cx from 'classnames';

import { Container, Footer, UserInfo, LikeButton } from './styles';

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <Container
      className={cx(
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered },
      )}
    >
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
