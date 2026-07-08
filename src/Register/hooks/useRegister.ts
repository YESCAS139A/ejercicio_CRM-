import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export interface InfoRegisterProps {
    name: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

const API_URL = import.meta.env.VITE_REGISTER_URL;

const useRegister = () => {

    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("")
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const resetForm = () => {
        setName("");
        setLastName("");
        setUsername("");
        setEmail("");
        setPassword("");
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        const infoRegister: InfoRegisterProps = {
            name,
            lastName,
            username,
            email,
            password,
        };

        setLoading(true);
        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(infoRegister),
            });

            if (!res.ok) {
                const text = await res.text().catch(() => "");
                throw new Error(`Error during registration (${res.status}): ${text}`);
            }

            resetForm();
            navigate("/login");
        } catch (err) {
            console.error("Registration error:", err);
            const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    return {
        name,
        lastName,
        username,
        email,
        password,
        loading,
        error,
        handleNameChange,
        handleLastNameChange,
        handleUsernameChange,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
    };
};

export default useRegister;