let problemaPr = false;
let problemaCan = false;
let problemaPre = false;
calcularIVA = function (monto) {
    let valorIva = (monto * 12) / 100;
    return valorIva;
}
calcularSubtotal = function (precio, cantidad) {
    let subtotal = precio * cantidad;
    return subtotal;
}
calcularTotal = function (subtotal, descuento, IVA) {
    let total = (subtotal - descuento) + IVA;
    return total;
}

calcularDescuentoPorVolumen = function (subtotal, cantidad) {

    let descuento;
    if (cantidad < 3) {
        descuento = 0
    }
    if (cantidad > 2 && cantidad < 6) {
        descuento = subtotal * 0.03;
    }
    if (cantidad > 5 && cantidad < 12) {
        descuento = subtotal * 0.04;
    }
    if (cantidad > 11) {
        descuento = subtotal * 0.05;
    }
    return descuento;
}
esProductoValido = function (producto) {
    let productoL = producto.length;
    problemaPr = validar(productoL, 1, 10, 'advertencia1', 'EL PRODUCTO DEBE TENER COMO MAXIMO 10 CARACTERES');

}


esCantidadValida = function (cantidad) {
    problemaCan = validar(cantidad, 0, 100, 'advertencia2', 'LA CANTIDAD DEBE ESTAR COMPRENDIDA ENTRE 0 Y 100 MAXIMO');

}

esPrecioValido = function (precio) {
    problemaPre = validar(precio, 0, 50, 'advertencia3', 'EL PRECIO DEBE ESTAR COMPRENDIDO ENTRE 0 Y 50 MAXIMO');

}

validar = function (x, valorMin, valorMax, idComponente, mensaje) {
    let problema = false;
    if (isNaN(x) || x == 0 || x == '') {
        mostrarTexto(idComponente, '*CAMPO OBLIGATORIO');
        problema = true;
    } else {
        mostrarTexto(idComponente, '');
    }
    if (!problema && (x < valorMin || x > valorMax)) {
        mostrarTexto(idComponente, mensaje);
        problema = true;
    } else if (!problema) {
        mostrarTexto(idComponente, '');
    }
    return !problema;
}



