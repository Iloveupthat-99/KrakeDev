calcularPromedioNotas=function(){
    let nota1=recuperarFloat('txtN1');
    let nota2=recuperarFloat('txtN2');
    let nota3=recuperarFloat('txtN3');
    let promedio=calcularPromedio(nota1, nota2, nota3);
    let promedioFxd=promedio.toFixed(2);
    mostrarTexto('promedio', promedioFxd);
    if(promedioFxd < 5 && promedioFxd > 0){
        mostrarImagen('promedioGif', './imagenes/going.gif');
        mostrarTexto('mensaje', 'REPROBADO');
    }else if(promedioFxd >=5 && promedioFxd <=8){
        mostrarImagen('promedioGif', './imagenes/nice.gif');
        mostrarTexto('mensaje', 'BUEN TRABAJO');
    }else if(promedioFxd > 8 && promedioFxd <=10){
        mostrarImagen('promedioGif', './imagenes/amaziiing.gif');
        mostrarTexto('mensaje', 'EXCELENTE');
    }else{
        mostrarImagen('promedioGif', './imagenes/oops.gif');
        mostrarTexto('mensaje', 'DATOS INCORREECTOS');
    }
}