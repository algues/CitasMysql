import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddConsultorios = () => {

    const [consultorio, setConsultorio] = useState({
        ConNombre: ""
               
    }); 
    
    const handleChange = (e) =>{
        setConsultorio(prev=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
           await axios.post("http://localhost:8800/consultorios", consultorio)
           .then(res =>{
            if(res.data === "Success"){
               window.alert("Registered Office")                
            }else{
               window.alert("Failed Registration")
            }

          })                      
        }catch(err){
           console.log(err)  
        }
    } 

    console.log(consultorio)

    return (
        <div className="container">
        <form className='form'>
           <h4 className='titulo'>Add new Office</h4>
           <input type="text" placeholder='Nombre Consultorio' onChange={handleChange} name='ConNombre'></input>
           <button className="btn btn-success" onClick={handleClick}>Add</button>           
           <button className='btn btn-info'><Link to="/home">Home</Link></button>
        </form>   
        </div>
    );
}

export default AddConsultorios;
