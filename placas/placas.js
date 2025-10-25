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
    }else{
        mostrarTexto('lblValidacion', 'Estructura INCORRECTA');
        mostrarTexto('lblError', erroresEstructura);
    }
}