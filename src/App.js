import React from "react";
/*
import { Routes, BrowserRouter as Router, Route} from "react-router-dom";
*/
import Cadastro from "./components/Cadastros/Cadastro";
import Consultadados from "./components/Consulta/Consulta";

function App() {

  return (

    <>
      <Cadastro />
      <Consultadados />
    
    </>
    /*
      <Router>
          <Routes>
            <Route path="/" element={<Consultadados/>} />
            <Route path="/cadastrar" element={<Cadastro />} />
          </Routes>
      </Router>
    */
  )

}

export default App;