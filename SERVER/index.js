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

app.get("/getCards", (req, res)=>{
    let Sql = "SELECT * FROM dados";
    
    db.query(Sql, (err,result)=>{
        if (err) console.log(err);
        else res.send(result);
    });
});

app.post("/register", (req, res)=>{
    const {name} = req.body;
    const {telefone} = req.body;
    const {Email} = req.body;
    const {profissao} = req.body;
    const {idade} = req.body;

    let sql = "INSERT INTO dados (name, telefone, email, profissao, idade) VALUES ( ?,?,?,?,? )";
    db.query(sql, [name, telefone, Email, profissao, idade], (err, result)=>{
        if(err){
            console.log(err);
        }
        if(result){
           console.log("Dados inseridos  com sucesso!"); 
        }
    });
    
});

app.delete("/getCards/deleteCard", (req, res) => {
    const {id} = req.query; // Correção para obter o parâmetro id dos query parameters
    if (!id) {
        return res.status(400).json({ error: "O parâmetro 'id' é obrigatório." });
    }
    
    let sql = "DELETE FROM dados WHERE idcadastro = ?";

    db.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao excluir registro." });
        }
        else console.log("Produto "+id+" excluido com sucesso");
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