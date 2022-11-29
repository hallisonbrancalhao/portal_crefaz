import React, { useState, FormEvent, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import "../index.css";
import "./profile.css";
import { ReactComponent as IconMenu } from '../../icons/seta-direita.svg';
import profile_image from '../../assets/profile_image.png';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [image, setImage] = useState('');

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [numeroFilhos, setNumFilhos] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [perfilPessoal, setPerfilPessoal] = useState('');

  const handleEnviar = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formElements = Array.from(form.elements);

    /*
        formElements.forEach(element => {
          let id = element.getAttribute('name')
          let val = element.getAttribute('value')
    
          let obj[`${id}`] =  val ;
        });
    */


    //auth.savedata(JSON.stringify(inputs));

    /*
    
        profileData.nome = nome;
        profileData.endereco = endereco;
        profileDat0a.telefone = telefone;
        profileData.departamento = departamento;
        profileData.estadoCivil = estadoCivil;
        profileData.numeroFilhos = numeroFilhos;
        profileData.dataNascimento = dataNascimento;
        profileData.perfilPessoal = perfilPessoal;
        profileData.imagemPerfil = image;
    
        localStorage.setItem('profileData', JSON.stringify(profileData));
    
        const responseProfileData = localStorage.getItem('profileData');
        console.log("responseProfileData: ", responseProfileData)
    
    navigate('/cracha');

        */
  }

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

  const profileData = {
    "nome": nome,
    "endereco": endereco,
    "telefone": telefone,
    "departamento": departamento,
    "estadoCivil": estadoCivil,
    "numeroFilhos": numeroFilhos,
    "dataNascimento": dataNascimento,
    "perfilPessoal": perfilPessoal,
    "imagemPerfil": image
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
              onSubmit={(e: React.SyntheticEvent<HTMLFormElement>) => { handleEnviar(e) }}
            >

              <label className='px-3 pt-4 pb-0'><p className="label-input">Nome<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={nome}
                onChange={e => setNome(e.target.value)}
                placeholder="Exemplo: João da Silva"
                name='fullName'
              />

              <label className='px-3 pt-2'><p className="label-input">Endereço<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={endereco}
                onChange={e => setEndereco(e.target.value)}
                placeholder="Exemplo: Av. Duque de Caxias, 882, Sala 503 - Maringá, PR"
                name='address'
              />

              <label className='px-3 pt-2'><p className="label-input">Telefone<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
                placeholder="(___) ___-____"
                name='phone'
              />

              <label className='px-3 pt-2'><p className="label-input">Departamento<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={departamento}
                onChange={e => setDepartamento(e.target.value)}
                placeholder="Exemplo: Marketing"
                name='department'
              />

              <label className='px-3 pt-2'><p className="label-input">Estado Civil<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={estadoCivil}
                onChange={e => setEstadoCivil(e.target.value)}
                placeholder="Exemplo: Solteiro, Casado, Divorciado"
                name='maritalStatus'
              />

              <label className='px-3 pt-2'><p className="label-input">Numero de Filhos<span>*</span></p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={numeroFilhos}
                onChange={e => setNumFilhos(e.target.value)}
                placeholder="Exemplo: 0,1,2,3"
                name='numberChildren'
              />

              <label className='px-3 pt-2'><p className="label-input">Data de Nascimento<span>*</span></p></label>
              <input
                required
                type="date"
                className='form-control input-data'
                value={dataNascimento}
                onChange={e => setDataNascimento(e.target.value)}
                name='birthDate'
              />

              <label className='px-3 pt-2'><p className="label-input">Perfil Pessoal</p></label>
              <input
                required
                type="text"
                className='form-control input-data'
                value={perfilPessoal}
                onChange={e => setPerfilPessoal(e.target.value)}
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