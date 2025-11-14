import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ModificarCitas = () => {

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
                setError('Enter number');
                return;
            }

            const res = await axios.get(`http://localhost:8800/citas/${numero}`);
            setCita(res.data);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error || 'Error al buscar registro');
            } else {
                setError('Error de conexión con el servidor');
            }
        }
    };

    const handleChange = (e) => {
        setCita(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/citas/" + numero, cita)
                .then(res => {
                    if (res.data === "Success") {
                        window.alert("Cita actualizada")
                    } else {
                        window.alert("Error durante el procedimiento")
                    }
                })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h5 className='titulo'>Actualizar Citas</h5>
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
                        <label>Fecha Cita</label>
                        <input type="date" onChange={handleChange} name='citaFecha' value={cita.citaFecha}></input>
                        <label>Hora Cita</label>
                        <input type="text" onChange={handleChange} name='citaHora' value={cita.citaHora}></input>
                        <label>Documento Paciente</label>
                        <input type="numeric" onChange={handleChange} name='citaPaciente' value={cita.citaPaciente}></input>
                        <label>Documento Médico</label>
                        <input type="numeric" onChange={handleChange} name='citaMedico' value={cita.citaMedico}></input>
                        <label>Consultorio Número</label>
                        <input type="numeric" onChange={handleChange} name='citaConsultorio' value={cita.citaConsultorio}></input>
                        <label>Estado Cita</label>
                        <input type="text" onChange={handleChange} name='citaEstado' value={cita.citaEstado}></input>
                        <label>Observaciones</label>
                        <textarea type="text" onChange={handleChange} name='citaObservaciones' value={cita.citaObservaciones} rows={3}></textarea>
                        <button className='btn btn-info' onClick={handleClick}>Update</button>
                        <button className='btn btn-info'><Link to="/home">Home</Link></button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ModificarCitas;