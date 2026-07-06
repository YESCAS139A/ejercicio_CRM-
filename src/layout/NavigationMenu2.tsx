import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { MdLocalPostOffice } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { MdSpeakerNotes } from "react-icons/md";
import { MdPublish } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

const NavigationMenu2 = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    const menuLinks = (
        <>
            <li className="text-2xl font-bold">
                <Link to="/home" onClick={closeMenu} className="flex items-center gap-3">
                    <FaHome />
                    Home
                </Link>
            </li>
            <li className="text-2xl font-bold">
                <Link to="/contacts" onClick={closeMenu} className="flex items-center gap-3">
                    <IoIosContacts/>
                    Contacts
                </Link>
            </li>
            <li className="text-2xl font-bold">
                <Link to="/post" onClick={closeMenu} className="flex items-center gap-3">
                    <MdLocalPostOffice />
                    Post
                </Link>
            </li>
            <li className="text-2xl font-bold">
                <Link to="/notes" onClick={closeMenu} className="flex items-center gap-3">
                    <MdSpeakerNotes />
                    Notes
                </Link>
            </li>
            <li className="text-2xl font-bold">
                <Link to="/publish" onClick={closeMenu} className="flex items-center gap-3">
                    <MdPublish />
                    Publish
                </Link>
            </li>
            <li className="text-2xl font-bold">
                <Link to="/Add" onClick={closeMenu} className="flex items-center gap-3">
                    <IoIosPersonAdd />
                    Add User
                </Link>
            </li>
        </>
    );

    return (
        <div className="flex flex-col md:flex-row w-full overflow-hidden">

            {/* Botón hamburguesa - solo visible en móvil */}
            <button
                onClick={toggleMenu}
                type="button"
                className="md:hidden flex items-center gap-2 p-4 bg-blue-300/40 text-xl font-bold cursor-pointer shrink-0"
            >
                {isMenuOpen ? <HiX /> : <HiMenu />}
                Menú
            </button>

            {/* Menú desplegable - solo en móvil, y solo si isMenuOpen es true */}
            {isMenuOpen && (
                <div className="md:hidden bg-blue-300/40 p-4 shrink-0">
                    <ul className="space-y-4">
                        {menuLinks}
                    </ul>
                </div>
            )}

            {/* Sidebar original - oculta en móvil, visible desde md hacia arriba */}
            <div className="hidden md:block w-48 md:w-56 h-screen bg-blue-300/40 text-center p-4 shrink-0">
                <ul className="space-y-6">
                    {menuLinks}
                </ul>
            </div>

            <div className="flex-1 p-8 bg-slate-50 overflow-y-auto">
                <Outlet/>
            </div>
        </div>
    )
}

export default NavigationMenu2