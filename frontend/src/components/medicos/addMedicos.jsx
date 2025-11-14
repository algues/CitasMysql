import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddMedicos = () => {

    const [medico, setMedico] = useState({
        medIdentificacion: "",
        medApellidos: "",
        medNombres: "",
        medTelefono: "",
        medEspecialidad: ""       
    }); 
    
    const handleChange = (e) =>{
        setMedico(prev=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
           await axios.post("http://localhost:8800/medicos", medico)
           .then(res =>{
             if(res.data === "Success"){
                window.alert("Registered Doctor")                
             }else{
                window.alert("Failed Registration")
             }

           })                      
        }catch(err){
           console.log(err)  
        }
    }; 
    
    return (
        <div className="container">
           <form className='form'>
             <h4 className='titulo'>Add new Doctor</h4>
             <label>Identificación:</label>
             <input type="numeric" onChange={handleChange} name='medIdentificacion'></input>
             <label>Apellidos:</label>
             <input type="text" onChange={handleChange} name='medApellidos'></input>
             <label>Nombres</label>
             <input type="text" onChange={handleChange} name='medNombres'></input>             
             <label>Telefono:</label>   
             <input type="text" onChange={handleChange} name='medTelefono'></input>
             <label>Especialidad:</label>
             <input type="text" onChange={handleChange} name='medEspecialidad'></input>
             <button className='btn btn-success' onClick={handleClick}>Add</button>           
             <button className='btn btn-info'><Link to="/home">Home</Link></button> 
           </form>          
        </div>
    );
}

export default AddMedicos;
