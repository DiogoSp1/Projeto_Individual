var database = require("../database/config")

function ranks(orderBy) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function ranks()", orderBy);
    var instrucao = `
    SELECT apelido 'Usuario', SUM(ganhos) 'Recompensa', COUNT(id_Batalha) 'Batalhas' FROM usuario u
    JOIN batalha b on b.fk_Usuario = u.id_Usuario
    GROUP BY id_Usuario
    ${orderBy}
    LIMIT 10
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function vitoria(cont) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function ranks()", cont);
    
    console.log(`Tentando ${cont}`)
    if(cont == 1){
        var instrucao = `
        select apelido 'Usuario', COUNT(resultado) 'TotalBatalhas' from usuario u
        LEFT JOIN batalha b on b.fk_Usuario = u.id_Usuario
        group by fk_Usuario
        order by COUNT(resultado) desc
        LIMIT 10`
    } else if (cont == 2){
        var instrucao = `
        select apelido 'Usuario', COUNT(resultado) 'TotalVitorias' from usuario u
        LEFT JOIN batalha b on b.fk_Usuario = u.id_Usuario
        where resultado = 'Vitória'
        group by fk_Usuario
        order by COUNT(resultado) desc
        LIMIT 10`
    } 
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    ranks,
    vitoria
};