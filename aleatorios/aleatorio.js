alAzar=function(){
    let Random=Math.random();
    let random=Random*100+1;
    let randomInt=parseInt(random);
    //console.log(randomInt)
    return randomInt;
}

generarAleatorio=function(){
    let aleatorios=[];
    let recovered=recuperarInt('txtValor');
    let random;
    if(recovered > 4 && recovered < 21){
        for(let rcvrd=0;rcvrd<recovered;rcvrd++){
            random=alAzar();
            aleatorios.push(random);
            console.log(random);
        }
        mostrarResultados(aleatorios);
    }
}

mostrarResultados=function(arregloNumeros){
    let cmpnt=document.getElementById('lblRandom');
    let tabla='<table><tr><td>'+arregloNumeros+'</td></tr></table>';
    cmpnt.innerHTML=tabla;
}