var articulos = [
    { nombre: "Bici", costo: 3000    },
    { nombre: "Tv", costo: 2500      },
    { nombre: "Libro", costo: 320    },
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500   },
    { nombre: "Audífonos", costo: 1700},
];
// FILTER: Filtrar ciertos artículos específicos
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

// MAP: Mapear ciertos artículos
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
})

// RECORRER ARRAYS
    // find(); Valida un true o false y genera un nuevo array
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop" ;
})
    // foreach(); Filtra utilizando el main array
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})
    // Some(); Validación de TRUE o FALSE
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})