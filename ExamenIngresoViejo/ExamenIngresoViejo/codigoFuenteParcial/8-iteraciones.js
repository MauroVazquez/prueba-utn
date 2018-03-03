//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var pares;
    var suma;
    var promedio;
    var valorMax;
    var valorMin;
    
    var respuesta='s';
	flag = 0;
	do
	{	
		numero =parseInt(prompt("ingrese un numero"));
	  while(numero)
		if (numero >0 )
		{
			pares++  ;
		}
		if(numero < menor || flag==0)
		{
			menor = numero
			
		}
    }while(respuesta== 's')


}