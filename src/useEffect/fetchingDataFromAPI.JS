
import React, {useEffect, useState} from "react";

const FetchingData = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/food')
        .then((res) => res.json())
        .then((data) => {
            setUser(data);
            setLoading(false);
        });
    },[]);

    if (loading) return <p>loading User</p>

    return (
        <div>
            <h2>User List</h2>
            {user.map((user) => (
                <div key={user.id}>
                    <p>{user.Name}</p>
                    <p>{user.Supplier}</p>
                </div>
            ))}
        </div>
    )
}

export default FetchingData;