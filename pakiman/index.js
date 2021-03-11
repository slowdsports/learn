var imagenes = [];
imagenes ["Cauchin"] = "vaca.png";
imagenes ["Pokacho"] = "pollo.png";
imagenes ["Tocinauro"] = "cerdo.png";
class Pakiman
    {
        constructor(nombre, vida, ataque, tipo)
        {
            this.imagen = new Image ();
            this.nombre = nombre;
            this.vida = vida;
            this.ataque = ataque;
            
            this.imagen.src = imagenes[this.nombre];
        }
        hablar()
        {
            document.write(this.nombre);
        }
        mostrar()
        {
            document.body.appendChild(this.imagen);
            document.write("<p>");
            document.write("<strong>" + this.nombre + "</strong>" + "<br><br>")
            document.write("Vida:" + this.vida + "<br>");
            document.write("Ataque:" + this.ataque + "<br>");
            document.write("</p>");
        }
    }

var cauchin = new Pakiman ("Cauchin", 100, 30);
var pokacho = new Pakiman ("Pokacho", 80, 50);
var tocinauro = new Pakiman ("Tocinauro", 120, 40);

/*tocinauro.mostrar();
cauchin.mostrar();
pok.mostrar();*/

// COLECCIÓN EN UN ARRAY
var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);

// CICLO

for (var pakimanito of coleccion)
    {
        pakimanito.mostrar();
    }