let puntosUsuario;
let puntosComputador;

jugar=function(seleccionado){

    let random=generarElemento();
    let rutaImg=generarRuta(random);
    mostrarImagen('imgJuego', rutaImg);
    let ganador=determinarGanador(seleccionado, random);
    if(ganador==0){
        mostrarTexto('lblResult', 'EMPATE');
    }else if(ganador==1){
        mostrarTexto('lblResult', 'GANASTE LA PARTIDA!!');
    }else if(ganador==2){
        mostrarTexto('lblResult','PERDISTE LA PARTIDA!!');
    }
}