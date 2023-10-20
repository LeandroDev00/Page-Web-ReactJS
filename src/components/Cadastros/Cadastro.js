import React, {useState} from "react";
import "./stylecad.css"
import Axios from "axios";

function Cadastro(){
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

    return(
        <>
        <div className="App">
            <form className="fraseContainer">
                <div className='formulario'>
                    <p className="cabecalho">Registro de usuários</p>
                    <div>
                      <label>Nome:</label>
                      <input className="name" type="text" placeholder="Nome..." required="requerid" name="name" onChange={handleChangeValues} />
                    </div>

                    <div>
                      <label>Telefone:</label>
                      <input className="telefone"type="tel" placeholder="Contato..." required="requerid" name="telefone" onChange={handleChangeValues} />
                    </div>

                    <div>
                      <label>Email:</label>
                      <input className="email" type="email" placeholder="Email ..." required="requerid" name="Email" onChange={handleChangeValues} />
                    </div>

                    <div>
                      <label>Profissão:</label>
                      <input className="profissao"type="text" placeholder="Profissão..." required="requerid" name="profissao" onChange={handleChangeValues} />
                    </div>

                    <div>
                      <label>Idade:</label>
                      <input className="idade"type="text" placeholder="Sua Idade ..." required="requerid" name="idade" onChange={handleChangeValues} />
                    </div>
                </div>
                <button className="buttoncad" onClick={() => handleonclickButton()}>Cadastrar</button>
                <button type="reset" className="buttoncad">Limpar</button>
            </form>
        </div>
      </>

    )
}

export default Cadastro;