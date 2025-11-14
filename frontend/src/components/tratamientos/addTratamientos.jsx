import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddTratamientos = () => {

    const [tratamiento, setTratamiento] = useState({
        traFechaAsignada: "",
        traDescripcion: "",
        traFechaInicio: "",
        traFechaFin: "",
        traObservaciones: "",
        traPaciente: ""
    });     

    const handleChange = (e) =>{
        setTratamiento(prev=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
           await axios.post("http://localhost:8800/tratamientos", tratamiento)
           .then(res =>{
            if(res.data === "Success"){
               window.alert("Tratamiento registrado")
               
            }else{
               window.alert("Failed Registration")
            }

          })                      
           
        }catch(err){
           console.log(err)  
        }
    } 

    console.log(tratamiento)

    return (
        <div className='container'>
        <form className='form'>
           <h4 className='titulo'>Add new Tratamiento</h4>
           <label>Fecha Asignada:</label>           
           <input type="date" onChange={handleChange} name='traFechaAsignada'></input>
           <label>Descripcion del Tratamiento:</label>
           <textarea type="text" onChange={handleChange} name='traDescripcion' rows={3}></textarea>
           <label>Fecha Inicio:</label>
           <input type="date" onChange={handleChange} name='traFechaInicio'></input>
           <label>Fecha Finalización:</label>
           <input type="date" onChange={handleChange} name='traFechaFin'></input>
           <label>Observaciones:</label>
           <textarea type="text" onChange={handleChange} name='traObservaciones' rows={3}></textarea>
           <label>Documento Paciente:</label>
           <input type="numeric" onChange={handleChange} name='traPaciente'></input>
           <button className="btn btn-success" onClick={handleClick}>Add</button>           
           <button className='btn btn-info'><Link to="/">Home</Link></button>
        </form>   
        </div>
    );
}

export default AddTratamientos;
