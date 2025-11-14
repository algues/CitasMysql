import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const ReporteConsultorio = () => {

    const [consultorios, setConsultorios] = useState([]);

    useEffect(() => {
        const fecthAllConsultorios = async () =>{
            try{
               const res = await axios.get("http://localhost:8800/consultorios");
               setConsultorios(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fecthAllConsultorios();
    }, []);

    
    return (                        
      <Table className='table'>          
      <thead>
        <tr>
        <td colSpan={2}><h5 className='titulo'>Reporte de Consultorios registrados</h5></td>
        </tr>
        <tr className='table-warning'>
          <th>Número</th>
          <th>Nombre Consultorio</th>                
        </tr>
      </thead>
      <tbody>         
        {consultorios.map((consultorio) => (
             <tr key={consultorio.conNumero}>                        
                <td>{consultorio.conNumero}</td>
                <td>{consultorio.conNombre}</td>                                      
             </tr>             
            ))}                           
      </tbody>  
      <tr>                 
        <td colSpan={2}>            
          <button className='btn btn-info'><Link to="/">Home</Link></button>      
        </td>      
      </tr>          
      </Table>        
    );
}

export default ReporteConsultorio;
