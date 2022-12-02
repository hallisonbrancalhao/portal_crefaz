import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../types/User';
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

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

        if (response.statusCode !== 200) {
            return false;
        }

        let user = response.data;
        user['bearer'] = response.bearer;

        setUser(user);
        localStorage.setItem('auth', JSON.stringify(response.data))
        return true;
    }

    const signout = async () => {
        await api.signout();
        setUser(null);
    }

    const savedata = async (data: string) => {
        const response = await api.savedata(data);
        if (response) {
            return true
        }
        return false;
    }

    const sendimage = async (data: string) => {
        const response = await api.sendimage(data);
        if (response) {
            return true;
        }
        return false;
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout, savedata, sendimage }}>
            {children}
        </AuthContext.Provider>
    );
}