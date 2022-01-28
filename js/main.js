/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo uso letras minusculas
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


var input = document.getElementById("ingreso");
var ouput = document.getElementById("salida");
var btnencriptar = document.getElementById("btn-encriptar");
var btndesencriptar = document.getElementById("btn-desencriptar");
var btncopiar = document.getElementById("copiar");
var btnclear = document.getElementById("btn-clear");


btnencriptar.onclick = encriptar;
btndesencriptar.onclick = desencriptar;
btncopiar.onclick = copiar;
btnclear.onclick = clear;


function encriptar(){
    
    var input = document.getElementById("ingreso").value;
    let newText = input.replace(/i/g, "imes").replace(/e/g, "enter").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("salida").innerHTML=newText;
    document.getElementById("ingreso").value = "";

}

function desencriptar(){
    
    var input = document.getElementById("ingreso").value;
    let newText = input.replace(/imes/g, "i").replace(/enter/g, "e").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("salida").innerHTML=newText;
    document.getElementById("ingreso").value = "";

}

function copiar(){
    
    let out = document.getElementById("salida");
    out.select();
    let copiado = document.execCommand("copy");   
    document.getElementById("ingreso").focus();
    document.getElementById("ingreso").value = document.getElementById("salida").value;
    //document.getElementById("salida").value=" ";  
    console.log(copiado);
}

function clear(){
    document.location.reload(true);
    document.getElementById("ingreso").focus();
    /*let out = document.getElementById("salida");
    let input = document.getElementById("ingreso");
    input.value = '';
    out.value = '';*/

}

function verificar(input){
    if (document.getElementById("input").value==0){
        alert("Debe introducir un mensaje!");
        return false;
    } else{    
        for(var i=0; i<document.getElementById("input").length; i++){
            var ascii= document.getElementById("input").charCodeAt(i);
            if(ascii<96 || ascii>122 ){
                if(ascii!=32){
                    alert("No se puede introducir texto en mayuscula, caracteres especiales o numeros. Intentelo de nuevo!");
                    return false;
                }
            }                              
                           
        }
    }
}