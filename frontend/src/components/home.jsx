import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Home = () => {
    return (
      <>
      <div>
         <h1 className='titulo'>Centro Médico La Maria</h1>     
      </div>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          PACIENTES
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/addPacientes">Adicionar Pacientes</Dropdown.Item>
          <Dropdown.Item href="#">Consultar Pacientes</Dropdown.Item>
          <Dropdown.Item href="#">Modificar Pacientes</Dropdown.Item>
          <Dropdown.Item href="#">Eliminar Pacientes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          MEDICOS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Adicionar Médicos</Dropdown.Item>
          <Dropdown.Item href="#">Consultar Médicos</Dropdown.Item>
          <Dropdown.Item href="#">Modificar Médicos</Dropdown.Item>
          <Dropdown.Item href="#">Eliminar Médicos</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          CONSULTORIOS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Adicionar Consultorios</Dropdown.Item>
          <Dropdown.Item href="#">Consultar Consultorios</Dropdown.Item>
          <Dropdown.Item href="#">Modificar Consultorios</Dropdown.Item>
          <Dropdown.Item href="#">Eliminar Consultorios</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          CITAS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Adicionar Citas</Dropdown.Item>
          <Dropdown.Item href="#">Consultar Citas</Dropdown.Item>
          <Dropdown.Item href="#">Modificar Citas</Dropdown.Item>
          <Dropdown.Item href="#">Eliminar Citas</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          TRATAMIENTOS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Adicionar Tratamientos</Dropdown.Item>
          <Dropdown.Item href="#">Consultar Tratamientos</Dropdown.Item>
          <Dropdown.Item href="#">Modificar Tratamientos</Dropdown.Item>
          <Dropdown.Item href="#">Eliminar Tratamientos</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> 

     <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          REPORTES
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Reportes de Pacientes</Dropdown.Item>
          <Dropdown.Item href="#">Reporte de Médicos</Dropdown.Item>
          <Dropdown.Item href="#">Reporte de Consultorios</Dropdown.Item>
          <Dropdown.Item href="#">Reporte de Citas</Dropdown.Item>
          <Dropdown.Item href="#">Reporte de Tratamientos</Dropdown.Item>          
        </Dropdown.Menu>
      </Dropdown> 

     <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          SALIR
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/login">Salir</Dropdown.Item>          
        </Dropdown.Menu>
      </Dropdown>  


    </>

    );
      
}

export default Home;
