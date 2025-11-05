import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

// Action lié au token
const isTokenValid = (token)=> {
if (!token) {
    return false;
}
try {
    const payload = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return payload.exp > currentTime;

} catch (error) {
    console.warn("Token invalide : ", error);
    return false;
}
}

const cleanToken = () => {
localStorage.removeItem('token');
}

// Intercepteur de requêtes
const apiClient = axios.create({
    baseURL : 'http://localhost:8080/api',
    headers : {
        'Content-Type': 'application/json'
    }
})

// intercepteur de requêtes
apiClient.interceptors.request.use((request) => {

    const token = localStorage.getItem('token');

    // Ajouter le token dans l'entête Authorization si il est valide
    if(token) {
        if(isTokenValid(token)) {
            request.headers.Authorization = `Bearer ${token}`;
        }else {
            // Token invalide, on le nettoie et on redirige vers la page de login
            cleanToken();
           window.location.href = '/login';
            return Promise.reject(new Error('Token expiré'));
        }
    }
    return request;
}, 
(error) => {
    return Promise.reject(error);
});

// interceptor de réponses
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {

            cleanToken();
            window.location.href = '/login';
        return Promise.reject(error);
    }
)

export default apiClient;