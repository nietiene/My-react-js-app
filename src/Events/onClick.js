// Simple like Application

import React from "react";
import { useState } from "react";

const Clicks = () => {
    const [likes, setLikes] = useState(0);

    const liked = () => {
        setLikes(likes + 1);
    } 

    return (
        <div>
            <p>likes: {likes}</p>
            <button onClick={liked}>👍 like {likes}</button>
        </div>
    );
}

export default Clicks;