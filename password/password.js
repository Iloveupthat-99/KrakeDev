validarPassword=function(password){
    let caracter;
    let numeroCaracteres=0;
    let hayMayuscula=false;
    let hayDigito=false;
    let hayCaracterEspecial=false;
    let mensajeError='';

    for(let key=0;key<password.length;key++){
        caracter=password.charAt(key);
        numeroCaracteres=password.length;
        if(esMayuscula(caracter)){
            hayMayuscula=true;
        }
        if(esDigito(caracter)){
            hayDigito=true;
        }
        if(esCaracterEspecial(caracter)){
            hayCaracterEspecial=true;
        }
    }
    if(numeroCaracteres < 8){
        return '*DEBE TENER COMO MINIMO 8 CARACTERES';
       
    }else if(numeroCaracteres > 16){
        return '*EXCEDE EL MAXIMO DE CARACTERES (16)';
        
    }
    if(!hayMayuscula){
        mensajeError='*DEBE CONTENER ALMENOS UNA MAYUSCULA';
        return mensajeError;
    }else if(!hayDigito){
        mensajeError='*DEBE CONTENER ALMENOS UN DIGITO';
        return mensajeError;
    }else if(!hayCaracterEspecial){
        mensajeError='*DEBE CONTENER ALMENOS UN CARACTER ESPECIAL';
        return mensajeError;
    }
    if(hayMayuscula && hayDigito &&hayCaracterEspecial){
        return '';
    }
}



ejecutarValidacion=function(){
    let passwordKey=recuperarTexto('txtPassword');
    let validacion=validarPassword(passwordKey);
    if(validacion==''){
        mostrarTexto('lblResult', 'Password Correcto');
    }else{
        mostrarTexto('lblResult', validacion);
    }
}

esCaracterEspecial=function(caracter){
    let especial=caracter.charCodeAt(0);
    if(especial==42||especial==45||especial==95){
        return true;
    }else{
        return false;
    }
}