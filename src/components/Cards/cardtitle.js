import React from "react";
import './cards.css';

export default function title(){
    return (
        <>
            <h3>Lista de usuários cadastrados:</h3>
            <div className="Card-title">
                    <h4>Nome</h4>
                    <h4>Telefone</h4>
                    <h4>Email</h4>
                    <h4>Profissao</h4>
                    <h4>Idade</h4>
            </div>
        </>
    );
}