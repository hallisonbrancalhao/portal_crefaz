import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h2>#EuSouCrefaz</h2>
      <input type="text" value={email} placeholder="Login CPF" />
      <input type="text" value={email} placeholder="Senha" />
    </div>
  )
}

export default Login