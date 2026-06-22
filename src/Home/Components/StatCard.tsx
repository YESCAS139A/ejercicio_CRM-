type StatCardProps = {
    label: string;
    icon: React.ReactNode;
    value: number;
    description: string;
}

const StatCard = ({label, icon, value, description}:StatCardProps) => {

    return (
        <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-xs text-black mb-1 flex items-center gap-3">{icon} {label}</p>
                <p className="text-3xl font-medium flex items-center gap-3">{value}</p>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-3">{description}</p>
            </div>
    )
}

export default StatCard
