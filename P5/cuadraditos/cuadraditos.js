var run=true;
function setup() {
  var base=createCanvas(600, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  slider = createSlider(0,255,0,10); //Slider, minimo,maximo,valor_inicial,step
  slider.style('width','200px');
  slider.parent('modifiers') //Mete el slider en el div con id 'modifiers'
  noStroke();
 }

function draw() {
while(run==true){
 var noise_zoom=0.001;
 var chances = 5000;
 var lista = [];
 class cuadrado {
  	constructor(a, b, c) {
  		this.x = a;
  		this.y = b;
  		this.size = c;
  		this.color= noise(this.x*noise_zoom,this.y*noise_zoom)*255;
  	}
  	mostrar(){
  		rotate(random()*PI);
  		fill(this.color);
  		circle(this.x,this.y,this.size);
  	}}
  for (var i = 0; i < 5000; i++) {
  	lista.push(new cuadrado(random(-width,width),random(-height,height),random(30)));
  	}

  lista.forEach(element => element.mostrar());
  run=false;  
    }
 }
 
function mouseClicked() {
clear();
run=true;
}


