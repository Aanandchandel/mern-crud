import "./login.css"
import { useState,useEffect } from "react"
const Login=()=>{
    const [message,setMessage]=useState("")
    let userInfo={}

    const getvalue=(e)=>{
        let name=`${e.target.name}`
        userInfo[name]=e.target.value;
        console.log(userInfo)
    }

    useEffect(()=>{

    },[])
    return(<div className="Login">
        <div  className="form">
            <h1>Create User</h1>
<input onKeyDown={getvalue} name="name" type="text"placeholder="name" />
<input type="email" onKeyDown={getvalue}  placeholder="email" name="email" />
<input type="password" onKeyDown={getvalue} placeholder="password" name="password" />
<button className="submit">submit</button>
<p>{message}</p>

        </div>
    </div>)


}

export default Login