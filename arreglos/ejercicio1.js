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
    mostrarNotas();
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

generarTabla=function(){
    let content='';
    let cmpTabla=document.getElementById('lblTabla');
    content+='<table><tr><td>UNO</td></tr></table>'+'<table><tr><td>DOS</td></tr></table>';
    cmpTabla.innerHTML=content;
}

mostrarNotas=function(){
    let cmpTabla=document.getElementById('lblTabla');
    let content='<table><tr><td>NOTAS</td></tr></table>'+'<table>';
    let miNota;
    for(let i=0;i<notas.length;i++){
        miNota=notas[i];
        content+='<tr><td>';
        content+=miNota;
        content+='</td></tr>';
    }
    content+='</table>';
    cmpTabla.innerHTML=content;
}