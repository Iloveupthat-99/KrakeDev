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
