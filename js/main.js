function getInputValue(){
  var mensaje= document.getElementById("nombre").value;
  return mensaje;
}
var min=0;
var max=peru.length;

function getrandom(min,max)  {
  return Math.random()*(max-min) + min;
}
var random=getrandom(min,max);
random=Math.round(random);

function r_foto(random) {
    var imagen_peru = peru[random].image;
    return "fotos/peru/"+imagen_peru;
}
var src=r_foto(random);
var nameConsulta=peru[random].name;

function MostrarFoto(src){
  var div = document.getElementById("foto");
  var foto = document.createElement("img");
  foto.setAttribute("src", src);

  div.appendChild(foto);
}
var MostrarImage=MostrarFoto(src);

function funciona () {
	if(nameConsulta== getInputValue()){
		alert("Ganaste");
	}else{
		alert("perdiste");
	}
}
var enviar = document.getElementById("boton");
enviar.addEventListener("click", funciona);