import NavigationMenu2 from "./layout/NavigationMenu2";
import { CiUser } from "react-icons/ci";
import "./App.css"

function App() {
  return (
    <div className="flex flex-col overflow-hidden">

      <div className="h-16 bg-blue-100 flex items-center px-6 gap-4 shrink-0 shadow-sm">
          <div className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center">
            <CiUser className="w-5 h-5 text-gray-600" />
          </div>
        </div>
          <div className='flex flex-1 overflow-hidden'>
            <NavigationMenu2/>
          </div>
    </div>
  );

}

export default App
