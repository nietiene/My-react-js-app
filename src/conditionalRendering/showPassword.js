
import React, { useState } from 'react';

const ShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input type={showPassword ? "text" : "password"} placeholder='enter something'/>
      <button onClick={() => setShowPassword(!showPassword)}>    {/* This update password into  */}
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
    
  );
};

const ToDo = () => {
    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");
  
    function Added() {
        if (input.trim() !== "") {
        setTask([...task, input]);
        setInput("");
   
        }   else {
            alert("Enter some thing");
        }
      }
console.log("Your task is: ",task);
      return (
        <div>
            <p>To Do List</p>
            <input type='text' value={input}
             onChange={(e) => setInput(e.target.value)} 
             placeholder='Enter Some Thing'/>
          
          
            <button onClick={Added}>Add</button>
 

            {task.length === 0 ? ( 
                  <p>Your ToDo Is Empty</p>
            ) : (
                <ol>
                    {task.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                </ol>
            )}
        </div>
      )
    }



export default ShowPassword;
export {ToDo}
