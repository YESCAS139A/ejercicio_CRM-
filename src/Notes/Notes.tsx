import { Link, Outlet} from 'react-router-dom';
import NotesCard from './Components/NotesCard';
import Pagination from '../components/Pagination';
import useContacts from '../Contacts/hooks/useContacts';
import { useState } from 'react';

const Notes = () => {

    const [page, setPage] = useState<number>(1);
    const {contacts, loading, totalPages} = useContacts(page)

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
                <p className="text-gray-400 text-sm">Loading Contacts</p>
            </div>
        )
    }

return (
        <>
                <div className="mx-4 border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-200">
                <h2 className="text-sm font-medium text-gray-700">Notes</h2>
                </div>
                <ul className="h-130 overflow-y-auto">
                {contacts.map((u) => (
                    <li key={u.id} className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                    <NotesCard inicials={u.initials} name={u.name} email={u.email} city={u.city}/>
                    <Link to={`${u.id}`}
                    className="bg-blue-300/40 border border-gray-200 rounded-3xl text-x font-medium cursor-pointer">
                        Notes
                    </Link>
                    </li>
                ))}
                </ul>
                <Pagination currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage} />
                <Outlet />
            </div>
        </>
    )
}

export default Notes
