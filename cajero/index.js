// CLASE DE BILLETES
class Billete
    {
        constructor(valor, cantidad)
        {
            this.valor = valor;
            this.cantidad = cantidad;
        }
    }

// FUNCIÓN ENTREGAR DINERO

function entregarDinero()
    {
        var texto = document.getElementById("dinero");
        dinero = parseInt(texto.value);
        
        for(var bi of caja)
            {
                if(dinero > 0)
                    {
                        division = Math.floor(dinero/bi.valor);
                        if(division > bi.cantidad)
                            {
                                papeles = bi.cantidad;
                            }
                        else
                            {
                                papeles = division;
                            }
                        
                        entregado.push(new Billete(bi.valor, papeles));
                        dinero = dinero - (bi.valor * papeles);
                    }
            }
        
        if (dinero > 0)
            {
                resultado.innerHTML = "No hay suficiente dinero.";
            }
        
        else
            
            {
                for(var e of entregado)
                    {
                        if(e.cantidad > 0)
                            {
                                
                        resultado.innerHTML = resultado.innerHTML + e.cantidad + " Billetes de L." + e.valor + "<br/>";
                            }
                    }
            }
        
        console.log(entregado);
    }

// BILLETES DISPONIBLES
var caja = [];
// BILLETES ENTREGADOS
var entregado = [];
// (VALOR, CANTIDAD)
caja.push(new Billete(500,10));
caja.push(new Billete(100,50));
caja.push(new Billete(50,5));
caja.push(new Billete(20,10));
caja.push(new Billete(10,10));
caja.push(new Billete(5,100));
caja.push(new Billete(2,100));
caja.push(new Billete(1,10));
var dinero = 0;
var division = 0;
var papeles = 0;

// ALGORITMO

var boton = document.getElementById("pedir");
var resultado = document.getElementById("resultado");
boton.addEventListener("click", entregarDinero);