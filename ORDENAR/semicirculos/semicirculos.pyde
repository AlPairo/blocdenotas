scl = 20

def setup():
    size(640, 360)
    background(50)
    stroke(255)
    noLoop()
    noFill()
    strokeWeight(3)

def draw():
    global scl
    for x in range(0, width,scl):
        for y in range(0, height,scl):
            onda = random(0,1)        
            if (onda > 0.5):
                semicirculo(x, y, scl, 0, HALF_PI)
            elif(onda > 0.5 and onda < 0.75):
                semicirculo(x, y, scl, 0, HALF_PI)
            elif(onda > 0.25 and onda < 0.5):
                semicirculo(x, y, scl, 0, HALF_PI)
            else:
                semicirculo(x, y, scl, PI + HALF_PI, PI + PI)

def semicirculo(x, y, d, ai, af):
    arc(x, y, d, d, ai, af)


# if (onda>0.5):
# semicirculo(x,y,scl,0,HALF_PI)
#        elif(onda>0.5 and onda<0.75):
#            semicirculo(x,y,scl,HALF_PI,PI)
#        elif(onda>0.25 and onda<0.5):
#            semicirculo(x,y,scl,PI,PI+HALF_PI)
#        else:
#            semicirculo(x,y,scl,PI+HALF_PI,PI+PI)
