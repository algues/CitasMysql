import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


const ListPatients = () => {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fecthAllPatients = async () => {
            try {
                const res = await axios.get("http://localhost:8800/pacientes");
                setPatients(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        fecthAllPatients();

    }, []); 
   
    return(
        <div>
          <Table>
              <thead>
                 <tr>
                    <td colSpan={5}><h5 className='titulo'>Listado de Pacientes Registrados</h5></td>
                 </tr>
                 <tr className='table-success'>
                    <th>Identificación</th>
                    <th>Apellidos</th>
                    <th>Nombres</th>
                    <th>Fecha Nacimiento</th>
                    <th>Sexo</th>
                 </tr>
              </thead>
              <tbody>
                 {patients.map((patient) => (
                     <tr key ={patient.pacIdentificacion}>
                       <td>{patient.pacIdentificacion}</td>
                       <td>{patient.pacApellidos}</td>
                       <td>{patient.pacNombres}</td>  
                       <td>{patient.pacFechaNacimiento}</td> 
                       <td>{patient.pacSexo}</td>                
                     </tr>
                 ))}
              </tbody>
              <tr>
                 <td colSpan={5}>
                    <button className='btn btn-info'><Link to="/">Home</Link></button>
                 </td>
              </tr>
          </Table>
        </div>
    )
}

export default ListPatients;