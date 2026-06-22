
import PostsToView from "./Components/ViewPostHome"
import StatsCards from "./Components/StatsCards"

import "../App.css";
import { RiRadioButtonLine } from "react-icons/ri";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuUsersRound } from "react-icons/lu";

const stats = [
    {label: "Users Online", value: 8, description: "Currently online", icon: <RiRadioButtonLine className="text-green-500" />, id:1 },
    {label: "Unread Post", value: 10, description: "Not view", icon: <IoMailUnreadOutline className="text-yellow-500"/>, id:2 },
    {label: "My Contacts", value: 70, description: "Added", icon: <LuUsersRound className="text-blue-800" />, id:3}
]


const Home = () => {
  return (
    <>
    <div className='h-screen flex flex-col'>
      <main className='flex-1 p-4'>
        <div className="grid grid-cols-3 gap-3 p-4">
        {stats.map((stat) => {
          return(
            <StatsCards key={stat.id} description={stat.label} label={stat.label} value={stat.value} icon={stat.icon}/>
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
