import InputComponent from "../components/InputComponent"
import LabelComponent from "../components/LabelComponent"


const Register = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 flex flex-col min-h-0">

            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Register</h1>
            </div>

            <form
                className="w-full max-h-[calc(100vh-140px)] overflow-y-auto space-y-4 bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm pr-2 md:pr-4"
            >
                <LabelComponent name="Name"/>
                <InputComponent placeholder="Full name"/>

                <LabelComponent name="User"/>
                <InputComponent placeholder="User Name"/>

                <LabelComponent name="Email"/>
                <InputComponent placeholder="Email@Example.com"/>

                <LabelComponent name="Phone"/>
                <InputComponent placeholder="+52 662 464 5262"/>

                <LabelComponent name="Web Site"/>
                <InputComponent placeholder="www.example.com"/>

                <hr className="border-gray-200 my-6" />

                <h2 className="text-lg font-semibold text-gray-800 mb-3">Address</h2>

                <LabelComponent name="Street"/>
                <InputComponent placeholder="Main Street"/>

                <LabelComponent name="Suite"/>
                <InputComponent placeholder="Apto. 4B"/>

                <LabelComponent name="City"/>
                <InputComponent placeholder="Madrid"/>

                <LabelComponent name="Zip Code"/>
                <InputComponent placeholder="28001"/>

                <div className="mt-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Coordinates (Geo) </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <LabelComponent name="Latitude"/>
                                <InputComponent placeholder="-37.3159"/>
                            </div>
                            <div>
                                <LabelComponent name="Length"/>
                                <InputComponent placeholder="81.1496"/>
                            </div>
                        </div>
                </div>

                <hr className="border-gray-200 my-6" />

                <h2 className="text-lg font-semibold text-gray-800 mb-3">Company</h2>

                <LabelComponent name="Name"/>
                <InputComponent placeholder="Company Name"/>

                <LabelComponent name="Phrase"/>
                <InputComponent placeholder="Descriptive phrase"/>

                <div className="flex justify-end pt-4 border-t border-gray-200 sticky bottom-0 bg-white">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 w-full md:w-auto shadow-sm"
                    >Create Record</button>
                </div>
                    

            </form>
        </div>
    )
}

export default Register
