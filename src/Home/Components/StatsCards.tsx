import type { ReactNode } from "react";
import StatCard from "./StatCard";


type StatstcardProps = {
  description:string;
  label:string;
  value:number;
  icon:ReactNode;
}



const StatsCards = ({description, label, value, icon}: StatstcardProps) => {
  return (<StatCard description={description} label={label} value={value} icon={icon}/>);
}

export default StatsCards
