import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddPacientes = () => {

    const [paciente, setPaciente] = useState({
        pacIdentificacion: "",
        pacApellidos: "",
        pacNombres: "",
        PpacFechaNacimiento: "",
        pacTelefono: "",
        pacSexo: ""
    }); 
    
   
    const handleChange = (e) =>{
        setPaciente(prev=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
           await axios.post("http://localhost:8800/pacientes", paciente)
           .then(res =>{
             if(res.data === "Success"){
                window.alert("Registered Patient")
                
             }else{
                window.alert("Failed Registration")
             }

           })                      
        }catch(err){
           console.log(err)  
        }
    } 

    console.log(paciente)

    return (
        <div className="container">
           <form className='form'>
             <h4 className='titulo'>Add new Patient</h4>
             <label>Identificación:</label>
             <input type="numeric" onChange={handleChange} name='pacIdentificacion'></input>
             <label>Apellidos:</label>
             <input type="text" onChange={handleChange} name='pacApellidos'></input>
             <label>Nombres</label>
             <input type="text" onChange={handleChange} name='pacNombres'></input>
             <label>Fecha Nacimiento:</label>   
             <input type="date" onChange={handleChange} name='pacFechaNacimiento'></input>
             <label>Telefono:</label>   
             <input type="numeric" onChange={handleChange} name='pacTelefono'></input>
             <label>Sexo:</label>
             <input type="text" onChange={handleChange} name='pacSexo'></input>
             <button className='btn btn-success' onClick={handleClick}>Add</button>           
             <button className='btn btn-info'><Link to="/">Home</Link></button> 
           </form>          
        </div>
    );
}

export default AddPacientes;
