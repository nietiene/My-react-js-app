import React, { useState} from "react";

const Search = () => {
   
//     const [query, setQuery] = useState("");

//     const HandleKey = (event) => {
      
//        if (event.key === "Enter") {
//            console.log("You search for", query);
//        } else {console.log("you pressed", event.key)}

// }
//   return (
       
//       <input type="text" value={query}
//       onChange={(e) => setQuery(e.target.value)}
//       onKeyDown={HandleKey} placeholder="Type and press Enter"/>

// );

const [keys, setKey] = useState("");

const type = (e) => {
    setKey(e.key);
}

return (
    <div>
     <input value={keys}
     onKeyDown={type}
     placeholder="Type some ting"/>
    <p>you pressed: {keys}</p>
    </div>
    
)
}
export default Search;