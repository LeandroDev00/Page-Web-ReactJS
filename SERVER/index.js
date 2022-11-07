const express = require("express");
const app = express();
const mysql2 = require("mysql2");
const cors = require("cors");

const db = mysql2.createPool({
    host:"localhost",
    user:"root",
    password:"C@mp0sS@les00",
    database:"crudgames",
});

app.use(cors());
app.use(express.json());


app.post("/register", (req, res)=>{
    const {name} = req.body;
    const {telefone} = req.body;
    const {Email} = req.body;
    const {profissao} = req.body;
    const {idade} = req.body;

    let sql = "INSERT INTO dados (name, telefone, email, profissao, idade) VALUES ( ?,?,?,?,? )";
    db.query(sql, [name, telefone,Email, profissao, idade], (err, result)=>{
        console.log(err);
    });
    
});

app.listen(3001, ()=>{
    console.log("[....Rodando servidor....]");
});

/*
app.get('/', (req, res) => {
    let sql =
    "INSERT INTO dados(Nome, telefone, email, profissao, idade) VALUES ('Eduardo', 198785400, 'leandro@gmai.com', 'Analista', 21)";
    db.query(sql, (err, result) =>{
        console.log(err);
    });
});
*/