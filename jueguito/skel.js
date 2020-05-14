var personaje1;
var personaje2;
var angulo=0;
var personajes =[];
function setup(){
  base=createCanvas(900, 500); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  noStroke();
  background(155);
  personaje1 = new pj(width-100,height-100,UP_ARROW,DOWN_ARROW,LEFT_ARROW,RIGHT_ARROW,101,102,105,104);
  personaje1.createSatelite(personaje1);
  personaje2 = new pj(100,100,87,83,65,68,70,71,84,82);
  personaje2.createSatelite(personaje2);
}


function draw(){
	background(155);
	personaje1.fire();
	personaje1.colision(personaje2.satelite);
	personaje1.update(angulo);
	personaje1.show();
	personaje2.fire();
	personaje2.colision(personaje1.satelite);
	personaje2.update(angulo);
	personaje2.show();

	angulo+=0.04;
}