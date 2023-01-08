function encripta() {
    let textoCapturado = document.getElementById("inputTexto").value;
    
    const condiciones = {
        e: 'enter',
        i: 'imes',
        a: 'ai',
        o: 'ober',
        u: 'ufat'
    }

    let letra = "";
    for (let i = 0; i < textoCapturado.length; i++) {
        letra=textoCapturado.charAt(i);
        if (letra in condiciones) {
            document.getElementById("salida").innerHTML +=condiciones[letra];
        }else{
            document.getElementById("salida").innerHTML +=letra;
        }
    }
}

function desencripta(){
    let textoCapturado = document.getElementById("inputTexto").value;
    
    textoCapturado=textoCapturado.replaceAll('enter', 'e');
    textoCapturado=textoCapturado.replaceAll('imes', 'i');
    textoCapturado=textoCapturado.replaceAll('ai', 'a');
    textoCapturado=textoCapturado.replaceAll('ober', 'o');
    textoCapturado=textoCapturado.replaceAll('ufat', 'u');
    document.getElementById("salida").innerHTML =textoCapturado;
}

function desaparece() {
    document.getElementById("dibujo").style.display = "none";
    encripta();
    document.getElementById("salida").style.display = "inline";

}

function aparece() {
    document.getElementById("dibujo").style.display = "none";
    desencripta();
    document.getElementById("salida").style.display = "inline";
}