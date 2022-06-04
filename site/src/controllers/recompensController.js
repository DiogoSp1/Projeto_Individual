var recompensaModel = require("../models/recompensaModel");

function recompensa(req, res) {
    var id_Usuario = req.body.id_UsuarioServer;
        
    recompensaModel.recompensa(id_Usuario)
    .then(
        function (resultado) {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

            if (resultado.length == 1) {
                console.log(resultado);
                res.json(resultado[0]);
            } else if (resultado.length == 0) {
                res.status(403).send("email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    recompensa
}