import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Home = () => {
    return (
      <>
      <div>
         <h1 className='titulo'>Lafori Medical Center</h1>     
      </div>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          PACIENTES
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/addPacientes">Register</Dropdown.Item>
          <Dropdown.Item href="/consultaPacientes">Consult</Dropdown.Item>
          <Dropdown.Item href="/modificarPacientes">Update</Dropdown.Item>
          <Dropdown.Item href="/eliminarPacientes">Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          MEDICOS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/addMedicos">Register</Dropdown.Item>
          <Dropdown.Item href="/consultarMedicos">Consult</Dropdown.Item>
          <Dropdown.Item href="/modificarMedicos">update</Dropdown.Item>
          <Dropdown.Item href="/eliminarMedicos">Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          CONSULTORIOS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/addConsultorios">Register</Dropdown.Item>
          <Dropdown.Item href="/consultarConsultorios">Consult</Dropdown.Item>
          <Dropdown.Item href="/modificarConsultorios">Update</Dropdown.Item>
          <Dropdown.Item href="/eliminarConsultorios">Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          CITAS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/addCitas">Register</Dropdown.Item>
          <Dropdown.Item href="/consultarCitas">Consult</Dropdown.Item>
          <Dropdown.Item href="/modificarCitas">Update</Dropdown.Item>
          <Dropdown.Item href="/eliminarCitas">Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          TRATAMIENTOS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/addTratamientos">Register</Dropdown.Item>
          <Dropdown.Item href="/consultarTratamientos">Consult</Dropdown.Item>
          <Dropdown.Item href="/modificarTratamientos">Update</Dropdown.Item>
          <Dropdown.Item href="/eliminarTratamientos">Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> 

     <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          REPORTES
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/reportePacientes">Patients</Dropdown.Item>
          <Dropdown.Item href="/reporteMedicos">Doctors</Dropdown.Item>
          <Dropdown.Item href="/reporteConsultorios">Officess</Dropdown.Item>
          <Dropdown.Item href="/reporteCitas">Quotes</Dropdown.Item>
          <Dropdown.Item href="/reporteTratamientos">Treatment</Dropdown.Item>          
        </Dropdown.Menu>
      </Dropdown> 

     <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          EXIT
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Exit</Dropdown.Item>          
        </Dropdown.Menu>
      </Dropdown>  

    </>

    );
      
}

export default Home;
