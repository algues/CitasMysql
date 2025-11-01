import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import AddPacientes from './components/pacientes/addPacientes';


function App() {
  return (
    <div className="App">
      <header className="">
       <Router>
        <Routes> 
          <Route  exact path='/' element={<Home />}></Route>  
          <Route  path='/addPacientes' element={<AddPacientes />}></Route>                       
        </Routes>
      </Router>     
      </header>
    </div>
  );
}

export default App;
