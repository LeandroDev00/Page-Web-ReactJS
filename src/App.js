import React from "react";

import { Routes, BrowserRouter as Router, Route, Link} from "react-router-dom";

import Consultadados from "./components/Consulta/Consulta";

function App() {

  return (

    <>
      <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/consultar">Consulta</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/consultar" element={<Consultadados/>}/>
          </Routes>
      </Router>
    </>
    
    
  )

}

export default App;