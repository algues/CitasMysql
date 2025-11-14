import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EliminarCitas = () => {

    const [numero, setNumero] = useState('');
    const [cita, setCita] = useState({
        citaNumero: "",
        citaFecha: "",
        citaHora: "",
        citaPaciente: "",
        citaMedico: "",
        citaConsultorio: "",
        citaEstado: "",
        citaObservaciones: ""     
    });
    const [error, setError] = useState('');

    const buscarCita = async () => {
        try {
             if (!numero) {
                setError('Please enter number');
                return;
            }

            const res = await axios.get(`http://localhost:8800/citas/${numero}`);
            setCita(res.data);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error || 'Error al buscar el registro');
            } else {
                setError('Error de conexión con el servidor');
            }
        }
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
           await axios.delete("http://localhost:8800/citas/"+ numero)
           .then(res =>{
            if(res.data === "Success"){
                window.alert("Cita eliminada")
            }else{
                window.alert("Error durante el procedimiento")
            }              
           })           
        }catch(err){
           console.log(err)  
        }
    } 

    return (
        <div>
            <h5 className='titulo'>Eliminar Citas</h5>
            <input 
                style={{ width: '20%' }}                           
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Enter number"
            />
            <button onClick={buscarCita}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {cita && (
                <div className='container'>
                    <br />
                    <br />
                    <form className='form'>
                    <h5 className='titulo'>Datos de la Cita</h5>
                    <label>Número de la cita</label>
                    <input type="numeric" name='citaNumero' value={cita.citaNumero}></input>
                    <label>Fecha Cita</label>
                    <input type="date" name='citaFecha' value={cita.citaFecha}></input>
                    <label>Hora Cita</label>
                    <input type="text" name='citaHora' value={cita.citaHora}></input>
                    <label>Documento Paciente</label>
                    <input type="numeric" name='citaPaciente' value={cita.citaPaciente}></input>
                    <label>Documento Médico</label>
                    <input type="numeric" name='citaMedico' value={cita.citaMedico}></input>
                    <label>Consultorio Número</label>
                    <input type="numeric" name='citaConsultorio' value={cita.citaConsultorio}></input>
                    <label>Estado Cita</label>
                    <input type="text" name='citaEstado' value={cita.citaEstado}></input>
                    <label>Observaciones</label>
                    <textarea type="text" name='citaObservaciones' value={cita.citaObservaciones} rows={3}></textarea>                
                    <button className='btn btn-info' onClick={handleClick}>Delete</button> 
                    <button className='btn btn-info'><Link to="/home">Home</Link></button>                 
                    </form>                  
                </div>                
            )}            
        </div>
    );
}

export default EliminarCitas;