probarAtributos=function(){
    let persona = {
        nombre : 'Pedro',
        apellido : 'Morales',
        edad : 24,
        vivo : true 
    }
    console.log(persona.edad);
    console.log(persona.apellido);
    if(!persona.vivo){
        console.log('no esta vivo');
    }else{
        console.log('esta vivo');
    }
}

crearProducto=function(){
    let producto1 = {
        nombre: 'Bimbo',
        precio: 0.5,
        stock: 20
    }
    let producto2 = {
        nombre : 'Empanadas',
        precio : 2.5,
        stock : 12
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    comparativa(producto1, producto2);
}
comparativa=function(P1, P2){
    if(P1.stock>P2.stock){
        console.log(P1.nombre+' tiene mayor stock')
    }else if(!P1.A>P2.A){
        console.log(P2.nombre+' tiene mayor stock');
    }else if(P1.A==P2.A){
        console.log('ambos productos tienen el mismo stock');
    }
}