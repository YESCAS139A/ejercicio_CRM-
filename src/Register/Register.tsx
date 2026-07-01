import InputComponent from "../components/InputComponent"
import LabelComponent from "../components/LabelComponent"
import useRegister from "./hooks/useRegister";


const Register = () => {

    const {
        name, username, email, phone, website,
        street, suite, city, zipcode, lat, lng,
        companyName, companyPhrase, password,phoneError,
        handleNameChange, handleUsernameChange, handleEmailChange,
        handlePhoneChange, handleWebsiteChange,
        handleStreetChange, handleSuiteChange, handleCityChange, handleZipcodeChange,
        handleLatChange, handleLngChange,
        handleCompanyNameChange, handleCompanyPhraseChange,
        handlePasswordChange, handleSubmit,
    } = useRegister();

    return (
        <div className="w-full max-w-4xl mx-auto p-4 flex flex-col min-h-0">

            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Register</h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full max-h-[calc(100vh-140px)] overflow-y-auto space-y-4 bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm pr-2 md:pr-4"
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

                <LabelComponent name="Phone"/>
                <InputComponent
                    value={phone}
                    onChange={handlePhoneChange}
                    type="tel"
                    placeholder="+52 662 464 5262"/>
                    {phoneError && (
                    <p className="text-sm text-red-500 mt-1">{phoneError}</p>
                    )}

                <LabelComponent name="Web Site"/>
                <InputComponent
                    value={website}
                    onChange={handleWebsiteChange}
                    type="url"
                    placeholder="www.example.com"/>

                <hr className="border-gray-200 my-6" />

                <h2 className="text-lg font-semibold text-gray-800 mb-3">Address</h2>

                <LabelComponent name="Street"/>
                <InputComponent
                    value={street}
                    onChange={handleStreetChange}
                    placeholder="Main Street"/>

                <LabelComponent name="Suite"/>
                <InputComponent
                    value={suite}
                    onChange={handleSuiteChange}
                    placeholder="Apto. 4B"/>

                <LabelComponent name="City"/>
                <InputComponent
                    value={city}
                    onChange={handleCityChange}
                    placeholder="Madrid"/>

                <LabelComponent name="Zip Code"/>
                <InputComponent
                    value={zipcode}
                    onChange={handleZipcodeChange}
                    placeholder="28001"/>

                <div className="mt-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Coordinates (Geo) </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <LabelComponent name="Latitude"/>
                                <InputComponent
                    value={lat}
                    onChange={handleLatChange}
                    placeholder="-37.3159"
                    />
                            </div>
                            <div>
                                <LabelComponent name="Length"/>
                                <InputComponent
                    value={lng}
                    onChange={handleLngChange}
                    placeholder="81.1496"/>
                            </div>
                        </div>
                </div>

                <hr className="border-gray-200 my-6" />

                <h2 className="text-lg font-semibold text-gray-800 mb-3">Company</h2>

                <LabelComponent name="Name"/>
                <InputComponent
                    value={companyName}
                    onChange={handleCompanyNameChange}
                    placeholder="Company Name"
                    />

                <LabelComponent name="Phrase"/>
                <InputComponent
                    value={companyPhrase}
                    onChange={handleCompanyPhraseChange}
                    placeholder="Descriptive phrase"
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

                <div className="flex justify-end pt-4 border-t border-gray-200 sticky bottom-0 bg-white">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 w-full md:w-auto shadow-sm"
                    >Create Account</button>
                </div>
                    

            </form>
        </div>
    )
}

export default Register
