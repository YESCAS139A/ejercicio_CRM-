
import PostsToView from "./Components/ViewPostHome"
import StatsCards from "./Components/StatsCards"

import "../App.css";
import { LuUsersRound } from "react-icons/lu";

const stats = [
    {label: "My Contacts", value: 70, description: "Added", icon: <LuUsersRound className="text-blue-800" />, id:3}
]


const Home = () => {
  return (
    <>
    <div className='h-screen flex flex-col'>
      <main className='flex-1 p-4'>
        <div className="px-4 py-3 border-b border-gray-200">
        {stats.map((stat) => {
          return(
            <StatsCards 
            key={stat.id} 
            description={stat.label} 
            label={stat.label} value={stat.value} 
            icon={stat.icon}
            />
          )
          
        })}
        </div>
        <PostsToView/>
      </main>
    </div>
    </>
  )
}

export default Home
