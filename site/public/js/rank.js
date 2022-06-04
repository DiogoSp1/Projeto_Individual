function abrir_Rank(orderBy) {

    document.getElementById('div_Perfil').style.display = 'none';
    document.getElementById('antes_Batalha').style.display = 'none';
    document.getElementById('div_Batalha').style.display = 'none';
    document.getElementById('depois_Batalha').style.display = 'none';

    document.getElementById('div_Rank').style.display = 'block';

    document.getElementById("div_Rank").style.display = "flex";
    document.getElementById("div_Rank").style.justifyContent = "center";
    document.getElementById("div_Rank").style.alignItems = "center";

    var orderByVar = orderBy;

        console.log(orderByVar);

        fetch("/usuarios/ranks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                orderByServer: orderByVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);

                    var nome_Test = []
                    var recompensa_Test = []
                    var batalha_Test = []

                    if(orderBy == 'ORDER BY Recompensa desc'){
                        div_Rank_Recompensa.innerHTML = 'Recompensa'
                        orderBy = 1
                    } else if(orderBy == 'ORDER BY Batalhas desc'){
                        div_Rank_Recompensa.innerHTML = 'Batalhas'
                        orderBy = 2
                    }

                    for(var cont = 0; cont < json.length; cont++){
                        console.log(json[cont].Usuario)

                        var div_Posicao = `div_Conteudo_Posicao${cont + 1}`
                        var div_Nome = `div_Conteudo_Nome${cont + 1}`
                        var div_Recompensa = `div_Conteudo_Recompensa${cont + 1}`

                        document.getElementById(div_Posicao).innerHTML = cont + 1
                        document.getElementById(div_Nome).innerHTML = json[cont].Usuario 
                        if(orderBy == 1){
                            document.getElementById(div_Recompensa).innerHTML = json[cont].Recompensa
                        } else {
                            document.getElementById(div_Recompensa).innerHTML = json[cont].Batalhas
                        }                        
                    }

                });
                
            } else {

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })


        return false;
}



var total_Vitorias = []
var porcentagem = []
var total_Batalhas = []
var nome_Lista = []

function abrir_Rank_Vitoria(cont,zerarListas) {

    var contVar = cont;

    if(zerarListas){
        total_Vitorias = []
        porcentagem = []
        total_Batalhas = []
        nome_Lista = []
    }


    fetch("/usuarios/vitoria", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contServer: contVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);

                if(cont == 1){
                    for(var contagem = 0; contagem < json.length; contagem++){
                        nome_Lista.push(json[contagem].Usuario)
                        total_Batalhas.push(json[contagem].TotalBatalhas)
                    }
                } else if (cont == 2){
                    for(var contagem = 0; contagem < json.length; contagem++){
                        total_Vitorias.push(json[contagem].TotalVitorias)
                    }
                }

                if(cont != 2){
                    cont ++
                    zerarListas = false
                    abrir_Rank_Vitoria(cont, zerarListas)
                } else {
                    for(var contagem = 0; contagem < total_Batalhas.length; contagem++){
                        div_Rank_Recompensa.innerHTML = '% Vitórias'
                        var div_Posicao = `div_Conteudo_Posicao${contagem + 1}`
                        var div_Nome = `div_Conteudo_Nome${contagem + 1}`
                        var div_Recompensa = `div_Conteudo_Recompensa${contagem + 1}`
            
                        var total_Bt = total_Batalhas[contagem]
                        var total_Vt = total_Vitorias[contagem]
            
                        porcentagem.push({'nome': json[contagem].Usuario,'porcentagemV': (total_Vt * 100) / total_Bt}) 
                    }
                    console.log(porcentagem)
                    porcentagem.sort(function (x, y){
                        return y.porcentagemV - x.porcentagemV
                    })
                    console.log(porcentagem)
                    for(var contagem = 0; contagem < porcentagem.length; contagem++){
                        var div_Posicao = `div_Conteudo_Posicao${contagem + 1}`
                        var div_Nome = `div_Conteudo_Nome${contagem + 1}`
                        var div_Recompensa = `div_Conteudo_Recompensa${contagem + 1}`
                        
                        document.getElementById(div_Posicao).innerHTML = contagem + 1
                        document.getElementById(div_Nome).innerHTML = porcentagem[contagem].nome
                        document.getElementById(div_Recompensa).innerHTML = `${porcentagem[contagem].porcentagemV.toFixed(2)}%`
                    }
                }
            });

            
        } else {

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    
    return false;
}  


function pegar_Recompensa() {

    var id_UsuarioVar = sessionStorage.ID_USUARIO;

        console.log(id_UsuarioVar);

        fetch("/usuarios/recompensa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_UsuarioServer: id_UsuarioVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    if(json.Recompensa == null){
                        sessionStorage.RECOMPENSA = 0
                    } else {
                        sessionStorage.RECOMPENSA = json.Recompensa;
                    }

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                alert('Email ou senha incorreto(a)')

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;

}