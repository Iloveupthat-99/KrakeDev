obtenerAleatorio=function(){
    let randm=Math.random();
    let random=randm*3+1;
    let randomInt=parseInt(random);
    console.log(randomInt);
    return randomInt;

}
generarElemento=function(){
    let elemento=obtenerAleatorio();
    let juego='';
    if(elemento == 1){
        juego='rock';
        return juego;
    }
    if(elemento == 2){
        juego='paper';
        return juego;
    }
    if(elemento == 3){
        juego='scissors';
        return juego;
    }
    
}
determinarGanador=function(eleccionJugador1, eleccionJugador2){
    let ganar;

    if((eleccionJugador1 == 'rock' && eleccionJugador2 == 'scissors')||(eleccionJugador1 == 'paper' && eleccionJugador2 == 'rock')||(eleccionJugador1 == 'scissors' && eleccionJugador2 == 'paper')){
        ganar = 1;
        return ganar;
    }else if((eleccionJugador1 == 'scissors' && eleccionJugador2 == 'rock')||(eleccionJugador1 == 'rock' && eleccionJugador2 == 'paper')||(eleccionJugador1 == 'paper' && eleccionJugador2 == 'scissors')){
        ganar = 2;
        return ganar;
    }else if(eleccionJugador1 == eleccionJugador2){
        ganar = 0;
        return ganar;
    }
}
generarRuta=function(nombre){
    let rutaImg='./imagenes/'+nombre+'.png';
    return rutaImg;
}