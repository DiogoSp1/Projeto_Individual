function ajustar_Perfil(){
    arrumar_Perfil()

    document.getElementById('img_De_Perfil').style.backgroundImage = `URL('${sessionStorage.IMAGEMPERFIL}')`;
    document.getElementById('img_De_Perfil').style.backgroundSize = 'cover';
    
    nome_Perfil.innerHTML = sessionStorage.APELIDO
    var recompensa = Number(sessionStorage.RECOMPENSA).toFixed(2)
    document.getElementById('nome_Perfil').style.fontFamily = 'one piece';

    div_Conteudo_Batalhar.innerHTML = `
        Você está com uma recompensa de US$${recompensa}<br>
        Para almenta-la, ganhe algumas batalhas.<br>
        Mas será que conseguirá?
        `
    valor_Perfil.innerHTML = `
    US$${recompensa}
    `

    document.getElementById('div_Conteudo_Batalhar').style.fontFamily = 'one piece';
}

function voltar_Perfil() {

    setTimeout(function () {
        document.location.reload(true);;
        }, 1000);

    
    arrumar_Perfil()
}

function arrumar_Perfil(){
    document.getElementById("div_Perfil").style.display = "flex";
    document.getElementById("div_Perfil").style.justifyContent = "space-evenly";
    document.getElementById("div_Perfil").style.alignItems = "center";

    document.getElementById("div_Quadro_Batalha").style.flexDirection = "column";
    document.getElementById("div_Quadro_Batalha").style.justifyContent = "space-evenly";
    document.getElementById("div_Quadro_Batalha").style.width = "28%";
    document.getElementById("div_Quadro_Batalha").style.height = "80%";
}