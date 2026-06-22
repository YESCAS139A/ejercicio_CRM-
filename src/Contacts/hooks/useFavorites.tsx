import { useState, useEffect } from "react"

const useFavorites = () => {
    const [favorites, setFavorites] = useState<number[]>(() => {
        const savedFav = localStorage.getItem("favorites");
        return savedFav ? JSON.parse(savedFav) : [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (contactId: number) => {
        setFavorites((prevFavs) => {
            if (prevFavs.includes(contactId)) {
                return prevFavs.filter((id) => id !== contactId);
            } else {
                return[...prevFavs, contactId]
            }
        });
    };

  return {
    favorites,
    toggleFavorite,
  };
};

export default useFavorites
