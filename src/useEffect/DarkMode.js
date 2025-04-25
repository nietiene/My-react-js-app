import React, {useEffect, useState} from "react";

const Theme = () => {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        const SavedTheme = localStorage.getItem("dark") === "true";
        setTheme(SavedTheme);
    }, []);
    useEffect(() => {
        localStorage.setItem("dark", theme);
        document.body.style.background = theme ? "#222" : "#fff";
        document.body.style.color = theme ? "#fff" : "#000";
    }, [theme]);

    return (
        <div>
            <h3>Hello </h3>
            <button onClick={() => setTheme(!theme)}>
                Switch To {theme ? "light" : "dark"} Mode
            </button>
        </div>
    )
}


export default Theme;