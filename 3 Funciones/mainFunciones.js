//Ejercicio N1  

function sumar1 (){
    let multiplicar = 100 *20
    console.log(multiplicar)
}

sumar1();


//Ejercicio N2

sumar1();

//Ejercicio N3

function multiplicar( a , b ){
    let resultado = 8 * 5
    console.log(resultado)
}

multiplicar();

//Ejercicio N4

let num1 = 150
let num2 = 55

function restar ( numero1 , numero2 ){
    let resultado = numero1 - numero2
    console.log(resultado)
}
restar(num1,num2)

//Ejercicio N5

function sumar2 (){
    let multiplicar = 100 * 20
    return multiplicar
}

console.log(sumar2())

//Ejercicio N6 Funcion anonima

let sumar3 = function (){
    let multiplicar = 100 *20
    return multiplicar
}

console.log(sumar3())

//Ejercicio N7 Function Flecha

let sumar4 = ( a , b ) =>  a * b 

console.log(sumar4(10,8))

//Ejercicio N8

function saludar (nombre){
    console.log(`Hola Buenos dias ${nombre}`)
}
saludar("Xavier")

//Ejercicio N9

let multiplicar2 = function ( a , b ){
    let multiplicar = a * b
    console.log(multiplicar)
}

multiplicar2(10,5)

//Ejercicio N10

function area( a , b ){
    let area = a * b
    return area
}

console.log(area(10,3))

function perimetro( a , b ,c ){
    let perimetro = a + b + c
    return perimetro
}

console.log(perimetro(5,8,3))

//Ejercicio N11

let productos = Number(30)
let precioProducto = Number(100)
const totalCompra = ( a , b ) => { 
    let descuento = 0
    if(productos >= 10 && productos <=19){
        descuento = b * 0.10
    }else if ( productos >= 20 ){
        descuento = b * 0.20
    }
    let precioCondescuento = b - descuento
    let total = a * precioCondescuento
    return `El total de su compra es ${total}`
}

console.log(totalCompra(productos, precioProducto))

//Ejercicio N12

function esMayorDeEdad(edad){
    if(edad >= 18){
        console.log("es mayor de edad")
    }else{
        console.log("no es mayor de edad")
    }
}

let edad = Number(15)
esMayorDeEdad(edad)

//Ejercicio N13

let ingresoAnual = 22000

function declaracionIngresos(ingresoAnual){
    let impuestoIngreso = 0
    if(ingresoAnual <= 10000 ){
        impuestoIngreso = ingresoAnual * 0.10
    }else if(ingresoAnual > 10000 && ingresoAnual < 20000 ){
        impuestoIngreso = ingresoAnual * 0.15
    }else{
        impuestoIngreso = ingresoAnual * 0.20
    }
    return `Tu declaración de ingresos es: $${impuestoIngreso}`
}

console.log(declaracionIngresos(ingresoAnual))

//Ejercicio N14

let ingresarDia = 3;

function diasLaborales(ingresarDia){
    switch(ingresarDia){
        case 1:
            console.log("Lunes es dia laboral")
            break;
        case 2:
            console.log("Martes es dia laboral")
            break;
        case 3:
            console.log("Miercoles es dia laboral")
            break;
        case 4:
            console.log("Jueves es dia laboral")
            break;
        case 5:
            console.log("Viernes es dia laboral")
            break;
        case 6:
            console.log("Sabado es fin de semana")
            break;
        case 7:
            console.log("Domingo es fin de semana")
            break;
        default:
            console.log("Dia no encontrado")
            break;
    }
}

diasLaborales(ingresarDia)