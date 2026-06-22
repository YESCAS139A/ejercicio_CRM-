import { useEffect, useState } from "react"
import type { postUser, summaryConv, userInfo } from "../../Types/interfaces";

const PostsToView = () => {
    const [post, setPost] = useState<summaryConv[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
    async function fetchPost(): Promise<void> {
        try {
            const [usersRes, postRes] = await Promise.all([
                fetch("https://api-contactos-ia5p.onrender.com/api/v1/User/"),
                fetch("https://api-contactos-ia5p.onrender.com/api/v1/Post/all")
            ])

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
