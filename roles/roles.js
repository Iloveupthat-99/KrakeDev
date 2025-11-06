let esNuevo = false;
let savecounter = 0;
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
    savecounter = 0;

}

buscarEmpleado = function (cedula) {
    let empleadoEncontrado;
    let valid = 0;
    for (let i = 0; i < empleados.length; i++) {
        empleadoEncontrado = empleados[i];
        if (empleadoEncontrado.cedula == cedula) {
            valid++;
            break;
        }
    }
    if (valid == 1) {
        return empleadoEncontrado;
    } else {
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
    let validC;
    let validN;
    let validA;
    let validS;
    let contador = 0;


    let cedula = recuperarTexto('txtCedula');
    if (cedula.length == 10) {
        validC = validarLength('Cedula', cedula, 'DIGITOS UNICAMENTE');
        contador++;
    } else {
        mostrarTexto('lblErrorCedula', 'DEBE CONTENER 10 DIGITOS');
        contador--;
    }
    let nombre = recuperarTexto('txtNombre');
    if (nombre.length > 2) {
        validN = validarLength('Nombre', nombre, 'Mayusculas UNICAMENTE');
        contador++;
    } else {
        mostrarTexto('lblErrorNombre', 'DEBE CONTENER MINIMO 3 CARACTERES');
        contador--;
    }
    let apellido = recuperarTexto('txtApellido');
    if (apellido.length > 2) {
        validA = validarLength('Apellido', apellido, 'Mayusculas UNICAMENTE');
        contador++;
    } else {
        mostrarTexto('lblErrorApellido', 'DEBE CONTENER MINIMO 3 CARACTERES');
        contador--;
    }
    let sueldo = recuperarTexto('txtSueldo');
    if (sueldo > 399 && sueldo < 5001) {
        validS = validarLength('Sueldo', sueldo, '*DEBE CONTENER NUMEROS FLOAT(DECIMALES)');
        contador++;
    } else {
        mostrarTexto('lblErrorSueldo', 'DEBE CONTENER VALORES ENTRE 400 Y 5000');
        contador--;
    }

    if (validC && validN && validA && validS && (contador == 4)) {
        let empleado;
        let completeSave;
        let empleadoExistente;
        if (esNuevo) {
            empleado = {}
            empleado.cedula = cedula;
            empleado.nombre = nombre;
            empleado.apellido = apellido;
            empleado.sueldo = sueldo;
            completeSave = agregarEmpleado(empleado);
        }
        if (savecounter < 0) {
            completeSave = 'aux'
        }
        if (completeSave == true) {
            alert('EMPLEADO GUARDADO CORRECTAMENTE');
            mostrarEmpleados();
            deshabilitarComponente('txtCedula');
            deshabilitarComponente('txtNombre');
            deshabilitarComponente('txtApellido');
            deshabilitarComponente('txtSueldo');
            deshabilitarComponente('btnGuardar');
            esNuevo = false;
            savecounter = 0;
        } else if (!completeSave) {
            empleadoExistente = buscarEmpleado(empleado.cedula);
            alert('YA EXISTE UN EMPLEADO CON LA CEDULA: ' + empleadoExistente.cedula);

            mostrarTextoEnCaja('txtCedula', empleadoExistente.cedula);
            mostrarTextoEnCaja('txtNombre', empleadoExistente.nombre);
            mostrarTextoEnCaja('txtApellido', empleadoExistente.apellido);
            mostrarTextoEnCaja('txtSueldo', empleadoExistente.sueldo);
            savecounter--;
        } else if (completeSave == 'aux') {
            alert('EMPLEADO MODIFICADO EXITOSAMENTE');
            mostrarEmpleados();
            deshabilitarComponente('txtCedula');
            deshabilitarComponente('txtNombre');
            deshabilitarComponente('txtApellido');
            deshabilitarComponente('txtSueldo');
            deshabilitarComponente('btnGuardar');

        }
    }

}

validarLength = function (cmp, caracter, mensaje,) {
    let validosCountD = 0;
    let validosCountM = 0;
    let validosCountFloat = 0;
    let Caracter;
    let validos = false;
    for (i = 0; i < caracter.length; i++) {
        Caracter = caracter[i];
        if (esDigito(Caracter)) {
            validos = true;
            validosCountD++;

        } else if (esMayuscula(Caracter)) {
            validos = true;
            validosCountM++;

        } else if (parseFloat(Caracter)) {
            validos = true;
            validosCountFloat++;
        }
    }
    if (validos && (validosCountD == caracter.length)) {
        mostrarTexto('lblError' + cmp, '');
        return true;
    } else if (validos && (validosCountM == caracter.length)) {
        mostrarTexto('lblError' + cmp, '');
        return true;
    } else if (validos && (validosCountFloat == caracter.length)) {
        mostrarTexto('lblError' + cmp, '');
        return true;
    } else {
        mostrarTexto('lblError' + cmp, '*DEBE CONTENER ' + mensaje);
        return false;
    }
}
validarCaracter = function (caracter, valid) {

}

deshabilitarComponentes = function () {
    deshabilitarComponente('txtCedula');
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('btnGuardar');
}

ejecutarBusqueda = function () {
    let empleadoCI = recuperarTexto('txtBusquedaCedula');
    let empleado = buscarEmpleado(empleadoCI);
    if (empleado == null) {
        alert('EMPLEADO NO EXISTE');
    } else {
        mostrarTextoEnCaja('txtCedula', empleado.cedula);
        mostrarTextoEnCaja('txtNombre', empleado.nombre);
        mostrarTextoEnCaja('txtApellido', empleado.apellido);
        mostrarTextoEnCaja('txtSueldo', empleado.sueldo);

        deshabilitarComponente('txtCedula');
        habilitarComponente('txtNombre');
        habilitarComponente('txtApellido');
        habilitarComponente('txtSueldo');
        habilitarComponente('btnGuardar');
    }

}

limpiar = function () {
    mostrarTextoEnCaja('txtCedula', '');
    mostrarTextoEnCaja('txtNombre', '');
    mostrarTextoEnCaja('txtApellido', '');
    mostrarTextoEnCaja('txtSueldo', '');
    esNuevo = false;
    deshabilitarComponentes();

}

buscarPorRol=function(){
    let cedulaRol=recuperarTexto('txtBusquedaCedulaRol');
    let encontrado=buscarEmpleado(cedulaRol);
    if(encontrado){
        mostrarTexto('infoCedula', encontrado.cedula);
        mostrarTexto('infoNombre', encontrado.nombre+' '+encontrado.apellido);
        mostrarTexto('infoSueldo', encontrado.sueldo);
    }else{
        alert('EMPLEADO NO ENCONTRADO');
    }
}

calcularAporteEmpleado=function(sueldo){

    let aporte=sueldo*0.0945;
    return aporte;
}

calcularValorAPagar=function(sueldo, aporteIESS, descuento){

    let total=sueldo-aporteIESS-descuento;
    return total;
}

calcularRol=function(){
    let sueldo=recuperarTextoDiv('infoSueldo')
    let sueldoFloat=parseFloat(sueldo);
    let descuento=recuperarFloat('txtDescuentos');
    let aporte;
    let total;

    if(sueldoFloat && sueldoFloat > 0 && sueldoFloat < (sueldoFloat+1)){
        aporte=calcularAporteEmpleado(sueldoFloat);
        mostrarTexto('infoIESS', aporte);
        total=calcularValorAPagar(sueldoFloat, aporte, descuento);
        mostrarTexto('infoPago', total);
    }
}