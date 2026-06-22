import { useEffect, useState } from "react";
import type { postUser, postViews } from "../../Types/interfaces";

const useViewPost = (page: number) => {
  const [post, setPost] = useState<postViews[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [notFound, setNotFound] = useState<boolean>(false);
  
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  const handleSearch = (value: string) => {
    const cleanValue = value.trim();
    if (cleanValue === "") {
      setSearchQuery("");
      setDebouncedSearch(""); 
      setPost([]);
      setTotalPages(1);
      setNotFound(false);
    } else {
      const formattedValue = cleanValue.charAt(0).toUpperCase() + cleanValue.slice(1);
      setSearchQuery(formattedValue);
    }
  };

  useEffect(() => {
    if (searchQuery === "") return;

    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedSearch === "") return;

    const fetchPostData = async () => {
      try {
        setLoading(true);
        setNotFound(false);

        const postRes = await fetch(
          `https://api-contactos-ia5p.onrender.com/api/v1/Post/all?searchTerm=${debouncedSearch}&pageIndex=${page}&pageSize=5`
        );

        if (!postRes.ok) {
          setNotFound(true);
          setPost([]);
          setTotalPages(1);
          return;
        }

        const postData = await postRes.json();
        const posts: postUser[] = postData.items || [];
        
        setTotalPages(postData.totalPages || 1);
        
        // 🛠️ OBTENER NOMBRE REAL DESDE LA API:
        let authorName = debouncedSearch; // Por si acaso, dejamos el término de búsqueda como respaldo

        if (posts.length > 0) {
          // Tomamos el userId del primer post devuelto para consultar quién es el dueño
          const targetUserId = posts[0].userId; 
          
          try {
            const userRes = await fetch(`https://api-contactos-ia5p.onrender.com/api/v1/User/${targetUserId}`);
            if (userRes.ok) {
              const userData = await userRes.json();
              if (userData && userData.name) {
                authorName = userData.name; // ¡Aquí capturamos el nombre completo real! (Ej: "Efrain")
              }
            }
          } catch (userError) {
            console.error("No se pudo obtener el nombre completo del usuario:", userError);
          }
        }

        // Asignamos los posts usando el nombre real obtenido
        setPost(posts.map((p) => ({
          id: p.id,
          name: authorName, // Guardamos el nombre oficial (ej: "Efrain") en lugar del término (ej: "efra")
          title: p.title,
          message: p.body
        })));

      } catch (error) {
        console.error("Error fetching data from /Post/all:", error);
        setNotFound(true);
        setPost([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [debouncedSearch, page]);

  return { 
    post, 
    loading, 
    totalPages, 
    notFound, 
    searchId: searchQuery || null, 
    handleSearch 
  };
};

export default useViewPost;