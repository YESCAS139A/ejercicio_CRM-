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
    }, 700);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedSearch === "") return;

    const fetchPostData = async () => {
      try {
        setLoading(true);
        setNotFound(false);

        const postApiUrl = import.meta.env.VITE_POST_URL;
        const userApiUrl = import.meta.env.VITE_USUARIOS_URL;

        const postRes = await fetch(
          `${postApiUrl}?searchTerm=${debouncedSearch}&pageIndex=${page}&pageSize=5`
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
        
        let authorName = debouncedSearch; 

        if (posts.length > 0) {
          const targetUserId = posts[0].userId; 
          
          try {
            const userRes = await fetch(`${userApiUrl}/${targetUserId}`);
            if (userRes.ok) {
              const userData = await userRes.json();
              if (userData && userData.name) {
                authorName = userData.name; 
              }
            }
          } catch (userError) {
            console.error("No se pudo obtener el nombre completo del usuario:", userError);
          }
        }

        setPost(posts.map((p) => ({
          id: p.id,
          name: authorName, 
          title: p.title,
          message: p.body
        })));

      } catch (error) {
        console.error("Error fetching posts", error);
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