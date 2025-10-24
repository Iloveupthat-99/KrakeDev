validarPlaca=function(){
    let placa=recuperarTexto('txtPlaca');
    let erroresEstructura=validarEstructura(placa);
    if(erroresEstructura == null){
        mostrarTexto('lblValidacion', 'ESTRUCTURA VALIDA');
    }else{
        mostrarTexto('lblValidacion', 'Estructura INCORRECTA');
        mostrarTexto('lblError', erroresEstructura);
    }
}