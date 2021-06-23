import { createContext, useEffect, ReactNode, useState } from 'react';

import { firebase, auth } from '../services/firebase';

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextData {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        const { displayName, photoURL, uid } = authUser;

        if (!displayName || !photoURL) {
          throw new Error('Missing Information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing Information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}
