//..............angka 0-9................................

function angka1() {
 document.calculator.display.value += "1";
}

function angka2() {
 document.calculator.display.value += "2";
}

function angka3() {
 document.calculator.display.value += "3";
}

function angka4() {
 document.calculator.display.value += "4";
}

function angka5() {
 document.calculator.display.value += "5";
}

function angka6() {
 document.calculator.display.value += "6";
}

function angka7() {
 document.calculator.display.value += "7";
}

function angka8() {
 document.calculator.display.value += "8";
}

function angka9() {
 document.calculator.display.value += "9";
}

function angka0() {
 document.calculator.display.value += "0";
}


//............operator............................................

function tambah() {
 document.calculator.display.value += "+";
}

function kurang() {
 document.calculator.display.value += "-";
}

function kali() {
 document.calculator.display.value += "*";
}

function bagi() {
 document.calculator.display.value += "/";
}


//.............engine kalkulasi...................................
function hitung() {
 document.calculator.display.value = eval(calculator.display.value);
}
