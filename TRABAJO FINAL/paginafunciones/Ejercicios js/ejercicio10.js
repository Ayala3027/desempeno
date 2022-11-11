function notas(){
    
let notaUno = prompt("Indique la nota 1 de matemáticas");
let notaDos = prompt("Indique la nota 2 de matemáticas");
let notaTres = prompt("Indique la nota 3 de matemáticas");
let notaDefinitiva = ((parseFloat (notaUno) + parseFloat( notaDos) + parseFloat(notaTres))/3);
let notaUnoEsp = prompt("Indique la nota 1 de español");
let notaDosEsp = prompt("Indique la nota 2 de español");
let notaTresEsp = prompt("Indique la nota 3 de español");
let notaDefinitivaEsp = ((parseFloat (notaUnoEsp) + parseFloat( notaDosEsp) + parseFloat(notaTresEsp))/3);
 

 if(notaDefinitiva >= 3){
    alert("Su nota final es: "+ notaDefinitiva + ". Ganaste Matemáticas")
 }else{
    alert("Su nota final es: "+ notaDefinitiva +". Perdiste Matemáticas")
 }

if(notaDefinitivaEsp >= 3){
   alert("Su nota final es: "+ notaDefinitivaEsp + ". Ganaste Español")
}else{
   alert("Su nota final es: "+ notaDefinitivaEsp +". Perdiste Español")
}
}
notas()