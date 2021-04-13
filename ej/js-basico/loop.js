// ARRAY DE NOMBRES DE ESTUDIANTES
var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

// FUNCIÓN PARA SALUDAR CADA ESTUDIANTE AUTOMÁTICAMENTE
//function saludarEstudiantes(estudiante) {
//    console.log(`Hola, ${estudiante}`);
//}

// LOOP | for
    // i vale 0, mientras i sea menor que estudiantes y se suma 1.
//for(var i = 0; i < estudiantes.length; i++){
//    saludarEstudiantes(estudiantes[i]);
//}

// Otra forma | for of
    // estudiante es el singular de un grupo de estudiamtes del array y listamos todos los estudiantes
//for(var estudiante of estudiantes){
//    saludarEstudiantes(estudiante);
//}

// LOOP | WHILE

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}