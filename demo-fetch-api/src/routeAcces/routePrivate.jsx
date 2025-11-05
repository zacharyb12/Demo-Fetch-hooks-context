import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({children}){
    const navigate = useNavigate();
    const {user} = useAuth();

    if(!user){
        navigate('/homepage');
    }

    return children;
}