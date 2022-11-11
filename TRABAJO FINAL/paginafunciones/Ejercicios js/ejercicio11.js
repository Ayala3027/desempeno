function operaciones(){
    let num1, num2, signos, respuesta; 
num1=prompt("Digita un número");
signos=prompt("Que operación deseas hacer +,-,*,/");
num2=prompt("Digita un número");

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
}
operaciones()