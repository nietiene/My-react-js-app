import React from "react";

const UserList = () => {
    const list = [
        {id: 1, name: 'etiene'},
        {id: 2, name: 'jonas'},
        {id: 3, name: 'john'},
    ];
 
    return (
        <div>
            {list.map((user) => {
           return (<ul key={user.id}>
                   <ol>Id: {user.id}</ol>
                   <ol>name: {user.name}</ol>
                </ul>
            )})}
        </div>
    )
}
export default UserList;