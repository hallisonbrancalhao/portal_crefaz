import React from 'react'
import logo from '../../assets/logo.png';
import "../index.css";
import "./badge.css";
import { ReactComponent as NextIcon } from '../../icons/seta-direita.svg'
import { ReactComponent as UploadIcon } from '../../icons/upload.svg'
import { ReactComponent as ImagemIcon } from '../../icons/user-regular.svg'
import useBadgeHook from '../../hooks/badgeHook';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';

const Badge = () => {
  const {
    errorImage,
    error,
    success,
    loading,
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
          <h2 className='cracha-subtitle'>Preencha os campos de identificação, informando seu nome e sobrenome, telefone e seu endereço de e-mail.<br /><br />
            Faça o upload de uma foto, mas fique atento à qualidade dela.<br /><br />
            Caso tenha dúvidas, assista o tutorial ao lado</h2>
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
                ? formState.nameBadge ?
                  formState.nameBadge :
                  formState.fullName
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

                <label htmlFor='nameBadge' className='px-3 pt-4 pb-0'><p className="label-input">Nome<span>*</span></p></label>
                <input
                  required
                  type="text"
                  className='form-control input-data'
                  value={formState.nameBadge}
                  onChange={(event) =>
                    setFormState({
                      ...formState,
                      nameBadge: event.currentTarget.value
                    })
                  }
                  placeholder="Exemplo: João da Silva"
                  name='nameBadge'
                />

                <label htmlFor='email' className='px-3 pt-2'><p className="label-input">E-mail<span>*</span></p></label>
                <input
                  required
                  type="email"
                  className='form-control input-data'
                  value={formState.email}
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
                  value={formState.phone}
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
                      <LoadingButton
                        className='btn btn-secondary botao-salvar'
                        type='submit'
                        loading={loading}
                        loadingPosition="end"
                        endIcon={<NextIcon width="0.6rem" />}
                        variant="contained"
                      >
                        Salvar
                      </LoadingButton>
                    </div>
                  </div>
                  {error && (
                    <Alert variant="outlined" severity="error" className='mt-2'>
                      Não foi possível salvar seus dados.
                    </Alert>
                  )}
                  {errorImage && (
                    <Alert variant="outlined" severity="error" className='mt-2'>
                      Por favor, selecione uma imagem adequada para o crachá.
                    </Alert>
                  )}
                  {success && (
                    <div className='col-12 mt-2'>
                      <Alert variant="outlined" severity="success" className='mt-2'>
                        Seus dados foram salvos com sucesso!
                      </Alert>
                    </div>
                  )}
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