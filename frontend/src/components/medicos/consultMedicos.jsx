import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ConsultarMedicos = () => {

    const [medIdentificacion, setMedIdentificacion] = useState('');
    const [medico, setMedico] = useState(null);
    const [error, setError] = useState('');

    const buscarMedico = async () => {
        try {                        
            if (!medIdentificacion) {
                setError('Documento no válido');
                return;
            }

            const res = await axios.get(`http://localhost:8800/medicos/${medIdentificacion}`);
            setMedico(res.data);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error || 'Error al buscar usuario');
            } else {
                setError('Error de conexión con el servidor');
            }
        }
    };

    return (
        <div>
            <h5 className='titulo'>Buscar Medico por Identificación</h5>
            <input 
                style={{ width: '20%' }}                           
                type="number"
                value={medIdentificacion}
                onChange={(e) => setMedIdentificacion(e.target.value)}
                placeholder="Enter identification"
            />
            <button onClick={buscarMedico}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {medico && (
                <div>
                    <br />
                    <h5 className='titulo'>Datos del Medico</h5>
                    <p><b>Identificación:</b> {medico.medIdentificacion}</p>
                    <p><b>Apellidos:</b> {medico.medApellidos}</p>
                    <p><b>Nombres:</b> {medico.medNombres}</p>
                    <p><b>Telefono:</b> {medico.medTelefono}</p>
                    <p><b>Especialidad:</b> {medico.medEspecialidad}</p>                                      
                </div>                
            )}
            <div>
               <button className='btn btn-info'><Link to="/">Home</Link></button> 
            </div>
        </div>
    );
}

export default ConsultarMedicos;