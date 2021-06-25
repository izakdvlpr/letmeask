import copyImage from '../../assets/icons/copy.svg';

import { Container } from './styles';

interface RoomCodeProps {
  code: string;
}

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImage} alt="Copiar código da sala" />
      </div>

      <span>Sala #{code}</span>
    </Container>
  );
}
