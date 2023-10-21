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
          <p className="cabecalho">Cadastro de Funcionarios 📑</p>
            <form className="fraseContainer">
                <div className='formulario'>
                    <div className="form_group">
                      <input className="form_field" type="input" placeholder="Name" required="requerid" name="name" onChange={handleChangeValues} />
                      <label for="name" className="form_label">Name</label>
                    </div>

                    <div className="form_group">
                      <input className="form_field" type="tel" placeholder="Contact..." required="requerid" name="telefone" onChange={handleChangeValues} />
                      <label for="name" className="form_label">Contact  </label>
                    </div>

                    <div className="form_group">
                      <input className="form_field" type="email" placeholder="Email ..." required="requerid" name="Email" onChange={handleChangeValues} />
                      <label for="name" className="form_label">Email  </label>
                    </div>

                    <div className="form_group">
                      <input className="form_field"type="input" placeholder="Professional..." required="requerid" name="profissao" onChange={handleChangeValues} />
                      <label for="name" className="form_label">Professional  </label>
                    </div>

                    <div className="form_group">
                      <input className="form_field"type="input" placeholder="Age ..." required="requerid" name="idade" onChange={handleChangeValues} />
                      <label for="name" className="form_label">Age  </label>
                    </div>
                </div>
                <button className="buttoncad" onClick={() => handleonclickButton()}>CADASTRAR</button>
                <button type="reset" className="buttoncad">LIMPAR</button>
            </form>
        </div>
      </>

    )
}

export default Cadastro;