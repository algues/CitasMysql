import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ConsultarCitas = () => {

    const [numero, setNumero] = useState('');
    const [cita, setCita] = useState(null);
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
                setError(err.response.data.error || 'Error al buscar consultorio');
            } else {
                setError('Error de conexión con el servidor');
            }
        }
    };

    return (
        <div>
            <h5 className='titulo'>Consultar Citas</h5>
            <input 
                style={{ width: '20%' }}                           
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="number"
            />
            <button onClick={buscarCita}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {cita && (
                <div>
                    <br />
                    <h5 className=''>Datos de la Cita</h5>
                    <p><b>Numero:</b> {cita.citaNumero}</p>
                    <p><b>Fecha:</b> {cita.citaFecha}</p> 
                    <p><b>Hora:</b> {cita.citaHora}</p> 
                    <p><b>Paciente:</b> {cita.citaPaciente}</p> 
                    <p><b>Médico:</b> {cita.citaMedico}</p> 
                    <p><b>Consultorio:</b> {cita.citaConsultorio}</p> 
                    <p><b>Estado:</b> {cita.citaEstado}</p> 
                    <p><b>Observaciones:</b> {cita.citaObservaciones}</p>                          
                </div>                
            )}
            <div>
               <button className='btn btn-info'><Link to="/">Home</Link></button> 
            </div>
        </div>
    );
}

export default ConsultarCitas;
