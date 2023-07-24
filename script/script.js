var jogada, jogadaComputador, botaocomecar;



function inicio (botaocomecar){
prompt("1-Pedra 2-Papel 3-Tesoura");
}


if(jogada ==='1' || jogada ==='2' || jogada ==='3'){
computador (jogada);
}

function computador(jogada){
    jogadaComputador = Math.floor(Math.random()*3);

// Pedra //

if (jogada == 1 && jogadaComputador == 0){
alert('Computador jogou Pedra!');
alert('Empate!')
}

if (jogada == 1 && jogadaComputador == 2){
    alert('Computador jogou Tesoura!');
    alert('Você Ganhou!')
}

if (jogada == 1 && jogadaComputador == 1){
alert('Computador jogou Papel!');
alert('Você Perdeu!')
}

// Papel //

if (jogada == 2 && jogadaComputador == 1){
    alert('Computador jogou Papel!');
    alert('Empate!')
}
    
if (jogada == 2 && jogadaComputador == 0){
        alert('Computador jogou Pedra!');
        alert('Você Ganhou!')
}
    
if (jogada == 2 && jogadaComputador == 2){
    alert('Computador jogou Tesoura!');
    alert('Você Perdeu!')
}

// Tesoura //

if (jogada == 3 && jogadaComputador == 2){
    alert('Computador jogou Tesoura!');
    alert('Empate!')
}
    
if (jogada == 3 && jogadaComputador == 1){
        alert('Computador jogou Papel!');
        alert('Você Ganhou!')
}
    
if (jogada == 3 && jogadaComputador == 0){
    alert('Computador jogou Pedra!');
    alert('Você Perdeu!')
}

}



