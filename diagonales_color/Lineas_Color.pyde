scl=20
borde=50
r=[3,0,198,239,239]
g=[71,129,192,138,41]
b=[50,72,19,23,23]

def setup():
    size(600,600)
    background(255)
    strokeWeight(10)
    noLoop()
    
def draw():
    for x in range(borde,width-borde,scl):
        for y in range(borde,height-borde,scl):
            colorete=int(random(0,4))
            stroke(r[colorete],g[colorete],b[colorete])
            if(random(0,1)>0.5):
                line(x,y+scl,x+scl,y)
            else:
                line(x,y,x+scl,y+scl)
