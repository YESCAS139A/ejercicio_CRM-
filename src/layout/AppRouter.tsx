import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Contacts from "../Contacts/PageContacts";
import Post from "../Post/PostPage";
import Home from "../Home/PageHome";
import App from "../App";
import Details from "../Details/Details";
import PostNotes from "../Notes/Components/PostNotes";
import AddUser from "../AddUser/AddUser";
import LogIn from "../LogIn/LogIn";
import Register from "../Register/Register";
import ProtectedRoute from "../Auth/components/ProtectedRoute";
import Publish from "../Publish/Publish";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />}>
              <Route path=":id/notes" element={<PostNotes />} />
              <Route path=":id" element={<Details />} />
            </Route>
            <Route path="post" element={<Post />} />
            <Route path="publish" element={<Publish />} />
            <Route path="add" element={<AddUser />} />
          </Route>
        </Route>

        {/* rutas que estan fuera sin TopBar ni sidebar */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />

        {/* direccion por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;