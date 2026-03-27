function Values(){
    let Valor01 = document.getElementById('Numero01').value;
    let Valor02 = document.getElementById('Numero02').value;

    if(Valor01 === '' || Valor02 === ''){
        alert("Preencha os campos vazios");
        return null;
    }
    Valor01 = parseFloat(Valor01);
    Valor02 = parseFloat(Valor02);
    if (isNaN(Valor01) || isNaN(Valor02)){
        alert("Insira um valor válido");
        return null;
    }
    return {Valor01, Valor02};
}
function add(){
    let valores=Values();
    if(valores == null){
        return null;
    }
    let soma = (valores.Valor01 + valores.Valor02);
    resultado(soma);
}
function sub(){
    let valores=Values();
    if(valores == null){
        return;
    }
    let subtraction= valores.Valor01-valores.Valor02;
    resultado(subtraction);
}
function mult(){
    let valores=Values();
    if(valores == null){
        return;
    }
    let multiplication=valores.Valor01*valores.Valor02;
    resultado(multiplication);
}
function div(){
    let valores = Values();
    if(valores == null){
        return;
    }
    if(valores.Valor02 == 0){
        alert("0 Não é permitido para divisões");
        return;
    }else{
        let division= valores.Valor01/valores.Valor02;
        resultado(division);
    }
}
function limpar_campos(){
    document.getElementById('Numero01').value = '';
    document.getElementById('Numero02').value = '';
    resultado('');
}
function resultado(valor){
    document.getElementById('resultado').textContent = valor;

}