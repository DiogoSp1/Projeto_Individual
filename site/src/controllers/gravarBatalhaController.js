var batalhaModel = require("../models/batalhaModel");


function gravar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo dashboard.html
    var fk_Usuario = req.body.usuarioServer;
    var resultadoBt = req.body.resultadoServer;
    var adversario = req.body.adversarioServer;
    var ganhos = req.body.ganhosServer;
   
    // Passe os valores como parâmetro e vá para o arquivo batalhaModel.js
    batalhaModel.gravar(fk_Usuario, resultadoBt, adversario, ganhos)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    gravar
}