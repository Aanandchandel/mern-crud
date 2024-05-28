import { useState,useEffect } from "react"


const Users=()=>{


    useEffect(()=>{

    },[])
const [data,setData]=useState([{name:"aanand"},{name:"aanand"},{name:"aanand"},{name:"aanand"}])
    return(<div className=" Users">
        <h1>Users</h1>
        <ul>
{data.map((item)=>{ return<li>{item.name}</li>})}


        </ul>
        

    </div>)

}
export default Users