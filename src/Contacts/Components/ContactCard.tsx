type ContactCardProps = {
    initials: string;
    name: string;
    email: string;
    city: string;
}

const ContactCard = ({ initials, name, email, city }: ContactCardProps) => {
    return (
        <>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-xs md:text-sm font-medium text-blue-800 shrink-0">
                {initials}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">{name}</p>
                <p className="text-xs md:text-sm text-gray-500 truncate">{email}</p>
                <p className="text-xs md:text-sm text-gray-500 truncate hidden sm:block">{city}</p>
            </div>
        </>
    )
}

export default ContactCard