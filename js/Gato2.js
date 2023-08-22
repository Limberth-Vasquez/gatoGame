'use strict';
let allButtons;
let turnoH3 = document.getElementById('turnoDe');
let ganadorH3 = document.getElementById('ganador');
let elTurno = 'X';
let contadorGanadores = [0, 0];

CrearTablero();
RefrescaTurno();

function CrearTablero() {

    for (let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.classList.add('row');

        for (let j = 0; j < 3; j++) {
            let div2 = document.createElement('div');

            let btn = document.createElement('button');
            btn.classList.add('btns');
            btn.id = "" + i + j;
            btn.onclick = () => Juega(btn);

            div2.appendChild(btn);
            div.appendChild(div2);
        }
        document.getElementById('myBody').appendChild(div);
    }
    allButtons = document.getElementsByClassName("btns");
}

function Juega(Btn) {
    Btn.innerHTML = elTurno;
    Btn.disabled = true;
    EvaluaGanador();
}
function RefrescaTurno() {
    let empate = true;
    Array.from(allButtons).forEach(btn => {
        if (btn.innerHTML == '') {
            empate = false;
            return;
        }
    });
    if (empate == true) {
        turnoH3.innerHTML = 'Empate!!';
        turnoH3.style = "color:red;";
    } else {
        elTurno = elTurno == 'X' ? 'O' : 'X';
        turnoH3.innerHTML = 'El turno es de: ' + elTurno;
    }
}

function Reset() {
    elTurno = 'X';
    turnoH3.style = "color:black;";
    Array.from(allButtons).forEach(btn => {
        btn.disabled = false;
        btn.innerHTML = '';
        btn.classList.remove('ganador');
    });
    RefrescaTurno();
}
function AnunciaGanador(btn1, pbtn2, pbtn3) {
    turnoH3.innerHTML = 'El ganador es ' + elTurno;
    turnoH3.style = "color:red;";
    btn1.classList.add('ganador');
    pbtn2.classList.add('ganador');
    pbtn3.classList.add('ganador');
    Array.from(allButtons).forEach(btn => {
        btn.disabled = true;
    });

    RefrescaGanadores();
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
function EvaluaGanador(){
    let arr = Array.from(allButtons);
    
    //Filas 
    if (arr[0].innerHTML == arr[1].innerHTML && arr[1].innerHTML == arr[2].innerHTML && arr[2].innerHTML == elTurno) { //primer fila
        AnunciaGanador(arr[0], arr[1], arr[2]);
        return;
    }
    if (arr[3].innerHTML == arr[4].innerHTML && arr[4].innerHTML == arr[5].innerHTML && arr[5].innerHTML == elTurno) { //segunda fila
        AnunciaGanador(arr[3], arr[4], arr[5]);
        return;
    }
    if (arr[6].innerHTML == arr[7].innerHTML && arr[7].innerHTML == arr[8].innerHTML && arr[8].innerHTML == elTurno) { //tercera fila
        AnunciaGanador(arr[6], arr[7], arr[8]);
        return;
    }
    //columnas
    if (arr[0].innerHTML == arr[3].innerHTML && arr[3].innerHTML == arr[6].innerHTML && arr[6].innerHTML == elTurno) { //primer columna
        AnunciaGanador(arr[0], arr[3], arr[6]);
        return;
    }
    if (arr[1].innerHTML == arr[4].innerHTML && arr[4].innerHTML == arr[7].innerHTML && arr[7].innerHTML == elTurno) { //segunda columna
        AnunciaGanador(arr[1], arr[4], arr[7]);
        return;
    }
    if (arr[2].innerHTML == arr[5].innerHTML && arr[5].innerHTML == arr[8].innerHTML && arr[8].innerHTML == elTurno) { //tercera columna
        AnunciaGanador(arr[2], arr[5], arr[8]);
        return;
    }

    //Diagonales    
    if (arr[0].innerHTML == arr[4].innerHTML && arr[4].innerHTML == arr[8].innerHTML && arr[8].innerHTML == elTurno) {
        AnunciaGanador(arr[0], arr[4], arr[8]);
        return;
    }
    if (arr[2].innerHTML == arr[4].innerHTML && arr[4].innerHTML == arr[6].innerHTML && arr[6].innerHTML == elTurno) {
        AnunciaGanador(arr[2], arr[4], arr[6]);
        return;
    }

    RefrescaTurno();
}