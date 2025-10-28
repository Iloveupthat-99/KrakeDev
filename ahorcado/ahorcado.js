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