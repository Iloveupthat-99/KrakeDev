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

obtenerProvincia=function(placa){

    let primerCaracterASCII = placa.charCodeAt(0); 

    let provincia = "Provincia no identificada";

    if (primerCaracterASCII == 65) { // A
        provincia = "Azuay";
    } else if (primerCaracterASCII == 66) { // B
        provincia = "Bolivar";
    } else if (primerCaracterASCII == 67) { // C
        provincia = "Carchi";
    } else if (primerCaracterASCII == 69) { // E
        provincia = "Esmeraldas";
    } else if (primerCaracterASCII == 71) { // G
        provincia = "Guayas";
    } else if (primerCaracterASCII == 72) { // H
        provincia = "Chimborazo";
    } else if (primerCaracterASCII == 73) { // I
        provincia = "Imbabura";
    } else if (primerCaracterASCII == 75) { // K
        provincia = "Sucumbios";
    } else if (primerCaracterASCII == 76) { // L
        provincia = "Loja";
    } else if (primerCaracterASCII == 77) { // M
        provincia = "Manabi";
    } else if (primerCaracterASCII == 78) { // N
        provincia = "Napo";
    } else if (primerCaracterASCII == 79) { // O
        provincia = "El Oro";
    } else if (primerCaracterASCII == 80) { // P
        provincia = "Pichincha";
    } else if (primerCaracterASCII == 81) { // Q
        provincia = "Orellana";
    } else if (primerCaracterASCII == 82) { // R
        provincia = "Los Rios";
    } else if (primerCaracterASCII == 83) { // S
        provincia = "Pastaza";
    } else if (primerCaracterASCII == 84) { // T
        provincia = "Tungurahua";
    } else if (primerCaracterASCII == 85) { // U
        provincia = "Caniar";
    } else if (primerCaracterASCII == 87) { // W
        provincia = "Galapagos";
    } else if (primerCaracterASCII == 88) { // X
        provincia = "Cotopaxi";
    } else if (primerCaracterASCII == 89) { // Y
        provincia = "Santa Elena";
    } else if (primerCaracterASCII == 90) { // Z
        provincia = "Zamora Chinchipe";
    } else {
        return null;
    }

    return provincia;
}
obtenerTipoVehiculo=function(placa){
    let placa2=placa.charCodeAt(1);
    let vehiculo='no  identificado'
    if(placa2 == 65 || placa2 == 90){
        vehiculo='vehiculo comercial'
        return vehiculo;
    }
    if(placa2 == 69){
        vehiculo='vehiculo goburnamental'
        return vehiculo;
    }
    if(placa2 == 88){
        vehiculo='vehiculo de uso oficial'
        return vehiculo;
    }
    if(placa2 == 83){
        vehiculo='vehiculo gobierno provincial'
        return vehiculo;
    }
    if(placa2 == 77){
        vehiculo='vehiculo municipal'
        return vehiculo;
    }else{
        vehiculo='vehiculo particular'
        return null;
    }
    
}
