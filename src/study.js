
const MyFirstApp = () => {
   
    const data = {
        name: 'Etiene',
        email: 'eti@gmail.com',
        password: 'pass3'
};

    return (

        <div>
          <h1>Welcome: {data.name}</h1>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
        </div>
    )
} 

export default MyFirstApp;