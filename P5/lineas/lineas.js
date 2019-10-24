function setup() {
  let base=createCanvas(400, 400); //Crea la base para el programa
  base.parent('espacio');  //Mete el sketch en el div con id 'espacio'
  escala = createSlider(10,100,50,10); //Slider, minimo,maximo,valor_inicial,step
  escala.style('width','200px');
  escala.parent('modifiers') //Mete el slider en el div con id 'modifiers'
  boton = createButton('Generar');
  boton.parent('modifiers');
  boton.mouseClicked(redraw);
  escala.mouseClicked(redraw);
  grosor = createSlider(1,6,1,1);
  grosor.style('width','200px');
  grosor.parent('modifiers') //Mete el slider en el div con id 'modifiers'
  grosor.mouseClicked(redraw);
  guardar=createButton('Guardar');
  guardar.parent('modifiers');
  guardar.mouseClicked(descargar);
  stroke(255);
  noLoop();

}

function draw() {
	clear();
strokeWeight(grosor.value());

	var scl=escala.value();
	for(let x=0;x<width;x+=scl){
		for(let y=0;y<height;y+=scl){
			let r=random(0,1);
			if(r < 0.4){
line(x,y,x+scl,y+scl);
}else if(r > 0.4 && r < 0.8 ){
line(x,y+scl,x+scl,y);
	}	}
	}
}

function descargar(){
	saveCanvas('escala'+escala.value()+'.png');
}