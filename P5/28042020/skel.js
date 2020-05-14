/*

MAPA HEXAGONAL
PERLIN NOISE?

*/
let w = 700
let h = 700
let hex_size = 20

let grid_x_pixels = 0.9 * w
let grid_y_pixels = 0.9 * h

let sep_x = 3 * hex_size
let sep_y = 0.86 * hex_size

let grid_x = ~~(grid_x_pixels / sep_x) + 1
let grid_y = ~~(grid_y_pixels / sep_y) + 1

function draw_hexagon(x, y, side){

  beginShape()
    vertex(x + side * sin(PI/2), y + side * cos(PI/2))
    vertex(x + side * sin(PI/6), y + side * cos(PI/6))
    vertex(x + side * sin(11 * PI/6), y + side * cos(11 * PI/6))
    vertex(x + side * sin(3 * PI/2), y + side * cos(3 * PI/2))
    vertex(x + side * sin(7 * PI/6), y + side * cos(7 * PI/6))
    vertex(x + side * sin(5 * PI/6), y + side * cos(5 * PI/6))
  endShape(CLOSE)
  
  //ellipse(x,y,side)
}


function setup(){
   // # Create the Canvas
    createCanvas(w, h)
    background(255)
    
    // # Higher resolution
    //pixelDensity(2)
    
    // # Shape Details
    strokeWeight(2)
    stroke(0)
    noFill()
    
    
//     // # Draw the Grid
    let current_x = w/2 - grid_x_pixels/2
    let current_y = h/2 - grid_y_pixels/2
    print('current x y ',current_x,current_y)
    print('grid x y ',grid_x,grid_y)
    print('sep_x y ', sep_x, sep_y)
    for(i=0;i<grid_y;i++){
        if (i % 2 == 0) {current_x += 1.5 * hex_size}
        for(j=0;j<grid_x;j++){
            draw_hexagon(current_x, current_y, hex_size)
            current_x += sep_x
        }
        current_x = w/2 - grid_x_pixels/2
        current_y += sep_y
    }
}

function draw(){
  
} 