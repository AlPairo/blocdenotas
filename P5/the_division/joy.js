function setup() {
  let base=createCanvas(400, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  slider = createSlider(0,100,0,10); //Slider, minimo,maximo,valor_inicial,step
  slider.style('width','200px');
  slider.parent('modifiers') //Mete el slider en el div con id 'modifiers'
  noLoop();
  stroke(0);
  strokeWeight(2);
}

function draw() {
	//var scl=slider.value();
	background(255);
	let scl=30;
	for(let y=30;y<height;y+=30)
	{
	beginShape();
			for(let x=0;x<=width+scl;x+=scl) 
		{
			if( x>width*0.3&&x<width*0.7)
			{
			curveVertex(x,y-random(10,75));
			}else{
				vertex(x,y);
			}
		}
	endShape();
	}
	
}

function mouseClicked(){
	clear();
	draw();
}

