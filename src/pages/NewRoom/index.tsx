import { FormEvent, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { database } from '../../services/firebase';

import { useAuth } from '../../hooks/useAuth';

import illustrationImage from '../../assets/images/illustration.svg';
import logoImage from '../../assets/logo.svg';

import { Button } from '../../components/Button';

import { randomHex } from '../../utils/randomHex';

import { Container, Aside, Main, MainContent, Form, Separator } from './styles';

export function NewRoom() {
  const history = useHistory();

  const { user } = useAuth();

  const [newRoom, setNewRom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const id = randomHex();

    await database.ref(`rooms/${id}`).set({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${id}`);
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

          <h2>Criar uma nova sala</h2>

          <Separator>ou entre em uma sala</Separator>

          <Form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRom(event.target.value)}
              value={newRoom}
            />

            <Button type="submit">Criar sala</Button>
          </Form>

          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </MainContent>
      </Main>
    </Container>
  );
}
