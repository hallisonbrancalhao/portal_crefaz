import { useEffect, useState, useContext } from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../types/User';
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = () => {
            const storageData = localStorage.getItem('user');
            if (storageData) {
                setUser(JSON.parse(`${storageData}`));
            }
        }
        validateToken();
    }, [auth])

    const signin = async (login: string, password: string) => {

        const response = await api.signin(login, password);
        response.data = response.data[0];

        if (response.statusCode !== 200) {
            return false;
        }

        let dataUser = {
            id: response.data.id,
            name: response.data.fullName,
            email: response.data.email,
            cpf: response.data.cpf,
            bearer: response.bearer
        };
        setUser(dataUser);
        localStorage.setItem('user', JSON.stringify(dataUser));
        localStorage.setItem('auth', JSON.stringify(response.data));
        return true;
    }

    const savedata = async (data: string) => {
        const status = await api.savedata(data);
        return status;
    }

    const sendimage = async (data: string) => {
        const response = await api.sendimage(data);
        return response.code;
    }

    return (
        <AuthContext.Provider value={{ user, signin, savedata, sendimage }}>
            {children}
        </AuthContext.Provider>
    );
}