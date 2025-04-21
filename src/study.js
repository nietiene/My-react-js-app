
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
       
        <div>
          {data.map((user) => {
           return(
                  <div key={user.id}>
                  <p><strong>Name:</strong> {user.name}</p> 
                  <p><strong>Email:</strong> {user.email}</p> 
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



export default MyFirstApp 
export {UserInfo};