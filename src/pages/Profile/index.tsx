import React, { useState, FormEvent, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import "../index.css";
import "./profile.css";
import { ReactComponent as IconMenu } from '../../icons/seta-direita.svg';
import { ReactComponent as IconSave } from '../../icons/save.svg';
import profile_image from '../../assets/profile_image.png';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { BodyType } from '../../types/BodyType';

const Profile = () => {
  const auth = useContext(AuthContext);
  const [handleDisable, setHandleDisable] = useState(true);
  const [image, setImage] = useState('');
  const userStr = localStorage.getItem('auth');
  const user = JSON.parse(`${userStr}`);
  const navigate = useNavigate();

  const [formState, setFormState] = useState<BodyType>({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: user.fullName,
    birthDate: user.birthDate,
    sex: user.sex,
    cpf: user.cpf,
    rg: user.rg,
    maritalStatus: user.maritalStatus,
    numberChildren: user.numberChildren,
    postalCode: user.postalCode,
    uf: user.uf,
    city: user.city,
    district: user.district,
    address: user.address,
    addressNumber: user.addressNumber,
    complement: user.complement,
    department: user.department,
    hireDate: user.hireDate,
    socialNetworks: user.socialNetworks,
    phone: user.phone,
    email: user.email,
    password: user.password,
    token: user.token,
    statusCode: user.statusCode,
  })

  const handleAvancar = () => {
    navigate('/cracha');
  }

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('auth', JSON.stringify(formState));
    const status = await auth.savedata(JSON.stringify(formState));
    if (status) {
      setHandleDisable(false);
    }

  }, [formState, auth]);

  const convertImage = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    let file: File = (target.files as FileList)[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImage(`${reader.result}`);
      localStorage.setItem('profileImage', `${reader.result}`);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    localStorage.setItem('profileImage', image);
  };

  return (

    <div className="container">
      <div className="row text-center mb-5">
        <div className="col-md-3 transition mt-5">
          <div className="cracha-card_imagem__div">
            {image
              ? (<img src={image} className='img_profile img-fluid mb-4' alt='imagem de perfil' />)
              : (<img className="img-fluid px-5 mb-4" src={profile_image} alt="Imagem de perfil" />)
            }
          </div>
          <label htmlFor='fileUpload' className='btn btn-secondary'>
            <span className='px-3'>Carregar <span className="d-inline-flex d-sm-none d-md-none d-lg-inline-flex">foto</span></span>
            <input name='fileUpload' className='form-control' type="file" id='fileUpload' onChange={(e) => convertImage(e)} />
          </label>
        </div>
        <div className="col-md-8 d-flex justify-content-center">
          <div className='inputs transition mt-5 mx-5'>
            <h1 className='tiitle'>Perfil do colaborador</h1>
            <form
              className='text-start'
              id='profileEmployee'
              method='POST'
              encType='multipart/form-data'
              onSubmit={handleSubmit}
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

              <label htmlFor='adress' className='px-3 pt-2'><p className="label-input">Endereço<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.address || undefined}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    address: event.currentTarget.value
                  })
                }
                placeholder="Exemplo: Av. Duque de Caxias, 882, Sala 503 - Maringá, PR"
                name='address'
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

              <label htmlFor='department' className='px-3 pt-2'><p className="label-input">Departamento<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.department || undefined}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    department: event.currentTarget.value
                  })
                }
                placeholder="Exemplo: Marketing"
                name='department'
              />

              <label htmlFor='maritalStatus' className='px-3 pt-2'><p className="label-input">Estado Civil<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.maritalStatus || undefined}
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
                value={formState.numberChildren || undefined}
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
                value={formState.birthDate || undefined}
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
                value={formState.socialNetworks || undefined}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    socialNetworks: event.currentTarget.value
                  })
                }
                placeholder='Exemplo: instagram.com/NomeDoPerfil'
                name='socialNetworks'
              />

              <input type='hidden' name='firstName' />
              <input type='hidden' name='lastName' />
              <input type='hidden' name='sex' />
              <input type='hidden' name='cpf' />
              <input type='hidden' name='rg' />
              <input type='hidden' name='email' />
              <input type='hidden' name='password' />
              <input type='hidden' name='token' />
              <input type='hidden' name='postalCode' />
              <input type='hidden' name='uf' />
              <input type='hidden' name='city' />
              <input type='hidden' name='district' />
              <input type='hidden' name='addressNumber' />
              <input type='hidden' name='complement' />
              <input type='hidden' name='statusCode' />

              <div className='row'>
                <div className='col-md-6 text-center text-md-start'>
                  <button type='submit' className='py-2 btn btn-secondary mt-4 w-100'>
                    <IconSave width=".9rem" />
                    <span className='mx-2'>Salvar</span>
                  </button>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <button id='avancar' type='button' className='w-100 py-2 btn btn-secondary mt-4 ms-2'
                    disabled={handleDisable}
                    onClick={handleAvancar}>
                    <span>Avançar</span>
                    <IconMenu width="0.6rem" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Profile