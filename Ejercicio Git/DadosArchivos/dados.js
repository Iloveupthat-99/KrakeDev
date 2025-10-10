jugar=function(){
    let aleatorio=lanzarDado();
    cambiarTexto('lblNumero', aleatorio);
    if(aleatorio > 3){
        let ganaste='tu resultado fue '+aleatorio+' y '+aleatorio+' es mayor a 3,'+' entonces... '+'ganaste';
        cambiarTexto('lblResultado', ganaste);
    }else{
        let perdiste='tu resultado fue '+aleatorio+' y '+aleatorio+' es menor a 3,'+' entonces ... '+'baniate menos frecuente';
        cambiarTexto('lblResultado', perdiste);
    }
}

//Crear una función llamada lanzarDado 
//No recibe parámetros
//Retorna un número entre 1 y 6
lanzarDado=function(){
    let aleatorio=Math.random();
    let random=aleatorio*6+1;
    let randomInt=parseInt(random);
    return randomInt;
}