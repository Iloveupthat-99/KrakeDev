let clientes = [
    {cI : '4646468', nombre : 'Robert', edad : 65},
    {cI : '4657898', nombre : 'Roberto', edad : 47},
    {cI : '5487456', nombre : 'Ruben', edad : 39}
]

mostrarCliente=function(){
    let cpmTabla=document.getElementById('divCliente');
    let contenidoTabla='<table>'
    +'<tr>'
    +'<th>CEDULA</th>'
    +'<th>NOMBRE</th>'
    +'<th>EDAD</th>'
    +'</tr>';
    let cmpCliente;
    for(i=0;i<clientes.length;i++){
        cmpCliente=clientes[i];
        contenidoTabla+=
        '<tr>'
        +'<td>'+cmpCliente.cI+'</td>'
        +'<td>'+cmpCliente.nombre+'</td>'
        +'<td>'+cmpCliente.edad+'</td>'
        +'<tr>';
    }
    contenidoTabla+='</table>';
    cpmTabla.innerHTML=contenidoTabla;
}

crearCliente=function(){
    let cedula=recuperarTexto('txtCedula');
    let nombre=recuperarTexto('txtNombre');
    let edad=recuperarInt('txtEdad');
    let nuevoCliente={}
    nuevoCliente.cI=cedula;
    nuevoCliente.nombre=nombre;
    nuevoCliente.edad=edad;
    agregarCliente(nuevoCliente);
}

agregarCliente=function(cliente){
    let result;
    result=buscarCliente(cliente.cI);
    if(result==null){
        clientes.push(cliente);
        alert('Cliente agregado');
        mostrarCliente();
    }else{
        alert('Ya existe un cliente con la cedula: '+cliente.cI);
    }

}

ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto('txtCedulaBusqueda');
    let result=buscarCliente(valorCedula);
    if(result==null){
        alert('Cliente no encontrado');
    }else{
        mostrarTextoEnCaja('txtCedula', result.cI);
        mostrarTextoEnCaja('txtNombre', result.nombre);
        mostrarTextoEnCaja('txtEdad', result.edad); 
    }
}

buscarCliente=function(cedula){
    let cmpCedula;
    let clienteEncontrado = null;
    for(i=0;i<clientes.length;i++){
        cmpCedula=clientes[i];
        if(cmpCedula.cI==cedula){
            clienteEncontrado=cmpCedula;
            break;
        }
    }
    return clienteEncontrado;
}

guardarCambios=function(){
    let cedula=recuperarTexto('txtCedula');
    let nombre=recuperarTexto('txtNombre');
    let edad=recuperarInt('txtEdad');
    let datosCliente={}
    datosCliente.cI=cedula;
    datosCliente.nombre=nombre;
    datosCliente.edad=edad;
    modificarCliente(datosCliente);
    mostrarCliente();
}



modificarCliente=function(cliente){
    let clienteEncontrado=buscarCliente(cliente.cI);
    if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
}