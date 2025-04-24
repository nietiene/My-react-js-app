
  import React, {useEffect, useState} from "react";
// Not working

  const FetchingData = () => {
      const [user, setUser] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
          setLoading(true);
          fetch('http://localhost:5000/food')
          .then((res) => {
              if(!res.ok) {
                  throw new Error("Error")
              }
            return res.json();
              
          })
          .then((data) => {
              setUser(data);
              console.log("fetched data", data);
              setLoading(false);
          }).catch((err) => {
              console.error("Error", err);
              setLoading(false);
          })
      },[]);

      if (loading) return <p>loading User</p>

      return (
          <div>
              <h2>User List</h2>
              {user?.map((user) => (
                  <div key={user.id}>
                      <p>{user.Name}</p>
                      <p>{user.Supplier}</p>
                  </div>
              ))}
          </div>
          
            
            
      )
  }

  export default FetchingData;