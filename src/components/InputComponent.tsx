
export interface inputComponentProps {
    placeholder?: string;
    className?: string;
}

const InputComponent = ({placeholder}: inputComponentProps) => {
    return (
        <div>
            <input 
            type="text"
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
        </div>
    )
}

export default InputComponent
