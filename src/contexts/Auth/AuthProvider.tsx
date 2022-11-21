import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../types/User';
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const [user, setUser] = useState<User | null>(null);
    const api = useApi();
    const data = localStorage.getItem('userData');

    useEffect(() => {
        const validateToken = () => {
            const storageData = localStorage.getItem('auth');
            if (storageData) {
                setUser(JSON.parse(storageData));
            }
        }
        validateToken();
    }, [])

    const signin = async (login: string, password: string) => {
        const response = await api.signin(login, password);
        response.data = response.data[0];
        if (!response) {
            return false;
        }

        const user = {
            id: response.data.id,
            name: response.data.fullName,
            email: response.data.email,
            cpf: response.data.cpf,
            bearer: response.bearer
        };

        if (user.cpf && user.bearer) {
            setUser(user);
            localStorage.setItem('auth', JSON.stringify(user))
            return true;
        }

        return false;
    }

    const signout = async () => {
        await api.signout();
        setUser(null);
    }


    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}