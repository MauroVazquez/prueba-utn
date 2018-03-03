//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe = parseInt(prompt("Ingrese importe"));
    var iva = importe  * .21;
    var  precioFinal = importe + iva; 
    document.getElementById("importe").value = precioFinal;
}

