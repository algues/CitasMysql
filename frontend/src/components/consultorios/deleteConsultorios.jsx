import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EliminarConsultorios = () => {

    const [numero, setNumero] = useState('');
    const [consultorio, setConsultorio] = useState({
        conNumero: "",
        conNombre: ""       
    });
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
                setError(err.response.data.error || 'Error al buscar el registro');
            } else {
                setError('Error de conexión con el servidor');
            }
        }
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
           await axios.delete("http://localhost:8800/consultorios/"+ numero)
           .then(res =>{
            if(res.data === "Success"){
                window.alert("Office eliminated")
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
            <h5 className='titulo'>Delete Offices</h5>
            <input 
                style={{ width: '20%' }}                           
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Enter number"
            />
            <button onClick={buscarConsultorio}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {consultorio && (
                <div className='container'>
                    <br />
                    <br />
                    <form className='form'>
                    <h5 className='titulo'>Office informations</h5>
                    <label>Number:</label>
                    <input type='numeric' name='conNumero' value={consultorio.conNumero}></input>
                    <label>Name:</label>
                    <input type='text' name='conNombre' value={consultorio.conNombre}></input>                      
                    <button className='btn btn-info' onClick={handleClick}>Delete</button> 
                    <button className='btn btn-info'><Link to="/home">Home</Link></button>                 
                    </form>                  
                </div>                
            )}            
        </div>
    );
}

export default EliminarConsultorios;