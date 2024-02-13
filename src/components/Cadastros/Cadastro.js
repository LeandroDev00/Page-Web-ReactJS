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
    try{
      Axios.post("http://localhost:3001/register", {
        name: values.name,
        telefone: values.telefone,
        Email: values.Email,
        profissao: values.profissao,
        idade: values.idade,
      })

      alert.apply(this,[`Cadastro Realizada com sucesso! ✅`]);
    } catch (err){
      alert("OPS ! Ocorreu um erro.");
      console.log(err);
    }
  };

    return(
        <>
        <div className="App">
          <p className="cabecalho">Cadastro Colaboradores 📑</p>
            <form className="fraseContainer">
                <div className='formulario'>
                    <div className="form_group">
                      <input className="form_field" type="input" placeholder="Name" required="requerid" name="name" onChange={handleChangeValues} />
                      <span for="forn_name" className="form_label">Nome</span>
                    </div>

                    <div className="form_group">
                      <input className="form_field" type="tel" placeholder="Contact..." required="requerid" name="telefone" onChange={handleChangeValues} />
                      <span for="forn_name" className="form_label">Contato</span>
                    </div>

                    <div className="form_group">
                      <input className="form_field" type="email" placeholder="Email ..." required="requerid" name="Email" onChange={handleChangeValues} />
                      <span for="forn_name" className="form_label">Email</span>
                    </div>

                    <div className="form_group">
                      <input className="form_field"type="input" placeholder="Professional..." required="requerid" name="profissao" onChange={handleChangeValues} />
                      <span for="forn_name" className="form_label">Profissão</span>
                    </div>

                    <div className="form_group">
                      <input className="form_field"type="input" placeholder="Age ..." required="requerid" name="idade" onChange={handleChangeValues} />
                      <span for="forn_name" className="form_label">Idade</span>
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