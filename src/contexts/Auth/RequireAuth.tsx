import React, { useContext } from 'react'
import { Login } from '../../pages';
import { AuthContext } from './AuthContext';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  }

  return children;
}
