import { useState, useCallback, useEffect, useMemo } from "react";
import type { NewPost, PaginatedResponse, publish } from "../../Types/interfaces";

const API_URL = import.meta.env.VITE_POST_URL;

const usePublish = (initialUserId?: string) => {
    const [posts, setPosts] = useState<publish[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [notFound, setNotFound] = useState<boolean>(false);

    const fetchPosts = useCallback(async (pageIndex = 1, pageSize = 100) => {
        setLoading(true);
        setError(null);
        setNotFound(false);
        try {
            const res = await fetch(`${API_URL}?pageIndex=${pageIndex}&pageSize=${pageSize}`);
            
            if (!res.ok) {
                throw new Error(`Error al obtener los posts: ${res.status}`);
            }

            const data: PaginatedResponse<publish> = await res.json();
            
            if (!data.items || data.items.length === 0) {
                setNotFound(true);
                setPosts([]);
            } else {
                setPosts(data.items);
            }
            return data;
        } catch (err) {
            console.error("Error fetching posts:", err);
            const message = err instanceof Error ? err.message : "Error desconocido";
            setError(message);
            setNotFound(true);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const createPost = useCallback(async (newPost: NewPost) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPost),
            });

            if (!res.ok) {
                const text = await res.text().catch(() => "");
                throw new Error(`Error al crear el post (${res.status}): ${text}`);
            }

            const created: publish = await res.json();
            
            const postConfirmadoPorServidor = {
                ...created,
                userId: created.userId ?? newPost.userId
            };

            setPosts((prev) => [...prev, postConfirmadoPorServidor]);
            return created;
        } catch (err) {
            console.error("Error en createPost:", err);
            const message = err instanceof Error ? err.message : "Error desconocido";
            setError(message);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const loadData = async () => {
            await fetchPosts();
        };
        loadData();
    }, [fetchPosts]);

    const userPosts = useMemo(() => {
        return posts.filter((post) => String(post.userId) === String(initialUserId));
    }, [posts, initialUserId]);

    return {
        posts,
        userPosts,
        loading,
        error,
        notFound,
        fetchPosts,
        createPost,
    };
};

export default usePublish;