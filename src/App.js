import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import Films from './pages/Films';
import Home from './pages/Home.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import People from './pages/People';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Starships from './pages/Starships';
import Vehicles from './pages/Vehicles';


function App() {
  
 

  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
      <Home>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/films" element={<Films/>}></Route>
        <Route path="/people" element={<People/>}></Route>
        <Route path="/planets" element={<Planets/>}></Route>
        <Route path="/species" element={<Species/>}></Route>
        <Route path="/starships" element={<Starships/>}></Route>
        <Route path="/vehicles" element={<Vehicles/>}></Route>
      </Routes>
      </Home>
    </BrowserRouter>
      {/* <Home/> */}
    </div>
  );
}

export default App;
