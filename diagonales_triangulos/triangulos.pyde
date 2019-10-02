scl=20
def setup():
    size(600,600)
    background(50)
    noLoop()
    
def draw():
    global scl
    capa1=createGraphics(width, height)
    capa2=createGraphics(width, height);
    image(capa1,0,0)
    capa1.beginDraw()
    for x in range(0,width,scl):
        for y in range(0,height,scl):
            if(random(0,1)>0.5):
                fill(HSB,255,200,200)
                beginShape()
                vertex(x,y)
                vertex(x+scl,y+scl)
                vertex(x+scl,y)
                endShape()
                line(x,y,x+scl,y+scl)
            else:
                fill(HSB,103,200,200)
                beginShape()
                vertex(x+scl,y)
                vertex(x,y+scl)
                vertex(x+scl,y+scl)
                endShape()
                line(x+scl,y,x,y+scl)
    capa1.endDraw()
                
                
                #plaza cagancha 1335 piso 12 maria belen 16:30
                
