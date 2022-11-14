import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import "../index.css";
import { ReactComponent as IconMenu } from '../../icons/seta-direita.svg'
import { AuthContext } from '../../contexts/Auth/AuthContext';

const Apresentacao = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  return (

    <div className="container">
      <div className="row text-center ">
        <div className="col-md-6 offset-md-3 d-flex justify-content-center">
          <div className='inputs transition mt-5 mx-5'>
            <h1 className='tiitle'>TELA DE APRESENTACAO</h1>
            <p> Olá {auth.user?.name}, tudo bem? </p>
            <button className='btn btn-secondary mt-4' onClick={() => { navigate('/esqueceu-sua-senha') }}>
              <span>Continuar</span>
              <IconMenu width="0.6rem" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apresentacao