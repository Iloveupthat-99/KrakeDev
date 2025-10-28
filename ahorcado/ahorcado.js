//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

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
            letrasEncontradas++;
        }
    }
}

ingresarLetra=function(){
    let letro=recuperarTexto('txtLetra');
    if(esMayuscula(letro)){
        validar(letro);
    }else{
        alert('SOLO SE ACEPTAN MAYUSCULAS');
    }
}