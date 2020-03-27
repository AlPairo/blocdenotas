//DECLARACIONES
var do_draw = 1;
var len = [5, 5];
var angle = 3.141592653589793/32;
var start = 10000000;
var num = 8000;
var origin=0;
var n_sets = 1;
var c = color(n_sets);
var colour_spread = 40;

function setup(){
  let base = createCanvas(800, 800);
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  strokeWeight(1);
  let origin = createVector(width, 0);
  for (let i = 0; i < n_sets; i++) {
    c[i] = dullColour(colour_spread);
  }
}
 
// https://en.wikipedia.org/wiki/Collatz_conjecture
 
function draw(){
  if (do_draw == 0) return;
  background(50);
  stroke(255,10);
  cycle(start, start+num, angle, 0, origin);
  do_draw = 0;
}
 
function cycle(s,e,a,r,o){
  for (let i = s; i < e; i++) {
    let seq = new LongList();
    resetMatrix();
    translate(o.x, o.y);
    rotate(r);
    let n = i;
    let steps = 0;
    do {
      seq.append(n);
      n = collatz(n);
      steps++;
    } while (n != 1);
    seq.append(1);
    seq.reverse();
    for (let j = 0; j < seq.size(); j++)
    {
      let value = seq.get(j);
      if (value % 2 == 0) {
        rotate(a);
      } else {
        rotate(-a);
      }
      let l = random(len[0], len[1]);
 
      line(0, 0, 0, l);
      translate(0, l);
    }
  }
}
 
function collatz(n){
  if (n % 2 == 0) {
    return n / 2;
  } else {
    return (3*n + 1) / 2;
  }
}
 
function keyPressed(){
  if (keyCode==32) {
    saveFrame("collatz-"+hour()+"-"+minute()+"-"+second()+".png");
  }
  if (keyCode==10) {
    setup();
  }
}
 
function dullColour(spread){
  let x = random(255);
  return col = color(constrain(x + random(spread) - spread/2, 0, 255), constrain(x + random(spread) - spread/2 + 40, 0, 255), constrain(x + random(spread) - spread/2, 0, 255));
}