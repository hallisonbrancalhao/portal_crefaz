import React, { createContext, useEffect, useState } from "react";
import { IContext, IAuthProvider, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";


export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {

    useEffect(() => {
        const user = getUserLocalStorage();
        if (user) {
            setUser(user);
        }
    }, [])

    const [user, setUser] = useState<IUser | null>()

    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password);
        const payload = { token: response.token, email }
        setUser(payload);
        setUserLocalStorage(payload);
    }

    async function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
}