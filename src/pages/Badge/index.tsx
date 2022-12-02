import React from 'react'
import logo from '../../assets/logo.png';
import "../index.css";
import "./badge.css";
import { ReactComponent as NextIcon } from '../../icons/seta-direita.svg'
import { ReactComponent as UploadIcon } from '../../icons/upload.svg'
import { ReactComponent as ImagemIcon } from '../../icons/user-regular.svg'
import useBadgeHook from '../../hooks/badgeHook';

const Badge = () => {
  const {
    convertImage,
    image,
    formState,
    setFormState,
    handleSend
  } = useBadgeHook();

  return (
    <div className="container">
      <div className="row align-items-end text-center mb-5 ">
        <div className="col-md-3 offset-md-1 text-start align-items-between px-5 ">
          <h2 className='cracha-subtitle'>O Lorem Ipsum é
            um texto modelo da
            indústria tipográfica
            e de impressão</h2>
          <div className="cracha-card px-4 py-3 mt-5">
            <div className="pt-3 px-4">
              <div className="cracha-card_imagem__div">
                {image
                  ? (<img src={image} className='img-fluid img_profile_badge' alt='Imagem Default' />)
                  : (<ImagemIcon width="5rem" className='px-3 py-5' />)
                }
              </div>
            </div>
            <p className='fs-3 px-4 cracha-card_nome'>
              {formState.fullName
                ? formState.fullName
                : "Nome Sobrenome"
              }
            </p>

            <hr className="solid"></hr>
            <img className="img-fluid cracha-card_logo w-50 px-2 pb-2" src={logo} alt="Logo Crefaz" />
          </div>
        </div>
        <div className="col-md-5 offset-md-1">
          <div className='inputs transition mt-5'>
            <video className='cracha-video' width="100%" controls >
              <source src={require("../../assets/cracha.mp4")} type="video/mp4" />
            </video>
            <h3 className='cracha-subtitle_form mt-5'>Personalize seu crachá</h3>
            <div className="text-start">

              <form
                className='text-start'
                id='bedgeEmployee'
                method='POST'
                encType='multipart/form-data'
                onSubmit={handleSend}
              >

                <label htmlFor='fullName' className='px-3 pt-4 pb-0'><p className="label-input">Nome<span>*</span></p></label>
                <input
                  required
                  type="text"
                  className='form-control input-data'
                  value={formState.fullName || undefined}
                  onChange={(event) =>
                    setFormState({
                      ...formState,
                      fullName: event.currentTarget.value
                    })
                  }
                  placeholder="Exemplo: João da Silva"
                  name='fullName'
                />

                <label htmlFor='email' className='px-3 pt-2'><p className="label-input">E-mail<span>*</span></p></label>
                <input
                  required
                  type="email"
                  className='form-control input-data'
                  value={formState.email || undefined}
                  onChange={(event) =>
                    setFormState({
                      ...formState,
                      email: event.currentTarget.value
                    })
                  }
                  placeholder="Ex: seuemail@dominio.com"
                  name='email'
                />

                <label htmlFor='phone' className='px-3 pt-2'><p className="label-input">Telefone<span>*</span></p></label>
                <input
                  required
                  type="text"
                  className='form-control input-data'
                  value={formState.phone || undefined}
                  onChange={(event) =>
                    setFormState({
                      ...formState,
                      phone: event.currentTarget.value
                    })
                  }
                  placeholder="(___) ___-____"
                  name='phone'
                />
                <div className="row">
                  <div className="col-12 col-md-6 mt-4">
                    <div className="d-grid gap-2">
                      <label className='btn btn-secondary'>
                        <span className='px-3'>Carregar <span className="d-inline-flex d-sm-none d-md-none d-lg-inline-flex">foto</span></span>
                        <UploadIcon width="0.7rem" />
                        <input className='form-control' type="file" id='fileUpload' onChange={(e) => convertImage(e)} />
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 text-end mt-4">
                    <div className="d-grid gap-2">
                      <button className='btn btn-secondary' type='submit'>
                        <span>Enviar</span>
                        <NextIcon width="0.6rem" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Badge