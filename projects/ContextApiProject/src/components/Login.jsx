import React, { useState, useContext } from "react";
import UserContext from '../context/UserContext'

function Login() {

    const  [username, setUserName] = useState("")
    const  [password, setPassword] = useState("")
    const   {setUser} = useContext(UserContext)

    function handleSubmit(e) 
    {
        e.preventDefault()
        setUser({username, password})
    }

    return (

        <div>
            <h2>Login</h2>
            <input className="rounded-full" type="text"  value ={username} onChange={(e) => {setUserName(e.target.value)}}/>{"           "}
            <input className="rounded-full" type="password"  value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login