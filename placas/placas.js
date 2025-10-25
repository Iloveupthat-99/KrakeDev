validarPlaca=function(){
    let placa=recuperarTexto('txtPlaca');
    let erroresEstructura=validarEstructura(placa);
    if(erroresEstructura == null){
        mostrarTexto('lblValidacion', 'ESTRUCTURA VALIDA');
        let provincia=obtenerProvincia(placa);
        if(provincia != null){
            mostrarTexto('provincia', provincia);
        
        }else{
            mostrarTexto('provincia', 'Provincia incorrecta');
        }
        let vehiculo=obtenerTipoVehiculo(placa);
        if(vehiculo != null){
            mostrarTexto('lblVehiculo', vehiculo);
        }else{
            mostrarTexto('lblVehiculo', 'Vehiculo incorrecto');
        }
        let diaPicoYPlaca=obtenerDiaPicoYPlaca(placa);
        if(diaPicoYPlaca != null){
            mostrarTexto('lblPicoYPlaca', diaPicoYPlaca);
        }else{
            mostrarTexto('lblPicoYPlaca', 'Fines de semana y feriados dias libres');
        }
    }else{
        mostrarTexto('lblValidacion', 'Estructura INCORRECTA');
        mostrarTexto('lblError', erroresEstructura);
    }
}
limpiar=function(){
    mostrarTexto('lblValidacion', '');
    mostrarTexto('provincia', '');
    mostrarTexto('lblVehiculo', '');
    mostrarTexto('lblPicoYPlaca', '');
    mostrarTexto('lblValidacion', '');
    mostrarTexto('lblError', '');
    mostrarTextoEnCaja('txtPlaca', '');
}