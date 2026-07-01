import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export interface InfoRegisterProps {
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    company: {
        name: string;
        phrase: string;
    };
    password: string;
}



const useRegister = () => {

    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string>("");
    const [website, setWebsite] = useState<string>("");

    const [street, setStreet] = useState<string>("");
    const [suite, setSuite] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [zipcode, setZipcode] = useState<string>("");
    const [lat, setLat] = useState<string>("");
    const [lng, setLng] = useState<string>("");

    const [companyName, setCompanyName] = useState<string>("");
    const [companyPhrase, setCompanyPhrase] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
    const isValid = /^[0-9+\-\s()]*$/.test(value);

    if (isValid) {
        setPhone(value);
        setPhoneError(""); // limpia el error si ahora es válido
    } else {
        setPhoneError("Solo se permiten números, espacios, + y -");
        // nota: no actualizamos "phone", así el estado nunca guarda el carácter inválido
    }
    };

    const handleWebsiteChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWebsite(e.target.value);
    };

    const handleStreetChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStreet(e.target.value);
    };

    const handleSuiteChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSuite(e.target.value);
    };

    const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    const handleZipcodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setZipcode(e.target.value);
    };

    const handleLatChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLat(e.target.value);   
    };

    const handleLngChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLng(e.target.value);   
    };

    const handleCompanyNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCompanyName(e.target.value);
    };

    const handleCompanyPhraseChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCompanyPhrase(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const resetForm = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setWebsite("");
    setStreet("");
    setSuite("");
    setCity("");
    setZipcode("");
    setLat("");
    setLng("");
    setCompanyName("");
    setCompanyPhrase("");
    setPassword("");
};

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const infoRegister: InfoRegisterProps = {
            name,
            username,
            email,
            phone,
            website,
            address: {
                street,
                suite,
                city,
                zipcode,
                geo: {
                    lat,
                    lng,
                },
            },
            company: {
                name: companyName,
                phrase: companyPhrase,
            },
            password,
        };

        console.log("Datos a enviar:", infoRegister);
        // comentario para cuando tenga la api lista aqui iria el await fetch

        resetForm();
        navigate("/home/login");

    };

    return {
        name,
        username,
        email,
        phone,
        phoneError,
        website,
        street,
        suite,
        city,
        zipcode,
        lat,
        lng,
        companyName,
        companyPhrase,
        password,
        handleNameChange,
        handleUsernameChange,
        handleEmailChange,
        handlePhoneChange,
        handleWebsiteChange,
        handleStreetChange,
        handleSuiteChange,
        handleCityChange,
        handleZipcodeChange,
        handleLatChange,
        handleLngChange,
        handleCompanyNameChange,
        handleCompanyPhraseChange,
        handlePasswordChange,
        handleSubmit,
    };
};

export default useRegister;