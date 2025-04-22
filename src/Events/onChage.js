import React, { useState } from "react";

const Chages = () => {
     const [input, setInput] = useState("");

     const chages = (e) => {
        setInput(e.target.value);
     }

     return (
        <div>
            <p>Hello, {input}</p>
            <input onChange={chages}/>
        </div>
     )
}

export default Chages;