import apiClient from "../api/apiClient";

export const authService = {

    login : async (email,password) =>{

        const res = await apiClient.post('/auth/login', {email, password});

        const {token, user} = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        return {user}
    },

    register : async (username,email,password) =>{

        const res = await apiClient.post('/auth/register', {username, email, password});

        const {token , user} = res.data;

        localStorage.setItem('token', token);

        return {user}

    },

    logout : () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    getToken : () => localStorage.getItem('token'),

}