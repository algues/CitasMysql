import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EliminarTratamientos = () => {

    const [numero, setNumero] = useState('');
    const [tratamiento, setTratamiento] = useState({
        traFechaAsignada: "",
        traDescripcion: "",
        traFechaInicio: "",
        traFechaFin: "",
        traObservaciones: "",
        traPaciente: ""

    });
    const [error, setError] = useState('');

    const buscarTratamiento = async () => {
        try {
            if (!numero) {
                setError('Enter number');
                return;
            }

            const res = await axios.get(`http://localhost:8800/tratamientos/${numero}`);
            setTratamiento(res.data);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error || 'Error al buscar registro');
            } else {
                setError('Error de conexión con el servidor');
            }
        }
    };

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.delete("http://localhost:8800/tratamientos/" + numero)
                .then(res => {
                    if (res.data === "Success") {
                        window.alert("Tratamiento eliminado")
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
            <h5 className='titulo'>Eliminar Tratamientos</h5>
            <input
                style={{ width: '20%' }}
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Enter number"
            />
            <button onClick={buscarTratamiento}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {tratamiento && (
                <div className='container'>
                    <br />
                    <br />
                    <form className='form'>
                        <h5 className='titulo'>Datos del Tratamiento</h5>
                        <label>Fecha Asignada:</label>
                        <input className='input' type="date" name='traFechaAsignada' value={tratamiento.traFechaAsignada}></input>
                        <label>Descripcion:</label>
                        <textarea className='input' type="text" name='traDescripcion' value={tratamiento.traDescripcion} rows={3}></textarea>
                        <label>Fecha Inicio:</label>
                        <input className='input' type="date" name='traFechaInicio' value={tratamiento.traFechaInicio}></input>
                        <label>Fecha Finalización:</label>
                        <input className='input' type="date" name='traFechaFin' value={tratamiento.traFechaFin}></input>
                        <label>Observaciones:</label>
                        <textarea className='input' type="text" name='traObservaciones' value={tratamiento.traObservaciones} rows={3}></textarea>
                        <label>Identificacion Paciente</label>
                        <input className='input' type="text" name='traPaciente' value={tratamiento.traPaciente}></input>
                        <br />
                        <br />
                        <button className='btn btn-info' onClick={handleClick}>Delete</button>
                        <button className='btn btn-info'><Link to="/home">Home</Link></button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default EliminarTratamientos;