import { Link } from 'react-router-dom';

import illustrationImage from '../../assets/images/illustration.svg';
import logoImage from '../../assets/logo.svg';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';

import { Container, Aside, Main, MainContent, Form, Separator } from './styles';

export function NewRoom() {
  const { user } = useAuth();

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

          <h1>{user?.name}</h1>

          <h2>Criar uma nova sala</h2>

          <Separator>ou entre em uma sala</Separator>

          <Form>
            <input type="text" placeholder="Nome da sala" />

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
