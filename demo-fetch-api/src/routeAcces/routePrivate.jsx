import { useAuth } from "../hooks/hooks-useAuth";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({children}){
    const navigate = useNavigate();
    const {user} = useAuth();

    if(!user){
        navigate('/');
    }
    else{   
        return children;
    }
}