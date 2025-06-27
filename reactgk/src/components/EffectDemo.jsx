import React,{useEffect, useState} from "react";

function EffectDemo() {
    const [users, setUsers] = useState([]);

    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users")
         .then((Response) => Response.json())
         .then((data) => setUsers(data))
         .catch((error) => console.log("Error fetching data:", error));
        console.log("Hello");
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default EffectDemo;