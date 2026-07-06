import { useState, useEffect, useCallback, type ReactNode } from "react";
import { AuthContext, type User } from "./AuthContext";
import { isTokenExpired } from "./utils/jwt";


export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const token = localStorage.getItem("token");
        return !!token && !isTokenExpired(token);
    });

    const [user, setUser] = useState<User | null>(() => {
        const token = localStorage.getItem("token");
        if (!token || isTokenExpired(token)) return null;

        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const logout = useCallback(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setUser(null);
    }, []);

    const login = (token: string, user: User) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setIsAuthenticated(true);
        setUser(user);
    };

    useEffect(() => {
        const checkExpiration = () => {
            const token = localStorage.getItem("token");
            if (token && isTokenExpired(token)) {
                logout();
            }
        };

        const interval = setInterval(checkExpiration, 30000); // cada 30 segundos
        return () => clearInterval(interval);
    }, [logout]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};