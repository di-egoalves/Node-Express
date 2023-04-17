//1 - Crie um módulo alunos.js que exporta um array de alunos, uma função que filtra pelo nome e uma que filtra pela média (maior ou igual).
const alunos = [
    {nome: 'Diego', matricula: 201301, media: 8.5},
    {nome: 'Rebecca', matricula: 201302,media: 7.0},
    {nome: 'Levi', matricula: 201303, media: 9.0}
];

function listarAlunos(){
    return alunos;
}

function filtrarAlunos(nome){
    return alunos.filter(aluno => aluno.nome.includes(nome));
}

function filtrarMedia(media){
    return alunos.filter(aluno => aluno.media >= media);
}

module.exports ={
    listarAlunos, filtrarAlunos, filtrarMedia
};