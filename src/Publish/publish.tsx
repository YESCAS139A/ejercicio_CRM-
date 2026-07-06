import { useState } from "react";
import usePublish from "./Hooks/usePublish";
import { useAuth } from "../Auth/hooks/useAuth";

const Publish = () => {

    const { user } = useAuth();
    const { userPosts, createPost, loading, error, notFound } = usePublish(user?.id);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!body.trim()) return;

        const result = await createPost({
            title: title.trim() || "Sin título",
            body: body.trim(),
            userId: user?.id,
        });

        if (result) {
            setTitle("");
            setBody("");
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Create Post</h1>
            
            <form onSubmit={handleSubmit} className="space-y-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <div>
                    <input
                        type="text"
                        placeholder="Título de la publicación (opcional)"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                    />
                </div>
                <div>
                    <textarea
                        placeholder="¿Qué estás pensando?..."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                    />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                    >
                        {loading ? "Publicando..." : "Publicar"}
                    </button>
                </div>
            </form>

            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-3">
                    My Posts
                </h2>
                
                {loading && userPosts.length === 0 && <p className="text-gray-500">Loading your posts...</p>}
                {notFound && <p className="text-gray-500">No publications were found.</p>}
                
                <ul className="space-y-3">
                    {userPosts.map((post) => (
                        <li key={post.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-black">
                            <h3 className="font-bold text-base">{post.title}</h3>
                            <p className="text-gray-700 text-sm mt-1 whitespace-pre-wrap">{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Publish;