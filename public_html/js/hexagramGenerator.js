/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var line_values = [];
console.log(line_values);

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
            resetInputs();
            console.log(line_values);
        } else {
            alert("Un hexagrama solo puede contener 6 lineas.");
        }
    }
}

function eraseLine() {
    line_values.pop();
    console.log(line_values);
}

function eraseHexagram() {
    resetInputs();
    line_values = [];
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