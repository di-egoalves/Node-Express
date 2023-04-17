const express = require('express');
const {listarAlunos, filtrarAlunos, filtrarMedia} = require('./alunos');
const morgan = require('morgan');
const app = express();
const fs = require('fs');
app.use(express.json());
app.use(morgan('combined'));


// 2 - Crie uma rota GET para “/alunos” que lista todos os alunos. Deve conter query opcional para filtrar por nome e por média. Ou seja, a rota pode ter este formato: “/alunos?nome=pedro”, “/alunos?media=7.5” ou esse “/alunos”. Esta rota deve utilizar as funções exportadas pelo módulo alunos.js;
app.get('/alunos', (req, res) => {
    const {nome, media} = req.query;
    let resultado = listarAlunos();
    if(nome) {
        resultado = filtrarAlunos(nome);
    }
    if(media) {
        resultado = filtrarMedia(media);
    }
    res.json(resultado);
});

//3 - Crie uma rota POST para “/alunos/novo” e o corpo da requisição deve conter (nome, matrícula e média). Valide os campos passados e caso contrário indique um erro (400);
app.post('/alunos/novo', (req, res) => {
    const {nome, matricula, media} = req.body
    if(!nome || !matricula || !media){
        return res.status(400).json({message: 'Obrigatório; nome, matricula e media.'})
    }
    const novoAluno = { nome, matricula, media };
    const listaDeAlunos = listarAlunos();
    listaDeAlunos.push(novoAluno);
    res.json(listaDeAlunos);
    escreverJSON(listaDeAlunos);
});

//4 - Crie uma rota POST para “/alunos/deletar/:index” que indica qual aluno remover do array de dados (index). Trate a chamada se o aluno não existir (404);
app.post('/alunos/deletar/:index', (req, res) => {
    const {index} = req.params;
    const listaDeAlunos = listarAlunos();
    if (index < 0 || index >= listaDeAlunos.length) {
        return res.status(404).json({message: 'Não encontrado'});
    }
    const aluno = listaDeAlunos[index];
    listaDeAlunos.splice(index,1);
    res.json(aluno);
});

//5 - Crie uma rota POST para /alunos/atualizar/:index, que no corpo da requisição recebe um objeto (nome, média) e atualiza os dados do aluno naquela posição. Trate a chamada se o aluno não existir (404);
app.post("/alunos/atualizar/:index", (req, res) => {
    const index = Number(req.params.index);
    const alunoEncontrado = listarAlunos()[index];
    if(!alunoEncontrado) {
        return res.status(404).json({message: "Aluno não encontrado"});
    } else {
        const { novoNome, novaMedia } = req.body;
        alunoEncontrado.nome = novoNome;
        alunoEncontrado.media = novaMedia;
        res.status(200).json({message: `Dados atualizados!`});
    }
});

//Desafio 0: Escreva um arquivo JSON chamado db.json toda vez que ocorrer uma alteração nos dados do array de alunos;
function escreverJSON(dados) {
    fs.writeFile('db.json', JSON.stringify(dados), (erro) => {
        if (erro) {
            console.log(erro);
        } else {
            console.log('Arquivo JSON atualizado!');
        }
    });
}

// Inicializa a escuta de requisições do servidor
app.listen(3000, () => {
    // roda sempre que o servidor inicia com sucesso
    console.log("Servidor rodando em http://localhost:3000/");
});