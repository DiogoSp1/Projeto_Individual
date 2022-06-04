function escolher_Contra(){
    document.getElementById('div_Perfil').style.display = 'none';
    document.getElementById('div_Rank').style.display = 'none';
    document.getElementById('div_Batalha').style.display = 'none';
    document.getElementById('depois_Batalha').style.display = 'none';

    document.getElementById('antes_Batalha').style.display = 'block';

    var imagens_Personagens = [
    "https://pbs.twimg.com/profile_images/1524548441648607235/wfLxVLcs_400x400.jpg",
    "https://i1.sndcdn.com/artworks-BCswSeycLsqFOZfy-GQIusQ-t500x500.jpg",
    "https://pbs.twimg.com/profile_images/1445787305185320962/xpVa13mT_400x400.jpg",
    "https://i.pinimg.com/736x/fe/a1/03/fea1033ccd44770a200f3a278553977d.jpg",
    "https://i.pinimg.com/originals/5c/b7/43/5cb743aabbaded8dbc201d4e2f0c1f92.jpg",
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
        "10",
        "9",
        "9",
        "4",
        "3",
        "6",
        "6",
        "7",
        "7",
        "8"
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
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eaea9a95-2614-4b2a-ab10-580f594097f7/d5fwb6m-9f9381c7-f6d3-4168-8b75-29ffbf8313d1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VhZWE5YTk1LTI2MTQtNGIyYS1hYjEwLTU4MGY1OTQwOTdmN1wvZDVmd2I2bS05ZjkzODFjNy1mNmQzLTQxNjgtOGI3NS0yOWZmYmY4MzEzZDEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IRNZn-StYyX8gSMmd8dteLZ2KyKHVyFIdXO7A-J0Bf0",
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
            sessionStorage.ADVERSARIO = contagem
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

    sessionStorage.ICONE1 = jg1.img
    sessionStorage.ICONE2 = jg2.img

    sessionStorage.PERS1 = jg1.nome
    sessionStorage.PERS2 = jg2.nome

    sessionStorage.PODER1 = jg1.poder
    sessionStorage.PODER2 = jg2.poder

    sessionStorage.VIDA1 = jg1.vida
    sessionStorage.VIDA2 = jg2.vida
    
    sessionStorage.GIF1 = jg1.gif
    sessionStorage.GIF2 = jg2.gif

    sessionStorage.PREMIO = jg2.receber

}


function lutar(){
    document.getElementById('antes_Batalha').style.display = 'none';
    
    document.getElementById('div_Batalha').style.display = 'block';
    document.getElementById('section_Dash').style.backgroundImage = "url('https://img.elo7.com.br/product/zoom/2305797/papel-de-parede-vinilico-tijolinho-comics-5604-rosa-branco-papel-para-crianca.jpg')"

    var icone1 =  sessionStorage.ICONE1
    var icone2 =  sessionStorage.ICONE2

    var pers1 =  sessionStorage.PERS1
    var pers2 =  sessionStorage.PERS2

    var poder1 =  sessionStorage.PODER1
    var poder2 =  sessionStorage.PODER2

    var vida1 =  sessionStorage.VIDA1
    var vida2 =  sessionStorage.VIDA2

    var gif1 = sessionStorage.GIF1
    var gif2 = sessionStorage.GIF2


    
    
    div_Icone_Personagem.innerHTML = `<img src = '${icone1}' id = 'icone_Batalha1'></img>`
    document.getElementById("icone_Batalha1").style.height = "100%";
    document.getElementById("icone_Batalha1").style.borderRadius = "10px";
    document.getElementById("icone_Batalha1").style.boxShadow = '0 8px 20px 5px black'


    div_Personagem1.innerHTML = `<img src = '${gif1}' id = 'gif_jg1'></img>`

    if(pers1 == 'Nami' || pers1 == 'Robin'){
        document.getElementById("gif_jg1").style.transform = "scaleX(-1)";
    }

    document.getElementById("gif_jg1").style.height = "100%";


    
    div_Icone_Personagem2.innerHTML = `<img src = '${icone2}' id = 'icone_Batalha2'></img>`
    document.getElementById("icone_Batalha2").style.height = "100%";
    document.getElementById("icone_Batalha2").style.borderRadius = "10px";
    document.getElementById("icone_Batalha2").style.boxShadow = '0 8px 20px 5px black'

    div_Personagem2.innerHTML = `<img src = '${gif2}' id = 'gif_jg2'></img>`

    if(!(pers1 == 'Nami') || !(pers1 == 'Robin')){
        document.getElementById("gif_jg2").style.transform = "scaleX(-1)";
    }

    document.getElementById("gif_jg2").style.height = "100%";

    progressbar = document.querySelector('.div_Barra_Vida1');
    progressbar.style.setProperty('--progress', vida1)

    progressbar = document.querySelector('.div_Barra_Vida2');
    progressbar.style.setProperty('--progress2', vida2)


}


var valor = 100
var valor2 = 100


var rodadas = 0
var acerto1 = 0
var acerto2 = 0
var erro1 = 0
var erro2 = 0


var pers1 = 0
var pers2 = 0

var poder1 = 0
var poder2 = 0

var vida1 = 0
var vida2 = 0

function bater(){

    if(rodadas == 0){
        pers1 =  sessionStorage.PERS1
        pers2 =  sessionStorage.PERS2
    
        poder1 =  Number(sessionStorage.PODER1)
        poder2 =  Number(sessionStorage.PODER2)
    
        vida1 =  Number(sessionStorage.VIDA1)
        vida2 =  Number(sessionStorage.VIDA2)
    }

    rodadas ++

    var atq1 =  Math.floor(Math.random() * 10)
    var atq2 =  Math.floor(Math.random() * 10)
    console.log(atq1 , atq2)

    ataque_Hit2.innerHTML = `-${poder1}`

    progressbar = document.querySelector('.div_Barra_Vida2');
    if(atq1 == 10) {
        vida2 -= poder1 * 2
        document.getElementById("ataque_Hit2").style.color = "Red"
        document.getElementById("ataque_Hit2").style.fontSize = "80px"
        ataque_Hit2.innerHTML = `Critical Hit <br>-${poder1 * 2}`
        acerto1 ++
    } else if(atq1 >= 5) {
        vida2 -= poder1
        acerto1 ++
    } else {
        ataque_Hit2.innerHTML = 'Errou'
        erro1 ++
    }

    progressbar.style.setProperty('--progress2', vida2)


    document.getElementById("ataque_Hit1").style.marginTop = "-100%";
    document.getElementById("ataque_Hit1").style.marginLeft = "-50%";
    document.getElementById("ataque_Hit2").style.color = "transparent";



    ataque_Hit1.innerHTML = `-${poder2}`
    progressbar = document.querySelector('.div_Barra_Vida1');
    
    if(atq2 == 10) {
        vida1 -= poder2 * 2
        document.getElementById("ataque_Hit1").style.color = "Red";
        document.getElementById("ataque_Hit1").style.fontSize = "80px";
        ataque_Hit1.innerHTML = `Critical Hit <br>- ${poder2 * 2}`
        acerto2 ++
    } else if(atq2 >= 5) {
        vida1 -= poder2
        acerto2 ++
    } else {
        ataque_Hit1.innerHTML = 'Errou'
        erro2 ++
    }
    progressbar.style.setProperty('--progress', vida1)

    document.getElementById("ataque_Hit2").style.marginTop = "-100%";
    document.getElementById("ataque_Hit2").style.marginLeft = "240%";
    document.getElementById("ataque_Hit1").style.color = "transparent";

    setTimeout(function(){
        ataque_Hit1.innerHTML = ''
        ataque_Hit2.innerHTML = ''
    
        for (cont = 1; cont <= 2; cont++){
            var div_Rest = `ataque_Hit${cont}`
            document.getElementById(div_Rest).style.marginTop = "0";
            document.getElementById(div_Rest).style.marginLeft = "0";
            document.getElementById(div_Rest).style.color = "orangered";
            document.getElementById(div_Rest).style.fontSize = "30px";
        }
    },1000)

    if (vida1 <= 0 && vida2 <= 0){
        aparecer_Pos_Batalha("Empate", pers1, pers2, acerto1, acerto2, erro1, erro2)
    } else if (vida2 <= 0){
        aparecer_Pos_Batalha("Vitória", pers1, pers2, acerto1, acerto2, erro1, erro2)
    } else if (vida1 <= 0){
        aparecer_Pos_Batalha("Derrota", pers1, pers2, acerto1, acerto2, erro1, erro2)
    }
}

function aparecer_Pos_Batalha(resultado, pers1, pers2, acerto1, acerto2, erro1, erro2) {
    rodadas = 0

    document.getElementById('div_Batalha').style.display = 'none';
    document.getElementById('depois_Batalha').style.display = 'block';

    document.getElementById("depois_Batalha").style.display = "flex";
    document.getElementById("depois_Batalha").style.justifyContent = "center";
    document.getElementById("depois_Batalha").style.alignItems = "center";

    div_Resultado.innerHTML = resultado

    div_Nome1.innerHTML = `Nome: ${sessionStorage.APELIDO}`
    div_Nome2.innerHTML = `Nome: Bot`

    div_Pers1.innerHTML = `Personagem: ${pers1}`
    div_Pers2.innerHTML = `Personagem: ${pers2}`

    div_Qtd_Rodadas_Acertadas1.innerHTML = `Acertos: ${acerto1}`
    div_Qtd_Rodadas_Acertadas2.innerHTML = `Acertos: ${acerto2}`

    div_Qtd_Rodadas_Erradas1.innerHTML = `Erros: ${erro1}`
    div_Qtd_Rodadas_Erradas2.innerHTML = `Erros: ${erro2}`
}