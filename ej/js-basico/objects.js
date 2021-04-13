//var miAuto = {
//    marca: "Toyota",
//    modelo: "Scion",
//    annio: 2009,
//    detalleDelAuto: function() {
//        console.log(`Auto ${this.modelo} ${this.annio}`);
//    }
//};

// FUNCIÓN CONSTRUCTORA
    // Función + parámetros
//function auto(marca, modelo, annio){
//    this.marca = marca;
//    this.modelo = modelo;
//    this.annio = annio;
//}
//var autoNuevo = new auto("Scion", "XD", 2009);
//var autoNuevo2 = new auto("Scion", "TC", 2010);
//var autoNuevo3 = new auto("Scion", "FRS", 2015);


// Este ejemplo es imaginando que recibimos una lista de 30 carros diferentes y se nos solicita que se almacene esta información, como estamos aprendiendo a usar js por que es un lenguaje cool y no queremos tipiar todo de manera normal y aburrida, usaremos este lenguaje c: así hacemos un pequeño trabajo de separar todas las marcas, modelos y años respectivamente en distintos arrays para así lograr juntarlos en uno solo usando una función constructiva la cual indicara cada auto ingresado con su marca, modelo y año respectivamente.

var marca = ["Audi", "Subaru", "Lexus", "Porsche", "BMW", "Mazda", "Buick", "Toyota", "Kia", "Honda", "Hyundai", "Volvo", "Mini", "Mercedes-Benz", "Volkswagen", "Ford", "Lincoln", "Scion", "Acura", "Chevrolet", "Nissan", "Infiniti", "GMC", "Cadillac", "Dodge", "Land", "Rover", "Mitsubishi", "Jeep", "Fiat"];
var modelo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var annio = [2020,2019,2018,2020,2020,2020,2018,2018,2020,2020,2020,2018,2018,2020,2020,2019,2020,2020,2019,2019,2020,2020,2019,2019,2019,2020,2019,2019,2018,2020];
var listaAutos = [];
function autoN(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
} 
for (var i = 0; i<30; i++){   
    var autoNuevo = new autoN(marca[i],modelo[i],annio[i]);
    listaAutos.push(autoNuevo);
}

// Luego se nos solicito que filtremos los carros por medio del año actual, ya que deseaban saber la cantidad de autos nuevos ingresados. Gracias a nuestro trabajo esto se podía saber de la siguiente manera:

var autosFiltrados = listaAutos.filter(function(auto){
    return auto.annio === 2020;
});
console.log(autosFiltrados);

// Así logramos obtener una lista con todos los autos del año 2020 c:

// Posterior a eso, se necesitaba obtener una lista urgentemente de las marcas de los 30 autos que acababan de ingresar por razones ajenas que no nos interesan c: Obviando que nosotros ya tenemos esta lista creada xD y queremos usar js para esto, esta tarea es tan sencilla como hacer: 

var marcasRecientes = listaAutos.map(function(auto){
    return auto.marca;
});
console.log(marcasRecientes);

// Así obtenemos nuestra lista de marcas recientemente ingresadas c: