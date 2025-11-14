import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

const Login = () => {

   const [username, setUser] = useState(''); 
   const [password, setPassword] = useState(''); 

   const navigate = useNavigate();
   
   const handleClick =  async (e) =>{
        e.preventDefault();
        if(!username){
            window.alert("Please enter username");
            return;
        }
        if(!password){
            window.alert("Please enter password");
            return;
        }
        await axios.post("http://localhost:8800/login/", {username, password})
         .then(res => {
            if(res.data === "Success"){
               window.alert("welcome: "+  username )
               navigate('/home');
            }else{
               window.alert("invalid username or password")
            }
              
         })          
         .catch(err => console.log(err));                 
          
    }

    return (
        <div className='container'>
           <form className='form'>
              <h5 className='titulo'>Inicio de Sesión</h5>
              <label>Username</label>
              <input className='input' type='text' onChange={e => setUser(e.target.value)} name='username'></input>
              <FaUser /> 
              <label>Password</label>
              <input className='input' type='password' onChange={e => setPassword(e.target.value)} name='password'></input>
              <FaLock />
              <button className='btn btn-success' onClick={handleClick}>Enviar</button>
           </form>
            
        </div>
    );
}

export default Login;
