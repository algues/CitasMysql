import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const ReporteTratamientos = () => {

    const [tratamientos, setTratamientos] = useState([]);

    useEffect(() => {
        const fecthAllTratamientos = async () =>{
            try{
               const res = await axios.get("http://localhost:8800/tratamientos1");
               setTratamientos(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fecthAllTratamientos();
    }, []);

   return (                        
      <Table>          
      <thead>
        <tr>
          <td colSpan={8}><h5 className='titulo'>Reporte de  Tramientos registrados</h5></td>
        </tr> 
        <tr className='table-primary'>
          <th>Número</th>
          <th>Fecha Asignada</th>
          <th>Descripcion </th>
          <th>Fecha Inicio</th>
          <th>Fecha Finalización</th>
          <th>Observaciones</th>
          <th>Paciente</th>                     
        </tr>
      </thead>
      <tbody>         
        {tratamientos.map((tratamiento) => (
             <tr key={tratamiento.traNumero}>                        
                <td>{tratamiento.traNumero}</td>
                <td>{tratamiento.traFechaAsignada}</td> 
                <td className='td'>{tratamiento.traDescripcion}</td>
                <td>{tratamiento.traFechaInicio}</td>
                <td>{tratamiento.traFechaFin}</td>
                <td className='td'>{tratamiento.traObservaciones}</td>
                <td>{tratamiento.pacNombres}</td>            
              </tr>             
            ))}                           
      </tbody>  
      <tr>                 
        <td colSpan={8}>            
          <button className='btn btn-primary'><Link to="/">Home</Link></button>      
        </td>      
      </tr>          
      </Table>        
    );
}

export default ReporteTratamientos;
