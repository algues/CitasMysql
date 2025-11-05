import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ModificarMedicos = () => {

    const [Identificacion, setIdentificacion] = useState('');
    const [medico, setMedico] = useState({
        medIdentificacion: "",
        medApellidos: "",
        medNombres: "",        
        mecTelefono: "",
        medEspecialidad: ""
    });
    const [error, setError] = useState('');

    const buscarMedico = async () => {
        try {
             if (!Identificacion) {
                setError('Enter a valid document');
                return;
            }

            const res = await axios.get(`http://localhost:8800/medicos/${Identificacion}`);
            setMedico(res.data);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error || 'Error al buscar registro');
            } else {
                setError('Error de conexión con el servidor');
            }
        }
    };

    const handleChange = (e) =>{
        setMedico(prev=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
           await axios.put("http://localhost:8800/medicos/"+ Identificacion, medico)
           .then(res =>{
            if(res.data === "Success"){
                window.alert("Updated Doctor")
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
            <h5 className='titulo'>Actualización de Pacientes</h5>
            <input 
                style={{ width: '20%' }}                           
                type="number"
                value={Identificacion}
                onChange={(e) => setIdentificacion(e.target.value)}
                placeholder="Enter identification"
            />
            <button onClick={buscarMedico}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {medico && (
                <div className='container'>
                    <br />
                    <br />
                    <form className='form'>
                    <h5 className='titulo'>Datos del Paciente</h5>
                    <label>Identificación:</label>
                    <input type='numeric' name='medIdentificacion' onChange={handleChange} value={medico.medIdentificacion}></input>
                    <label>Apellidos:</label>
                    <input type='text' name='medApellidos' onChange={handleChange} value={medico.medApellidos}></input>
                    <label>Nombres:</label>
                    <input type='text' name='medNombres' onChange={handleChange} value={medico.medNombres}></input>                    
                    <label>Telefono:</label>
                    <input type='text' name='medTelefono' onChange={handleChange} value={medico.medTelefono}></input>
                    <label>Especialidad:</label>
                    <input type='text' name='medEspecialidad' onChange={handleChange} value={medico.medEspecialidad}></input>   
                    <button className='btn btn-info' onClick={handleClick}>Actualizar</button> 
                    <button className='btn btn-info'><Link to="/">Home</Link></button>                 
                    </form>                  
                </div>                
            )}            
        </div>
    );
}

export default ModificarMedicos;