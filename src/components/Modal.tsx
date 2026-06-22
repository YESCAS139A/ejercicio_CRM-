import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom"
import type { ModalProps } from "../Types/interfaces"
import { createPortal } from "react-dom";


const Modal = ({ children, title }: ModalProps) => {

    const navigate = useNavigate();

    const handleClose = () => navigate(-1);

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/30 backdrop-blur-sm p-4">
            <div className="absolute inset-0" onClick={handleClose} />

            <div className="relative bg-black dark:bg-blue-300/40 rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-950">
                <h3 className="text-xl font-semibold text-black dark:text-black">
                    {title || 'Details'}
                </h3>
                <button onClick={handleClose} className="text-red-700 hover:text-gray-600 dark:hover:text-red-950 transition-colors">
                    <IoIosCloseCircleOutline className="w-6 h-6" />
                </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')!
    );
};

export default Modal
