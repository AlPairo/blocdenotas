let rate=0;
function grid(filas,columnas){
	var ancho=floor(width/filas);
	var alto=floor(height/columnas);
	var rejilla = [];
	for (var x = ancho; x < width-ancho; x+=ancho) {
		for (var y = alto; y < height-alto; y+=alto) {
			rejilla.push([[x],[y]]);
		}	
	}
	return rejilla;}



function setup(){
  createCanvas(600, 400); //Crea la base para el programa
  background(155);
  noStroke();
  }




function draw(){
	var r=colorGradient(155,255,20);
	var g=colorGradient(155,255,20);
	var b=colorGradient(155,255,20);
	background(155);
	var wea = grid(20,20);
	wea.map(function(a){
		noise(a[0]*0.5,a[1]*0.5,rate)>0.3 ? circle(a[0],a[1],(noise(a[0],a[1],rate)*25)) : console.log('noise > 0.3');
		noise(a[0]*0.5,a[1]*0.5,rate)> 0.5 ? fill(map(a[0],0,width+height,68,252),map(a[1],0,width+height,169,204),map(a[0]+a[1],0,width+height,252,32)) : noFill();
})
		rate+=0.02;
}
function colorGradient(start,finish,steps){
	var diff = (finish-start)/steps;
	var grad = [];
	for (var x = start; x <= finish; x+=diff) {
		grad.push(x);
	}
	return grad;
}