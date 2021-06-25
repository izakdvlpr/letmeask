import { useHistory, useParams } from 'react-router-dom';

import { useRoom } from '../../hooks/useRoom';

import { database } from '../../services/firebase';

import logoImage from '../../assets/logo.svg';
import deleteImage from '../../assets/icons/delete.svg';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question, LikeButton } from '../../components/Question';

import {
  Container,
  Header,
  HeaderContent,
  Main,
  RoomTitle,
  QuestionList,
} from './styles';

interface AdminRoomParams {
  id: string;
}

export function AdminRoom() {
  const history = useHistory();

  const params = useParams<AdminRoomParams>();

  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });
    
    history.push('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que deseja excluir está pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImage} alt="logo" />

          <div>
            <RoomCode code={roomId} />

            <Button isOutlined onClick={handleEndRoom}>
              Enserrar sala
            </Button>
          </div>
        </HeaderContent>
      </Header>

      <Main>
        <RoomTitle>
          <h1>Sala {title}</h1>

          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </RoomTitle>

        <QuestionList>
          {questions.length > 0 ? (
            questions.map((question, key) => (
              <Question
                key={key}
                content={question.content}
                author={question.author}
              >
                <LikeButton
                  type="button"
                  aria-label="Remover pergunta"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImage} alt="Remover pergunta" />
                </LikeButton>
              </Question>
            ))
          ) : (
            <></>
          )}
        </QuestionList>
      </Main>
    </Container>
  );
}
