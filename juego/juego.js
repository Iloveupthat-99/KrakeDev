let puntosUsuario=0;
let puntosComputador=0;

jugar=function(seleccionado){

    let random=generarElemento();
    let rutaImg=generarRuta(random);
    mostrarImagen('imgJuego', rutaImg);
    let ganador=determinarGanador(seleccionado, random);
    if(ganador==0){
        mostrarTexto('lblResult', 'EMPATE');
    }else if(ganador==1){
        mostrarTexto('lblResult', 'GANASTE LA PARTIDA!!');
        puntosUsuario=puntosUsuario+1;
        mostrarTexto('lblPuntosUsuario', puntosUsuario);
    }else if(ganador==2){
        mostrarTexto('lblResult','PERDISTE LA PARTIDA!!');
        puntosComputador=puntosComputador+1;
        mostrarTexto('lblPuntosComputador', puntosComputador);
    }
    if(puntosUsuario==5){
        mostrarTexto('lblResult', 'HAS GANADO EL JUEGO');
    }
    if(puntosComputador==5){
        mostrarTexto('lblResult', 'EL COMPUTADOR TE HA VENCIDO');
    }
    
}

limpiar=function(){
    mostrarTexto('lblResult','');
    mostrarTexto('lblPuntosUsuario', 0);
    puntosUsuario=0;
    mostrarTexto('lblPuntosComputador', 0);
    puntosComputador=0;
    mostrarImagen('imgJuego','');
}