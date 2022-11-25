import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    "Accept": "*/*",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export const useApi = () => ({

  signin: async (login: string, password: string) => {

    const admin_login = {
      "email": process.env.REACT_APP_ADMIN_EMAIL,
      "password": process.env.REACT_APP_ADMIN_PASSWORD
    };

    const bearer = await api.post('/login/auth', admin_login);

    if (bearer.status !== 200) {
      return alert("Falha de autenticação com a API");
    }

    const employee_login = {
      "login": login,
      "password": password,
    };

    const employee_conf = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Authorization": `Bearer ${bearer.data.data.token}`,
      }
    }

    const response = await api.post('employee/authenticate', employee_login, employee_conf);

    if (response.status !== 200) {
      return alert("Falha no login");
    }

    response.data['bearer'] = bearer.data.data.token;

    return response.data;
  },
  signout: async () => {
    localStorage.removeItem('bearer');
  },
  validateToken: async (token: string) => {
    const response = await api.post("validate", { token });
    return response.data;
  },
  savedata: async (data: string) => {

  }
})