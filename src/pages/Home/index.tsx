import { useHistory } from 'react-router-dom';

import illustrationImage from '../../assets/images/illustration.svg';
import googleIconImage from '../../assets/icons/google.svg';
import logoImage from '../../assets/logo.svg';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';

import {
  Container,
  Aside,
  Main,
  MainContent,
  Form,
  CreateRoomButton,
  Separator,
} from './styles';

export function Home() {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  return (
    <Container>
      <Aside>
        <img src={illustrationImage} alt="illustration" />

        <strong>Crie salas Q&amp;A ao-vivo</strong>

        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </Aside>

      <Main>
        <MainContent>
          <img src={logoImage} alt="logo" />

          <CreateRoomButton onClick={handleCreateRoom}>
            <img src={googleIconImage} alt="google-icon" />
            Crie sua sala com o Google
          </CreateRoomButton>

          <Separator>ou entre em uma sala</Separator>

          <Form>
            <input type="text" placeholder="Digite o código da sala" />

            <Button type="submit">Entrar na sala</Button>
          </Form>
        </MainContent>
      </Main>
    </Container>
  );
}
