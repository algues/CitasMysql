import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EliminarPacientes = () => {

    const [pacIdentificacion, setPacIdentificacion] = useState('');
    const [paciente, setPaciente] = useState({
        pacIdentificacion: "",
        pacApellidos: "",
        pacNombres: "",
        pacFechaNacimiento: "",
        pacTelefono: "",
        pacSexo: ""
    });
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

    const handleClick = async e =>{
        e.preventDefault()
        try{
           await axios.delete("http://localhost:8800/pacientes/"+ pacIdentificacion)
           .then(res =>{
            if(res.data === "Success"){
                window.alert("Eliminated patient")
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
            <h5 className='titulo'>Remove patients</h5>
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
                <div className='container'>
                    <br />
                    <br />
                    <form className='form'>
                    <h5 className='titulo'>Patient data</h5>
                    <label>Identificación:</label>
                    <input type='numeric' name='pacIdentificacion' value={paciente.pacIdentificacion}></input>
                    <label>Apellidos:</label>
                    <input type='text' name='pacApellidos' value={paciente.pacApellidos}></input>
                    <label>Nombres:</label>
                    <input type='text' name='pacNombres' value={paciente.pacNombres}></input>
                    <label>Fecha de Nacimiento:</label>
                    <input type='text' name='pacFechaNacimiento' value={paciente.pacFechaNacimiento}></input>
                    <label>Telefono:</label>
                    <input type='text' name='pacTelefono' value={paciente.pacTelefono}></input>
                    <label>Sexo:</label>
                    <input type='text' name='pacSexo' value={paciente.pacSexo}></input>   
                    <button className='btn btn-info' onClick={handleClick}>Eliminar</button> 
                    <button className='btn btn-info'><Link to="/home">Home</Link></button>                 
                    </form>                  
                </div>                
            )}            
        </div>
    );
}

export default EliminarPacientes;