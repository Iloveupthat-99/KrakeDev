let esNuevo = false;
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0504789523", nombre: "Luis", apellido: "Perez", sueldo: 650.0 }
]

mostrarOpcionEmpleado = function () {
    mostrarComponente('divEmpleado');
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    mostrarEmpleados();
}

mostrarOpcionRol = function () {
    mostrarComponente('divRol');
    ocultarComponente('divEmpleado');
    ocultarComponente('divResumen');
}

mostrarOpcionResumen = function () {
    mostrarComponente('divResumen');
    ocultarComponente('divRol');
    ocultarComponente('divEmpleado');
}

mostrarEmpleados = function () {
    let rcvrd = document.getElementById('tablaEmpleados');
    let saveEmpleado;
    let tabla = '<table><tr>'
        + '<th>CEDULA</th>'
        + '<th>NOMBRE</th>'
        + '<th>APELLIDO</th>'
        + '<th>SUELDO</th>'
        + '</tr>'
    for (i = 0; i < empleados.length; i++) {
        saveEmpleado = empleados[i];
        tabla +=
            '<tr>'
            + '<td>' + saveEmpleado.cedula + '</td>'
            + '<td>' + saveEmpleado.nombre + '</td>'
            + '<td>' + saveEmpleado.apellido + '</td>'
            + '<td>' + saveEmpleado.sueldo + '</td>'
            + '</tr>';
    }
    tabla += '</table>';
    rcvrd.innerHTML = tabla;
}

ejecutarNuevo = function () {
    habilitarComponente('txtCedula');
    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    habilitarComponente('btnGuardar');
    esNuevo = true;

}

buscarEmpleado = function (cedula) {
    let empleadoEncontrado;
    let valid=0; 
    for (i = 0; i < empleados.length; i++) {
        empleadoEncontrado = empleados[i];
        if (empleadoEncontrado.cedula == cedula) {
            valid++;
        }
    }
    if(valid==1){
        return empleadoEncontrado;
    }else{
        return null;
    }
}

agregarEmpleado = function (empleado) {
    let empleadoEncontrado = buscarEmpleado(empleado.cedula);
    if (empleadoEncontrado == null) {
        empleados.push(
            empleado
        )
        return true;
    } else {
        return false;
    }
}

guardar = function () {
    let valido;
    
    let cedula = recuperarTexto('txtCedula');
    if(cedula.length==10){
        valido=validarLength('Cedula', cedula, 'DIGITOS UNICAMENTE');
    }else{
        mostrarTexto('lblErrorCedula', 'DEBE CONTENER 10 DIGITOS');
    }
    let nombre = recuperarTexto('txtNombre');
    if(nombre.length>2){
        valido=validarLength('Nombre', nombre, 'Mayusculas UNICAMENTE');
    }else{
        mostrarTexto('lblErrorNombre', 'DEBE CONTENER MINIMO 3 CARACTERES');
    }
    let apellido = recuperarTexto('txtApellido');
    if(apellido.length>2){
        valido=validarLength('Apellido', apellido, 'Mayusculas UNICAMENTE');
    }else{
        mostrarTexto('lblErrorApellido', 'DEBE CONTENER MINIMO 3 CARACTERES');
    }
    let sueldo = recuperarTexto('txtSueldo');
    if(sueldo>399 && sueldo <5001){
        valido=validarLength('Sueldo', sueldo, '*DEBE CONTENER NUMEROS FLOAT(DECIMALES)');
    }else{
        mostrarTexto('lblErrorSueldo', 'DEBE CONTENER VALORES ENTRE 400 Y 5000');
    }
    
    if (valido) {
        let empleado;
        let completeSave;
        let ultimoObje=empleados.length-1;
        if (esNuevo) {
            empleado = {}
            empleado.cedula = cedula;
            empleado.nombre = nombre;
            empleado.apellido = apellido;
            empleado.sueldo = sueldo;
            completeSave = agregarEmpleado(empleado);
        }
        if (completeSave) {
            alert('EMPLEADO GUARDADO CORRECTAMENTE');
            mostrarEmpleados();
        } else {
            alert('YA EXISTE UN EMPLEADO CON LA CEDULA: ' + empleados[ultimoObje].cedula);
        }
    }

}

validarLength=function(cmp, caracter, mensaje,){
    let validosCountD=0;
    let validosCountM=0;
    let validosCountFloat=0;
    let Caracter;
    let validos=false;
    for(i=0;i<caracter.length;i++){
        Caracter=caracter[i];
        if(esDigito(Caracter)){
            validos=true;
            validosCountD++;
            
        }else if(esMayuscula(Caracter)){
            validos=true;
            validosCountM++;
            
        }else if(parseFloat(Caracter)){
            validos=true;
            validosCountFloat++;
        }
    }
    if(validos && (validosCountD==caracter.length)){
        mostrarTexto('lblError'+cmp, '');
        return true;
    }else if(validos && (validosCountM==caracter.length)){
        mostrarTexto('lblError'+cmp, '');
        return true;
    }else if(validos && (validosCountFloat==caracter.length)){
        mostrarTexto('lblError'+cmp, '');
        return true;
    }else{
        mostrarTexto('lblError'+cmp, '*DEBE CONTENER '+mensaje);
        return false;
    }
}
validarCaracter=function(caracter, valid){
    
}



