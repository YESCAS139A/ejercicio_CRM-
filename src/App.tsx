import NavigationMenu2 from "./layout/NavigationMenu2";
import TopBar from "./layout/TopBar";
import "./App.css"

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar />
      <div className='flex flex-1 overflow-hidden'>
        <NavigationMenu2/>
      </div>
    </div>
  );
}

export default App