import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ConsultarPacientes = () => {

    const [pacIdentificacion, setPacIdentificacion] = useState('');
    const [paciente, setPaciente] = useState(null);
    const [error, setError] = useState('');

    const buscarPaciente = async () => {
        try {
            setError('');
            setPaciente(null);

            if (!pacIdentificacion || isNaN(pacIdentificacion)) {
                setError('Por favor ingresa un Documento válido');
                return;
            }

            const res = await axios.get(`http://localhost:8800/pacientes1/${pacIdentificacion}`);
            setPaciente(res.data);
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
            <h5 className='titulo'>Buscar Paciente por Identificación</h5>
            <input 
                style={{ width: '20%' }}                           
                type="number"
                value={pacIdentificacion}
                onChange={(e) => setPacIdentificacion(e.target.value)}
                placeholder="Ingresa Identificación"
            />
            <button onClick={buscarPaciente}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {paciente && (
                <div>
                    <br></br>
                    <h5 className='titulo'>Datos del Paciente</h5>
                    <p><b>Identificación:</b> {paciente.pacIdentificacion}</p>
                    <p><b>Apellidos:</b> {paciente.pacApellidos}</p>
                    <p><b>Nombres:</b> {paciente.pacNombres}</p>
                    <p><b>Fecha de Nacimiento:</b> {paciente.pacFechaNacimiento}</p>
                    <p><b>Telefono:</b> {paciente.pacTelefono}</p>
                    <p><b>Sexo:</b> {paciente.pacSexo}</p>                    
                </div>                
            )}
            <button className='btn btn-info'><Link to="/">Home</Link></button> 
        </div>
    );
}

export default ConsultarPacientes;