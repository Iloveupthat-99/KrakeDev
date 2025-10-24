calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT


    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto('txtProducto');
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat('txtPrecio');
    //3. Recuperar cantidad como int
    cantidad = recuperarInt('txtCantidad');
    //4. Recuperar el porcentaje de descuento como int
    //5. Validar producto, cantidad, precio
    esProductoValido(nombreProducto);
    esCantidadValida(cantidad);
    esPrecioValido(precioProducto);
    //6. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    if (problemaPr & problemaCan & problemaPre) {
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        let valorSubtotall = stringNumeroFxd(valorSubtotal, 2);
        // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
        // los parametros cuando invoca la funcion.
        //7. Mostrar valorSubtotal en el componente lblSubtotal
        // Utilizar mostrarTexto
        mostrarTexto('lblSubtotal', valorSubtotall);
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
        //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotall, cantidad);
        let valorDescuentoo = stringNumeroFxd(valorDescuento, 2);
        //7. Mostrar el resultado en el componente lblDescuento
        mostrarTexto('lblDescuento', valorDescuentoo);
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10
                - Descuento esperado: 5.4
            Si el caso de prueba es exitoso, hacer un commit
         */
        //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
        // El IVA debe calcularse sobre el valor del subtotal menos el descuento
        let valorIva = valorSubtotall - valorDescuentoo;
        valorIVA = calcularIVA(valorIva);
        let valorIvaa = stringNumeroFxd(valorIVA, 2);
        //9. Mostrar el resultado en el componente lblValorIVA
        mostrarTexto('lblValorIVA', valorIvaa);
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
        //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
        valorTotal = calcularTotal(valorSubtotall, valorDescuentoo, valorIvaa);
        let valorTotall = stringNumeroFxd(valorTotal, 2);
        //11. Mostrar el resultado en el componente lblTotal
        mostrarTexto('lblTotal', valorTotall);
        /*
            Caso de prueba: 
                - cantidad: 10
                - precioProducto: 5.4 
                - descuento: 10
    
                    --valorSubtotal: 5.4
                    --descuento: 5.4
                    --IVA: 5.832
    
                    Total esperado: 54.432
    
                    Si el caso de prueba es exitoso, hacer un commit
           */

        //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
        let resumen = 'Valor a pagar por ' + cantidad + ' ' + nombreProducto + 's' + ' con ' + valorDescuentoo + ' USDs ' + ' de descuento: USD ' + valorTotall;
        mostrarTexto('lblResumen', resumen);
        /*
            Ejemplo: 
                Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
            Si funciona, hacer un commit
        */
    }else{
        mostrarTexto('lblSubtotal', '0.0');
        mostrarTexto('lblDescuento', '0.0');
        mostrarTexto('lblValorIVA', '0.0');
        mostrarTexto('lblTotal', '0.0');
        mostrarTexto('lblResumen', 'Revise los campos marcados con error.');
    }
}
limpiar = function () {
    mostrarTextoEnCaja('txtProducto', '');
    mostrarTextoEnCaja('txtCantidad', '');
    mostrarTextoEnCaja('txtPrecio', '');
    mostrarTexto('lblResumen', ' ');
    mostrarTexto('lblSubtotal', '0.0');
    mostrarTexto('lblDescuento', '0.0');
    mostrarTexto('lblValorIVA', '0.0');
    mostrarTexto('lblTotal', '0.0');
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */