function valoresVitoriaDerrota(wins, defeat) {
    let saldoVitorias = wins - defeat;
    return saldoVitorias;
}

let resultadoPartidas = valoresVitoriaDerrota(100, 4);
console.log(resultadoPartidas);

function rankedClassificacao(resultadoPartidas) {
    let ranked;
    if (resultadoPartidas < 0){
        return "Não pode ser feito o rankeamento estando negativo em vitorias";
    } else if (resultadoPartidas <= 10) {
        ranked = "Ferro";
    } else if (resultadoPartidas >= 11  && resultadoPartidas <= 20){
        ranked = "Bronze";
    } else if (resultadoPartidas >= 21 && resultadoPartidas <= 50){
        ranked = "Prata";
    } else if (resultadoPartidas >= 51 && resultadoPartidas <= 80){
        ranked = "Ouro";
    } else if (resultadoPartidas >= 81 && resultadoPartidas <= 90){
        ranked = "Diamante";
    } else if (resultadoPartidas >= 91 && resultadoPartidas <= 100){
        ranked = "Lendario";
    } else {
        ranked = "Imortal";
    }
    let mensagem = "O heroi tem saldo de " + resultadoPartidas + " vitórias e está no rank " + ranked;
    return mensagem;
}
let rankedResultado = rankedClassificacao(resultadoPartidas);
console.log(rankedResultado);