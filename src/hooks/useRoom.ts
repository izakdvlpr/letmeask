import { useEffect, useState } from 'react';

import { useAuth } from './useAuth';

import { database } from '../services/firebase';

type FirebaseQuestions = Record<
  string,
  {
    content: string;
    author: {
      name: string;
      avatar: string;
    };
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

export interface Question {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
}

export function useRoom(roomId: string) {
  const { user } = useAuth();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
            likeCount: Object.entries(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              ([key, value]) => value.authorId === user?.id,
            )?.[0],
          };
        },
      );

      setQuestions(parsedQuestions);
      setTitle(databaseRoom.title);
    });

    return () => {
      roomRef.off('value');
    };
  }, [roomId, user?.id]);

  return { title, questions };
}
