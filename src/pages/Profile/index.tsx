import React from 'react'
import "../index.css";
import "./profile.css";
import { ReactComponent as IconMenu } from '../../icons/seta-direita.svg';
import profile_image from '../../assets/profile_image.png';
import useProfileHook from '../../hooks/profileHook';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Alert from '@mui/material/Alert';

const Profile = () => {
  const {
    errorImage,
    error,
    success,
    loading,
    image,
    convertImage,
    handleDisable,
    formState,
    setFormState,
    handleAvancar,
    handleSubmit,
  } = useProfileHook();

  return (

    <div className="container">
      <form
        id='profileEmployee'
        method='POST'
        encType='multipart/form-data'
        onSubmit={handleSubmit}
      >
        <div className="row mb-5">
          <div className="text-center col-md-3 transition mt-5">
            <div className="cracha-card_imagem__div">
              {image
                ? (<img src={image} className='img_profile img-fluid mb-4' alt='imagem de perfil' />)
                : (<img className="img-fluid px-5 mb-4" src={profile_image} alt="Imagem de perfil" />)
              }
            </div>
            <label htmlFor='fileUpload' className='btn btn-secondary'>
              <span className='px-3'>Carregar <span className="d-inline-flex d-sm-none d-md-none d-lg-inline-flex">foto</span></span>
              <input
                name='fileUpload'
                className='form-control'
                type="file"
                id='fileUpload'
                onChange={(e) => convertImage(e)} />
            </label>
          </div>
          <div className="col-md-8 d-flex justify-content-center">
            <div className='inputs transition mt-5 mx-5'>
              <h1 className='tiitle'>Perfil do colaborador</h1>

              <label htmlFor='fullName' className='px-3 pt-4 pb-0 text-start'><p className="label-input">Nome<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.fullName}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    fullName: event.currentTarget.value
                  })
                }
                placeholder="Exemplo: João da Silva"
                name='fullName'
              />

              <label htmlFor='adress' className='px-3 pt-2'><p className="label-input">Endereço<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.address}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    address: event.currentTarget.value
                  })
                }
                placeholder="Exemplo: Av. Duque de Caxias, 882, Sala 503 - Maringá, PR"
                name='address'
              />

              <label htmlFor='complement' className='px-3 pt-2'><p className="label-input">Complemento<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.complement}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    complement: event.currentTarget.value
                  })
                }
                placeholder="Casa, apartamento"
                name='complement'
              />

              <label htmlFor='postalCode' className='px-3 pt-2'><p className="label-input">CEP<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.postalCode}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    postalCode: event.currentTarget.value
                  })
                }
                placeholder="00000-000"
                name='postalCode'
              />

              <label htmlFor='phone' className='px-3 pt-2'><p className="label-input">Telefone<span>*</span></p></label>
              <input
                required
                type="phone"
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

              <label htmlFor='phoneContact' className='px-3 pt-2'><p className="label-input">Telefone de emergência: (mãe, pai, cônjuge..)<span>*</span></p></label>
              <input
                required
                type="phone"
                className='form-control input-data'
                value={formState.phoneContact}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    phoneContact: event.currentTarget.value

                  })
                }
                placeholder="(___) ___-____"
                name='phone'
              />
              <label htmlFor='department' className='px-3 pt-2'><p className="label-input">Departamento<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.department}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    department: event.currentTarget.value
                  })
                }
                placeholder="Exemplo: Marketing"
                name='department'
              />
              <label htmlFor='city' className='px-3 pt-2'><p className="label-input">Cidade<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.city}

                onChange={(event) =>
                  setFormState({
                    ...formState,
                    city: event.currentTarget.value
                  })
                }
                placeholder="Exemplo: Maringá"
                name='city'
              />

              <label htmlFor='uf' className='px-3 pt-2'><p className="label-input">Estado<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.uf}

                onChange={(event) =>
                  setFormState({
                    ...formState,
                    uf: event.currentTarget.value
                  })
                }
                placeholder="Exemplo: Paraná"
                name='uf'
              />
              <label htmlFor='maritalStatus' className='px-3 pt-2'><p className="label-input">Estado Civil<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.maritalStatus}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    maritalStatus: event.currentTarget.value
                  })
                }
                placeholder="Exemplo: Solteiro, Casado, Divorciado"
                name='maritalStatus'
              />

              <label htmlFor='numberChildren' className='px-3 pt-2'><p className="label-input">Numero de Filhos<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.numberChildren}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    numberChildren: event.currentTarget.value
                  })
                }
                placeholder="Exemplo: 0,1,2,3"
                name='numberChildren'
              />

              <label htmlFor='birthDate' className='px-3 pt-2'><p className="label-input">Data de Nascimento<span>*</span></p></label>
              <input
                required
                type="date"
                className='form-control input-data'
                value={formState.birthDate}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    birthDate: event.currentTarget.value
                  })
                }
                name='birthDate'
              />

              <label htmlFor='socialNetworks' className='px-3 pt-2'><p className="label-input">Perfil Pessoal</p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.socialNetworks}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    socialNetworks: event.currentTarget.value
                  })
                }
                placeholder='Exemplo: instagram.com/NomeDoPerfil'
                name='socialNetworks'
              />

              <div className="text-start mx-2">
                <div className="text-start form-check form-check-inline mt-3">
                  <input className="form-check-input"
                    required
                    type="radio"
                    name="typeContract"
                    id="pj"
                    value="PJ"
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        typeContract: event.currentTarget.value
                      })
                    }
                  />
                  <label className="form-check-label label-input" htmlFor="pj">Pessoa Jurídica (PJ)</label>
                </div>

                <div className="text-start form-check form-check-inline mt-3">
                  <input className="form-check-input"
                    required
                    type="radio"
                    name="typeContract"
                    id="clt"
                    value="CLT"
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        typeContract: event.currentTarget.value
                      })
                    }
                  />
                  <label className="form-check-label label-input" htmlFor="CLT">Pessoa Física (CLT)</label>
                </div>
              </div>

              {error && (
                <Alert variant="outlined" severity="error" className='mt-2'>
                  Não foi possível salvar seus dados.
                </Alert>
              )}
              {success && (
                <Alert variant="outlined" severity="success" className='mt-2'>
                  Seus dados foram salvos com sucesso!
                </Alert>
              )}

              {errorImage && (
                <Alert variant="outlined" severity="error" className='mt-2'>
                  Selecione uma imagem antes de prosseguir.
                </Alert>
              )}

              <div className='row'>
                <div className='col-md-6 text-center'>
                  <LoadingButton
                    className='py-2 btn botao-salvar mt-4 w-100'
                    type='submit'
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                  >
                    Salvar
                  </LoadingButton>
                </div>
                <div className="col-md-6 text-center">
                  <button id='avancar' type='button' className='w-100 py-2 btn btn-success mt-4'
                    disabled={handleDisable}
                    onClick={handleAvancar}>
                    <span>Avançar</span>
                    <IconMenu width="0.6rem" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div >
      </form>
    </div>
  )
}

export default Profile