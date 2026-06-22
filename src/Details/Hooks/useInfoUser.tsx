import { useEffect, useState } from "react"
import type { userInfo } from "../../Types/interfaces"

const useInfoUser = (id: string) => {  // ← recibe id aquí
    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<userInfo | null>(null)

useEffect(() => {
    async function fetchUser(): Promise<void> {
        try {
            const userRes = await fetch(`https://api-contactos-ia5p.onrender.com/api/v1/User/${id}`)
            const data: userInfo = await userRes.json()  
            setUser(data)                                 
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
        fetchUser()
    }, [id])  

    return { user, loading }
}

export default useInfoUser