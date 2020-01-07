function setup() {
  var base=createCanvas(600, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  slider = createSlider(0,255,0,10); //Slider, minimo,maximo,valor_inicial,step
  slider.style('width','200px');
  slider.parent('modifiers') //Mete el slider en el div con id 'modifiers'
  background(0);
  stroke(255);
  fill(255);
  noLoop();
}

function draw(){
	for (var i = 0; i < 250; i++) {
  	square(random(width),random(height),random(20));
  }
}

