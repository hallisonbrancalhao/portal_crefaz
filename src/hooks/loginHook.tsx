import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthContext';

export default function useLoginHook() {

    const navigate = useNavigate();
    const authAlready = useContext(AuthContext);

    useEffect(() => {
        if (authAlready.user !== null) {
            navigate('/apresentacao');
        }
    }, [authAlready.user, navigate])

    const [errorMessage, serErrorMessage] = useState('');
    const auth = useContext(AuthContext);

    const [login, setEmail] = useState('10037816918');
    const [password, setPassword] = useState('123456');

    const errorLogin = document.querySelector('.login');
    const errorPassword = document.querySelector('.password');

    if (errorMessage) {
        errorLogin?.classList.add('errorLabel')
        errorPassword?.classList.add('errorLabel')
    } else if (errorLogin?.classList.contains('errorLabel')) {
        errorLogin?.classList.remove('errorLabel');
        errorPassword?.classList.remove('errorLabel');
    }

    const handleLogin = async () => {
        if (login && password) {
            try {
                const response = await auth.signin(login, password);
                if (response) {
                    navigate('/apresentacao');
                }
            } catch (error) {
                serErrorMessage(`Falha ao realizar login`);
            }
        }
    }

    return {
        errorMessage,
        login,
        password,
        handleLogin,
        setEmail,
        setPassword,
        navigate,
    }
}
