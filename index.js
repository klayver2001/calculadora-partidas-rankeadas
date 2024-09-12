// Desafio proposto por felipão DIO - Curso Lógica de programação 


// Variável que solicita a função de saldo do Herói
let saldoWinHero = calculaSaldoVitoriasHero(100, 5)

// Declara a variável levelHero
let levelHero;

// Function que retorna o saldo que irá classificar no ranking
function calculaSaldoVitoriasHero(vitorias , derrotas) {
    let saldoRank = vitorias - derrotas
    return saldoRank
}

// Bloco que classifica o level do Herói 

    if (saldoWinHero < 10) {
        levelHero = "Ferro"
    } else if (saldoWinHero >= 11 && saldoWinHero<= 20) {
        levelHero = "Bronze"
    } else if (saldoWinHero >= 21 && saldoWinHero<= 50){
        levelHero = "Prata" 
    } else if (saldoWinHero >= 51 && saldoWinHero<= 80){
        levelHero = "Ouro"
    } else if (saldoWinHero >= 81 && saldoWinHero<= 90){
        levelHero = "Diamante"
    } else if (saldoWinHero >= 91 && saldoWinHero<= 100){
        levelHero = "Lendário" 
    } else if (saldoWinHero >= 101){
        levelHero = "Imortal"
    }

// Mensagem que exibi o texto informando o saldo e level do Herói !
console.log(`"O Herói tem de saldo de ${saldoWinHero} está no nível de ${levelHero}`);
