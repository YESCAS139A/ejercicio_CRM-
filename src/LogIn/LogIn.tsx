import { CiUser } from "react-icons/ci";
import InputComponent from "../components/InputComponent";
import LabelComponent from "../components/LabelComponent";

const LogIn = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 flex flex-col min-h-0">
            <form
                className="w-full max-h-[calc(100vh-140px)] overflow-y-auto space-y-4 bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm pr-2 md:pr-4"
            >
                <div className="w-50 h-50 rounded-full mx-auto bg-white border-5 border-gray-300 flex items-center justify-center">
                    <CiUser className="w-25 h-25 text-gray-600" />
                </div>

                <LabelComponent name="User Name"/>
                <InputComponent placeholder="Ex:Abraham"/>

                <LabelComponent name="Password"/>
                <InputComponent placeholder="ex:123"/>
                
                <p className="h mt-8">
                    <span className="font-medium">
                        Sign up for an account if you don't have one 
                    </span>
                    <a href="" className="text-blue-500"> Register</a>
                        </p>
            </form>
        </div>
    )
}

export default LogIn
