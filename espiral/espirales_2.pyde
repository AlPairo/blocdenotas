scl=50

def setup():
    size(600,600,P3D)
    background(50)
    noFill()
    frameRate(10)
    
def draw():
    point(0,0)
    global scl
    espiral(random(0,600),random(0,600),50,50,20,5)
    

def espiral(ux,uy,rx,ry,scl,cant):
    translate(width/2,height/2)
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
    translate(ux,uy)
    stroke(255)
    for a in range(0,cant):
        arc(ux, uy, rx, ry, 0, HALF_PI)
        rx+=scl
        arc(ux, uy, rx, ry,HALF_PI,PI) 
        ry+=scl
        rotate(PI)
