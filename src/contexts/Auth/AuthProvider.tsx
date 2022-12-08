import { useEffect, useState, useContext } from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../types/User';
import { StorageContext } from '../Data/StorageContext';
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);
    const storage = useContext(StorageContext);
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = () => {
            const storageData = localStorage.getItem('auth');
            if (storageData) {
                setUser(JSON.parse(`${storageData}`));
            }
        }
        validateToken();
    }, [auth, storage])

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
        const status = await api.savedata(data);
        return status;
    }

    const sendimage = async (data: string) => {
        const response = await api.sendimage(data);
        return response.code;
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout, savedata, sendimage }}>
            {children}
        </AuthContext.Provider>
    );
}