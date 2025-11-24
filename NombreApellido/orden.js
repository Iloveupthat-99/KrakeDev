personas =[
    {nombre:'Marcos', edad:18},
    {nombre:'Roberto', edad:15},
    {nombre:'Kate', edad:25},
    {nombre:'Diana', edad:12},
    {nombre:'Benja', edad:5}
]

agregarPersona=function(){
    let name=recuperarTexto('txtNombre');
    let age;
    if(name>2){    
    age=recuperarInt('txtApellido');
    }else{
        mostrarTexto('lblError1', 'DEBE CONTENER MINIMO 3 CARACTERES');
    }
    if(age<0&&age>101){
        mostrarTexto('lblError2', 'DEBE CONTENER NUMEROS ENTRE 0 Y 100');
    }else{
        nuevaPersona={nombre:name, edad:age};
        personas.push(nuevaPersona)
        alert('Persona agregada correctamente');
    }
    
}

mostrarPersonas=function(){
    let people;
    let tabla=document.getElementById('tabla');
    tabla = '<table><tr>'+
        '<th>Nombre</th>'+
        '<th>EDAD</th></tr>';
    for(let i=0;i<personas.length;i++){
        people=persona[i];
        tabla+='<tr>'+
        '<td>'+personas.nombre+'</td>'+
        '<td>'+personas.edad+'</td><tr>';
    }
    tabla+='</table>';
}
