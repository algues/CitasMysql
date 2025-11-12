import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import AddPacientes from './components/pacientes/addPacientes';
import ConsultaPacientes from './components/pacientes/consultPacientes';
import ModificarPacientes from './components/pacientes/updatePacientes';
import EliminarPacientes from './components/pacientes/deletePacientes';
import AddMedicos from './components/medicos/addMedicos';
import ConsultarMedicos from './components/medicos/consultMedicos';
import ModificarMedicos from './components/medicos/updateMedicos';
import EliminarMedicos from './components/medicos/deleteMedicos';
import AddConsultorios from './components/consultorios/addConsultorios';
import ConsultarConsultorios from './components/consultorios/consultConsultorio';
import ModificarConsultorios from './components/consultorios/updateConsultorio';
import EliminarConsultorios from './components/consultorios/deleteConsultorios';
import AddCitas from './components/citas/addCitas';
import ConsultarCitas from './components/citas/consultCitas';
import ModificarCitas from './components/citas/updateCitas';
import EliminarCitas from './components/citas/deleteCitas';


function App() {
  return (
    <div className="App">
      <header className="">
       <Router>
        <Routes> 
          <Route  exact path='/' element={<Home />}></Route>  
          <Route  path='/addPacientes' element={<AddPacientes />}></Route> 
          <Route  path='/consultaPacientes' element={<ConsultaPacientes />}></Route>  
          <Route  path='/modificarPacientes' element={<ModificarPacientes />}></Route> 
          <Route  path='/eliminarPacientes' element={<EliminarPacientes />}></Route>  
          <Route  path='/addMedicos' element={<AddMedicos />}></Route> 
          <Route  path='/consultarMedicos' element={<ConsultarMedicos />}></Route> 
          <Route  path='/modificarMedicos' element={<ModificarMedicos />}></Route> 
          <Route  path='/eliminarMedicos' element={<EliminarMedicos />}></Route>  
          <Route  path='/addConsultorios' element={<AddConsultorios />}></Route> 
          <Route  path='/consultarConsultorios' element={<ConsultarConsultorios />}></Route> 
          <Route  path='/modificarConsultorios' element={<ModificarConsultorios />}></Route> 
          <Route  path='/eliminarConsultorios' element={<EliminarConsultorios />}></Route>  
          <Route  path='/addCitas' element={<AddCitas />}></Route> 
          <Route  path='/consultarCitas' element={<ConsultarCitas />}></Route>   
          <Route  path='/modificarCitas' element={<ModificarCitas />}></Route>
          <Route  path='/eliminarCitas' element={<EliminarCitas />}></Route>   
        </Routes>
      </Router>     
      </header>
    </div>
  );
}

export default App;
