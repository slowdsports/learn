let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
// const scoreBoard_div = document.getElementById(".score-board")
const restart = document.getElementById("restart");
const result = document.getElementById ("result")
const modal = document.querySelector(".modal");
const piedra_div = document.getElementById("piedra");
const papel_div = document.getElementById("papel");
const tijera_div = document.getElementById("tijera");


function getCpuChoice() {
  const choices = ['piedra', 'papel', 'tijera'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function win(userChoice, cpuChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<h1 class="text-win">¡Ganaste!</h1> <p>CPU eligió: <strong>${cpuChoice}</strong></p>`;
  modal.style.display = 'block';
}

function lose(userChoice, cpuChoice){
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<h1 class="text-lose">Perdiste :(</h1> <p>CPU eligió: <strong>${cpuChoice}</strong></p>`; 
  modal.style.display = 'block'
}

function draw(userChoice, cpuChoice){
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<h1>¡Empate!</h1> <p>Ambos seleccionaron: <strong>${cpuChoice}</strong></p>`;
  modal.style.display = 'block'
}


function play(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case 'piedratijera':
    case 'papelpiedra':
    case 'tijerapapel':
      win(userChoice, cpuChoice);
      break;
    case 'piedrapapel':
    case 'papeltijera':
    case 'tijerapiedra':
      lose(userChoice, cpuChoice);
      break;
    case 'piedrapiedra':
    case 'papelpapel':
    case 'tijeratijera':
      draw(userChoice, cpuChoice);
      break;
  }
}


function main() {
  piedra_div.addEventListener('click', function() {
    play('piedra');
  })
  
  papel_div.addEventListener('click', function() {
    play('papel');
  })
  
  tijera_div.addEventListener('click', function() {
    play('tijera');
  })
}


function clearModal(e){
  if(e.target == modal) {
    modal.style.display = "none"
  }
}


function restartGame(){
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
}


restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main ();