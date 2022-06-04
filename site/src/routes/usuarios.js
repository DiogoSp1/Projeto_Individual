var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

var gravarBatalhaController = require("../controllers/gravarBatalhaController");

var recompensController = require("../controllers/recompensController");

var rankController = require("../controllers/rankController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

//Recebendo os dados do html e direcionando para a função cadastrar de gravarBatalhaController.js
router.post("/gravar", function (req, res) {
    gravarBatalhaController.gravar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/recompensa", function (req, res) {
    recompensController.recompensa(req, res);
});

router.post("/ranks", function (req, res) {
    rankController.ranks(req, res);
});

router.post("/vitoria", function (req, res) {
    rankController.vitoria(req, res);
});

module.exports = router;