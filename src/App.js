import './App.css';
import React  from 'react';
import Home from './Componets/Home';
import {Routes, Route} from "react-router-dom";
import Details from './Componets/Details';
import Team from './Componets/Team';
import Service from './Componets/Service';
import Contact from './Componets/Contact';
function App() {
  return (
    
      <React.Fragment>
    <Routes>
    <Route  path='/' element={<Home />} />
    <Route exact path='/Details/:id' element={<Details />} />
    <Route exact path='/Team' element={<Team />} />
    <Route exact path='/Service' element={<Service />} />
    <Route exact path='/Contact' element={<Contact />} />
    </Routes>
    </React.Fragment>
  
  );
}

export default App;
