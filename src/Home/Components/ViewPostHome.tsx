import usePostsToView from "../Hooks/usePostsToView"

const PostsToView = () => {
  const { post, loading } = usePostsToView()

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-gray-400 text-sm">Loading posts</p>
      </div>
    )
  }

  return (
    <div className="mx-4 border border-gray-200 rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-sm font-medium text-gray-700">Posts to view</h2>
      </div>

      <ul className="h-115 overflow-y-auto">
        {post.map((p) => (
          <li key={p.id} className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-800 shrink-0">
              {p.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800">{p.name}</p>
              <p className="text-xs text-gray-500 truncate">{p.messaje}</p>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostsToView
