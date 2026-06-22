import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Contacts from "../Contacts/PageContacts"
import Post from "../Post/PostPage"
import Home from "../Home/PageHome"
import App from "../App"
import Details from "../Details/Details"
import Notes from "../Notes/Notes"
import PostNotes from "../Notes/Components/PostNotes"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes> 
  <Route path="/home" element={<App />}>
    <Route index element={<Home />} />
    <Route path="contacts" element={<Contacts />}>
    <Route path=":id" element={
        <Details/>
      }/>
    </Route>
    
    <Route path="post" element={<Post />} />
    <Route path="notes" element={<Notes />} >
      <Route path=":id" element={<PostNotes />} />
    </Route>
  </Route> 

  <Route path="/" element={<Navigate to="/home" />} />
  <Route path="*" element={<Navigate to="/home" />} />
</Routes>
    </BrowserRouter>
  )
}

export default AppRouter
