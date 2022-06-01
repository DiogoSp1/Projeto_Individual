var pers = 0
function selecionar_Img(cartao){ 

    arrumar_Estilo(cartao)
    
var texto = ''
    if (cartao == 1){
        pers = 1
        texto = `
        <h1>Fundador e capitão</h1>
        O sonho de vida de Luffy, é se tornar o Rei dos Piratas, encontrando o lendário tesouro deixado pelo falecido Rei dos Piratas, Gol D. Roger. Ele acredita que ser o Rei dos Piratas significa ter a maior liberdade do mundo.
        `
    } else if (cartao == 2){
        pers = 2
        texto = `
        <h1>Combatente</h1>
        Zoro foi o primeiro membro a juntar-se à tripulação. Sua fama como mestre espadachim e sua grande força, juntamente com as ações de seu capitão, às vezes levaram os outros a acreditar que ele era o verdadeiro capitão da tripulação antes deste obter sua primeira recompensa, enquanto algumas pessoas acreditam que ele seja o imediato.
        `
    } else if (cartao == 3){
        pers = 3
        texto = `
        <h1>Cozinheiro</h1>
        É o terceiro filho e a quarta criança da Família Vinsmoke, tornando-o um príncipe do Reino Germa, até que ele oficialmente os renunciou duas vezes. Apesar de Sanji renunciar ao seu sobrenome Vinsmoke, o Governo Mundial o rotula como parte de seu nome em seu pôster de procurado.
        `
    } else if (cartao == 4){
        pers = 4
        texto = `
        <h1>Médico</h1>
        Chopper é uma rena que, após comer a Hito Hito no Mi, adquiriu a habilidade de se transformar e raciocinar como os humanos.Ele é o sexto membro e um dos poucos membros da tripulação que nasceu na Grand Line, numa ilha chamada Drum.
        `
    } else if (cartao == 5){
        pers = 5
        texto = `
        <h1>Atirador</h1>
        Usopp é o filho de Yasopp e Banchina. Ele nasceu e foi criado na Vila Syrup, e era o "capitão" dos Piratas Usopp e o amigo mais próximo de Kaya. Após colaborar com os Chapéus de Palha para derrotar Kuro e os Piratas do Gato Preto, ele foi convidado a se juntar à tripulação. Apesar de sua covardia normal, Usopp sonha em se tornar um corajoso guerreiro do mar como seu pai, e vive todos os dias em busca de viver à altura deste sonho.
        `
    } else if (cartao == 6){
        pers = 6
        texto = `
        <h1>Navegadora</h1>
        Nami possui grandes habilidades incomparáveis como navegadora, podendo até prever o tempo instável da Grand Line. Seu sonho é desenhar um mapa-múndi visto com seus próprios olhos. A princípio é uma ladra de piratas, roubando seus tesouros após traí-los de alguma forma. No entanto o dinheiro roubado seria utilizado para comprar de volta a sua ilha, dominada por piratas.
        `
    } else if (cartao == 7){
        pers = 7
        texto = `
        <h1>Arqueóloga</h1>
        Ela é a única sobrevivente da ilha destruída de Ohara, localizada no West Blue. Como resultado, ela é atualmente a única pessoa no mundo com a capacidade de ler e decifrar Poneglyphs, uma habilidade que é considerada proibida e que ameaça o Governo Mundial.
        `
    } else if (cartao == 8){
        pers = 8
        texto = `
        <h1>Músico</h1>
        Ele é um esqueleto que os Chapéus de Palha encontraram a bordo de um navio fantasma depois de entrarem no Triângulo Florian. Ele é um usuário de Akuma no Mi que comeu a Yomi Yomi no Mi, o que o torna um pseudo-imortal por causa de seus poderes. Ele é também um dos dois Espadachins a bordo de seu atual navio, o outro sendo Zoro.
        `
    } else if (cartao == 9){
        pers = 9
        texto = `
        <h1>Carpinteiro</h1>
        Ele é um cyborg de 36 anos de Water 7 e foi introduzido na história como o líder da Família Franky, um grupo de desmantelamento de navios. Ele foi originalmente chamado de "Cutty Flam" até trocar seu nome original por seu apelido a pedidos de Iceburg para esconder sua identidade.
        `
    } else if (cartao == 10){
        pers = 10
        texto = `
        <h1>Timoneiro</h1>
        Jinbe é um homem-peixe sendo um tubarão-baleia e um poderoso mestre do karatê Homem-Peixe. Seu sonho é realizar o desejo moribundo de seu ex-capitão Fisher Tiger de coexistência e igualdade entre humanos e homens-peixe.Ele era um membro dos Piratas do Sol, eventualmente se tornando seu segundo capitão após a morte de seu capitão original, Tiger.
        `
    }
    conteudo_Carousel.innerHTML = texto

}

function arrumar_Estilo(cartao){
    for (var imgX = 1; 10 >= imgX; imgX++){
        if (cartao == imgX){
            document.getElementById('personagem' + cartao).style.width = '100%';
            document.getElementById('personagem' + cartao).style.border = '3px solid black';
            document.getElementById('personagem' + cartao).style.boxShadow = '10px 10px 16px #000';
            document.getElementById('personagem' + cartao).style.zIndex = '2'
        } else {
            document.getElementById('personagem' + imgX).style.width = '30%';
            document.getElementById('personagem' + imgX).style.border = '0px solid black';
            document.getElementById('personagem' + imgX).style.boxShadow = 'none';
            document.getElementById('personagem' + imgX).style.zIndex = '1'
        }
    }
}


function passar_Img(lado){
    if(lado == 'esquerda'){
        if(pers <= 1){
            pers = 10
        } else {
            pers--
        }
        selecionar_Img(pers)
    } else {
        if(pers == 10){
            pers = 1
        } else {
            pers ++
        }
        selecionar_Img(pers)
    }
}