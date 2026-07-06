import { FaSearch } from "react-icons/fa";
import type { searchBarProps } from "../Types/interfaces";

const SearchBar = ({ onSearch, placeholder = "Search" }: searchBarProps) => {
    return (
        <div className="relative w-full max-w-96">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <span>
                    <FaSearch className="text-gray-400 w-4 h-4" />
                </span>
            </div>
            <input
                type="text"
                placeholder={placeholder}
                onChange={(e) => onSearch(e.target.value)}
                className="bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-0.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
        </div>
    )
}

export default SearchBar