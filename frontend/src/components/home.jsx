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
          PATIENTS
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
          DOCTORS
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
          OFFICES
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Register</Dropdown.Item>
          <Dropdown.Item href="#">Consult</Dropdown.Item>
          <Dropdown.Item href="#">Update</Dropdown.Item>
          <Dropdown.Item href="#">Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          QUOTES
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Register</Dropdown.Item>
          <Dropdown.Item href="#">Consult</Dropdown.Item>
          <Dropdown.Item href="#">Update</Dropdown.Item>
          <Dropdown.Item href="#">Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          TREATMENTS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Register</Dropdown.Item>
          <Dropdown.Item href="#">Consult</Dropdown.Item>
          <Dropdown.Item href="#">Update</Dropdown.Item>
          <Dropdown.Item href="#">Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> 

     <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          REPORTS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Patients</Dropdown.Item>
          <Dropdown.Item href="#">Doctors</Dropdown.Item>
          <Dropdown.Item href="#">Officess</Dropdown.Item>
          <Dropdown.Item href="#">Quotes</Dropdown.Item>
          <Dropdown.Item href="#">Treatment</Dropdown.Item>          
        </Dropdown.Menu>
      </Dropdown> 

     <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          EXIT
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/login">Exit</Dropdown.Item>          
        </Dropdown.Menu>
      </Dropdown>  

    </>

    );
      
}

export default Home;
