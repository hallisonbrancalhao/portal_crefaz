import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    },
});

const api_employee = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",      
    }
});

export const useApi = () => ({

    signin: async (login: string, password: string) => {

        const admin_login = {
            "email": process.env.REACT_APP_ADMIN_EMAIL,
            "password": process.env.REACT_APP_ADMIN_PASSWORD
        };

        const bearer = await api.post('/login/auth', admin_login);

        if (bearer.status !== 200) {
            return alert("Falha no login");
        }

        const employee_login = {
            "login": login,
            "password": password,
        };

        const employee_conf = {
            headers: {
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Authorization",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
                "Authorization": `bearer ${bearer.data.data.token}`
            }
        }
        
        const response = await api_employee.post('employee/authenticate', employee_login, employee_conf);

        console.log(response);

        if (response.status !== 200) {
            return alert("Falha no login");
        }
        console.log(response);
        return response.data;

    },
    signout: async () => {
        localStorage.removeItem("token");
    }
})