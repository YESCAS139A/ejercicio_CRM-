import { useParams } from "react-router-dom"
import Modal from "../components/Modal"
import useInfoUser from "./Hooks/useInfoUser"


const Details = () => {
  const { id } = useParams<{ id: string }>()
  const { user, loading } = useInfoUser(id ?? "")

  if (loading) return <p>Loading...</p>
  if (!user) return <p>User no encontrado</p>

  return (
    <Modal title={user.name}>
      <div className="flex flex-col gap-2">
        <p><span className="font-medium">Email:</span> {user.email.direction}</p>
        <p><span className="font-medium">Teléfono:</span> {user.phone.number}</p>
        <p><span className="font-medium">Ciudad:</span> {user.address.city}</p>
        <p><span className="font-medium">Empresa:</span> {user.company.name}</p>
        <p><span className="font-medium">Website:</span> <a href={user.webSite}>{user.webSite}</a></p>
      </div>
    </Modal>
  )
}

export default Details