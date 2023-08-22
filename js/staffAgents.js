'use strict';

//funciones Limberth, tomadas de calculos hechos en excel
function ObtieneArrayIntensidad(pTasaRespuesta, pinterValseg, pAux, pAht, pArrEntrantes) {
    let arrIntensidad = [];
    pArrEntrantes.forEach(element => {
        arrIntensidad.push(CalcularIntensidad(element, pTasaRespuesta, pinterValseg, pAux, pAht));
    });
    console.log(arrIntensidad);
    return arrIntensidad;
}

function ObtieneArrayStaffAgentes(pArrIntensidad, pTiempoNS, pAth, pPorcentajeNivelServicio) {
    let arrStaff = [];
    pArrIntensidad.forEach(e => {
        arrStaff.push(agentno(e, pTiempoNS, pAth, pPorcentajeNivelServicio))
    });
    console.log(arrStaff);
    return arrStaff;
}

function CalcularIntensidad(call, pTasaRespuesta, pinterValseg, pAux, pAht) {
    let resultIntensidad = ((call * pTasaRespuesta) / (pinterValseg * (1 - pAux)) * pAht);//.toFixed(0);
    return resultIntensidad;
}
function CalcularPosibleNS(pIntencidad, pStaffNecesario, pTiempoNS, pAht, pDecimal) {
    let resultPosibleNS = Servicelevel(pIntencidad, pStaffNecesario, pTiempoNS, pAht);
    return ConvertirPorcentaje(resultPosibleNS, pDecimal);
}
function CalcularPosibleOcupacion(pIntensidad, pStaffNecesario) {
    let resultPosibleOcupacion = pIntensidad / pStaffNecesario;
    return (ConvertirPorcentaje(resultPosibleOcupacion, 0));
}
function CalcularPosibleOcupacionPresente(pIntensidad, pStaffPresente) {
    try {
        let resultPosibleOcupacion = pIntensidad / pStaffPresente;
        if (Object.is(resultPosibleOcupacion, NaN) || Object.is(resultPosibleOcupacion,Infinity)) {
            throw 'Cannot divide by zero';
        }
        if (resultPosibleOcupacion > 1) {
            return 1;
        } else {
            return (ConvertirPorcentaje(resultPosibleOcupacion, 0));
        }
    } catch (error) {
        return '-';
    }
}
function ConvertirPorcentaje(pValor, pDecimal) {
    return (pValor * 100).toFixed(pDecimal) + '%';
}
function CalculaPosibleTR(pStaffPresente, pInterValseg, pAux, pAht, pPosibleOcupacion, pCalls) {
    try {
        let resulTR = (pStaffPresente * (((pInterValseg * (1 - pAux)) * pPosibleOcupacion) / pAht)) / pCalls;
        if (Object.is(resulTR, NaN) || Object.is(resulTR,Infinity)) {
            throw 'error';
        }
        return ConvertirPorcentaje(resulTR);
    } catch (error) {
        return '-';
    }
}
function CalcularDiferencia(pStaffPresente, pStaffNecesario){
    return pStaffPresente - pStaffNecesario;
}