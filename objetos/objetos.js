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

modificarAtributos=function(){
    let cuenta = {
        numero : '46546546',
        saldo : 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}
crearCliente=function(){
    let cliente = {
        CI : '0504715756',
        nombre : 'Lojano'
    }
    cliente.CI='isNaN';
    cliente.nombre='LOJANITO';
    let cliente1 = {}
    cliente1.nombre='Sol';
    cliente1.apellido='Luna';
    cliente1.CI='650840066';
}

probarIncrementarSaldo=function(){
    let cnt = {numero : '56456', saldo : 50.0}
    incrementarSaldo(cnt, 100);
    console.log(cnt.saldo);
}

probarDeterminarMayor=function(){
    let P1={
        nombre : 'Pablo',
        edad : 45
    };
    let P2={
        nombre : 'Pepe',
        edad : 30
    };
    let mayor;
    mayor=determinarMayor(P1, P2);
    if(mayor!=null){
        console.log('El mayor es '+mayor.nombre);
    }else{
        console.log('Ambos tienen la misma edad');
    }
}

incrementarSaldo=function(cuenta, monto){
    cuenta.saldo+=monto;
}
determinarMayor=function(persona1, persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(!persona1.edad>persona2.edad){
        return persona2;
    }else{
        return null;
    }

}