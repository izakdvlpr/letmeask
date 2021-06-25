import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { database } from '../../services/firebase';

import { useAuth } from '../../hooks/useAuth';

import illustrationImage from '../../assets/images/illustration.svg';
import googleIconImage from '../../assets/icons/google.svg';
import logoImage from '../../assets/logo.svg';

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

  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exist.');

      return;
    }
    
    if (roomRef.val().endedAt) {
      alert('Room already closed.');
      
      return;
    }

    history.push(`/rooms/${roomCode}`);
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

          <Form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit">Entrar na sala</Button>
          </Form>
        </MainContent>
      </Main>
    </Container>
  );
}
