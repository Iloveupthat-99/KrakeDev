ejecutarPrueba1=function(){
    let mensaje=recuperarTexto('txtCadena');
    recorrerCadena(mensaje);

}
ejecutarPrueba2=function(){
    let mensaje=recuperarTexto('txtCadena');
    let mensajeInvertido=recorrerCadenaInvertida(mensaje);
    mostrarTexto('lblMensaje',mensajeInvertido);
    
}

recorrerCadena=function(cadena){
    //0123456
    //Juanito
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log('Caracter '+caracter+' posicion: '+posicion);
    }
    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charCodeAt(posicion);
        console.log('CARACTER '+caracter+' POSICION: '+posicion);
    }
}
recorrerCadenaInvertida=function(cadena){
    let caracter;
    let caracterInvertido='';
    for(let posicionInvertida=cadena.length-1;posicionInvertida>=0;posicionInvertida--){
        caracter=cadena.charAt(posicionInvertida);
        console.log(caracter);
        caracterInvertido=caracterInvertido+caracter;
    }
    return caracterInvertido;
}