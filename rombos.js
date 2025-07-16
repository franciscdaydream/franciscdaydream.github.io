class rombos{
      
  constructor(pX,pY,sColor){
      this.x = pX;
      this.y = pY;
      this.mod = cambioColorGlobal/50;
      this.ancho = 30+this.mod;
      this.valor = sColor;
      this.colorFinal = color(0,0,0);

  }
  
  dibujar(){
    
    if(this.valor == 0 || this.valor == 3){
      this.colorFinal = color(0,0,0);
    } else if(this.valor == 1){
      this.colorFinal = color(0,0,100);
    } else if(this.valor == 2){
      this.colorFinal = color(200,84,62);
    }
      //mapeo la sicion del mouseY en el height y te devuelve un angulo pi
     let angulo =0 ;
     angleMode(DEGREES)
        if (detectagrave >= 2){
          while( angulo < 90){
            angulo += frameCount;
          }
     }  if (detectaagudo >= 1){
      while( angulo < 90){
            angulo += frameCount;
          }
     } 
    push();
     //hago que el 0,0 este en el centro de cada rombo
    translate(64 + this.x - this.mod + this.ancho, 94 + this.y );
    //ROTAN LOS ROMBOSS   ✧｡٩(ˊᗜˋ )و✧*｡
    rotate(angulo);
        
    noStroke();
    fill(this.colorFinal);
    quad(
     -this.ancho - this.mod, 0,                 // izquierda
    0, -this.ancho - this.mod,                 // arriba
    this.ancho + this.mod, 0,                  // derecha
   0, this.ancho + this.mod                   // abajo
    );
    pop();
  }
}
