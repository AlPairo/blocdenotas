//Perillas
int scl=20;
int paleta[]={#CFFFB3,#ADE25D,#FCEC52,#3B7080,#3A5743};
float margen=0.11; //Expresado en porcentaje
float proporcion=2.39; //1 es 1:1 / 1.7 es 16:9 / 2.39 es la beta
int grosorLinea=10;
float offset=1; //Expresado en porcentaje
int run=0; //Tiene que estar en 0 para que se ejecute el programa

void setup(){
    size(500,600);
    background(0);
    strokeWeight(grosorLinea);
    blendMode(REPLACE);
}
void draw(){
    if (run<1){
        for(int x=0;x<width;x+=scl){
            for(int y=0;y<height;y+=scl){
              int rand=int(random(0,4));
                stroke(paleta[rand]);
                if (random(0,1)>0.5){
                    line(x,y+scl-(scl*offset),x+scl-(offset*0.25),y);
                }else{
                    line(x,y,x+scl-(scl*offset),y+scl-(scl*offset));
                }
            }}
        //borde();
        run=2;}
}
void borde(){
    noStroke();
    fill(255);
    quad(0,0,width,0,width,(height*margen),0,(height*margen)); //arriba
    quad(0,height-(height*margen),width,height-(height*margen),width,height,0,height); //abajo
    quad(0,(height*margen),(width*margen),(height*margen),(width*margen),height-(height*margen),0,height-(height*margen)); //izquierda
    quad(width-(width*margen),height*margen,width,height*margen,width,height-(height*margen),width-(width*margen),height-(height*margen)); //derecha
}
                   
void mouseClicked(){
    background(0);
    run=0;
}
