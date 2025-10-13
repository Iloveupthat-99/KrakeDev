calcularPromedioNotas=function(){
    let nota1=recuperarFloat('txtN1');
    let nota2=recuperarFloat('txtN2');
    let nota3=recuperarFloat('txtN3');
    let promedio=calcularPromedio(nota1, nota2, nota3);
    let promedioFxd=promedio.toFixed(2);
    mostrarTexto('promedio', promedioFxd);
}