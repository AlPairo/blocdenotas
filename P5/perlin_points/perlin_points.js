function setup(){
  base=createCanvas(400,400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  background(255);
  stroke(0);
  strokeWeight(3);
  /*slider1=createSlider(-height,height,1,1);
  slider2=createSlider(0.07,2,1.5,0.03);
  slider3=createSlider(1,150,75,2);
  slider1.style('width','200px');
  slider2.style('width','200px');
  slider3.style('width','200px');
  slider1.parent('slider1');
  slider2.parent('slider2');
  slider3.parent('slider3');*/
  noLoop();
  noFill();
}

function draw(){
	var scl=width/7;
	var offset=0;
	for (var y = scl*0.5; y < height; y+=scl) {
		console.log(y+' + '+(y%scl));
		if ((y%scl)%2==0){
			offset=scl/2;
			}else{
				offset=0;
			}
		for (var x = (scl*0.5)+offset; x < width; x+=scl+offset) {
			point(x,y);
		}
	}	
} 
/*var puntos=[];
	var scl=width/7;
	var yoff=0;
	var inc=0.765483153484;
	for (var y = scl*0.5; y <= height; y+=scl) {
		var xoff=0;
		for (var x = scl*0.5; x <= width; x+=scl) {
			var ruido=noise(xoff,yoff);
			strokeWeight(map(ruido,0,1,1,45));
			point(x,y);
			puntos.push([x,y])
			xoff+=inc;
		}
		yoff+=inc;
	}
	for (var i = 0; i < puntos.length; i++) {
		var prob=random(0,1);
		if (true) {
			beginShape();
			var r=floor(random(0,puntos.length));
			var a=puntos[i];
			var b=puntos[r];
			strokeWeight(1);
			vertex(a[0],a[1]);
			vertex(b[0],b[1]);
			endShape();
			puntos.pop(i);
			puntos.pop(r);
		}
	}*/

