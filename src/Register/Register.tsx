import InputComponent from "../components/InputComponent"
import LabelComponent from "../components/LabelComponent"
import useRegister from "./hooks/useRegister";


const Register = () => {

    const {
        name, username, email, password,
        handleNameChange, handleUsernameChange, handleEmailChange,
        handlePasswordChange, handleSubmit,
    } = useRegister();

    return (
        <div className="w-full max-w-4xl mx-auto p-4 flex flex-col min-h-0">

            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Register</h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full space-y-4 bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm"
            >
                <LabelComponent name="Name"/>
                <InputComponent
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Full name"
                    required
                />

                <LabelComponent name="User"/>
                <InputComponent
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="User Name"
                    required
                />

                <LabelComponent name="Email"/>
                <InputComponent
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                    placeholder="Email@Example.com"
                    required
                />
                
                <hr className="border-gray-200 my-6" />

                <h2 className="text-lg font-semibold text-gray-800 mb-3">Password</h2>
                
                <LabelComponent name="Create Password"/>
                <InputComponent
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Ex: 123"
                    type="password"
                    required
                />

                <div className="flex justify-end pt-4 border-t border-gray-200 ">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 w-full md:w-auto shadow-sm cursor-pointer"
                    >Create Account</button>
                </div>
                    

            </form>
        </div>
    )
}

export default Register