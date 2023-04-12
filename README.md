# Node & Express
> Atividade avaliativa | Data de entrega: 16 de abril.
* Crie um módulo alunos.js que exporta um array de alunos, uma função que filtra pelo nome e uma que filtra pela média (maior ou igual).
* Crie uma rota **GET** para “/alunos” que lista todos os alunos. Deve conter query opcional para filtrar por nome e por média. Ou seja, a rota pode ter este formato: “/alunos?nome=pedro”, “/alunos?media=7.5” ou esse “/alunos”. Esta rota deve utilizar as funções exportadas pelo módulo alunos.js;
* Crie uma rota **POST** para “/alunos/novo” e o corpo da requisição deve conter (nome, matrícula e média). Valide os campos passados e caso contrário indique um erro (400);
* Crie uma rota **POST** para “/alunos/deletar/:index” que indica qual aluno remover do array de dados (index). Trate a chamada se o aluno não existir (404);
* Crie uma rota **POST** para /alunos/atualizar/:index, que no corpo da requisição recebe um objeto (nome, média) e atualiza os dados do aluno naquela posição. Trate a chamada se o aluno não existir (404);
> Desafios
* **Desafio 0:** Escreva um arquivo JSON chamado db.json toda vez que ocorrer uma alteração nos dados do array de alunos;
* **Desafio 1:** Refatore a aplicação e mova para alunos.js, os métodos de deletar, adicionar e atualizar um aluno;
* **Desafio 2:** Substituir as rotas **POST** de atualizar e deletar com os métodos **PUT** e **DELETE** respectivamente, reformulando as URLs para todas utilizarem o mesmo caminho /alunos, mudando apenas o método utilizado;
* **Desafio 3:** Entregue a documentação desta API usando os recursos do Postman;
* **Desafio 4:** Pesquise e aplique o logger [morgan](https://www.npmjs.com/package/morgan) na aplicação;

