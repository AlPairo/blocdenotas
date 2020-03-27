function setup()
{
  base=createCanvas(600, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  stroke(255);
  slider1=createSlider(-height,height,1,1);
  slider2=createSlider(0.07,2,1.5,0.03);
  slider3=createSlider(1,150,75,2);
  slider1.style('width','200px');
  slider2.style('width','200px');
  slider3.style('width','200px');
  slider1.parent('slider1');
  slider2.parent('slider2');
  slider3.parent('slider3');
}

function draw(){
	
} 

