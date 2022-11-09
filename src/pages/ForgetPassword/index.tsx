import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../index.css";
import { ReactComponent as IconMenu } from '../../icons/seta-direita.svg'
import ResetPassword from '../ResetPassword';

const ForgetPassword = () => {

  const navigate = useNavigate();

  const handleReset = () => {
    return <ResetPassword />
  }

  const [email, setEmail] = useState('');

  return (
    <div className="container">
      <div className="row text-center vh-">
        <div className="col-md-4 offset-md-4 align-self-center">
          <div className='inputs transition mx-3'>

            <h1 className='tiitle'>Esqueceu sua senha?</h1>
            <h5 className='info pt-2'>Digite seu endereço de e-mail abaixo e nós lhe
              enviaremos um link para redefinir sua senha.
            </h5>
            <input
              type="text"
              className='form-control pt-3 mt-3'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Digite seu E-mail"
            />
            <h5 className="links mt-3" onClick={() => { navigate('/') }}>Voltar ao login</h5>
            <button className='btn btn-secondary mt-2' onClick={handleReset}>
              <span>Enviar</span>
              <IconMenu width="0.6rem" />
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ForgetPassword