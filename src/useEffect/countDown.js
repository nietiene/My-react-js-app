import React, {useEffect, useState} from "react";

const CountDown = () => {
    const [counter, setCounter] = useState(10);

    useEffect( () => {
     setTimeout(() => {
        if (counter === 0) return;
        setCounter(counter -1);
     }, 1000);   
    
    // return () => clearTimeout(counter); 
},[counter])


return (
    <h1>CountDown: {counter}</h1>
)
}

export default CountDown;