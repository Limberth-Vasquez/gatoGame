'use strict';

getFechaHoy();
function getFechaHoy() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    let fechaHoy = document.getElementById('copyright');
    fechaHoy.innerHTML = `Copyright © ${today} All Right Reserved | <a href="https://limberth-vasquez.github.io" style="color:white;">Limberth Vásquez Quesada</a>`;
}