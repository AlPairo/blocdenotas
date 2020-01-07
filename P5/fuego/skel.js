function setup()
{
  base=createCanvas(800, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
<<<<<<< Updated upstream
  slider1=createSlider(-width,width,0,1);
  slider2=createSlider(0.01,2,1.5,0.03);
=======
>>>>>>> Stashed changes
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
  	stroke(255);
  	noFill();
  	background(0);
	let val1=slider1.value();
	let val2=slider2.value();
	let val3=slider3.value();
	translate(width/2,0);
	cosX(val1,val2,val3);
} 

function cosX(val1,val2,val3){
	//val1 es la "amplitud de onda" => la escala de f(x)
	//val3 es la "longitud de onda" => la escala de x
	//val2 es el intervalo entre un punto y otro
	beginShape(CURVE);
	for (let y=1;y<height;y+=val2){
		let b=y*val3;
		if(prob<0.5){
			var a=cos(y)*val1;
			curveVertex(a,b);
		}else{
			//var a=sin(y)*val1;
			var a=cos(y)*val1;
			curveVertex(a,b);	
		}
	beginShape();
	//curveVertex(0,0);
	for (let y=0;y<height;y+=val2)
	{
		let b=y*val3;
		var a=cos(y)*val1;
		curveVertex(a,b);	
<<<<<<< Updated upstream
		line(-width,height,a,b);
		line(a,b,width,height);
	}
	endShape();
	stroke(255,255,0);
	beginShape(CURVE);
	for (let y=1;y<height;y+=val2){
		let b=y*val3;
		if(prob<0.5){
	var a=sin(y)*val1;
			curveVertex(a,b);	
	
		}else{
	var a=sin(y)*val1;
			curveVertex(a,b);	
		}
=======
>>>>>>> Stashed changes
		line(-width,height,a,b);
		line(a,b,width,height);
	
	endShape();
	}
} }
