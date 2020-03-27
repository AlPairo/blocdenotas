function setup() {

  let base=createCanvas(600, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  background(0);
  
  //P
  sliderP = createSlider(0,2*PI,0,10); //Slider, minimo,maximo,valor_inicial,step
  sliderP.style('width','200px');
  sliderP.parent('sliderP') //Mete el slider en el div con id 'modifiers'

  //F
  sliderF = createSlider(0,255,0,10); //Slider, minimo,maximo,valor_inicial,step
  sliderF.style('width','200px');
  sliderF.parent('sliderF') //Mete el slider en el div con id 'modifiers'

  //T
  sliderT = createSlider(0,255,0,10); //Slider, minimo,maximo,valor_inicial,step
  sliderT.style('width','200px');
  sliderT.parent('sliderT') //Mete el slider en el div con id 'modifiers'

  //D
  sliderD = createSlider(0,255,0,10); //Slider, minimo,maximo,valor_inicial,step
  sliderD.style('width','200px');
  sliderD.parent('sliderD') //Mete el slider en el div con id 'modifiers'
  background(0);
}

function draw() {
	pendulo(sliderP.value(),sliderF.value(),sliderT.value(),sliderD.value());
}

function pendulo(p,f,t,d){
	return pow(((sin(p+(f*t)))*Math.E),((-d)*t));
}





