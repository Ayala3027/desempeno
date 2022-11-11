const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const direccion = document.getElementById("direccion");
const correo = document.getElementById("correo");
const fechana = document.getElementById("fechana");
const sexo = document.getElementById("sexo");
const tel = document.getElementById("tel");
const formulario = document.getElementById("formulario");
const parrafo = document.getElementById("warning");

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let warning=""
    let entrar=false
    let regexEmail= /^[a-z][\w,-]+@\w[\w,-]+\.[\w,-]*[a-z][a-z]$/i;
    
    
    
    if(nombre.value.length < 4){
        /*alert(nombre muy corto)*/
        warning += "el nombre no es válido <br>"
        entrar = true
    }
    if(apellido.value.length <6){
        /*alert(apellido muy corto)*/
        warning += "el apellido no es válido <br>"
        entrar = true
    }
    if(edad.value.length >3){
        /*alert(edad no válida)*/
        warning += "edad no válida <br>"
        entrar = true
    }
    if(direccion.value.length <6){
        /*alert(dirección no válida)*/
        warning += "dirección no válida <br>"
        entrar = true
    }
    if(!regexEmail.test(correo.value)){
        //alert("correo muy corto")
        warning += "el correo no es valido <br>"
        entrar = true
    } 
    if(!fechana.value){
        //alert("fecha incorrecta")
        warning += "fecha incorrecta <br>"
        entrar = true
    }
    

    if(!document.querySelector('input[name="sexo"]:checked')){
            warning += 'no ha seleccionado ninguna opcion de sexo <br>'
            entrar = true;
        }

    if(tel.value.length <7){
        //alert("numero incorrecto")
        warning += "tu numero telefonoco no tiene 7 digitos <br>"
        entrar = true  
    }
   
    if(entrar){
        parrafo.innerHTML=warning
    }  
})




