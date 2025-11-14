import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ConsultarTratamientos = () => {

    const [numero, setNumero] = useState('');
    const [tratamiento, setTratamiento] = useState(null);
    const [error, setError] = useState('');

    const buscarTratamiento = async () => {
        try {
             if (!numero) {
                setError('Please enter number');
                return;
            }
            const res = await axios.get(`http://localhost:8800/tratamientos/${numero}`);
            setTratamiento(res.data);

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
            <h5 className='titulo'>Consultar Tratamientos</h5>
            <input 
                style={{ width: '20%' }}                           
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="number"
            />
            <button onClick={buscarTratamiento}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {tratamiento && (
                <div>
                    <br />
                    <h5 className=''>Datos del Tratamiento</h5>
                    <p><b>Numero:</b> {tratamiento.traNumero}</p>
                    <p><b>Fecha Asignada:</b> {tratamiento.traFechaAsignada}</p> 
                    <p><b>Descripción:</b> {tratamiento.traDescripcion}</p> 
                    <p><b>Fecha de inicio:</b> {tratamiento.traFechaInicio}</p> 
                    <p><b>Fecha finalización:</b> {tratamiento.traFechaFin}</p> 
                    <p><b>Oservaciones:</b> {tratamiento.traObservaciones}</p> 
                    <p><b>Paciente:</b> {tratamiento.traPaciente}</p> 
                    <p><b>Nombres:</b> {tratamiento.pacNombres}</p>                                    
                </div>                
            )}
            <div>
               <button className='btn btn-info'><Link to="/">Home</Link></button> 
            </div>
        </div>
    );
}

export default ConsultarTratamientos;
