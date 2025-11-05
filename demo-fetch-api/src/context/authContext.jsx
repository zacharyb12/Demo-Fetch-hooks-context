import { createContext,useContext,useState } from "react";
import { authService } from "../services/authService";

// Creation du contexte d'authentification
const AuthContext = createContext();

// fournisseur du contexte
export const AuthProvider = ({children}) => {

    // etat utilisateur
    const [user , setUser] = useState(null);

    // fonction de connexion

    const login = async (email , password) => {
        const {user} = await authService.login(email, password);
        setUser(user);
    };

    const register = async (username, email, password) => {
        const {user} = await authService.register(username, email, password);
        setUser(user);
    };
    const logout = () => {
        authService.logout();
        setUser(null);
    };

    // fournit le contexte
    return(
        <AuthContext.Provider value={{user, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )


};

export const useAuth = () => {
    return useContext(AuthContext);
};

