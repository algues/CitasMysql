import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ModificarConsultorios = () => {

    const [numero, setNumero] = useState('');
    const [consultorio, setConsultorio] = useState({
        conNombre: ""
        
    });
    const [error, setError] = useState('');

    const buscarConsultorio = async () => {
        try {
             if (!numero) {
                setError('Enter number');
                return;
            }

            const res = await axios.get(`http://localhost:8800/consultorios/${numero}`);
            setConsultorio(res.data);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error || 'Error al buscar registro');
            } else {
                setError('Error de conexión con el servidor');
            }
        }
    };

    const handleChange = (e) =>{
        setConsultorio(prev=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
           await axios.put("http://localhost:8800/consultorios/"+ numero, consultorio)
           .then(res =>{
            if(res.data === "Success"){
                window.alert("Updated office")
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
            <h5 className='titulo'>Update Office</h5>
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
                    <h5 className='titulo'>Office data</h5>
                    <label>Nombre:</label>
                    <input type='text' name='conNombre' onChange={handleChange} value={consultorio.conNombre}></input>                    
                    <button className='btn btn-info' onClick={handleClick}>Actualizar</button> 
                    <button className='btn btn-info'><Link to="/">Home</Link></button>                 
                    </form>                  
                </div>                
            )}            
        </div>
    );
}

export default ModificarConsultorios;