import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Contacts from "../Contacts/PageContacts"
import Post from "../Post/PostPage"
import Home from "../Home/PageHome"
import App from "../App"
import Details from "../Details/Details"
import Notes from "../Notes/Notes"
import PostNotes from "../Notes/Components/PostNotes"
import AddUser from "../AddUser/AddUser"
import Publish from "../Publish/publish"
import LogIn from "../LogIn/LogIn"
import Register from "../Register/Register"
import ProtectedRoute from "./ProtectedRoute"


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rutas protegidas: TODAS viven dentro de <App />, que trae TopBar + NavigationMenu2 */}
        <Route path="/" element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />}>
            <Route path=":id" element={<Details/>}/>
          </Route>
          <Route path="post" element={<Post />} />
          <Route path="notes" element={<Notes />} >
            <Route path=":id" element={<PostNotes />} />
          </Route>
          <Route path="publish" element={<Publish/>}/>
          <Route path="add" element={<AddUser/>}/>
        </Route>

        {/* Rutas públicas: fuera de <App />, sin TopBar ni sidebar */}
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter