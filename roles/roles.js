let esNuevo=false;
let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0504789523",nombre:"Luis",apellido:"Perez",sueldo:650.0}
]

mostrarOpcionEmpleado=function(){
    mostrarComponente('divEmpleado');
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    mostrarEmpleados();
}

mostrarOpcionRol=function(){
    mostrarComponente('divRol');
    ocultarComponente('divEmpleado');
    ocultarComponente('divResumen');
}

mostrarOpcionResumen=function(){
    mostrarComponente('divResumen');
    ocultarComponente('divRol');
    ocultarComponente('divEmpleado');
}

mostrarEmpleados=function(){
    let rcvrd=document.getElementById('tablaEmpleados');
    let saveEmpleado;
    let tabla='<table><tr>'
    +'<th>CEDULA</th>'
    +'<th>NOMBRE</th>'
    +'<th>APELLIDO</th>'
    +'<th>SUELDO</th>'
    +'</tr>'
    for(i=0;i<empleados.length;i++){
        saveEmpleado=empleados[i];
        tabla+=
        '<tr>'
        +'<td>'+saveEmpleado.cedula+'</td>'
        +'<td>'+saveEmpleado.nombre+'</td>'
        +'<td>'+saveEmpleado.apellido+'</td>'
        +'<td>'+saveEmpleado.sueldo+'</td>'
        +'</tr>';
    }
    tabla+='</table>';
    rcvrd.innerHTML=tabla;
}

ejecutarNuevo=function(){
    habilitarComponente('txtCedula');
    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    habilitarComponente('btnGuardar');
    esNuevo = true;

}