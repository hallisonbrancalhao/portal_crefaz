import { createContext } from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
    user: User | null;
    image64: string;
    signin: (email: string, password: string) => Promise<boolean>;
    savedata: (data: string) => Promise<number>;
    sendimage: (data: string) => Promise<number>;
}

export const AuthContext = createContext({} as AuthContextType);