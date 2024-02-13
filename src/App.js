import React from "react";
import './index.css';

import { Routes, BrowserRouter as Router, Route, Link} from "react-router-dom";

import Consultadados from "./components/Consulta/Consulta";
import Cadastro from "./components/Cadastros/Cadastro";
import Home from "./components/Home/Home"

function App() {

  return (
    <>
    <nav>
      <Router>
          <ul className="Navigation">
            <p><Link className="textoformat" to="/">Home</Link></p>
            <p><Link to="/cadastro">Cadastro</Link></p>
            <p><Link to="/cadastro/colaborador">Colaborador</Link></p>
          </ul>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/cadastro/colaborador" element={<Consultadados/>}/>
          </Routes>
      </Router>
    </nav>
    </>
    
    
  )
}

export default App;