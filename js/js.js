
$.getJSON("json/json.json", function(jsonObject){
	pintar(jsonObject);
});


function pintar(json){
	$.each(json, function(i, item ){
		  $("#out").append( "<li id='" + i + "'>" + item.titulo+ " " + item.descripcio + "</li>" );
  });  
}	
		
	/*	$(function(){
			$("button").click(function(){
			$("#contenido").append('<div id="contenido" class="container"><div class="row"><div class="col-sm-6"><a href="#"> NOTICIA 1 </a></div><div class="col-sm-6"><a href="#"> NOTICIA 2 </a></div></div>')}
		});
		*/
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