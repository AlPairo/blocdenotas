let w;
let columnas;
let filas;
let board;
let next;

function setup() {
  createCanvas(800, 600);
  noStroke()
  w = 20; // Tamaño de la celda
  // Cantidad de columnas y filas
  columnas = floor(width / w);
  filas = floor(height / w);
  // Wacky way to make a 2D array is JS
  board = new Array(columnas);
  for (let i = 0; i < columnas; i++) {
    board[i] = new Array(filas);
  }
  // Going to use multiple 2D arrays and swap them
  next = new Array(columnas);
  for (i = 0; i < columnas; i++) {
    next[i] = new Array(filas);
  }
  init();
}

function draw() {
  background(0);
  generate();
  for ( let i = 0; i < columnas;i++) {
    for ( let j = 0; j < filas;j++) {
      if ((board[i][j] == 1)) fill(255, 232, 102);
      else fill(0);
      rect(i * w, j * w, w-1, w-1);
    }
  }

}

// reset board when mouse is pressed
function mousePressed() {
  init();
}

// Fill board randomly
function init() {
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      // Lining the edges with 0s
      if (i == 0 || j == 0 || i == columnas-1 || j == filas-1) board[i][j] = 0;
      // Filling the rest randomly
      else board[i][j] = floor(random(2));
      next[i][j] = 0;
    }
  }
}

// The process of creating the new generation
function generate() {

  // Loop through every spot in our 2D array and check spots neighbors
  for (let x = 1; x < columnas - 1; x++) {
    for (let y = 1; y < filas - 1; y++) {
      // Add up all the states in a 3x3 surrounding grid
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }

      // A little trick to subtract the current cell's state since
      // we added it in the above loop
      neighbors -= board[x][y];
      // Rules of Life
      if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // Loneliness
      else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           // Overpopulation
      else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           // Reproduction
      else                                             next[x][y] = board[x][y]; // Stasis
    }
  }

  // Swap!
  let temp = board;
  board = next;
  next = temp;
}