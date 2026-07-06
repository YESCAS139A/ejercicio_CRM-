import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import useProfileMenu from "./hooks/useProfileMenu";

const ProfileMenu = () => {

    const { isOpen, ref, user, toggle, close, handleLogout } = useProfileMenu();

    return (
        <div className="relative" ref={ref}>

            <button
                type="button"
                onClick={toggle}
                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
            >
                <CiUser className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">

                    <div className="px-4 py-3 border-b border-gray-100">
                        {/* aqui ira la variable que jale el usuario de la cuenta actual */}
                        <p className="font-semibold text-gray-800">User: {user?.username ?? "User"}</p>
                        {/* aqui ira la variable que jale el email de la cuenta actual */}
                        <p className="text-sm text-gray-500">Email: {user?.email ?? "Email"}</p>
                    </div>

                    <ul className="py-1">
                        <li>
                            <Link
                                to="/profile"
                                onClick={close}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Customize Profile
                            </Link>
                        </li>
                        <li className="border-t border-gray-100 mt-1 pt-1">
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 cursor-pointer"
                            >
                                Log Out
                            </button>
                        </li>
                    </ul>

                </div>
            )}

        </div>
    );
};

export default ProfileMenu;