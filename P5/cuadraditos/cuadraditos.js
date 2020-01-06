function setup() {
  var base=createCanvas(600, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  slider = createSlider(0,255,0,10); //Slider, minimo,maximo,valor_inicial,step
  slider.style('width','200px');
  slider.parent('modifiers') //Mete el slider en el div con id 'modifiers'
  background(0);
  fill(255);
  noLoop();
  var lista = [];
  var cuadrado = {
  	x:0,
  	y:0,
  	size:1
  	toca: function(){
  		return 
  	}
  };
  for (var i = 0; i < 250; i++) {
  	cuadrado.x=random(width);
  	cuadrado.y=random(width);
  	cuadrado.size=random(20);
  	square(cuadrado.x,cuadrado.y,cuadrado.size);
  }
}


