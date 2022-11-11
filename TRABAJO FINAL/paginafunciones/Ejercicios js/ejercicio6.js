function tiangulo (){
    let b,h;
    b=prompt('Digite la base del triangulo: ');
    h=prompt('Digite la altura del triangulo: ');
    return((parseInt(b)*parseInt(h))/2);
}
alert('El area del triangulo es: '+ tiangulo());