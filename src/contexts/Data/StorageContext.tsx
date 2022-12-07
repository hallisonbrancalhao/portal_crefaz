import { createContext } from 'react';

export type StorageContextType = {
    get: (key: string) => Promise<string>;
    set: (key: string, data: string) => void;
}
export const StorageContext = createContext({} as StorageContextType);
