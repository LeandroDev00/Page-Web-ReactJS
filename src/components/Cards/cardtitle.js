import React from "react";
import './cards.css';

export default function title(){
    return (
        <>
            <h3>Colaboradores Cadastrados:</h3>
            <div className="Card-title">
                    <h4>Id</h4>
                    <h4>Nome</h4>
                    <h4>Telefone</h4>
                    <h4>Email</h4>
                    <h4>Profissao</h4>
                    <h4>Idade</h4>
            </div>
            <p>Ação</p>
        </>
    );
}