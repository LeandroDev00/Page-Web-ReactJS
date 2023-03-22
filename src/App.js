import React, {useState, useEffect} from "react";
import './App.css';
import styles from './components/Frase.module.css';
import Axios from "axios";
import Card from "./components/Cards/card";
import Cardtitle from "./components/Cards/cardtitle"
/**/
function App() {
const [values, setValues] = useState();
const [listdata, setlistData] = useState();


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

  useEffect(()=>{
    Axios.get("http://localhost:3001/getCards").then((response)=>{
      setlistData(response.data);
    });
  }, []);

  return (
    
    <>
    <div className="App">

      <form className={styles.fraseContainer}>
        <div className='formulario'>
          <p className="cabecalho">Registro de usuários</p>
          <label>Nome:</label>
          <input type="text" placeholder="Nome..." required="requerid" name="name" onChange={handleChangeValues} />

          <label>Telefone:</label>
          <input type="tel" placeholder="Contato ..." required="requerid" name="telefone" onChange={handleChangeValues} />

          <label>Email:</label>
          <input type="email" placeholder="Email ..." required="requerid" name="Email" onChange={handleChangeValues} />

          <label>Profissão:</label>
          <input type="text" placeholder="Profissão deseja ..." required="requerid" name="profissao" onChange={handleChangeValues} />

          <label>Idade:</label>
          <input type="text" placeholder="Sua Idade ..." required="requerid" name="idade" onChange={handleChangeValues} />
        </div>
        <button className="buttoncad" onClick={() => handleonclickButton()}>Cadastrar</button>
        <button type="reset" className="buttoncad">Limpar</button>
      </form>

      
    </div> 
      
    <div className="tables">
      <Cardtitle />

      {typeof listdata !== "undefined" &&
          listdata.map((value) => {
            return (
              <Card
                key={value.id}
                listcard={listdata}
                setlistCard={setlistData}


                name={value.name}
                telefone={value.telefone}
                Email={value.email}
                profissao={value.profissao}
                idade={value.idade}

              ></Card>

            );
          })}
      </div>
    </>
  )

}

export default App;