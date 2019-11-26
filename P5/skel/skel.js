function setup() {

  let base=createCanvas(600, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  slider = createSlider(0,255,0,10); //Slider, minimo,maximo,valor_inicial,step
  slider.style('width','200px');
  slider.parent('modifiers') //Mete el slider en el div con id 'modifiers'
}
function draw() {

let value=slider.value();
	background(value);
}




