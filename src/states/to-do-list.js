import { useState } from "react";

const Todo = () => {
    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");
    
    const clicked = () => {
        
        //If there is any value in input
        if (input.trim() !== "") {
            setTask([...task, input]); // Update in task and add another data
        } else {
            window.alert("Enter some item")
        }
    }

    return (
        <div>
            <h2>To Do List</h2>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={clicked}>Add New Task</button>
         <ol> 
           {task.map((task, index) => (
            <li key={index}>{task}</li>
           ))}  
         </ol>
        </div>
    )
}
export default Todo;