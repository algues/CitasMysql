import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ConsultarConsultorios = () => {

    const [numero, setNumero] = useState('');
    const [consultorio, setConsultorio] = useState(null);
    const [error, setError] = useState('');

    const buscarConsultorio = async () => {
        try {
             if (!numero) {
                setError('Please enter number');
                return;
            }
            const res = await axios.get(`http://localhost:8800/consultorios/${numero}`);
            setConsultorio(res.data);

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
            <h5 className='titulo'>Consult Offices</h5>
            <input 
                style={{ width: '20%' }}                           
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="number"
            />
            <button onClick={buscarConsultorio}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {consultorio && (
                <div>
                    <br />
                    <h5 className='titulo'>Office data</h5>
                    <p><b>Number:</b> {consultorio.conNumero}</p>
                    <p><b>Name:</b> {consultorio.conNombre}</p>                          
                </div>                
            )}
            <div>
               <button className='btn btn-info'><Link to="/home">Home</Link></button> 
            </div>
        </div>
    );
}

export default ConsultarConsultorios;
