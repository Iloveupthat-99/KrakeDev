calcularTasaInteres=function(ingresoAnual){
    let ingresoAnualFloat=recuperarFloat(ingresoAnual);
    let tasaInteres;
    if(ingresoAnualFloat < 300000){
        tasaInteres=(ingresoAnualFloat*16)/100;
    }else if(ingresoAnualFloat >= 300000 && ingresoAnualFloat < 500000){
        tasaInteres=(ingresoAnualFloat*15)/100;
    }else if(ingresoAnualFloat >= 500000 && ingresoAnualFloat < 1000000){
        tasaInteres=(ingresoAnualFloat*14)/100;
    }else if(ingresoAnualFloat >= 1000000 && ingresoAnualFloat < 2000000){
        tasaInteres=(ingresoAnualFloat*13)/100;
    }else if(ingresoAnualFloat >= 2000000){
        tasaInteres=(ingresoAnualFloat*12)/100;
    }
    return tasaInteres;
}

calcularCapacidad=function(edad, ingresos, egresos){
    let edadInt=recuperarInt(edad);
    let ingresosFloat=recuperarFloat(ingresos);
    let egresosFloat=recuperarFloat(egresos);
    let capacidadPago;
    if(edad > 50){
        capacidadPago=(ingresosFloat-egresosFloat)*0.3;
    }else if(edad <= 50){
        capacidadPago=(ingresosFloat-egresosFloat)*0.4;
    }
    return capacidadPago;
}

calcularDescuento=function(precio, cantidad){
    let precioFloat=recuperarFloat(precio);
    let cantidadInt=recuperarInt(cantidad);
    let noDescnt=precioFloat*cantidadInt;
    let descuento
    let valorPagr;
    if(cantidadInt < 3){
        valorPagr=noDescnt;
    }else if(cantidadInt > 2 && cantidadInt < 6){
        descuento=noDescnt*0.02;
        valorPagr=noDescnt-descuento;
    }else if(cantidadInt > 5 && cantidadInt < 12){
        descuento=noDescnt*0.03;
        valorPagr=noDescnt-descuento;
    }else if(cantidadInt >= 12){
        descuento=noDescnt*0.04;
        valorPagr=noDescnt-descuento;
    }
    return valorPagr;
}

determinarColesterolLDL=function(nivelColesterol){
    let nivelColesterolFloat=recuperarFloat(nivelColesterol);
    let LDL;
    if(nivelColesterolFloat < 100){
        LDL=nivelColesterolFloat+' mg/dL se traduce a un nivel saludable de coleterol LDL';
    }else if(nivelColesterol > 99 && nivelColesterol > 110){
        LDL=nivelColesterolFloat+' mg/dL, debe tener menos de 20 años para dictaminar un nivel saludable de colesterol LDL';
    }else{
        LDL=nivelColesterol+'mg/dL se traduce a un nivel elevado de colesterol LDL';
    }
 return LDL;
}

validarClave=function(clave){
    let cantidadDigts=clave.length;
    if(cantidadDigts > 7 && cantidadDigts < 17){
        return true;
    }else{
        return false;
    }
}

esMayuscula=function(caracter){
    let mayuscula=caracter.charCodeAt(0);
    if(mayuscula > 64 && mayuscula < 91){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    let minuscula=caracter.charCodeAt(0);
    if(minuscula > 96 && minuscula < 123){
        return true;
    }else if(minuscula == 130 || (minuscula > 159 && minuscula < 164)){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let digito=caracter.charCodeAt(0);
    if(digito > 47 && digito < 58){
        return true;
    }else{
        return false;
    }
}


darPermiso=function(notaMatematica, notaFisica, notaGeometria){
    let matemtcFloat=recuperarFloat(notaMatematica);
    let fisicFloat=recuperarFloat(notaFisica);
    let geomtrFloat=recuperarFloat(notaGeometria);
    if(matemtcFloat > 90 || fisicFloat > 90 || geomtrFloat > 90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso=function(notaMatematica, notaFisica, notaGeometria){
    let matemtcFloat=recuperarFloat(notaMatematica);
    let fisicFloat=recuperarFloat(notaFisica);
    let geomtrFloat=recuperarFloat(notaGeometria);
    if((matemtcFloat > 90 || fisicFloat > 90) && geomtrFloat > 80){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematica, notaFisica, notaGeometria){
    let matemtcFloat=recuperarFloat(notaMatematica);
    let fisicFloat=recuperarFloat(notaFisica);
    let geomtrFloat=recuperarFloat(notaGeometria);
    if((matemtcFloat > 90 || fisicFloat > 90 || geomtrFloat > 90) && fisicFloat >matemtcFloat){
        return true;
    }else{
        return false;
    }
}


