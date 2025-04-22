import React, { useState } from "react";

const Submit = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        console.log("You Logged As: ", name, email);
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <label>Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name"/><br/> 
                <label>Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" /><br/>

                <button>Submit</button>
            </form>
        </div>
    )

}
export default Submit;