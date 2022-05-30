function validacao_Cadastro(){
    var posicao_Arromba = emailVar.indexOf('@')
    var posicao_Ponto = emailVar.indexOf('.com')

    if(posicao_Arromba < 3 || posicao_Ponto - posicao_Arromba < 3){
        alert('arruma o email')
    }

    return "arruma o email"

    // if(){
        
    // }

    // nomeVar = input_Nome.value;
    // emailVar = input_Data_Nasc.value;
    // cpfVar = input_Cpf.value;
    // mugiwara_Favorito = mug_Fav.value;
    // descricao = desc.value
    // senhaVar = input_Senha.value;
}