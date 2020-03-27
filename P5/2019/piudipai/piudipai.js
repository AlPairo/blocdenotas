function setup() {
  let base=createCanvas(650, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  /*slider = createSlider(0,100,0,10); //Slider, minimo,maximo,valor_inicial,step
  slider.style('width','200px');
  slider.parent('modifiers') //Mete el slider en el div con id 'modifiers'*/
  noLoop();
  strokeWeight(30);
  }

function draw() {
	var scl=30;
	clear();
	beginShape();
	for (let x=0;x<width;x+=scl)
	{
		let rando=random(60,200);
		curveVertex(x,rando);
	
		}
		endShape();
	//var scl=slider.value();
}

