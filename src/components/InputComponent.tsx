import type { ChangeEvent } from 'react';

export interface InputComponentProps {
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean; 
}

const InputComponent = ({ placeholder, type, value, onChange, required }: InputComponentProps) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required} 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
    );
};

export default InputComponent;