import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import Home from './Pages';
import EspaceAdministration from './Pages/EspaceAdministration/EspaceAdministration';
import EspaceJurys from './Pages/EspaceJurys/EspaceJurys.js';
import EspaceSuperviseur from './Pages/EspaceSuperviseur/EspaceSuperviseur'
import Fiche1 from './components/Fiches/Fiche1';
import Fiche2 from './components/Fiches/Fiche2';
import Note from './components/Fiches/note';
import Login from './components/authentification/authentification';
import Fiche from './components/Fiches/fiche note/fiche_note';
import ProcesVerbale from './components/Fiches/pv/pv';

  
function App() {

return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/Espace_administration' element={<EspaceAdministration />}/>
      <Route path='/Espace_jurys' element={<EspaceJurys />} />
      <Route path='/Espace_superviseur/Fiche1' element={<Fiche1 />} />
      <Route path='/Espace_superviseur/Fiche2' element={<Fiche2/>}/>
      <Route path='/Espace_superviseur' element={<EspaceSuperviseur />} />  
      < Route path='/Espace_superviseur/Note' element={<Note />} /> 
      <Route path='/Espace_superviseur/authentification' element={<Login/>} /> 
      <Route path="/pages/fiche%20note/fiche" element={<Fiche />} />
      <Route path="/procesverbale" element={<ProcesVerbale />} />
      <Route path='/Espace_administration/authentification' element={<Login/>} />  
   
      
    </Routes>
    </Router>
);
}
  
export default App;
