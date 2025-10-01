saludar=function(){
    let nombre=recuperarTexto('txtNombre');
    let apellido=recuperarTexto('txtApellido');
}

recuperarTexto=function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorIngresado=componente.value;
    return valorIngresado;
}