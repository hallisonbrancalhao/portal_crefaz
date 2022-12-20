import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../index.css";

import { ReactComponent as IconMenu } from '../../icons/seta-direita.svg'

const Apresentacao = () => {
  const navigate = useNavigate();
  const [handleDisable, setHandleDisable] = useState(true);

  const handleNext = () => {
    navigate('/perfil')
  }

  return (
    <div className="container">
      <div className="row text-center ">
        <div className="col-md-8 mb-5 offset-md-2 d-flex justify-content-center">
          <div className='inputs transition mt-5 mx-5'>
            <video className='video ratio ratio-16-9' width="750px" controls controlsList='nodownload' onEnded={() => setHandleDisable(false)}>
              <source src={require("../../assets/crefaz.mp4")} type="video/mp4" />
            </video>
            <button
              disabled={handleDisable}
              className='px-5 py-2 btn btn-secondary my-5'
              onClick={handleNext}>
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