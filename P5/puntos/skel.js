/*
La idea es hacer como un ta-te-ti,es decir, 9 puntos:
. . .
. . .
. . .

De igual distancia entre ellos y afuera, para esto hay que divir el canvas en cuartos
Despues de eso la idea es que el programa eliga entre 2 y Z puntos y arme curvas y/o rectas entre esos puntos
Los puntos tienen una posicionX,posicionY y si esta en uso o no

Z seria un slider, si son 2 puntos es una recta si es mas una curva, cuantos mas puntos mas pronunciada?
*/

var puntos=[];
function setup() {
  let base=createCanvas(400, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  slider = createSlider(0,100,0,10); //Slider, minimo,maximo,valor_inicial,step
  slider.style('width','200px');
  slider.parent('modifiers') //Mete el slider en el div con id 'modifiers'
  background(0);
  stroke(255);
  strokeWeight(4);
  noLoop();
}

function draw() {
var cant=slider.value();
var scl=width/4;
for(let a=scl; a<width;a+=scl){
for(let b=scl; b<height;b+=scl){
puntos.push(new punto(a,b,true));
}
}
for(let j=0;j<puntos.length;j++){
	point(puntos[j].posX,puntos[j].posY);
}
}

function punto(x,y,libre){
	this.posX=x;
	this.posY=y;
	this.disponible=libre;
}
