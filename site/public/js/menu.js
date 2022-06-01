var contagem = 0

function fechar_Menu(){
    if (contagem == 0){
        document.getElementById("menu").style.width = "5%";
        desaparecer_Aparecer_Button(false)
        contagem++
    } else {
        document.getElementById("menu").style.width = "25%";
        desaparecer_Aparecer_Button(true)
        contagem--
    }
}

function desaparecer_Aparecer_Button(exibir){
    if(exibir == false){
        exibir = "none"
    } else {
        exibir = "block"
    }
    
    document.getElementById("div_Buttons").style.display = exibir;
    
}