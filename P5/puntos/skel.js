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
  stroke(0);
  strokeWeight(4);
  noFill();
  noLoop();
  drawGrid();
}

function draw() {
puntos.forEach(function(element){
    element.disponible=true;
});
beginShape();
for(let d=0;d<30;d++){
	let r=int(random(0,puntos.length));
	if(puntos[r].disponible==true){
		curveVertex(puntos[r].posX,puntos[r].posY);
		puntos[r].disponible=false;
	}
}
endShape();
}

function punto(x,y,libre){
	this.posX=x;
	this.posY=y;
	this.disponible=libre;
}

function drawGrid(){
var scl=width/4;
for(let a=30; a<width-30;a+=scl){
for(let b=30; b<height-30;b+=scl){
puntos.push(new punto(a,b,true));
point(a,b);
}
}
}
