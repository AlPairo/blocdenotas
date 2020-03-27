PImage pic;

void setup() {
  size(800, 500);
  pic=loadImage("picaso.png");
  pic.filter(GRAY);
  image(pic, 0, 0);
}

void draw() {
  pic.loadPixels();
  for (int y=0; y<pic.height-1; y++) {
    for (int x=1; x < pic.width-1; x++) {
      int factor=1;
      color pix = pic.pixels[index(x, y)];
      float oldR=red(pix);
      float oldG=green(pix);
      float oldB=blue(pix);
      float newR=round(factor*(oldR/255))*255/factor;
      float newG=round(factor*(oldG/255))*255/factor;
      float newB=round(factor*(oldB/255))*255/factor;
      pic.pixels[index(x, y)]=color(newR, newG, newB);
      float errorR=oldR-newR;
      float errorG=oldG-newG;
      float errorB=oldB-newB;

      int index=index(x+1, y);      
      color c = pic.pixels[index];
      float r = red(c);
      float g = green(c);
      float b = blue(c);
      r = r + errorR * 7/16.0;
      g = g + errorG * 7/16.0;
      b = b + errorB * 7/16.0;
      pic.pixels[index]=color(r, g, b);


      index=index(x-1, y+1);      
      c = pic.pixels[index];
      r = red(c);
      g = green(c);
      b = blue(c);
      r = r + errorR * 3/16.0;
      g = g + errorG * 3/16.0;
      b = b + errorB * 3/16.0;
      pic.pixels[index]=color(r, g, b);


      index=index(x, y+1);      
      c = pic.pixels[index];
      r = red(c);
      g = green(c);
      b = blue(c);
      r = r + errorR * 5/16.0;
      g = g + errorG * 5/16.0;
      b = b + errorB * 5/16.0;
      pic.pixels[index]=color(r, g, b);


      index=index(x+1, y+1);      
      c = pic.pixels[index];
      r = red(c);
      g = green(c);
      b = blue(c);
      r = r + errorR * 1/16.0;
      g = g + errorG * 1/16.0;
      b = b + errorB * 1/16.0;
      pic.pixels[index]=color(r, g, b);
    }
  }  
  pic.updatePixels();
  image(pic, 400, 0);
  save("diagonal.png");
}

int index(int x, int y) {
  return x+y*pic.width;
}
