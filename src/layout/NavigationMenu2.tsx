import { FaHome } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { MdLocalPostOffice } from "react-icons/md";
import { Link ,Outlet } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { MdOutlinePublish } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";

const NavigationMenu2 = () => {
  return (
    <div className="flex w-full">
        <div className="w-50 h-screen bg-blue-300/40 text-center p-4">
        <h1 className="text-xl">CRM CONTACTS</h1>
                <ul className="space-y-6">
                    <li className="text-2xl">
                        <Link to="/home" className="flex items-center gap-3">
                    <FaHome />
                    Home
                    </Link></li>
                
                    <li className="text-2xl">
                        <Link to="/home/contacts" className="flex items-center gap-3">
                    <IoIosContacts/>
                    Contacts
                    </Link></li>
                
                    <li className="text-2xl">
                        <Link to="/home/post" className="flex items-center gap-3">
                    <MdLocalPostOffice />
                    Post
                    </Link></li>

                    <li className="text-2xl">
                        <Link to="notes" className="flex items-center gap-3">
                        <CgNotes />
                        Notes
                    </Link></li>

                    <li className="text-2xl">
                        <Link to="/home/publish" className="flex items-center gap-3">
                        <MdOutlinePublish />
                        publish
                    </Link></li>

                    <li className="text-2xl">
                        <Link to="/home/Add" className="flex items-center gap-3">
                        <IoIosPersonAdd />
                        Add User
                    </Link></li>
                </ul>
                
                <li className="text-2xl">
                        <Link to="/home/login" className="flex items-center gap-3">
                        
                        login
                    </Link></li>

                    


            </div>
            <div className="flex-1 p-8 bg-slate-50">
                <Outlet/>
            </div>
    </div>
  )
}

export default NavigationMenu2
