import React, {useState, useEffect} from "react";
import "../../App.css";
import Axios from "axios";
import Card from "../Cards/card";
import Cardtitle from "../Cards/cardtitle";



function Consultadados(){
const [listdata, setlistData] = useState();
    
 useEffect(()=>{
    Axios.get("http://localhost:3001/getCards").then((response)=>{
    setlistData(response.data);
    });
 }, []);

 return(
    <>
        <div className="fraseContainer">
          <Cardtitle />

        {typeof listdata !== "undefined" &&
            listdata.map((value) => {
              return (
                <Card

                  name={value.name}
                  telefone={value.telefone}
                  Email={value.email}
                  profissao={value.profissao}
                  idade={value.idade}

                />
              );
            })}
        </div>
    </>
 )

}

export default Consultadados;