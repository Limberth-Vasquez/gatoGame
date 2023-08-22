'use strict';


//From Macro Excel functions
function utilisation(pIntensity, pAgents) {
    //'calculates utilisation or agent occupancy
    try {
        let resultUtilisation = pIntensity / pAgents;
        if (resultUtilisation < 0) { resultUtilisation = 0 }
        if (resultUtilisation > 1) { resultUtilisation = 1 }
        return resultUtilisation;
    } catch (error) {
        console.log(error);
        return 0
    }
}

function GetTop(pIntensity, pAgents) {
    // 'top row of Erlang-C Formula
    let resultTop = (Math.pow(pIntensity, pAgents)) / factorial(pAgents);
    return resultTop;
}

function factorial(n) {
    let total = 1;
    for (let i = 1; i <= n; i++) {
        total = total * i;
    }
    return total;
}
// function factorialRecursivo(n) {
//     if (n == 0) {
//         return 1;
//     }
//     return n * factorialRecursivo(n - 1);
// }

function erlangBR(Intensity, agents) {
    // 'calculates summed factorial element of Erlang-C formula
    let k, max, answer;

    max = agents - 1;
    answer = 0;
    for (k = 0; k < max; k++) {
        answer = answer + (Math.pow(Intensity, k) / factorial(k));
    }
    return answer;
}

function ErlangC(Intensity, agents) {
    // 'Brings together elements of Erlang C formula Top, Utilisation and ErlangBR
    try {
        let top1 = GetTop(Intensity, agents);
        let top2 = GetTop(Intensity, agents);
        let util1 = utilisation(Intensity, agents);
        let earlanBR1 = erlangBR(Intensity, agents);
        let resultErlangC = (top1) / ((top2) + ((1 - util1) * earlanBR1));
        // let resultErlangC = (GetTop(Intensity, agents)) / ((GetTop(Intensity, agents)) + ((1 - utilisation(Intensity, agents)) * erlangBR(Intensity, agents)));

        if (resultErlangC < 0) { resultErlangC = 0 }
        if (resultErlangC > 1) { resultErlangC = 1 }
        return resultErlangC;
    } catch (error) {
        return 0
    }
}

function Servicelevel(Intensity, agents, target, duration) {
    // 'calculation of service level
    try {
        let earlangc = ErlangC(Intensity, agents);
        let exp = Math.exp(-(agents - Intensity) * target / duration);
        let resultServicelevel = 1 - (earlangc * exp)

        if (resultServicelevel > 1) { resultServicelevel = 1 }
        if (resultServicelevel < 0) { resultServicelevel = 0 }
        return resultServicelevel;
    } catch (error) {
        return 0
    }
}
//intensidad, tiempoNS, aht, porcentajeNivelServicio
function agentno(Intensity, target, duration, servreq) {
    //'calculates minimum agent numbers for required service level
    let agents, minagents;

    minagents = parseInt(Intensity);
    agents = minagents;

    while (Servicelevel(Intensity, agents, target, duration) < servreq) {
        agents = agents + 1;
    }
    return agents;
}