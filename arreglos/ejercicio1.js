let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    //console.log(notas.length);
}

recorrerArreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice]
        console.log(notaR);
    }
}

probarAgregarNota=function(){
    let nota=recuperarInt('txtNota');
    agregarNota(nota);
}

agregarNota=function(nota){
    notas.push(nota);
}

calcularPromedio=function(){
    let sumarNotas = 0;
    let promedio;

    for(let add=0;add<notas.length;add++){
        sumarNotas=sumarNotas+(notas[add]);   
    }
    promedio=sumarNotas/notas.length;
    return promedio;
}

ejecutarPromedio=function(){
    let result=calcularPromedio();
    mostrarTexto('lblPromedio', result);
}