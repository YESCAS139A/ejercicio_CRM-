import { useEffect, useState } from "react"
import type { userInfo, contact } from "../../Types/interfaces";

const useContacts = (page: number, searchTerm: string = "") => {
    const [loading, setLoading] = useState<boolean>(true);
    const [contacts, setContacts] = useState<contact[]>([])
    const [totalPages, setTotalPages] = useState<number>(1);
    
    const [debouncedSearch, setDebouncedSearch] = useState<string>(searchTerm);
    const pageSize = 5;

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 400); 

        return () => clearTimeout(handler);
    }, [searchTerm]);

    useEffect(() => {
        async function fetchUsers(): Promise<void> {
            setLoading(true);
            try {
                const queryObj: Record<string, string> = {
                    pageIndex: String(page),
                    pageSize: String(pageSize)
                };

                if (debouncedSearch.trim() !== "") {
                    queryObj.searchTerm = debouncedSearch.trim();
                }

                const params = new URLSearchParams(queryObj);
                const userRes = await fetch(`https://api-contactos-ia5p.onrender.com/api/v1/User?${params.toString()}`);
                
                if (!userRes.ok) {
                    setContacts([]);
                    setTotalPages(1);
                    return;
                }

                const data = await userRes.json();
                
                const users: userInfo[] = data.items || [];
                setTotalPages(data.totalPages || 1);

                const rows: contact[] = users.map((user) => ({
                    id: user.id,
                    name: user.name,
                    initials: user.name
                        .split(" ")
                        .filter(Boolean)
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2) || "??",
                    email: user.email.direction,
                    city: user.address.city
                }));

                setContacts(rows);
            } catch (error) {
                console.error("Error fetching users:", error);
                setContacts([]);
                setTotalPages(1);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, [page, debouncedSearch]); 

    return { contacts, loading, totalPages };
}

export default useContacts;