import React, {useState, useEffect} from "react";
import "../../App.css";
import Axios from "../../../node_modules/axios/lib/axios";
import Cardtitle from "../Cards/cardtitle";
/** 
import imageexcluir from "../Consulta/excluir.png";
*/

export default function Consultadados(){
const [listdata, setlistData] = useState();

 useEffect(()=>{
    Axios.get("http://localhost:3001/getCards").then((response)=>{
    setlistData(response.data);
    });
    
  }, []);

  const  handleDelete = async (id) =>{
    if(window.confirm("Desejar excluir ?")){
        try 
        {
          setlistData(listdata.filter((listdata) => listdata.idcadastro !== id));
          await Axios.delete(`http://localhost:3001/getCards/deleteCard?id=${id}`);
          alert.apply(this,[`Exclusão realizada com sucesso! ❌`]);
        } 
        catch (error) 
        {
          alert("OPS ! Ocorreu um erro!");
          console.error("Erro: ", error);
        }
    }
   }

 return(
    <>
        <div className="fraseContainer">
          <Cardtitle />
          {Array.isArray(listdata) &&
              listdata.map((value, i) => {
                return (
                  <div className="card-container" key={i}>
                    <span className="card-id">{value.idcadastro}</span>
                    <span className="card-name">{value.name}</span>
                    <span className="card-telefone">{value.telefone}</span>
                    <span className="card-email">{value.email}</span>
                    <span className="card-profissao">{value.profissao}</span>
                    <span className="card-idade">{value.idade}</span>
                    <button className="buttoedit" type="submit" onClick={() => handleDelete(value.idcadastro)}>❌</button>
                    <button className="buttoedit" type="submit" onClick={() => handleDelete(value.idcadastro)}>🖊️</button>
                  </div>
                  );
                })}
        </div>
    </>
 )

}