function setup()
{
  createCanvas(720, 400); //Crea la base para el programa
  stroke(0);
  background(255)
  var t = 20; // Tamaño de la celda
  // Cantidad de columnas y filas
  var columnas = floor(width / t);
  var filas = floor(height / t);
  var board = new Array(columnas);
  for (let i = 0; i < columnas; i++) {
    board[i] = new Array(filas);
  }
  for (let a=0;a<columnas;a++){
  	for (let b = 0; b < filas; b++) {
  		noise(a,b)*;
  	}
  }
}

function draw(){
	
} 
// reset board when mouse is pressed
function mousePressed() {
  console.log('hola');
}