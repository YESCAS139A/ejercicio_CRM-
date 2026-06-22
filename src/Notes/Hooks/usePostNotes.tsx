import { useEffect, useState } from "react";

const usePostNotes = (userId: number | string) => {
    const [prevUserId, setPrevUserId] = useState<number | string>(userId);
    
    const [note, setNote] = useState<string>(() => {
        if (!userId) return "";
        const notes = JSON.parse(localStorage.getItem("notes") ?? "{}");
        return notes[userId] ?? "";
    });

    if (userId !== prevUserId) {
        setPrevUserId(userId); 
        const notes = JSON.parse(localStorage.getItem("notes") ?? "{}");
        setNote(notes[userId] ?? ""); 
    }

    useEffect(() => {
        if (!userId) return;

        const notes = JSON.parse(localStorage.getItem("notes") ?? "{}");
        notes[userId] = note;
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [note, userId]);

    return {
        note,
        setNote
    };
};

export default usePostNotes;