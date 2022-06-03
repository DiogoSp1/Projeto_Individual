function escolher_Contra(){
    document.getElementById('div_Perfil').style.display = 'none';

    document.getElementById('antes_Batalha').style.display = 'block';

    var imagens_Personagens = [
    "https://pbs.twimg.com/profile_images/1524548441648607235/wfLxVLcs_400x400.jpg",
    "https://i1.sndcdn.com/artworks-BCswSeycLsqFOZfy-GQIusQ-t500x500.jpg",
    "https://pbs.twimg.com/profile_images/1445787305185320962/xpVa13mT_400x400.jpg",
    "https://i.pinimg.com/736x/fe/a1/03/fea1033ccd44770a200f3a278553977d.jpg",
    "http://pm1.narvii.com/6358/2af51c17453d4f86ac7c105b62cc85afed696758_00.jpg",
    "https://i.pinimg.com/736x/a3/b7/54/a3b7549fd1c7b84ee7bd70330163752f.jpg",
    "https://i.pinimg.com/originals/0b/cb/d9/0bcbd98478d5e08e66aeb88c8a7ff1c4.jpg",
    "https://i.pinimg.com/564x/03/5b/40/035b40228c942eb12eaa649460d9ffe5.jpg",
    "https://64.media.tumblr.com/4bc28d5afb8a61dd8f719f73703c6d84/8318db4eacbf368d-64/s1280x1920/b814eea251e950b2649ae23c017d31b8ea6954f3.jpg",
    "https://i.pinimg.com/originals/bb/34/ef/bb34eff5771847a89b1247d961bae4e4.jpg"]

    var nome_Personagens = [
        "Luffy",
        "Zoro",
        "Sanji",
        "Chopper",
        "Usopp",
        "Nami",
        "Robin",
        "Franky",
        "Brook",
        "Jinbe"
    ]

    var poder_Personagens = [
        "5",
        "4",
        "4",
        "2",
        "1",
        "3",
        "3",
        "3",
        "3",
        "4"
    ]

    var vida_Personagens = [
        "100",
        "90",
        "90",
        "60",
        "40",
        "50",
        "50",
        "55",
        "55",
        "70"
    ]

    var ganho_Personagens = [
        "100000",
        "75000",
        "75000",
        "35000",
        "20000",
        "25000",
        "27000",
        "38000",
        "38000",
        "70000"
    ]

    var gif_Personagens = [
        "https://thumbs.gfycat.com/UnfinishedUnselfishAsianpiedstarling-size_restricted.gif",
        "https://phoneky.co.uk/thumbs/screensavers/down/technology/zoro_eps7cx1p.gif",
        "http://pa1.narvii.com/6833/39ca74618bd0841207ec6e21dab9d01c74d3c30a_00.gif",
        "imagens/chopper.png",
        "http://pa1.narvii.com/5725/320d67615f9dafb8a9600ef62b9db0988136aaa1_00.gif",
        "https://i.pinimg.com/originals/ee/37/c1/ee37c1e6e2a06b4651de1516a362fe6c.png",
        "imagens/Robin.png",
        "https://i.pinimg.com/originals/b1/fe/25/b1fe25b51e07228719c46ecc08317cf1.png",
        "imagens/brook.png",
        "https://i.pinimg.com/originals/77/23/fe/7723fee7ba65e7a6cd68d896a3afc063.png"
    ]

    var mug_Fav = Number(sessionStorage.MUGIWARA)

    for (var contagem = 1; mug_Fav >= contagem; contagem++){
        if(mug_Fav == contagem){
            var jg1 = {
                'img' : imagens_Personagens[contagem - 1],
                'nome' : nome_Personagens[contagem - 1],
                'poder' : poder_Personagens[contagem - 1],
                'vida' : vida_Personagens[contagem - 1],
                'gif' : gif_Personagens[contagem - 1]
            } 
        }
    }
    
    var mug_Contra =  Math.floor(Math.random() * 11)
    
    if(mug_Contra == 0){
        mug_Contra = 1
    }else if(mug_Contra == 11){
        mug_Contra = 10
    }
    
    for (var contagem = 1; mug_Contra >= contagem; contagem++){
        if(mug_Contra == contagem){
            var jg2 = {
                'img' : imagens_Personagens[contagem - 1],
                'nome' : nome_Personagens[contagem - 1],
                'poder' : poder_Personagens[contagem - 1],
                'vida' : vida_Personagens[contagem - 1],
                'gif' : gif_Personagens[contagem - 1],
                'receber' : ganho_Personagens[contagem - 1]
            } 
        }
    }
    
    personagem1.innerHTML = `
    <img src="${jg1.img}" id="img_Personagem1"></img>
    <div style = "font-family: 'one piece', sans-serif;">Personagem: ${jg1.nome}<br>
    Poder: ${jg1.poder}<br>
    Vida: ${jg1.vida}<br>
    </div>
    `
    
    personagem2.innerHTML = `
    <img src="${jg2.img}" id="img_Personagem2"></img>
    <div style = "font-family: 'one piece', sans-serif;">Personagem: ${jg2.nome}<br>
    Poder: ${jg2.poder}<br>
    Vida: ${jg2.vida}<br>
    </div>
    `
    
    document.getElementById("img_Personagem1").style.width = "80%";
    document.getElementById("img_Personagem1").style.height = "60%";
    document.getElementById("img_Personagem1").style.borderRadius = "8px";
    document.getElementById("img_Personagem1").style.boxShadow = "0px 2px 16px 2px black";
    
    document.getElementById("img_Personagem2").style.width = "80%";
    document.getElementById("img_Personagem2").style.height = "60%";
    document.getElementById("img_Personagem2").style.borderRadius = "8px";
    document.getElementById("img_Personagem2").style.boxShadow = "0px 2px 16px 2px black";
    
    
    document.getElementById("antes_Batalha").style.display = "flex";
    document.getElementById("antes_Batalha").style.justifyContent = "space-evenly";
    document.getElementById("antes_Batalha").style.alignItems = "center";

    sessionStorage.JOGADOR1 = jg1.gif;
    sessionStorage.JOGADOR2 = jg2.gif;
}

var valor = 100
var valor2 = 100

function bater(){
    valor -= 10
    valor2 -= 7
    progressbar = document.querySelector('.div_Barra_Vida1');
    progressbar.style.setProperty('--progress', valor)

    progressbar = document.querySelector('.div_Barra_Vida2');
    progressbar.style.setProperty('--progress2', valor2)
}

function lutar(){
    document.getElementById('antes_Batalha').style.display = 'none';

    document.getElementById('div_Batalha').style.display = 'block';
    document.getElementById('section_Dash').style.backgroundImage = "url('https://static.vecteezy.com/ti/vetor-gratis/p1/3726537-versus-vs-luta-batalha-vermelho-e-laranja-fundo-design-de-tela-gr%C3%A1tis-vetor.jpg')"

    var gifzada = sessionStorage.JOGADOR1
    var gifzada2 = sessionStorage.JOGADOR2

    div_Personagem1.innerHTML = `<img src = '${gifzada}' id = 'gif_jg1'></img>`
    document.getElementById("gif_jg1").style.height = "100%";

    div_Personagem2.innerHTML = `<img src = '${gifzada2}' id = 'gif_jg2'></img>`
    document.getElementById("gif_jg2").style.height = "100%";
    document.getElementById("gif_jg2").style.transform = "scaleX(-1)";
}