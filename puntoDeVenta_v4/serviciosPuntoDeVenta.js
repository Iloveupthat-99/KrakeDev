calcularValorDescuento=function(monto, porcentajeDescuento){
    let descuento=(monto*porcentajeDescuento)/100
    return descuento;
}
calcularIva=function(monto){
    let valorIva=(monto*12)/100;
    return valorIva;
}
calcularSubtotal=function(precio, cantidad){
    let subtotal=precio*cantidad;
    return subtotal;
}
calcularTotal=function(subtotal, descuento, IVA){
    let total=(subtotal-descuento)+IVA;
    return total;
}
