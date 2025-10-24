esMayuscula=function(caracter, posicionDig){
    let caracterCode=caracter.charCodeAt(posicionDig);
    if(caracterCode > 64 && caracterCode < 91 ){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter, posicionDig){
    let digito=caracter.charCodeAt(posicionDig);
    if(digito > 47 && digito < 58){
        return true;
    }else{
        return false;
    }
}

esGuion=function(caracter, posicionDig){
    let guion=caracter.charCodeAt(posicionDig);
    if(guion == 45){
        return true;
    }else{
        return false;
    }
}

