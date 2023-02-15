
function numeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min ) ) + 1;
}

const numeroMaquina = numeroAleatorio(0, 99);

const escolhaJogador = process.argv[2];

const numeroJogador = process.argv[3];

const numeroSoma = numeroMaquina + numeroJogador;

let escolhaMaquina= "";

if(escolhaJogador === "par"){
     escolhaMaquina = "impar"
} else {
     escolhaMaquina = "par"
}

if (numeroSoma % 2 === 0 && escolhaJogador === "par") {
    console.log(`Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaMaquina}.O resultado foi ${numeroSoma}. Você ganhou! `)
} else if (numeroSoma % 2 !== 0 && escolhaJogador === "impar"){
    console.log(`Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaMaquina}.O resultado foi ${numeroSoma}. Você ganhou! `)
} else {
    console.log(`Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaMaquina}.O resultado foi ${numeroSoma}.Você perdeu! `)
}
