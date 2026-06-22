import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import usePostNotes from "../Hooks/usePostNotes";


const PostNotes = () => {
    const { id } = useParams<{ id: string }>();
    
    const { note, setNote } = usePostNotes(id ?? "");

    return (
        <Modal title="Contact Notes">
            <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Nota del Contacto (ID: {id})
                </label>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Escribe una nota interna para este contacto..."
                    className="w-full h-44 p-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none transition-all text-sm"
                />
                <div className="flex justify-end">
                    <span className="text-xs text-gray-400 italic">
                        Cambios guardados automáticamente en el dispositivo
                    </span>
                </div>
            </div>
        </Modal>
    );
};

export default PostNotes;