import "./login.css"
import { useState } from "react"
const Login=()=>{
    async function postData(url = "", data = {}) {
        const response = await fetch(url, {
         method: "post", 
         mode: "cors", 
         headers: {
             "Content-Type": "application/json",},
             body: JSON.stringify(data), 
           });
           return response.json(); 
            }
   const onSubmit=()=>{
    try{

        if(userInfo.name&&userInfo.email&&userInfo.password){
            postData("http://localhost:4000/", userInfo).then((data) => {
                console.log(data);
                
            });
            
            
        }else{
            setMessage("enter valuse in fields ")
        }
    }catch(err){console.log(err)    }
}


    const [message,setMessage]=useState("")
    let userInfo={}

    const getvalue=(e)=>{
        let name=`${e.target.name}`
        userInfo[name]=e.target.value;
        console.log(userInfo)
    }
    return(<div className="Login">
        <div  className="form">
            <h1>Create User</h1>
<input onKeyDown={getvalue} name="name" type="text"placeholder="name" />
<input type="email" onKeyDown={getvalue}  placeholder="email" name="email" />
<input type="password" onKeyDown={getvalue} placeholder="password" name="password" />
<button onClick={onSubmit} className="submit">submit</button>
<p>{message}</p>

        </div>
    </div>)


}

export default Login