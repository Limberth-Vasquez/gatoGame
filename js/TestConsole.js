'use strict';

let porcentajeNivelServicio = 0.8;//pocentaje en decimal
let tiempoNS = 20; //unidad segundos
let tasaRespuesta = 1;//pocentaje en decimal
let aux = 0.2;//pocentaje en decimal
let ausentismo = 0.03;//pocentaje en decimal
let aht = 315; //unidad segundos

let interValseg = 1800.00000000003; //unidad segundos

let arrEntrantes = [
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    2,
    5,
    15,
    21,
    51,
    79,
    121,
    125,
    142,
    144,
    131,
    137,
    136,
    126,
    109,
    102,
    110,
    113,
    112,
    87,
    103,
    95,
    90,
    92,
    95,
    88,
    85,
    71,
    63,
    56,
    39,
    35,
    23,
    20,
    12,
    8,
    4,
    2];

let arrayIntensidad = ObtieneArrayIntensidad(tasaRespuesta, interValseg, aux, aht, arrEntrantes);
let arrayStaff = ObtieneArrayStaffAgentes(arrayIntensidad, tiempoNS, aht, porcentajeNivelServicio);
    
console.log('staff necesario ' + agentno(arrayIntensidad[0], tiempoNS, aht, porcentajeNivelServicio));
console.log('Posible NS ' + CalcularPosibleNS(arrayIntensidad[0], 2, tiempoNS, aht, 0));
console.log('Posible ocupacion ' + CalcularPosibleOcupacion(arrayIntensidad[0], 2));
console.log('staff presente ' );
console.log('PosibleTR ' + CalculaPosibleTR(0, interValseg, aux, aht, '-', 1));
console.log('PosibleNS ' + CalcularPosibleNS(arrayIntensidad[0], 0, tiempoNS, aht, 1));
console.log('Posible ocupacion presente ' + CalcularPosibleOcupacionPresente(arrayIntensidad[0], 0));
console.log('Diferencia ' + CalcularDiferencia(0, 2));

