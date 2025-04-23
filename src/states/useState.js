import { useState } from "react";

//  Counting program

const Program = () => {
    const [count, setCount] = useState(0);
    const Increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <div className="bg-white shadow-lg w-70 h-auto flex flex-col items-center p-6 m-4 rounded-lg ">
            <p className="text-xl font-semibold mb-4 font-mono"> {count}</p>
            <div className="flex space-x-5 m-5"> 
               <button onClick={Increment} className=" font-bold bg-blue-500 p-2 rounded-md hover:bg-blue-700 text-white">Increment</button>
               <button onClick={reset} className="bg-red-300 p-2 rounded-md hover:bg-red-700 text-white font-bold">Reset</button>
               <button onClick={decrement} className="bg-yellow-300 p-2 rounded-md hover:bg-yellow-700 text-white font-bold">Decrement</button>
            </div>
            
        </div>
    )
}

export default Program;