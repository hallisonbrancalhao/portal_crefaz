import React from 'react'
import "../index.css";
import { ReactComponent as IconMenu } from '../../icons/seta-direita.svg'
import useLoginHook from '../../hooks/loginHook';

const Login = () => {
  const {
    errorMessage,
    login,
    password,
    handleLogin,
    setEmail,
    setPassword,
    navigate,
  } = useLoginHook();

  return (
    <div className="container">
      <div className="row text-center ">
        <div className="col-md-6 offset-md-3 d-flex justify-content-center">
          <div className='inputs transition mt-5 mx-5'>
            <h1 className='tiitle'>#EuSouCrefaz</h1>
            <div className="w-100">
              <input
                type="text"
                className='form-control login mt-5'
                value={login}
                onChange={e => setEmail(e.target.value)}
                placeholder="Login CPF"
              />
              <input
                type="password"
                className='form-control password pt-3 mt-4'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Senha"
              />
            </div>
            <p className="errorMessage">{errorMessage}</p>
            <h5 className="links mt-4" onClick={() => { navigate('/esqueceu-sua-senha') }}>Esqueceu a senha?</h5>
            <button className='px-5 py-2 btn btn-secondary mt-4' onClick={handleLogin}>
              <span>Acessar</span>
              <IconMenu width="0.6rem" />
            </button>
            <h4 className="sub_title mt-4">Acreditamos em quem faz <span>com a gente.</span></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login