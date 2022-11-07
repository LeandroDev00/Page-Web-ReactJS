import React, {useState} from "react";
import './App.css';
/*import Item from './components/Item';*/
import styles from './components/Frase.module.css';
import Axios from "axios";

function App() {
const [values, setValues] = useState();

  const handleChangeValues = (Value) =>{
  setValues((prevValue)=>({
    ...prevValue,
    [Value.target.name]: Value.target.value,
  }));
};

  const handleonclickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      telefone: values.telefone,
      Email: values.Email,
      profissao: values.profissao,
      idade: values.idade,
    }).then ((response) =>{
      console.log(response);
    });
  };

  const handleonclickconsulta = () =>{
    Axios.get("http://localhost:3001/register",{
      name: values.name,
      telefone: values.telefone,
      Email: values.Email,
      profissao: values.profissao,
      idade: values.idade,
    }).then ((response) =>{
      console.log(response);
    });
  };

  return (
    
    <div className="App">
        <form className={styles.fraseContainer}>
          <div className='formulario'>
            <p>Cadastro de dados para o formulário</p>
            <label>Nome:</label>
              <input type="text" placeholder="Nome" required="requerid" name="name" onChange={handleChangeValues}/>

            <label>Telefone:</label>
              <input type="tel" placeholder="Contato ..." required="requerid" name="telefone" min="10"  onChange={handleChangeValues}/>

            <label>Email:</label>
              <input type="email" placeholder="Email ..." required="requerid" name="Email" onChange={handleChangeValues}/>

            <label>Profissão:</label>
              <input type="text" placeholder="Profissão deseja ..." required="requerid" name="profissao" onChange={handleChangeValues}/>
                    
            <label>Idade:</label>
              <input type="text" placeholder="Sua Idade ..." required="requerid" name="idade" onChange={handleChangeValues}/>
          </div>
          <button className="buttoncad" onClick={() => handleonclickButton()}>Cadastrar</button>
          <button type="reset"className="buttoncad" >Limpar</button>
        </form>

        <form className={styles.fraseContainer2}>
          <nav className="formulario_consulta">
            <p>Consulta dos dados</p>
            <input type="search" placeholder="Digite o nome para consultar..." required="requerid" name="consulta" onChange={handleChangeValues} ></input>
            <button className="buttoncons" onClick={() => handleonclickconsulta()}>Consultar</button>
          </nav>
        </form>
    </div>
  )

}

export default App;
