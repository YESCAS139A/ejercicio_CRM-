import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/hooks/useAuth";

const useLogIn = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch(import.meta.env.VITE_LOGIN_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error("Incorrect email or password. Please try again.");
            }

            const data = await response.json();

            login(data.token, {
                id: data.id,
                username: data.username,
                email: data.email,
            });

            resetForm();
            navigate("/home");

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An error occurred while logging in");
            }
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        password,
        loading,
        error,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
    };
};

export default useLogIn;