/*
	  Agua
Tierra	  Fuego
	  Aire
*/
function pj(x,y,arriba,abajo,izquierda,derecha,a,b,c,d) {
	this.pos = createVector(x,y);
	this.hp = 60;
	this.velX = 0;
	this.velY = 0;
	this.startPos = createVector(x,y);
	this.color = 'rgb(255,255,255)';
	this.colorA = a;
	this.colorB = b;
	this.colorC = c;
	this.colorD = d;
	this.lastColor;
	this.base = 'rgb(255,255,255)'
	this.arriba = arriba;
	this.abajo = abajo;
	this.derecha = derecha;
	this.izquierda = izquierda;
	this.satelite = 0;
	this.update = function(angulo){
		keyIsDown(this.izquierda) === true ? this.velX -= 7 : keyIsDown(this.derecha) === true ? this.velX += 7 : null
		keyIsDown(this.arriba) === true ? this.velY -= 7 : keyIsDown(this.abajo) ? this.velY += 7 : null
		//console.log('Velocidad en X = '+this.velX+" / Velocidad en Y = "+this.velY);
		this.pos.x += this.velX;
		this.pos.y += this.velY;
		this.velX = 0;
		this.velY = 0;
		this.satelite.rotar(angulo);
		this.check();
	}

	this.show = function(){
		fill(this.color);
		circle(this.pos.x,this.pos.y,this.hp);
		//console.log('Vida: '+this.hp+' HP');
	}

	this.start = function(){
		this.color = this.base;
		this.hp=50;
		this.pos.x=random(0,width);
		this.pos.y=random(0,height);
	}

	this.check = function(){
		// Si la posicion en X es mayor o menor al tamaño de la pantalla, da la vuelta
		this.pos.x >= width ? this.pos.x = 0 : this.pos.x < 0 ? this.pos.x = width : null
		// Lo mismo para el eje Y
		this.pos.y >= height ? this.pos.y = 0 : this.pos.y < 0 ? this.pos.y = height : null
		// Si la vida es menor o igual a 1 resetea el pj
		this.hp <= 1 ? this.start() : null
	}

	this.fire = function(){
		keyIsDown(this.colorA) === true ? this.color='rgb(35, 207, 255)' : keyIsDown(this.colorB) === true ? this.color='rgb(255, 0, 0)' : null
		keyIsDown(this.colorC) === true ? this.color='rgb(58, 255, 91)' : keyIsDown(this.colorD) ? this.color='rgb(96, 0, 0)' : 	null
		this.lastColor = this.color ;
		this.satelite.colorUpdate();
		keyIsDown(this.colorA) === false && keyIsDown(this.colorB) === false && keyIsDown(this.colorC) === false && keyIsDown(this.colorD) === false ? this.color=this.lastColor: null
	}

	this.colision = function(obj){
		// Si la distancia entre el centro del personaje y otro objeto es menor a la mitad de la suma de sus radios, hace daño
		return dist(this.pos.x,this.pos.y,obj.pos.x,obj.pos.y) < ((this.hp+obj.radio)/2) ? this.dmg(obj,1) : false
	}

	this.dmg = function(obj,mult){
		// Si el color del pj es diferente al del objeto, resta vida
		return this.color !== obj.parent.color ? this.hp -= 1*mult : null;
	}

	this.createSatelite = function(ppp){
		this.satelite = new satelite(ppp);
	}
}

function satelite(obj){
	this.parent = obj;
	this.pos = createVector((this.parent.pos.x+this.parent.hp),(this.parent.pos.y-this.parent.hp));
	this.radio = this.parent.hp*1.5;

	this.show = function(){
		circle(this.pos.x,this.pos.y,17);
	}

	this.colorUpdate = function(){
		fill(this.parent.color);
	}

	this.rotar = function(angulo){
		this.pos.x = this.parent.pos.x+(this.radio*cos(angulo));
		this.pos.y = this.parent.pos.y+(this.radio*sin(angulo));
		this.check();
		this.show();
	}

	this.check = function(){
		// Si la posicion en X es mayor o menor al tamaño de la pantalla, da la vuelta
		this.pos.x >= width ? this.pos.x = 0 : this.pos.x < 0 ? this.pos.x = width : null
		// Lo mismo para el eje Y
		this.pos.y >= height ? this.pos.y = 0 : this.pos.y < 0 ? this.pos.y = height : null
	}
}



/*function punto(x,y){
	this.pos = createVector(x,y);
	this.hp = 25;
	this.color = 'rgb(255, 0, 0)';
	this.colores = ['rgb(255, 0, 0)','rgb(35, 207, 255)','rgb(58, 255, 91)','rgb(96, 0, 0)'];
	this.show = function(){
		fill(this.color);
		circle(this.pos.x,this.pos.y,this.hp);
	}
	this.change=function(){
		keyIsDown(32) === true ? this.color=this.colores[2] : null
		return this.color;
	}
}*/
