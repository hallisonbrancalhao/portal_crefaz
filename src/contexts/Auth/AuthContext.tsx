import { createContext } from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
    savedata: (data: string) => Promise<number>;
    sendimage: (data: string) => Promise<number>;
}

export const AuthContext = createContext({} as AuthContextType);