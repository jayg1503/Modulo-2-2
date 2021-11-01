$(document).ready(()=>{
    pointOne()
    pointTwo()
    pointThree()
    pointFour()
    pointArea()
    pointKm()
    tempF()
    maxMin()
    exponencial()
    conteo()
    delayedAlert()
    slowAlert()
    clearAlert()
    
})

var numberOne = 25;
console.log("El primer número es: ", numberOne);

var numberTwo = 5;
console.log("El segundo número es: ", numberTwo);

function pointOne() {
    var result= 0
    result = numberOne + numberTwo;
    console.log("La suma del primer numero y el segundo numero es: ", result);
}

function pointTwo() {
    var result= 0
    result = numberOne - numberTwo;
    console.log("La resta del primer numero y el segundo numero es: ", result);
}

function pointThree() {
    var result= 0
    result = numberOne * numberTwo;
    console.log("El producto entre ", numberOne, " y ", numberTwo, " es: ", result);
}

function pointFour() {
    var result= 0
    result = numberOne / numberTwo;
    console.log("La división de ", numberOne, " entre ", numberTwo, " es: ", result);
}

var radius = 4

function pointArea() {
    var area = 0
    area = Math.pow(radius,2)*Math.PI;
    console.log("El area del circulo con radio de ", radius,  " es: ", area);
}

var meters = 1237

function pointKm() {
    var distance = 0
    distance = (meters/1000).toFixed(2);
    console.log("La distancia en km de ", meters, " es:", distance );
}

var celsius = 56

function tempF() {
    var farenheit = 0
    farenheit = (celsius*1.8+32).toFixed(2);
    console.log("la Temperatura de ", celsius, "°C, equivale a: ", farenheit, "°F");
}

var list1 = [10,4,2,20,5]
var list2 = [0,0,0,1,0] 
var list3 = [-13,10,9,8,0,2000,-1]

function maxMin() {
    var max1 = list1[0]
    var min1 = list1[0]
    for (let i = 0; i < list1.length; i++) {
        //max = list1[i];
        if (list1[i]>max1) {
            max1 = list1[i]
        }
        if (list1[i]<min1) {
            min1 = list1[i]
        }
    }
    console.log("El mayor de la lista 1 es: ", max1);
    console.log("El menor de la lista 1 es: ", min1);
}

var base = 4
var expo = 3

function exponencial() {
    var potencia = 0
    potencia = Math.pow(base,expo);
    console.log("El valor de la base ", base,  " a la potencia ", expo, " es: ", potencia);
}

function conteo() {
    var country = prompt("BIENVENIDO!!! INGRESA UN NUMERO", "El valor debe ser mayor a 0");
    parseInt(country)
    if (country>0) {
            for (let i = 0; i < country; i++) {
            var country1 = prompt("ingresa nombre de pais:", i+1)
            var qty=0
            qty = country1.length
            var container = document.createElement("div")
            container.classList.add("test")
            //var espacio = document.createElement("br")
            var table = document.createTextNode("El pais con nombre: \""+ country1+ "\" tiene " + qty+ " letras")
            container.appendChild(table)
            document.body.appendChild(container)
            //document.body.appendChild(espacio) 
        }
    }
    else {
        if (country = String) {
            alert("debes ingresar un numero mayor a 0")
            var country = prompt("BIENVENIDO NUEVAMENTE, INGRESA UN ######", "El valor debe ser mayor a Zero (0)");
            parseInt(country)
            if (country>0) {
                for (let i = 0; i < country; i++) {
                var country1 = prompt("Ingresa nombre de pais::", i+1)
                var qty=0
                qty = country1.length
                var table = [country1,qty]
                document.write(table)
                //var container = document.createElement("div")
                //container.appendChild(table)
                        
                }
            }
        }
    }
    if (country<0) {
        alert("debes ingresar un numero mayor a Cero")
    }
}

var timeoutID

    function delayedAlert() {
        timeoutID = window.setTimeout(slowAlert, 5000);
    }

    function slowAlert() {
    alert("Muchas gracias por la información!!!");
    }

    function clearAlert() {
    window.clearTimeout(timeoutID);
    }
