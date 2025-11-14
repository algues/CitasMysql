import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const ReporteMedicos = () => {

    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
        const fecthAllMedicos = async () =>{
            try{
               const res = await axios.get("http://localhost:8800/medicos");
               setMedicos(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fecthAllMedicos();
    }, []);

    
    return (        
      <Table>          
      <thead>
        <tr>
          <td colSpan={6}><h5 className='titulo'>Reporte de Médicos registrados</h5></td>                  
        </tr>
        <tr className='table-danger'>
          <th>Identificacion</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Especialidad</th>          
        </tr>
      </thead>
      <tbody>         
        {medicos.map((medico) => (
             <tr key={medico.medIdentificacion}>                        
                <td>{medico.medIdentificacion}</td>
                <td>{medico.medNombres}</td>               
                <td>{medico.medApellidos}</td>
                <td>{medico.medEspecialidad}</td>                   
            
             </tr>             
            ))}                           
      </tbody>
      <tr> 
        <td colSpan={5}>    
        
          <button className='btn btn-info'><Link to="/">Home</Link></button> 
        </td> 
      </tr>                  
      </Table>
    );
}

export default ReporteMedicos;