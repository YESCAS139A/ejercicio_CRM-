type NotesCardProps = {
    inicials: string;
    name: string;
    email: string;
    city: string;
}

const NotesCard = ({inicials, name, email, city}: NotesCardProps) => {
    return (
        <>
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-800 shrink-0">
                {inicials}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                        <p className="text-xs text-gray-500 truncate">{inicials}</p>
                    </span>
                    <p className="text-sm font-medium text-gray-800">{name}</p>
                </div>
                    <p className="text-sm font-medium text-gray-800">{email}</p>
                    <p className="text-sm font-medium text-gray-800">{city}</p>
            </div>
            </>
    )
}

export default NotesCard
