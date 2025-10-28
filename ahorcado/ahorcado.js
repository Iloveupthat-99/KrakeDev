//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;

esMayuscula=function(caracter){
    let mayuscula=caracter.charCodeAt(0);
    if(mayuscula > 64 && mayuscula < 91){
        return true;
    }else{
        return false;
    }
}

guardarPalabra=function(){
    let palabra=recuperarTexto('txtSecreta');
    let longitud=true;
    let letra;
    for(let place = 0;place < palabra.length;place++){
        letra=palabra.charAt(place);
        if(!esMayuscula(letra)){
            longitud=false;
        }

    }
    if(palabra.length != 5){
        longitud=false;
    }
    if(!longitud){
        alert('Debe ingresar una palabra de 5 letras Mayusculas');
    }else{
        palabraSecreta=palabra;
        console.log(palabraSecreta);
    }
    
}

mostrarLetra=function(letra, posicion){
    if(posicion == 0){
        mostrarTexto('div0', letra);
    }else if(posicion == 1){
        mostrarTexto('div1', letra);
    }else if(posicion == 2){
        mostrarTexto('div2', letra);
    }else if(posicion == 3){
        mostrarTexto('div3', letra);
    }else if(posicion == 4){
        mostrarTexto('div4', letra);
    }

}

validar=function(letra){
    let letrasEncontradas = 0;
    let letter;
    let same=false;
    for(let valido = 0;valido < palabraSecreta.length;valido++){
        letter=palabraSecreta.charAt(valido);
        if(letter==letra){
            mostrarLetra(letra, valido);
            same=true;
            letrasEncontradas++;
            coincidencias++;
        }
    }
    if(!same){
        alert('LA LETRA NO ES PARTE DE LA PALABRA');
        errores++;
        mostrarAhorcado();
    }
}

ingresarLetra=function(){
    let letro=recuperarTexto('txtLetra');
    if(esMayuscula(letro)){
        validar(letro);
        intentos++;
        if(coincidencias == 5){
            alert('Has ganado HDP');
        }
        if(intentos == 10){
            alert('La has regao');
        }
    }else{
        alert('SOLO SE ACEPTAN MAYUSCULAS');
    }
}

mostrarAhorcado=function(){
    let txt='Ahorcado_0'+errores+'.png';
   
    for(let nose=0;nose<errores+1;nose++){
        txt='Ahorcado_0'+errores+'.png';
        mostrarImagen('ahorcadoImagen', txt);
    }
    if(errores==10){
        mostrarImagen('ahorcadoImagen', 'Ahorcado_09.png');
    }
}
