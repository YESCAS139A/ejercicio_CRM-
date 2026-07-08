import { useParams } from "react-router-dom"
import Modal from "../components/Modal"
import useInfoUser from "./Hooks/useInfoUser"

const Details = () => {
  const { id } = useParams<{ id: string }>()
  const { user, loading } = useInfoUser(id ?? "")

  if (loading) return <p>Loading...</p>
  if (!user) return <p>User no encontrado</p>

  return (
    <Modal title={user.name} size="xl">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Bloque Info User */}
        <div className="flex flex-col gap-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl">
          <h4 className="font-bold text-gray-900 dark:text-white uppercase text-xs tracking-wider border-b pb-1 mb-2">Personal Info</h4>
          <p><span className="font-medium text-black">Name:</span> {user.name}</p>
          <p><span className="font-medium text-black">User:</span> {user.userName}</p>
          <p><span className="font-medium text-black">Email:</span> {user.email.direction}</p>
          <p><span className="font-medium text-black">Teléfono:</span> {user.phone.number}</p>
          <p><span className="font-medium text-black">Website:</span> <a href={user.webSite} className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">{user.webSite}</a></p>
        </div>

        
        <div className="flex flex-col gap-4">
          {/* Bloque Dirección */}
          <div className="flex flex-col gap-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl">
            <h4 className="font-bold text-gray-900 dark:text-white uppercase text-xs tracking-wider border-b pb-1 mb-1">Address</h4>
            <p><span className="font-medium text-black">Street:</span> {user.address.street}</p>
            <p><span className="font-medium text-black">Suite:</span> {user.address.suite}</p>
            <p><span className="font-medium text-black">City:</span> {user.address.city}</p>
            <p><span className="font-medium text-black">Zip Code:</span> {user.address.zipCode}</p>
            <div className="mt-1 pt-1 border-t border-dashed border-gray-200 dark:border-gray-700 text-xs text-black">
              <span>Geo: Lat {user.address.geo.lat} | Lng {user.address.geo.lng}</span>
            </div>
          </div>

          {/* Bloque Compañía */}
          <div className="flex flex-col gap-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl">
            <h4 className="font-bold text-gray-900 dark:text-white uppercase text-xs tracking-wider border-b pb-1 mb-1">Company</h4>
            <p><span className="font-medium text-black">Name:</span> {user.company.name}</p>
            <p><span className="font-medium text-black">CatchPhrase:</span> {user.company.catchPhrase}</p>
          </div>
        </div>

      </div>
    </Modal>
  )
}

export default Details