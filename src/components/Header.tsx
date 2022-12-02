import logo from '../assets/logo.png';
import './styles.css';

const Header = () => {

  return (
    <div className="container mt-5 mb-1 mb-md-5">
      <div className="row">
        <div className="col-md-3 text-center text-md-center">
          <img onClick={() => { localStorage.clear() }} className="img-fluid logo" src={logo} alt="Logo Crefaz" />
        </div>
      </div>
    </div>
  )
}

export default Header