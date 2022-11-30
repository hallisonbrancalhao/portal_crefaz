import React, { useState, FormEvent, useContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import "../index.css";
import "./profile.css";
import { ReactComponent as IconMenu } from '../../icons/seta-direita.svg';
import profile_image from '../../assets/profile_image.png';
import { AuthContext } from '../../contexts/Auth/AuthContext';

interface IForm {
  nome: string;
  endereco: string;
  telefone: string;
  departamento: string;
  estadoCivil: string;
  numeroFilhos: string;
  dataNascimento: string;
  perfilPessoal: string;
  imagemPerfil: string;
}
const Profile = () => {


  const [image, setImage] = useState('');

  const [formState, setFormState] = useState<IForm>({
    nome: "",
    endereco: "",
    telefone: "",
    departamento: "",
    estadoCivil: "",
    numeroFilhos: "",
    dataNascimento: "",
    perfilPessoal: "",
    imagemPerfil: "",
  })

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();



  }, []);

  const convertImage = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    let file: File = (target.files as FileList)[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImage(`${reader.result}`);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
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
          <label className='btn btn-secondary'>
            <span className='px-3'>Carregar <span className="d-inline-flex d-sm-none d-md-none d-lg-inline-flex">foto</span></span>
            <input className='form-control' type="file" id='fileUpload' onChange={(e) => convertImage(e)} />
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
                value={formState.nome}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    nome: event.currentTarget.value
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
                value={formState.endereco}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    endereco: event.currentTarget.value
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
                value={formState.telefone}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    telefone: event.currentTarget.value
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
                value={formState.departamento}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    departamento: event.currentTarget.value
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
                value={formState.estadoCivil}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    estadoCivil: event.currentTarget.value
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
                value={formState.numeroFilhos}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    numeroFilhos: event.currentTarget.value
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
                value={formState.dataNascimento}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    dataNascimento: event.currentTarget.value
                  })
                }
                name='birthDate'
              />

              <label htmlFor='socialNetworks' className='px-3 pt-2'><p className="label-input">Perfil Pessoal</p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={formState.perfilPessoal}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    perfilPessoal: event.currentTarget.value
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
              <input type='hidden' name='createdAt' />
              <input type='hidden' name='updatedAt' />
              <input type='hidden' name='deletedAt' />

              <button type='submit' className='px-5 py-2 btn btn-secondary mt-4'>
                <span>Enviar</span>
                <IconMenu width="0.6rem" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile