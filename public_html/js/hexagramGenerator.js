/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var line_values = [];
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("diagram1").style.display = "none";
    document.getElementById("diagram3").style.display = "none";

});

function onFocusInput(e) {
    e.placeholder = '';
}

function onBlurInput(e) {
    e.placeholder = '2';
}

function addLine() {
    var num1 = document.getElementById("digit_1");
    var num2 = document.getElementById("digit_2");
    var num3 = document.getElementById("digit_3");

    if ((num1.value.length == 0) || (num2.value.length == 0) || (num3.value.length == 0)) {
        alert("Debe llenar los tres campos.");
    } else {
        if (!(line_values.length == 6)) {
            var suma = parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value);
            line_values.push(suma);
            // Generar linea
            var linebreak = document.createElement("br");
            var content;

            switch (suma) {
                case 6:
                    console.log("Generando linea yin mutante ___x___ ...");
                    content = document.createTextNode("___x___");
                    break;
                case 7:
                    console.log("Generando linea yang _______ ...");
                    content = document.createTextNode("_______");
                    break;
                case 8:
                    console.log("Generando linea yin ___ ___ ...");
                    content = document.createTextNode("___ ___");
                    break;
                case 9:
                    console.log("Generando linea yang mutante ___o___ ...");
                    content = document.createTextNode("___o___");
                    break;
                default:
                    alert("Error al generar linea ):");
            }
            document.getElementById("dgm2").insertBefore(linebreak, document.getElementById("dgm2").firstChild);
            document.getElementById("dgm2").insertBefore(content, document.getElementById("dgm2").firstChild);

            resetInputs();
            console.log(line_values);
        } else {
            alert("Un hexagrama solo puede contener 6 lineas.");
        }
    }

    if (line_values.length == 6) {
        // indexOf: El primer índice del elemento en la matriz; -1 si no se encuentra.
        if (((line_values.indexOf(6)) && (line_values.indexOf(9))) != -1) {
            console.log("Mutante found");

            for (var i = 0; i<line_values.length; i++) {
                console.log(line_values[i]);
                
            }

            document.getElementById("diagram1").style.display = "block";
            document.getElementById("diagram3").style.display = "block";


        }
    }
}

function eraseLine() {
    if (!(line_values.length == 0)) {
        line_values.pop();
        //Borrar linea
        console.log("Eliminando ultima linea...");
        var last_line;
        for (var i = 0; i < 2; i++) {
            last_line = document.getElementById("dgm2").firstChild;
            document.getElementById("dgm2").removeChild(last_line);
        }
        console.log(line_values);
    } else {
        alert("No hay contenido para borrar.");
    }
}

function eraseHexagram() {
    resetInputs();
    var last_line;
    for (var i = 0; i < (line_values.length) * 2; i++) {
        last_line = document.getElementById("dgm2").lastChild;
        document.getElementById("dgm2").removeChild(last_line);
    }
    line_values = [];
    console.log("Borrando hexagrama...");
    console.log(line_values);
}

function isValidNumber(e) {
    var keyCode = e.which ? e.which : e.keyCode;
    var isValid = ((keyCode >= 50 && keyCode <= 51));
    if (!isValid)
        alert("El valor introducido es invalido, solo son aceptados los valores '2' y '3'.");
    return isValid;
}

function resetInputs() {
    document.getElementById("digit_1").value = "";
    document.getElementById("digit_2").value = "";
    document.getElementById("digit_3").value = "";
}