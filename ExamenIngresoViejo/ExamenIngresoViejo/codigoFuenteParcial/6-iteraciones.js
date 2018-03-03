//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
 var venta;
 var maxVenta;
 var minVenta;
 var flag=0;


    for(var i=1 ;i < 7; i++ )
    {
        venta = parseFloat(prompt("Ingrese importe: "));
        while(venta==0)
        {
            venta=prompt("Error Reingrese valor")
        }

        if(venta > maxVenta || flag==0)
        {
            maxVenta = venta;
        }
        if(venta < minVenta || flag==0 )
        {
            minVenta= venta;
            flag =1
        }

    }
    alert("La maxima venta fue: " + maxVenta + "Y la minima: " + minVenta);

}

