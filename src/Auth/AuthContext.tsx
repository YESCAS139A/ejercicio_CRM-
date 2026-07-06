import { createContext } from "react";

export type User = {
    id: string;
    username: string;
    email: string;
};

export type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    login: (token: string, user: User) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);