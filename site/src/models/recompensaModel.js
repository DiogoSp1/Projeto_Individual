var database = require("../database/config")

function recompensa(id_Usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", id_Usuario)
    var instrucao = `
    SELECT SUM(ganhos) 'Recompensa' FROM usuario u
    JOIN batalha b on b.fk_Usuario = u.id_Usuario
    WHERE id_Usuario = '${id_Usuario}'
    LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    recompensa
};