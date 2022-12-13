import React, { useContext, useEffect } from 'react'
import { Login } from '../../pages';
import { AuthContext } from './AuthContext';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {

  const auth = useContext(AuthContext);

  useEffect(() => {
    const dataUser = localStorage.getItem('user');
    if (!!dataUser) {
      auth.user = JSON.parse(`${dataUser}`);
    }
  }, [auth]);


  if (!localStorage.getItem('user')) {
    window.location.href = '/';
    return <Login />;
  }

  const now = new Date();
  const expires = new Date(`${localStorage.getItem('expires')}`);

  if (`${now.getTime()}` > `${expires.getTime()}`) {
    localStorage.clear();
    window.location.href = '/';
    return <Login />;
  }
  return children;
}
