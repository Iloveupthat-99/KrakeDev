validarEstructura = function (placa) {
    let placaL = placa.length;
    let ultimaPoisicion = placaL - 1;
    let letra = placa.charCodeAt(ultimaPoisicion);
    let mensaje;
    if (placaL < 7 || placaL > 8) {
        return 'La placa debe tener 7 u 8 caracteres';
    }
    mensaje = check(esMayuscula(placa, 0), 'mayuscula', 'primer');
    if (mensaje) return mensaje; 

    mensaje = check(esMayuscula(placa, 1), 'mayuscula', 'segundo');
    if (mensaje) return mensaje;

    mensaje = check(esMayuscula(placa, 2), 'mayuscula', 'tercer');
    if (mensaje) return mensaje;

    mensaje = check(esGuion(placa, 3), 'un guion (-)', 'cuarto');
    if (mensaje) return mensaje;

    mensaje = check(esDigito(placa, 4), 'un numero', 'quinto');
    if (mensaje) return mensaje;

    mensaje = check(esDigito(placa, 5), 'un numero', 'sexto');
    if (mensaje) return mensaje;

    mensaje = check(esDigito(placa, 6), 'un numero', 'septimo');
    if (mensaje) return mensaje;

    if (placaL === 8) { 
        mensaje = check(esDigito(placa, 7), 'un numero', 'octavo');
        if (mensaje) return mensaje;
    }

    
    return null;
}

check=function(caracterx, tipoC, puesto){
    let mensaje = 'El '+puesto+' caracter'+' debe ser'+' '+tipoC;
    if(!caracterx){
        return mensaje;
    }
}
