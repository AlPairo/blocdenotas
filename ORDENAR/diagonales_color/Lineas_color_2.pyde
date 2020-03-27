#Perillas
scl=20
paleta=['#CFFFB3','#ADE25D','#FCEC52','#3B7080','#3A5743']
margen=0.11 #Expresado en porcentaje
proporcion=2.39 #1 es 1:1 / 1.7 es 16:9 / 2.39 es la beta
alto=500
ancho=int(alto*proporcion)
grosorLinea=10
offset=1 #Expresado en porcentaje
run=0 #Tiene que estar en 0 para que se ejecute el programa

def setup():
    size(ancho,alto)
    background(0)
    strokeWeight(grosorLinea)
    blendMode(REPLACE)
       
def draw():
    global run
    if run<1:
        for x in range(0,ancho,scl):
            for y in range(0,alto,scl):
                stroke(paleta[int(random(0,4))])
                if (random(0,1)>0.5):
                    line(x,y+scl-(scl*offset),x+scl-(offset*0.25),y)
                else:
                    line(x,y,x+scl-(scl*offset),y+scl-(scl*offset))
        borde()
        run=2
               
def borde():
    noStroke()
    fill(255)
    #quad(0,0,ancho,0,ancho,(alto*margen),0,(alto*margen)) #arriba
    #quad(0,alto-(alto*margen),ancho,alto-(alto*margen),ancho,alto,0,alto) #abajo
    #quad(0,(alto*margen),(ancho*margen),(alto*margen),(ancho*margen),alto-(alto*margen),0,alto-(alto*margen)) #izquierda
    #quad(ancho-(ancho*margen),alto*margen,ancho,alto*margen,ancho,alto-(alto*margen),ancho-(ancho*margen),alto-(alto*margen)) #derecha
   
                   
def mouseClicked():
    background(255)
    global run
    run=0
