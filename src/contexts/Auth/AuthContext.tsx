import { createContext } from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
    savedata: (data: string) => Promise<boolean>;
    sendimage: (data: string) => Promise<boolean>;
}

export const AuthContext = createContext({} as AuthContextType);