import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EliminarMedicos = () => {

    const [Identificacion, setIdentificacion] = useState('');
    const [medico, setMedico] = useState({
        medIdentificacion: "",
        medApellidos: "",
        medNombres: "",        
        medTelefono: "",
        medEspecialidad: ""
    });
    const [error, setError] = useState('');

    const buscarMedico = async () => {
        try {
             if (!Identificacion) {
                setError('Please enter a valid document');
                return;
            }

            const res = await axios.get(`http://localhost:8800/medicos/${Identificacion}`);
            setMedico(res.data);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error || 'Error al buscar el registro');
            } else {
                setError('Error de conexión con el servidor');
            }
        }
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
           await axios.delete("http://localhost:8800/medicos/"+ Identificacion)
           .then(res =>{
            if(res.data === "Success"){
                window.alert("Doctor eliminated")
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
            <h5 className='titulo'>Elimination of Doctors</h5>
            <input 
                style={{ width: '20%' }}                           
                type="number"
                value={Identificacion}
                onChange={(e) => setIdentificacion(e.target.value)}
                placeholder="Enter Identification"
            />
            <button onClick={buscarMedico}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {medico && (
                <div className='container'>
                    <br />
                    <br />
                    <form className='form'>
                    <h5 className='titulo'>Doctor's informations</h5>
                    <label>Identificación:</label>
                    <input type='numeric' name='medIdentificacion' value={medico.medIdentificacion}></input>
                    <label>Apellidos:</label>
                    <input type='text' name='medApellidos' value={medico.medApellidos}></input>
                    <label>Nombres:</label>
                    <input type='text' name='medNombres' value={medico.medNombres}></input>
                    <label>Telefono</label>                                     
                    <input type='text' name='medTelefono' value={medico.medTelefono}></input>
                    <label>Especialidad:</label>
                    <input type='text' name='medEspecialidad' value={medico.medEspecialidad}></input>   
                    <button className='btn btn-info' onClick={handleClick}>Delete</button> 
                    <button className='btn btn-info'><Link to="/home">Home</Link></button>                 
                    </form>                  
                </div>                
            )}            
        </div>
    );
}

export default EliminarMedicos;