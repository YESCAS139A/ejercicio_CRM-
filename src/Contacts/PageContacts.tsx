import { Link, Outlet } from 'react-router-dom';
import { useState } from "react";
import ContactCard from "./Components/ContactCard";
import useContacts from './hooks/useContacts';
import SearchBar from '../Search/SearchBar';
import Pagination from '../components/Pagination';
import useFavorites from './hooks/useFavorites';

const Contacts = () => {
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const { contacts, loading, totalPages } = useContacts(page, searchQuery);
  const { favorites, toggleFavorite } = useFavorites();

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setPage(1); 
  };

  return (
    <>
      <div className="flex-1 flex justify-center m-2">

        <SearchBar onSearch={handleSearch} />
      </div>
      
      <div className="mx-4 border border-gray-200 rounded-xl overflow-hidden bg-white">
        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-sm font-medium text-gray-700">Contacts</h2>
          <span className="text-xs bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded-md font-medium border border-yellow-200">
            ⭐ {favorites.length} Favoritos
          </span>
        </div>

        <ul className="h-130 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <p className="text-gray-400 text-sm">Cargando Contactos...</p>
            </div>
          ) : (
            <>
              {contacts.map((u) => {
                const isFavorite = favorites.includes(u.id);
                return (
                  <li key={u.id} className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                    <button
                      onClick={() => toggleFavorite(u.id)}
                      className="text-lg focus:outline-none cursor-pointer transition-transform active:scale-125"
                      title={isFavorite ? "Quitar de favoritos" : "Marcar como favorito"}
                    >
                      {isFavorite ? "⭐" : "☆"}
                    </button>
                    <ContactCard initials={u.initials} name={u.name} email={u.email} city={u.city}/>
                    <Link to={`${u.id}`}
                      className="bg-blue-300/40 border border-gray-200 rounded-3xl px-3 py-1 text-xs font-medium cursor-pointer"
                    >
                      Details
                    </Link>
                  </li>
                );
              })}

              {contacts.length === 0 && (
                <p className="text-gray-400 text-sm text-center py-8">
                  No se encontraron usuarios coincidentes en el sistema.
                </p>
              )}
            </>
          )}
        </ul>

        {/* La paginación siempre responde a los datos filtrados por el servidor */}
        {!loading && contacts.length > 0 && (
          <Pagination 
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage} 
          />
        )}
        <Outlet />
      </div>
    </>
  );
}

export default Contacts;