function numeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let escolhaComputador = numeroAleatorio(1,4);
let escolhaJogador = process.argv[2];

if (escolhaComputador === 1){
    escolhaComputador = "pedra";
} else if(escolhaComputador === 2) {
    escolhaComputador = "papel";
} else{
    escolhaComputador = "tesoura";
}

let msg = `Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaComputador}. `;

if (escolhaComputador === "pedra" && escolhaJogador ==="tesoura"){
    msg = msg + "Você perdeu!"
} else if (escolhaComputador === "pedra" && escolhaJogador === "papel"){
    msg = msg + "Você ganhou!"
} else if (escolhaComputador === "papel" && escolhaJogador === "tesoura"){
    msg = msg + "Você ganhou!"
} else if (escolhaComputador === "papel" && escolhaJogador ==="pedra"){
    msg = msg + "Você perdeu!"
} else if (escolhaComputador === "tesoura" && escolhaJogador ==="pedra"){
    msg = msg + "Você ganhou!" 
} else if (escolhaComputador === "tesoura" && escolhaJogador ==="papel"){
    msg = msg + "Você perdeu!"
} else {
    msg = msg + "Empate!"
}

console.log(msg);