//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numero1 =parseInt(prompt("Ingrese un numero"));
    var numero2 = parseInt(prompt("Ingrese otro numero"));

    if(numero1==numero2)
    {
        numero1 = numero1.toString(numero1);
        numero2= numero2.toString(numero2);
       producto= numero1 + numero2;
        document.write("El resultado es: "+producto);
    }
    else if( numero1 > numero2)
    {
        resta = numero1 - numero2;
        document.write("La resta es: "+resta);
    }
    else
    {
       suma = numero1 + numero2;
       document.write("La suma es: "+suma);
    }
     
}

