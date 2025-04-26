import React, { useEffect, useState } from "react";

const Notes = () => {
    const [note, setNote] = useState("");
   
    useEffect(() => {
        const saved = localStorage.getItem("note");
        if (saved) setNote(saved);

    }, []);

    useEffect(() => {
        localStorage.setItem("note", note);
        localStorage.getItem("note", note);

    }, [note]);

   return (
    <textarea onChange={(e) => setNote(e.target.value)} value={note}  placeholder="Enter Some thing"/>
   )
}

export default Notes;