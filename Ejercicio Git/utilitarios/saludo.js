saludar=function(){
    let nombre=recuperarTexto('txtNombre');
    let apellido=recuperarTexto('txtApellido');
    let edad=recuperarInt('txtEdad');
    let estatura=recuperarFloat('txtEstatura');
    let mensaje=nombre+' '+apellido+' su edad es '+edad+' y su altura es de '+estatura;
    mostrarTexto('resultado', mensaje);
    mostrarImagen('niceGif', './imagenes/thatsNice.gif')
    mostrarTextoEnCaja('txtNombre', ' ');
}

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