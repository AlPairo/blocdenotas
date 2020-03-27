scl=50

def setup():
    size(600,600,P3D)
    background(50)
    stroke(255)
    noFill()
    frameRate(10)
    noLoop()
    
def draw():
    translate(width/2,height/2)
    point(0,0)
    global scl
    for z in range(0,3):
        espiral(random(0,200),random(0,200),100,100,20,5)
    

def espiral(ux,uy,rx,ry,scl,cant):
    cocoa=random(0,1)>0.75
    if (cocoa > 0.80):
        rotate(QUARTER_PI+HALF_PI)
    elif(cocoa > 0.6 and cococa < 0.8):
        rotate(QUARTER_PI)
    elif(cocoa > 0.4 and cocoa < 0.6):
        rotateX(QUARTER_PI)
    elif(cocoa > 0.2 and cocoa < 0.4):
        rotateX(QUARTER_PI)
        rotate(QUARTER_PI)
    else:
        rotateX(QUARTER_PI)
        rotate(QUARTER_PI+HALF_PI)
    fill(255,0,0)
    translate(ux,uy)
    sphere(rx)
    noFill()
    for a in range(0,cant):
        arc(0, 0, rx, ry, 0, HALF_PI) #blanco
        #stroke(0,255,0)
        rx+=scl
        arc(0, 0, rx, ry,HALF_PI,PI) #verde"
        #stroke(0,0,255)
        ry+=scl
        arc(0, 0, rx, ry,PI,PI+HALF_PI) #azul"
        #stroke(255,0,0)
        rx+=scl
        arc(0, 0, rx, ry,PI+HALF_PI,PI*2) #rojo"
        #stroke(255,125,230)
