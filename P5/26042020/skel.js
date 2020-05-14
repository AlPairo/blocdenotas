function setup()
{
var base=createCanvas(700, 400); //Crea la base para el programa
base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
background(255);
var columnas=10;
var filas=10;
var r=colorGradient(155,255,10);
var g=colorGradient(155,255,10);
var b=colorGradient(155,255,10);
for (var x = 0; x < width; x+=width/columnas ){
    for (var y = 0; y < height; y+=height/steps) {
      fill(r[x+y],g[x+y],b[x+y]);
      rect(x,y,x+width/columnas,y+height/steps);
    }
  }
}

function draw(){
	
} 

function colorGradient(a,b,steps){
  var rate = (a-b)/steps;
  var result =[];
  for (var x = 0; x < width/steps; x+=rate ){
    for (var y = 0; y < height/steps; y+=rate) {
      result.push((x+y));
    }
  }
}
