'use strict';
let btn1 = document.getElementById('1');
let btn2 = document.getElementById('2');
let btn3 = document.getElementById('3');
let btn4 = document.getElementById('4');
let btn5 = document.getElementById('5');
let btn6 = document.getElementById('6');
let btn7 = document.getElementById('7');
let btn8 = document.getElementById('8');
let btn9 = document.getElementById('9');
let allButtons = document.getElementsByClassName("btns");
let turnoH3 = document.getElementById('turnoDe');
let ganadorH3 = document.getElementById('ganador');
let elTurno = 'X';
let contadorGanadores = [0, 0];

RefrescaTurno();

function Juega(idBtn) {
    document.getElementById(idBtn).innerHTML = elTurno;
    document.getElementById(idBtn).disabled = true;
    EvaluaGanador();
}
function RefrescaTurno() {
    if (btn1.innerHTML != '' && btn2.innerHTML != '' && btn3.innerHTML != '' &&
        btn4.innerHTML != '' && btn5.innerHTML != '' && btn6.innerHTML != '' &&
        btn7.innerHTML != '' && btn8.innerHTML != '' && btn9.innerHTML != '') {
        turnoH3.innerHTML = 'Empate!!';
        turnoH3.style = "color:red;";
        return;
    }
    elTurno = elTurno == 'X' ? 'O' : 'X';
    turnoH3.innerHTML = 'El turno es de: ' + elTurno;
}
function RefrescaGanadores() {
    if (elTurno == 'X') {
        contadorGanadores[0] = contadorGanadores[0] + 1;
    } else {
        contadorGanadores[1] = contadorGanadores[1] + 1;
    }
    document.getElementById('X').innerHTML = 'X: ' + contadorGanadores[0];
    document.getElementById('O').innerHTML = 'O: ' + contadorGanadores[1];
}
function AnunciaGanador(pbtn1, pbtn2, pbtn3) {
    turnoH3.innerHTML = 'El ganador es ' + elTurno;
    turnoH3.style = "color:red;";
    pbtn1.classList.add('ganador');
    pbtn2.classList.add('ganador');
    pbtn3.classList.add('ganador');

    btn1.disabled = btn2.disabled = btn3.disabled =
    btn4.disabled = btn5.disabled = btn6.disabled =
    btn7.disabled = btn8.disabled = btn9.disabled = true;    

    RefrescaGanadores();
}
function Reset() {
    elTurno = 'X';
    turnoH3.style = "color:black;";
    
    btn1.disabled = btn2.disabled = btn3.disabled = btn4.disabled = btn5.disabled = btn6.disabled =
    btn7.disabled = btn8.disabled = btn9.disabled = false; 
    
    btn1.innerHTML = btn2.innerHTML = btn3.innerHTML = btn4.innerHTML = btn5.innerHTML = btn6.innerHTML =
    btn7.innerHTML = btn8.innerHTML = btn9.innerHTML = ''; 

    btn1.classList.remove('ganador'); btn2.classList.remove('ganador'); btn3.classList.remove('ganador');
    btn4.classList.remove('ganador'); btn5.classList.remove('ganador'); btn6.classList.remove('ganador');
    btn7.classList.remove('ganador'); btn8.classList.remove('ganador'); btn9.classList.remove('ganador');

    RefrescaTurno();
}
function EvaluaGanador() {
    let innerBtn1 = btn1.innerHTML;
    let innerBtn2 = btn2.innerHTML;
    let innerBtn3 = btn3.innerHTML;
    let innerBtn4 = btn4.innerHTML;
    let innerBtn5 = btn5.innerHTML;
    let innerBtn6 = btn6.innerHTML;
    let innerBtn7 = btn7.innerHTML;
    let innerBtn8 = btn8.innerHTML;
    let innerBtn9 = btn9.innerHTML;

    //Filas 
    if (innerBtn1 == innerBtn2 && innerBtn2 == innerBtn3 && innerBtn3 == elTurno) { //primer fila
        AnunciaGanador(btn1, btn2, btn3);
        return;
    }
    if (innerBtn4 == innerBtn5 && innerBtn5 == innerBtn6 && innerBtn6 == elTurno) { //segunda fila
        AnunciaGanador(btn4, btn5, btn6);
        return;
    }
    if (innerBtn7 == innerBtn8 && innerBtn8 == innerBtn9 && innerBtn9 == elTurno) { //tercera fila
        AnunciaGanador(btn7, btn8, btn9);
        return;
    }
    //columnas
    if (innerBtn1 == innerBtn4 && innerBtn4 == innerBtn7 && innerBtn7 == elTurno) { //primer columna
        AnunciaGanador(btn1, btn4, btn7);
        return;
    }
    if (innerBtn2 == innerBtn5 && innerBtn5 == innerBtn8 && innerBtn8 == elTurno) { //segunda columna
        AnunciaGanador(btn2, btn5, btn8);
        return;
    }
    if (innerBtn3 == innerBtn6 && innerBtn6 == innerBtn9 && innerBtn9 == elTurno) { //tercera columna
        AnunciaGanador(btn3, btn6, btn9);
        return;
    }

    //Diagonales    
    if (innerBtn1 == innerBtn5 && innerBtn5 == innerBtn9 && innerBtn9 == elTurno) {
        AnunciaGanador(btn1, btn5, btn9);
        return;
    }
    if (innerBtn3 == innerBtn5 && innerBtn5 == innerBtn7 && innerBtn7 == elTurno) {
        AnunciaGanador(btn3, btn5, btn7);
        return;
    }

    RefrescaTurno();
}