var jugador;
var computadora;

function juego () {
    
if (jugador == "tijera" && computadora == "papel"){
    console.log("Ganaste");
}

else if (jugador == "piedra" && computadora == "tijera"){
    console.log("Ganaste");
}

else if (jugador == "papel" && computadora == "piedra"){
    console.log("Ganaste");
}

else if (jugador == computadora){
    console.log("Empate");
}

else{
    console.log("Perdiste")
}
    
}