//Ejercicio N1

//let ingresarNumero = Number(15)
let ingresarNumero = Number(prompt("Inrgesar Numero del 1 al 100"))
if (ingresarNumero >= 1 && ingresarNumero <= 100) {
    for (let i = 1; i <= ingresarNumero; i++) {
        console.log(i)
    }
} else {
    alert("Numero Invalido")
    console.log("Numero Invalido")
}

//Ejercicio N2

let tablaDeMultiplicar = Number(prompt("Ingrese numero entre 1 al 10"))


for (let i = 1; i <= 10; i++) {
    let multiplicar = i * tablaDeMultiplicar
    let vuelta = i
    console.log(`${vuelta} x  ${tablaDeMultiplicar} = ${multiplicar} `)
}

//Ejercicio N3
let numeroSumar = Number(prompt("Ingrese Numero"))
let totalNumeros = []
let numeroAux = 0

while (numeroSumar !== 0) {
    totalNumeros.push(numeroSumar)
    numeroAux = ingresarNumero + numeroAux
    alert(`La suma de los numeros es ${numeroAux}`)
    numeroSumar = Number(prompt("Inrgesar Numero"))
}
console.log(totalNumeros)
alert(totalNumeros)
console.log(numeroAux)

//Ejercicio N4

let numeroSumar1 = Number(prompt("Ingrese Numero"))
let totalNumeros1 = []
let numeroAux1 = 0
do {
    totalNumeros1.push(numeroSumar1)
    numeroSumar1 = Number(prompt("Ingrese Numero"))
    numeroAux1 = numeroAux1 + numeroSumar1
    alert(`La suma de los numeros es ${numeroAux1}`)
} while (numeroSumar1 !== 0)

console.log(totalNumeros1)
alert(numeroAux1)
alert(totalNumeros1)

//Ejercicio N5
let = ingresar5 = Number(prompt("Ingresar numero Ejercicio 5"))
let numeroSecreto = Number(53)
let intentos = 1

while (ingresar5 !== 0) {
    if (ingresar5 === numeroSecreto) {
        console.log("Ganaste")
        break;
    } else if (ingresar5 > numeroSecreto) {
        console.log("El numero es menor")
    } else {
        console.log("El numero es mayor")
    }
    intentos = ++intentos
    ingresar5 = Number(prompt("Ingresar numero Ejercicio 5"))
}

console.log(`la cantidad de intentos es ${intentos} `)

//Ejercicio N6

let ingresar6 = Number(prompt("Ingresar numero a dividir Ejercicio 6"))

for(let i = 0 ; i <= ingresar6 ; i++ ){
    if(ingresar6 % i === 0){
        console.log(i)
    }else{
        console.log("no es divisible")
    }
}

//Ejercicio N7

let ruidosCampanas = "Ding Dong";

function sonarCampanas() {
    for (let i = 0; i < 5; i++) { 
        console.log(ruidosCampanas);
    }
    return "Ding Dong";
}

sonarCampanas();

//Ejercicio N8

const fechaLimite = "1997-8-3"
const fechas =["1984-10-2" , "1990-3-2" , "1973-15-7" , "2024-21-10" , "2001-1-9"]

for(let fechaLimite of fechas){
    if(fechaLimite >= fechas){
        console.log(`Fecha Mayor o Igual ${fechaLimite}`)
    }else{
        console.log(`Fecha Menor ${fechaLimite}`)
    }
}

//Ejercicio N9

let colores = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranjas", "Rosa"]

for(let color of colores){
    console.log(color)
}

//Ejercicio N10

function colores2(){
    for(let color of colores){
        console.log(color)
    }
}

colores2()

//Ejercicio 11

let numeros11 =[ 15 , 54 , 28 , 67 , 22 ]

for(let numero of numeros11){
    let doble = numero * 2
    console.log(`El doble de los numeros ${numero}  es ${doble}`)
}

//Ejerciocio N12


let papa = {
    nombre: "Homero",
    apellido: "Simpson",
    edad: 50,
    integrante: "padre"
}

let mama = {
    nombre: "Marge",
    apellido: "Simpson",
    edad: 40,
    integrante: "madre"
}

let hermano = {
    nombre: "Bart",
    apellido: "Simpson",
    edad: 10,
    integrante: "hermano"
}

let hermana = {
    nombre: "Lisa",
    apellido: "Simpson",
    edad: 8,
    integrante: "hermana"
}

let hermana2 = {
    nombre: "Maggie",
    apellido: "Simpson",
    edad: 2,
    integrante: "hermana"
}

let familia = [papa, mama, hermano, hermana, hermana2]

function miFamilia() {
    for (const propiedades of familia) {
        console.log(`${propiedades.nombre}`)
    }
}

miFamilia()

//Ejercicio N13 For of

for (let key in hermana) {
    console.log(key)
}

//Ejercicio N14

for (let key in mama) {
    console.log(mama[key])
}

//Ejercicio N15

let ingresarNumero15 = Number(prompt("ingresar numero"))

let pares = 0;
let impares = 0;

while (ingresarNumero15 !== 0) {
    if (ingresarNumero15 % 2 === 0) {
        pares = pares + ingresarNumero15
    } else {
        impares = impares + ingresarNumero15
    }
    ingresarNumero15 = Number(prompt("ingresar numero"))
}
console.log(`numero de numeros pares ${pares}, y los numeros impares son ${impares}`);

//Ejercicio N16

let numeros16 = [1, 6, 7, 10, 5, 3, 9, 4, 8, 2]
let numeroMasGrande = 0
for (let mayor of numeros16) {

    if (mayor > numeroMasGrande) {
        numeroMasGrande = mayor;
    }
}

console.log(numeroMasGrande)