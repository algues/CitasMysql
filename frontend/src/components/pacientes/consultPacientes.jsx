import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ConsultarPacientes = () => {

    const [pacIdentificacion, setPacIdentificacion] = useState('');
    const [paciente, setPaciente] = useState(null);
    const [error, setError] = useState('');

    const buscarPaciente = async () => {
        try {
            if (!pacIdentificacion) {
                setError('Enter document');
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
                placeholder="Enter identification"
            />
            <button onClick={buscarPaciente}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {paciente && (
                <div>
                    <br></br>
                    <h5 className='titulo'>Patient data</h5>
                    <p><b>Id:</b> {paciente.pacIdentificacion}</p>
                    <p><b>Surname:</b> {paciente.pacApellidos}</p>
                    <p><b>Names:</b> {paciente.pacNombres}</p>
                    <p><b>Birthdate:</b> {paciente.pacFechaNacimiento}</p>
                    <p><b>Phone:</b> {paciente.pacTelefono}</p>
                    <p><b>Sex:</b> {paciente.pacSexo}</p>                    
                </div>                
            )}
            <div>
               <button className='btn btn-info'><Link to="/home">Home</Link></button> 
            </div>
        </div>
    );
}

export default ConsultarPacientes;