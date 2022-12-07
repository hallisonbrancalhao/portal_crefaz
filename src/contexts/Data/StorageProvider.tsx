import { StorageContext } from "./StorageContext";

export default function StorageProvider({ children }: { children: JSX.Element }) {

    function get(key: string) {
        const itemStr = localStorage.getItem(`${key}`);
        const item = JSON.parse(`${itemStr}`);
        const now = new Date();

        if (!item) {
            return null;
        }

        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }

        return item.value;
    }

    const set = (key: string, data: string) => {
        const now = new Date();
        const timeExpire = 3600;
        const item = {
            value: data,
            expiry: `${now.getTime() + timeExpire}`
        }
        localStorage.setItem(`${key}`, JSON.stringify(item))
    }

    return (
        <StorageContext.Provider value={{ get, set }}>
            {children}
        </StorageContext.Provider>
    );
}
