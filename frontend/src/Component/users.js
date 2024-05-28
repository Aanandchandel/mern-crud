import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Users = () => {
    const [data, setData] = useState([]);
    const deleteuser = async (email) => {
        try {
            const response = await fetch("http://localhost:4000/delete", {
                method: "delete",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(email),
            });
            const userData = await response.json();
            setData(userData);
        } catch (err) {
            console.log(err);
        }
    };

    

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/getuser", {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const userData = await response.json();
                setData(userData);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="Users">
            <h1>Users</h1>
            <ul>
                {data.map((item) => (
                    <li key={nanoid()}>
                        {item.email ? (
                            <div>
                                <span>{item.email}</span><br/>
                                <span>{item.name}</span>
                                <button onClick={()=>{
                                    console.log({email:item.email})
                                    deleteuser({email:item.email} ).then((rs) => {
                                        console.log(rs);});
                                }}>Delete</button>
                            </div>
                        ) : (
                            <span>{item.name}</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
