scl=50

def setup():
    size(600,600)
    background(50)
    stroke(255)
    noFill()
    frameRate(10)
    noLoop()
    
def draw():
    point(0,0)
    global scl
    for z in range(0,30):
        strokeWeight(random(0,10))
        espiral(random(width),random(height),random(0,75),random(0,75),random(0,50))
    

def espiral(ux,uy,rx,ry,scl):
    for a in range(0,3):
        arc(ux, uy, rx, ry, 0, HALF_PI) #blanco
        #stroke(0,255,0)
        rx+=scl
        arc(ux, uy, rx, ry,HALF_PI,PI) #verde"
        #stroke(0,0,255)
        ry+=scl
        arc(ux, uy, rx, ry,PI,PI+HALF_PI) #azul"
        #stroke(255,0,0)
        rx+=scl
        arc(ux, uy, rx, ry,PI+HALF_PI,PI*2) #rojo"
        #stroke(255,125,230)
  
    
