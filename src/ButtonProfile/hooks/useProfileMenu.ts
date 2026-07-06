import { useNavigate } from "react-router-dom";
import useClickOutside from "./useClickOutside";
import { useAuth } from "../../Auth/hooks/useAuth";

const useProfileMenu = () => {

    const { isOpen, ref, toggle, close } = useClickOutside();
    const { user , logout } = useAuth();

    
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        close();
        navigate("/login");
    };

    return {
        isOpen,
        ref,
        user,
        toggle,
        close,
        handleLogout,
    };
};

export default useProfileMenu;