import { AuthProvider } from './contexts/AuthContext';

import { Routes } from './routes';

import { GlobalStyle } from './styles/GlobalStyle';

export function App() {
  return (
    <AuthProvider>
      <GlobalStyle />

      <Routes />
    </AuthProvider>
  );
}
