import { useState,useEffect } from "react"
import { nanoid } from "nanoid";


      
const Users=()=>{
    async function getData(url = "") {
        const response = await fetch(url, {
         method: "GET", 
         mode: "cors", 
         headers: {
             "Content-Type": "application/json",},
       //   body: JSON.stringify(data), 
           });
           return response.json(); 
       }
   

    useEffect(()=>{
        try{

            
            getData("http://localhost:4000/").then((data) => {
                console.log(data);
                setData(data) 
            });
        }catch(err){console.log(err)}

    },[])
const [data,setData]=useState([{name:"aanand"},{name:"aanand"},{name:"aanand"},{name:"aanand"}])
    return(<div className=" Users">
        <h1>Users</h1>
        <ul>
{data.map((item)=>{ return<li key={nanoid()}>{item.name}</li>})}


        </ul>
        

    </div>)

}
export default Users