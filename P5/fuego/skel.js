





function setup()
{
  let base=createCanvas(600, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  background(0);
  stroke(255);
  let slider1=createSlider(1,20,1,1);
  let slider2=createSlider(1,30,1,5);
  slider1.style('width','200px');
  slider2.style('width','200px');
  slider1.parent('modifiers');
  slider2.parent('modifiers');
}
function draw(){
//const val1=slider1.value();
//const val2=slider2.value();
translate(width/2,0);
	for (let y=0;y<height;y+=0.1)
	{
		let a=sin(y)*100;
		let b=y*30;
		ellipse(a,b,2,2);
		if((sin(y)!=0))
		{
			line(-width,b*25,a,b);
			line(a,b,width,b*25);
		}
	}
}  



