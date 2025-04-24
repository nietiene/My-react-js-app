import React, { useEffect, useState } from "react";

const Dates = () => {
    const [timer, setTimer] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(new Date().toLocaleDateString());
        }, 1000);

        return clearInterval(interval);
    }, []);

    return (
        <h1>Date is : {timer}</h1>
    )
}

export default Dates;