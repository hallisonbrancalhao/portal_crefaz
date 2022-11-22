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
        <div className="col-md-6 mb-5 offset-md-3 d-flex justify-content-center">
          <div className='inputs transition mt-5 mx-5'>
            <video className='video' width="750px" controls >
              <source src={require("../../assets/crefaz.mp4")} type="video/mp4" />
            </video>
            <button className='px-5 py-2 btn btn-secondary my-5' onClick={() => { navigate('/perfil') }}>
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