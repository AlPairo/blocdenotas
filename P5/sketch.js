//var scl=80;
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
  createCanvas(400, 400);
  noLoop();
  noStroke();
  slider = createSlider(40,400,40,40);
  slider.position(100,height);
  slider.style('width','100px');
}

function draw() {
	background(255);
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

