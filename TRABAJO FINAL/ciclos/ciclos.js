
a=4;
b=5;
c="4"
d="5"
if(true){
    alert("la condición se cumple")
}

var num = 8;
num = prompt ("digite número menor a 10 ")
if(num<10){
    document.write("el numero es menor a 10 ")
} 
else{
    document.write("el número es igual o mayor a 10")
}



var num = 8;
num = prompt ("digite número")
if(num<10){
    document.write("el numero es menor a 10 ")
} 


var num = 8
num = prompt("digite numero en pantalla ")
if(num<10){
    document.write("el numero es menor a 10 ")
} else{
    if (num > 10){
        document.write("el numero es mayor a 10 ")
    }else{
        document.write("el numero es igual a 10 ")
    }
}


nombre=prompt ("ingresa tu nombre ");
apellido=prompt("ingresa tu apellido ");
if(nombre=="adrian" && apellido=="jimenez"){
    document.write("eres 'adrian jimenez' ")
}
else{
    alert("no eres adrian jimenez ")
}


edad=prompt("digita tu edad ")
if(edad < 18){
    alert("eres menor de edad "), edad;
}else {
    alert("eres meyor de edad"), edad;
}



temperatura = prompt("cual es tu temperatura? ");
if (temperatura < 37){
    alert("NO tienes fiebre :)"), temperatura;
}
else{
        alert("ESTAS MUERTO DE FIEBRE :("), temperatura;
}



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


let num1, num2, signos, respuesta; 
num1=prompt("Digita un número");
num2=prompt("Digita un número");
signos=prompt("Que operación deseas hacer +,-,*,/");
num1=parseInt(num1);
num2=parseInt(num2);
if(signos=="+"){
    respuesta = num1+num2;
    alert("El resultado de la suma es: "+ respuesta);
}else{
    if(signos=="-"){
        respuesta = num1-num2;
        alert("El resultado de la resta es: "+ respuesta);
    }else{
    if(signos=="*"){
        respuesta = num1 * num2;
        alert("El resultado de la multiplicación es: "+ respuesta);
    }else{
    if(signos=="/"){
        respuesta = num1/num2;
        alert("El resultado de la división es: "+ respuesta);}
}
}
}


