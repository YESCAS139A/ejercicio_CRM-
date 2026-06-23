import { useEffect, useState } from "react"
import type { postUser, summaryConv, userInfo } from "../../Types/interfaces";

const PostsToView = () => {
    const [post, setPost] = useState<summaryConv[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
    async function fetchPost(): Promise<void> {
        try {
            
            const userApiUrl = import.meta.env.VITE_USUARIOS_URL;
            const postApiUrl = import.meta.env.VITE_POST_URL;

            const [usersRes, postRes] = await Promise.all([
                fetch(`${userApiUrl}/`),
                fetch(`${postApiUrl}/`)
            ])

            if (!usersRes.ok || !postRes.ok) {
                throw new Error(`Fetch failed: users=${usersRes.status} posts=${postRes.status}`);
            }

            const usersData = await usersRes.json()
            const postsData = await postRes.json()

            const users: userInfo[] = usersData.items ?? []
            const posts: postUser[] = Array.isArray(postsData) ? postsData : postsData.items ?? []

            const rowsPosts: summaryConv[] = posts.slice(0, 10).map((post) => {
                const autor = users.find((u) => u.id === post.userId)
                return {
                    id: post.id,
                    name: autor?.name ?? "Desconocido",
                    initials: autor?.name
                        ?.split(" ")
                        .filter(Boolean)
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2) ?? "??",
                    messaje: post.title,
                }
            })
            setPost(rowsPosts)
        } catch (error) {
            console.error(error)
            setPost([])
        } finally {
            setLoading(false)
        }
    }
    fetchPost()
}, [])

    return {
        post,
        loading
    }
}

export default PostsToView