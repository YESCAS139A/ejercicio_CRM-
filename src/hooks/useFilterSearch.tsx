import { useState } from "react";
import PostPage from "../Post/PostPage";

type FilterSearchProps = {
    query: string;
}

const useFilterSearch = () => {

    const [query, setQuery] = useState<string>("")

    const filtred = .filter((s) =>
    .name.toLowerCase().includes(query.toLocaleLowerCase()) ||
    .email.toLowerCase().includes(query.toLocaleLowerCase())
)

  return {
    query,
    setQuery

  }
}

export default useFilterSearch
