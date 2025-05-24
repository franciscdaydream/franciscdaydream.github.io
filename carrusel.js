'use strict'

const carrusel    = document.querySelector('.imgcar')
const flecha     = document.querySelectorAll('.flecha')
var movimiento = 0;
var valor = 34.1
var suma = 0

if (window.screen.width <= 441 ) {
  valor = 105
} else if (window.screen.width <= 730  ){
    valor = 60
} else if (window.screen.width >= 1080){
    valor = 33.5
}

flecha.forEach( ( cadaFlecha , i )=> {
 
    flecha[i].addEventListener('click',()=>{


        if ( i == 0){
            movimiento += suma + valor
        } else if (i == 1){
            movimiento += suma - valor
        }

        if (movimiento >= 0){
            movimiento = 0
        } else if (movimiento <= -148 && window.screen.width >= 1080){
            movimiento = 0
        }  else if (movimiento <= -731 && window.screen.width <= 730 && window.screen.width >= 441 ){
            movimiento = 0
        }  else if (movimiento <= -631 && window.screen.width <=441){
            movimiento = 0
        }

        carrusel.style.transform = `translateX(${ movimiento }%)`
   
        console.log("se movio" + movimiento)   
    })
})


