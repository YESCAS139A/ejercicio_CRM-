import { useState } from 'react';
import type { UserFormData, UserResponse } from '../../Types/interfaces';


const useAddUser = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const USERS_URL = import.meta.env.VITE_USUARIOS_URL;

    const createUser = async (userData: UserFormData): Promise<UserResponse | null> => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
        const payload = {
            name: userData.name,
            username: userData.username,
            email: userData.email,
            phone: userData.phone,
            website: userData.website,
            address: {
            street: userData.street,
            suite: userData.suite,
            city: userData.city,
            zipcode: userData.zipcode,
            geo: {
                lat: userData.lat,
                lng: userData.lng,
            },
            },
            company: {
            name: userData.companyName,
            catchPhrase: userData.catchPhrase,
            },
        };

        const url = USERS_URL || `${API_BASE_URL}/User`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Error ${response.status}: No se pudo crear el usuario`);
        }

        const data: UserResponse = await response.json();
        setSuccess(true);
        return data;
        } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al crear el usuario';
        setError(errorMessage);
        return null;
        } finally {
        setLoading(false);
        }
    };

    const resetState = () => {
        setError(null);
        setSuccess(false);
        setLoading(false);
    };

    return {
        createUser,
        loading,
        error,
        success,
        resetState,
    };
};

export default useAddUser;