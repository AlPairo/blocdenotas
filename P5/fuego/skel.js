function setup()
{
  base=createCanvas(600, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  stroke(255);
  slider1=createSlider(1,height,1,1);
  slider2=createSlider(0.01,2,1,0.03);
  slider3=createSlider(1,150,75,2);
  slider1.style('width','200px');
  slider2.style('width','200px');
  slider3.style('width','200px');
  slider1.parent('slider1');
  slider2.parent('slider2');
  slider3.parent('slider3');
  }

function draw(){
  background(0);
  let val1=slider1.value();
  let val2=slider2.value();
  let val3=slider3.value();
  translate(width/2,0);
  senoX(val1,val2,val3);
//  dibujo(val1,val2,val3);	

} 
function senoX(val1,val2,val3){
	//val1 es la "amplitud de onda" => la escala de f(x)
	//val3 es la "longitud de onda" => la escala de x
	//val3 es el intervalo entre un punto y otro
	noFill();
	beginShape();
	for (let y=0;y<height;y+=val2)
	{
	curveVertex(sin(y)*val1,y*val3);
	}
	endShape();
} 
function dibujo(val1,val2,val3){
	for (let y=0;y<height;y+=0.1)
	{
		let a=sin(y)*val1;
		let b=y*val2;
		ellipse(a,b,2,2);
		if((sin(y)!=0))
		{
			line(-width,val3,a,b);
			line(a,b,width,val3);
		}
	}
}


