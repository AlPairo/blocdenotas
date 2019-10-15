var slider;
var scl;
var paleta=[
    "034732",
    "008148",
    "c6c013",
    "ef8a17",
    "ef2917"
];
function setup() {
  let base=createCanvas(400, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  noLoop();
  noStroke()
  slider = createSlider(40,400,40,40); //Slider, minimo,maximo,valor_inicial,step
  slider.style('width','200px');
  slider.parent('modifiers') //Mete el slider en el div con id 'modifiers'
}

function draw() {
	background(192,192,192);
	var scl=slider.value();
	console.log(scl);
	for (let x=0;x<width;x+=scl){
    for (let y=0;y<height;y+=scl){
      let prop=random(0,1);
      fill("#"+paleta[int(random(paleta.length))]);
      if(prop<0.25){
      arc(x, y, scl * 2, scl * 2, 0, HALF_PI);
      }else if(prop>0.25&&prop<0.5){
        arc(x + scl, y + scl, scl * 2, scl * 2, PI, PI + HALF_PI);
        }else if(prop>0.5&&prop<0.75){
        arc(x,y+scl,scl*2,scl*2,PI+HALF_PI,TWO_PI);
        }else if(prop>0.75&&prop<1){
        arc(x+scl,y,scl*2,scl*2,HALF_PI,PI);
        } 
    }
  	}
}

function mouseClicked(){
	draw();
}

