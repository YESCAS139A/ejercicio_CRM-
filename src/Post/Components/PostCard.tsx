type PostCardProps = {
    name: string;
    title: string;
    message: string;
}

const PostCard = ({name, title, message}:PostCardProps) => {

    return (
        <li className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 hover:bg-gray-50">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-800 shrink-0">
                {name.split(" ").map(n => n[0]).join("").slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-gray-800">{name}</p>
                </div>
                        <p className="text-sm font-medium text-gray-800">{title}</p>
                        <p className="text-sm font-medium text-gray-800">{message}</p>
            </div>
        </li>
    )
}

export default PostCard
