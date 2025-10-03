mostrarTextoEnCaja=function(idComponente, mensaje){
    let componente=document.getElementById(idComponente);
    componente.value=mensaje;
}

mostrarTexto=function(idComponente, mensaje){
    let componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

mostrarImagen=function(idComponente, rutaImagen){
    let componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
}

recuperarTexto=function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt=function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorIngresado=componente.value;
    let valorInt=parseInt(valorIngresado);
    return valorInt;
}

recuperarFloat=function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorIngresado=componente.value;
    let valorFloat=parseFloat(valorIngresado);
    return valorFloat;
}