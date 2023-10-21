import React from "react";
import './cards.css';

export default function Card(props){
    return (
        <>
            <div className="card-container">
                <p className="card-id">{props.id}</p>
                <p className="card-name">{props.name}</p>
                <p className="card-telefone">{props.telefone}</p>
                <p className="card-email">{props.Email}</p>
                <p className="card-profissao">{props.profissao}</p>
                <p className="card-idade">{props.idade}</p>
            </div>   
        </>
    );
}