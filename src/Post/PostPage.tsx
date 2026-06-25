import { useState } from "react";
import useViewPost from "./Hooks/useViewPost";
import SearchBar from "../Search/SearchBar";
import PostCard from "./Components/PostCard";
import Pagination from "../components/Pagination";

const PostPage = () => {
  const [page, setPage] = useState<number>(1);

  const { post, loading, totalPages, notFound, searchId, handleSearch } = useViewPost(page);

  const handleSearchAndResetPage = (value: string) => {
    setPage(1); 
    handleSearch(value);
  };

  return (
    <>
      <div className="flex-1 flex justify-center m-2">
        <SearchBar placeholder="ej:efrain" onSearch={handleSearchAndResetPage} />
      </div>

      {searchId === null && (
        <div className="mx-4 mt-8 p-8 border border-dashed border-gray-200 rounded-xl bg-gray-50 flex items-center justify-center">
          <p className="text-gray-400 text-sm font-medium text-center">
            The data has not been loaded. Search by name.
          </p>
        </div>
      )}

      {notFound && searchId !== null && !loading && (
        <div className="mx-4 mt-8 p-8 flex items-center justify-center">
          <p className="text-red-400 text-sm font-medium text-center">
            User or posts not found in the system.
          </p>
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center p-8">
          <p className="text-gray-400 text-sm">Loading Posts...</p>
        </div>
      )}

      {!loading && searchId !== null && !notFound && (
        <>
          {post.length > 0 ? (
            <ul className="h-130 overflow-y-auto">
              {post.map((u) => (
                <PostCard key={u.id} name={u.name} title={u.title} message={u.message} />
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center text-sm p-8">This user has no posts.</p>
          )}

          {!loading && post.length > 0 && (
            <Pagination 
              currentPage={page} 
              totalPages={totalPages} 
              onPageChange={setPage} 
            />
          )}
        </>
      )}
    </>
  );
};

export default PostPage;