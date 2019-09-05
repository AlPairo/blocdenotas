scl=10

def setup():
    size(600,600)
    background(50)
    stroke(255)
    noLoop()
    
def draw():
    for y in range(0,height,scl):
        for x in range(0,width,scl):
            if(random(0,1)>0.5):
                line(x, y,x + scl, y + scl)
            else:
                line(x + scl, y,x, y + scl);
