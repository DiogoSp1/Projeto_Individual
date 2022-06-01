var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(cpf, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cpf, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE cpf = '${cpf}' AND senha = '${senha}';
    `;
    var instrucao2 = ""
    console.log("Executando a instrução SQL: \n" + instrucao, instrucao2);
    return database.executar(instrucao, instrucao2);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, dataNasc, cpf, senha, mugFav, desc ) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, dataNasc, cpf, senha, mugFav, desc);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `INSERT INTO usuario (nome_Usuario, data_Nasc, cpf, senha, descricao) VALUES ('${nome}', '${dataNasc}', '${cpf}', '${senha}', '${desc}');` 
    var instrucao2 = `INSERT INTO mugiwara_Favorito (fk_Mug) VALUES (${mugFav});`

    console.log("Executando a instrução SQL: \n" + instrucao, instrucao2);
    return database.executar(instrucao, instrucao2);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};