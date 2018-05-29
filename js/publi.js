/* IMATGES PUBLICITAT PAGINA GRAN*/	
		var contador=1;
var temporizador = setInterval(myTimer,1000);

var c=[];
c[0]="img/publi1.jpg"
c[3]="img/publi2.jpg"
c[6]="img/publi3.jpg"

function myTimer() {
	contador++;
$("#publi").attr('src',c[contador-1]);;
if (contador==9) contador=0;

}
/* IMATGES PUBLICITAT VERSIO TELEFON */
var contador2=1
var temporizador2 = setInterval(myTimer2,1000);

var d=[];
d[0]="img/publi4.jpg"
d[3]="img/publi5.png"
d[6]="img/fiesta.jpg"

function myTimer2() {
	contador2++;
$("#publi2").attr('src',d[contador2-1]);;
if (contador2==9) contador2=0;

}


/* FINAL IMATGES PUBLICITAT */
