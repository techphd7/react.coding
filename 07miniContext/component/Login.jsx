import React ,{useState,useContext} from "react";
import UserContext from "../src/context/UserContext";

function Login(){
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)


    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <div className="mt-8 space-y-5">
            <h2 >Login</h2>
            <input   className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" 
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="username"/>
            <input  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" 
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"/> <br/>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
             onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;