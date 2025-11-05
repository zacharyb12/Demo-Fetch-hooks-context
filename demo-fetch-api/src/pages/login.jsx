import { useAuth } from "../hooks/hooks-useAuth";
import { useState } from "react";

function LoginPage(){
    
const {login} = useAuth();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await login(email, password);
        alert("connexion réussie");
    }
    catch (error) {
        alert("informations de connexion invalides:" + error.message);
        console.log(error.message);
        
    }
}


    return (
        <>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Email :</label>
                <br />
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Mot de passe :</label>
                <br />
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Connexion</button>
        </form>
        </>
    )
}

export default LoginPage;