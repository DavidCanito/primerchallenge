/*
e enter
o ober
i imes
a - ai
u ufat

amarillo - aimairimesllober
*/
function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var textoaux="Lorem ipsum dolor sit amet consectetur adipiscing elit Orci montes sit et diam risus scelerisque vitae est Tortor maecenas nunc ut laoreet Eget diam mauris quam quisque ut eget fringilla sit elit Libero sodales duis fames id diam feugiat aliquet non egestas";
    
    if(texto=='')
    {texto=textoaux;
    document.getElementById("input").innerHTML = textoaux;}

    textoaux=texto;
    var txtcrifrado = textoaux.replace(/e/igm,"enter");
    var txtcrifrado = txtcrifrado.replace(/o/igm,"ober");
    var txtcrifrado = txtcrifrado.replace(/i/igm,"imes");
    var txtcrifrado = txtcrifrado.replace(/a/igm,"ai");
    var txtcrifrado = txtcrifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtcrifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    
    console.log("textoaux");
    console.log("inputTexto");
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
       var txtcrifrado = texto.replace(/enter/igm,"e");
    var txtcrifrado = txtcrifrado.replace(/ober/igm,"o");
    var txtcrifrado = txtcrifrado.replace(/imes/igm,"i");
    var txtcrifrado = txtcrifrado.replace(/ai/igm,"a");
    var txtcrifrado = txtcrifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtcrifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
}