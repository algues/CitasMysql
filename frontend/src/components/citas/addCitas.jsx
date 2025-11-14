import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddCitas = () => {

    const [cita, setCita] = useState({
        citaFecha: "",
        citaHora: "",
        citaPaciente: "",
        citaMedico: "",
        citaConsultorio: "",
        citaEstado: "",
        citaObservaciones: ""
    }); 
    
    const handleChange = (e) =>{
        setCita(prev=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
           await axios.post("http://localhost:8800/citas", cita)
           .then(res =>{
            if(res.data === "Success"){
               window.alert("Cita registrada")               
            }else{
               window.alert("Failed Registration")
            }

          })                      
        }catch(err){
           console.log(err)  
        }
    } 

    console.log(cita)

    return (
        <div className="container">
        <form className='form'>
           <h4 className='titulo'>Add New Cita</h4>
           <label>Fecha Cita:</label>
           <input type="date" onChange={handleChange} name='citaFecha'></input>
           <input type="text" placeholder='Hora Cita' onChange={handleChange} name='citaHora'></input>
           <input type="numeric" placeholder='Documento Paciente' onChange={handleChange} name='citaPaciente'></input>
           <input type="numeric" placeholder='Documento Médico' onChange={handleChange} name='citaMedico'></input>
           <input type="numeric" placeholder='Consultorio Número' onChange={handleChange} name='citaConsultorio'></input>
           <input type="text" placeholder='Estado Cita' onChange={handleChange} name='citaEstado'></input>
           <textarea type="text" placeholder='Observaciones' onChange={handleChange} name='citaObservaciones' row='3'></textarea>
           <button className="btn btn-success" onClick={handleClick}>Add</button>           
           <button className='btn btn-info'><Link to="/home">Home</Link></button>
        </form>   
        </div>
    );
}

export default AddCitas;
