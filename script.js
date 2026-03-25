function Values(){
    let Valor01 = parseFloat(document.getElementById('Numero01').value);
    let Valor02 = parseFloat(document.getElementById('Numero02').value);

    if(!Valor01 || !Valor02){
        alert("Preencha os campos vazios");
        return null;
    }
    if (isNaN(Valor01) || isNaN(Valor02)){
        alert("Insira um valor válido");
        return null;
    }
    return { Valor01, Valor02 };
}
function add(){
    let valores=Values();
    if(valores == null){
        return;
    }
    let soma = valores.Valor01 + valores.Valor02;
    alert("O resultado é: " + soma);
}
function sub(){
    let valores=Values();
    if(valores == null){
        return;
    }
    let subtraction= valores.Valor01-valores.Valor02;
    alert("O resultado é: " + subtraction);
}
function mult(){
    let valores=Values();
    if(valores == null){
        return;
    }
    let multiplication=valores.Valor01*valores.Valor02;
    alert("O resultado é: " + multiplication);
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
        alert("O resultado é: " + division);
    }
}
