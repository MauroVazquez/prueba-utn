//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho = parseFloat(document.getElementById("ancho").value);
    var largo = parseFloat(document.getElementById("largo").value);
     
    var perimetro = ancho + ancho +largo+ largo;

    var alambre = perimetro * 6;
    alert("Se necesitan " + alambre + " metros de alambre")


}

