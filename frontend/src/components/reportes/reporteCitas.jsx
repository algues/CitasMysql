import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const ReporteCitas = () => {

    const [citas, setCitas] = useState([]);

    useEffect(() => {
        const fecthAllCitas = async () =>{
            try{
               const res = await axios.get("http://localhost:8800/citas1");
               setCitas(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fecthAllCitas();
    }, []);

    return (                        
      <Table>          
      <thead>
        <tr>
          <td colSpan={8}><h3 className='titulo'>Reporte de Citas</h3></td>
        </tr>
        <tr className='table-warning'>
          <th>Número</th>
          <th>Fecha Cita</th>
          <th>Hora Cita</th>
          <th>Paciente</th>          
          <th>Médico</th>
          <th>Consultorio</th>
          <th>Estado Cita</th>
          <th>Observaciones</th>          
        </tr>
      </thead>
      <tbody>         
        {citas.map((cita) => (
             <tr key={cita.citaNumero}>                        
                <td>{cita.citaNumero}</td>
                <td>{cita.citaFecha}</td>               
                <td>{cita.citaHora}</td>
                <td>{cita.pacNombres}</td> 
                <td>{cita.medNombres}</td>
                <td>{cita.conNombre}</td>
                <td>{cita.citaEstado}</td>
                <td>{cita.citaObservaciones}</td>                 
             </tr>             
            ))}                           
      </tbody>  
      <tr>                 
        <td colSpan={8}>        
          <button className='btn btn-info'><Link to="/">Home</Link></button>      
        </td>      
      </tr>          
      </Table>        
    );
}

export default ReporteCitas;

