import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";


const useLogIn = () => {

    const navigate = useNavigate();

    const [ userName, setUsername] = useState<string>("");
    const [ password, setPassword] = useState<string>("");
    
    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const resetForm = () => {
        setUsername("");
        setPassword("");
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`username: ${userName}`);
        console.log(`Password: ${password}`);
        resetForm();
        navigate("/home");
    }
    return {
        userName,
        password,
        handleUsernameChange,
        handlePasswordChange,
        handleSubmit
    }
}

export default useLogIn
