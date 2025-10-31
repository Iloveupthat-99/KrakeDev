let frutas=['pera', 'manzana', 'pinia']
buscar=function(fruta){
    let elemento;
    let frutaEncontrada=null;
    for(i=0;i<frutas.length;i++){
        elemento=frutas[i];
        if(fruta==elemento){
            frutaEncontrada=elemento;
            break;
        }
    }
    return frutaEncontrada; 
}
probarBusqueda=function(){
    let rcvd=recuperarTexto('txtFruta');
    let result=buscar(rcvd);
    if(result==null){
        alert('No Existe la Fruta');
    }else{
        alert(rcvd+' Existe en el cesto');
    }
}