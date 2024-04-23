let tempo = 0;
let timerInterval;
const cronometroDisplay = document.querySelector('div#cronometro');

function iniciarCronometro(){
    timeInterval = setInterval (() => {
        tempo++;
        atualizarCronometro()
    },1000);
}

function pausarCronometro(){
    clearInterval(timeInterval);
}

function restartCronometro(){
    tempo = 0;
   atualizarCronometro();
}

function atualizarCronometro() {
    const horas = Math.floor(tempo / 3600);
    const minutos = Math.floor((tempo % 3600) / 60);
    const segundos = tempo % 60;


    cronometroDisplay.textContent = 
    `${String(horas).padStart(2,'0')}: ${String(minutos).padStart(2, '0')}: ${String(segundos).padStart(2, '0')}`;
}

