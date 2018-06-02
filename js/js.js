var a=3;
var p=1;


//Funcion que mide el scroll de la pagina y cuando llega al final carga dichero json ademas cambia texto en boton
$(function (){
	$(window).scroll(function (){
		console.log("ScrollTop: "+ $(window).scrollTop()+
		"\n alto ventana: " + $(window).height() +
		"\n alto documento: " + $(document).height() +"\n");
		
	if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()){
		if (p < 3) { cargar()
	
		}
		numero++;
		}else{
			 $('#btn').text('No hay más noticias');
		};
		
	};
	});
	$("#btn").click(function (){
		cargar ();
		numero++;
	});
});

function pintar(json){
	$.each(json, function(i, item ){
		  $("#out").append('<div class="row">' +
			  '<div class="col-sm-6 col-md-6">' +
				  '<a href="#">' +
				  '<div class="thumbnail">' +
				  '<div class="caption">' +
				  '<h3 class="text-justify">' +	item.titulo +	"</h3>" +
				  "</div>" +
				  "</a>" +
				  '<img src=" ' + item.img + '" alt"ups class="img-responsive">' +
				  '<div class="caption">' +
				   '<p class="text-justify">' + item.descripcion +	"</p>" +
				   	'<p class="text-left">' + item.fecha +	"</p>" + 
				   "</div>" +
				   "</div>" +
				   "</div>");
});  
}		

	function cargar(){
		$.getJSON( "https://rawgit.com/Puig99/Noticies/master/data/" + p + ".json", function(jsonObject){
	pintar(jsonObject);
		});
	};

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
