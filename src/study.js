
const MyFirstApp = () => {
//JSX 

//     const data = {
//         name: 'Etiene',
//         email: 'eti@gmail.com',
//         password: 'pass3'
// };

const data = [
    { id: 1, name: 'Etiene', email: 'eti@gmail.com', password: 'pass3'},
    { id: 2, name: 'Jonas', email: 'jonas@gmail.com', password: 'jona3'},
    { id: 3, name: 'Eric', email: 'eric@gmail.com', password: 'pazzo'},
    { id: 4, name: 'Pazzo', email: 'pazzo@gmail.com', password: 'pass3'},
];

    return (

        // <div>
        //   <h1>Welcome: {data.name}</h1>
        //   <p>Email: {data.email}</p>
        //   <p>Password: {data.password}</p>
        // </div>
        
        <div className="p-5 m-3 mt-5 bg-blue-200 grid grid-cols-4 shadow-xl rounded-md flex">
            
          {data.map((user) => {
           return(
                  <div key={user.id}>
                  <p className="font-mono"><strong>Name:</strong> {user.name}</p> 
                  <p className="font-mono "><strong>Email:</strong> {user.email}</p> 
                  <p><strong>Password:</strong> {user.password}</p> 
                </div>     
            )})}
        </div>
    );
} 
// Creating mulitple componets
const UserInfo = ({name, email}) => {
     
    return (
        <div>
            <p>name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}



export default MyFirstApp ;
export {UserInfo};