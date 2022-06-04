var database = require("../database/config")

function gravar(fk_Usuario, resultadoBt, adversario, ganhos) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fk_Usuario, resultadoBt, adversario, ganhos);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `INSERT INTO batalha (fk_Usuario, resultado, adversario, ganhos) VALUES (${Number(fk_Usuario)}, '${resultadoBt}', '${adversario}', '${ganhos}');` 

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    gravar
};