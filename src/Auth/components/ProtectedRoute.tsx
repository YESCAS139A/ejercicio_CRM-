import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// Asegúrate de que NO tenga tipado de 'children' en los argumentos
const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Usamos Outlet para renderizar las rutas hijas de React Router
    return <Outlet />;
};

export default ProtectedRoute;