//Ejercicio N1

const num1 = 4;
const num2 = 5;
if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

//Ejercicio N2

if (num1 > num2) {
    console.log(num1);
} else if (num1 < num2) {
    console.log(num2);
} else {
    console.log("Los numeros son iguales");
}

//Ejercicio N3

if (num1 == num2) {
    console.log("Los numeros son Iguales");
} else {
    console.log("Los numeros son Diferentes");
}

//Ejercicio N4

const fecha1 = "2018-9-2";
const fecha2 = "2023-5-7";
if (fecha1 > fecha2) {
    console.log(`La fecha "${fecha1} es
mayor que ${fecha2}`);
} else {
    console.log(`La fecha ${fecha2}
es mayor que ${fecha1}`);
}

//Ejercicio N5

if (fecha1 == fecha2) {
    console.log("La fecha1 es mayor");
} else {
    console.log("La fecha2 es mayor");
}

//Ejercicio N6

let dato1 = 4;
let dato2 = 8;
let dato3 = 2;

if (dato1 > dato2 && dato1 > dato3) {
    console.log(` El Numero ${dato1} es el mayor}`);
} else if (dato2 > dato1 && dato2 > dato3) {
    console.log(` El Numero ${dato2} es el mayor`);
} else {
    console.log(` El Numero ${dato3} es el mayor`);
}

//Ejercicio N7

let color = prompt("Elija el color que mas le guste rojo, azul o verde");
switch (color) {
    case "rojo":
        alert("El Color de la Pasion");
        break;
    case "azul":
        alert("El Color del Mar");
        break;
    case "verde":
        alert("El Color del Naturaleza");
        break;
}

//Ejercicio N8

let valor1 = Number(prompt("Ingrese el primer numero entre 1 y 100"));
let valor2 = Number(prompt("Ingrese el segundo numero entre 1 y 100"));

if ((valor1 >= 1 && valor1 <= 100) && (valor2 >= 1 && valor2 <= 100)) {
    let operacion = prompt(
        "Ingrese operacion a realizar suma, resta, multiplicacion, division "
    );

    switch (operacion) {
        case "suma":
            let suma = valor1 + valor2;
            alert(`suma: ${valor1} + ${valor2} = ${suma} `);
            break;
        case "resta":
            let resta = valor1 - valor2;
            alert(`Resta: ${valor1} - ${valor2} = ${resta} `);
            break;
        case "multiplicacion":
            let multiplicacion = valor1 * valor2;
            alert(`Multiplicacion: ${valor1} * ${valor2} = ${multiplicacion} `);
            break;
        case "division":
            let division = valor1 / valor2;
            alert(`division: ${valor1} / ${valor2} = ${division} `);
            break;
        default:
            alert("Operacion Invalida");
    }
} else {
    alert("Valores Invalidos");
}

//Ejercicio N9

let persona1 = {
    nombre: "Xavier",
    edad: 34,
    altura: 1.78,
};

let persona2 = {
    nombre: "Rodrigo",
    edad: 30,
    altura: 1.85,
};

if (persona1.edad >= persona2.edad && persona1.altura >= persona2.altura) {
    console.log(
        `La ${persona1.nombre} tiene más años y es más alta que ${persona2.nombre}`
    );
    alert(
        `La ${persona1.nombre} tiene más años y es más alta que ${persona2.nombre}`
    );
} else if (
    persona1.edad <= persona2.edad && persona1.altura <= persona2.altura
) {
    console.log(
        `La ${persona2.nombre} tiene más años y es más alta que ${persona1.nombre}`
    );
    alert(
        `La ${persona2.nombre} tiene más años y es más alta que ${persona1.nombre}`
    );
} else if (
    persona1.edad >= persona2.edad && persona1.altura <= persona2.altura
) {
    console.log(
        `La ${persona1.nombre} tiene más años y menos altura que ${persona2.nombre}`
    );
    alert(
        `La ${persona1.nombre} tiene más años y menos altura que ${persona2.nombre}`
    );
} else {
    console.log(
        `La ${persona2.nombre} tiene más años y más altura que ${persona1.nombre}`
    );
    alert(
        `La ${persona2.nombre} tiene más años y más altura que ${persona1.nombre}`
    );
}

//Ejercicio N10

let nombreE10 = prompt("Ingresar Nombre de la persona");

let edadE10 = Number(prompt("Ingresar su Edad en numeros"))
if (edadE10 >= 18) {
    let alturaE10 = Number(prompt("Ingresar Altura en centimetros de la persona"));
    if (alturaE10 >= 150) {
        let visionE10 = Number(prompt("Ingresar rango de vision del 1 al 10"))
        if (visionE10 >= 8 && visionE10 <= 10) {
            alert("Estas Capacitado para conducir")
        } else {
            alert(` ${nombreE10}  No estas Capacitado para conducir por la vision`)
        }
    } else {
        alert(` ${nombreE10}  No estas Capacitado para conducir por la Altura`)
    }
} else {
    alert(` ${nombreE10} No estas Capacitado para conducir por la Edad`)
}

//Ejercicio N11

let edadE11 = Number(prompt("Ingrese su Edad"));

if (edadE11 >= 0 && edadE11 <= 12) {
    alert("Eres un Infante");
} else if (edadE11 >= 13 && edadE11 <= 18) {
    alert("Eres un Adolescente");
} else if (edadE11 >= 19 && edadE11 <= 45) {
    alert("Eres un Mayor Joven");
} else if (edadE11 > 45) {
    alert("Eres un Anciano");
} else if (edadE11 > 100) {
    alert(`En realidad tiene esa edad ${edadE11}`);
} else {
    alert("Edad Invalida");
}

//Ejercicio N12

let numero123 = Number(prompt("Elija un numero entre 1, 2 o 3 "));

if (numero123 >= 1 && numero123 <= 3) {
    let numeroAleatorio = Number(prompt("Ingrese cualquier otro numero"));
    let numDoble = numeroAleatorio * 2;
    let numTriple = numeroAleatorio * 3;
    alert(`El numero inrgesado es ${numeroAleatorio}`)
    alert(`El doble del numero ingresado es ${numDoble}`)
    alert(`El triple del numero ingresado es ${numTriple}`)
} else {
    alert("Numero Invalido")
}

//Ejercicio N13

let nombreN13 = prompt("Ingrese su nombre");
let paseN13 = prompt("vip o normal")

if ((nombreN13 === "xavier" && paseN13 === "vip") || (paseN13 === "normal")) {
    if (entradaN13 === "si" || entradaN13 === "no") {
        let comprar = prompt("Desea comprar? si o no")
        if (comprar === "si" && comprar === "no") {
            let dinero = Number(prompt("Ingrese cantidad de dinero"));
            if (dinero >= 1000 && dinero <= 999) {
                alert(`${nombreN13} Venta Exitosa Bienvenido`)
            } else {
                alert(`${nombreN13} Venta Rechazada`)
            }
        } else {
            alert(`${nombreN13} Le deseamos que tenga Buenas Noches`)
        }
    } else {
        alert(`${nombreN13} Le deseamos difrute su entrada, Buenas Noches`)
    }

} else {
    alert(`${nombreN13} Le deseamos que disfrutes su entrada vip que tenga Buenas Noches`)
}


//Ejercicio N14

let numIncognito = 3;
let oportunidades = 3;

let numIngresado = Number(prompt("Intento 1: Ingresa un número del 1 al 10"));

if (numIngresado === numIncognito) {
    alert("¡Ganaste! ¡Has adivinado el número!");
} else if (numIncognito < numIngresado) {
    alert("El número ingresado es mayor. ¡Estás cerca!");
} else {
    alert("El número ingresado es menor. ¡Estás cerca!");
    
    numIngresado = Number(prompt("Intento 2: Ingresa un número del 1 al 10"));

    if (numIngresado === numIncognito) {
        alert("¡Ganaste! ¡Has adivinado el número!");
    } else if (numIncognito < numIngresado) {
        alert("El número ingresado es mayor. ¡Estás cerca!");
    } else {
        alert("El número ingresado es menor. ¡Estás cerca!");
        
        numIngresado = Number(prompt("Intento 3: Ingresa un número del 1 al 10"));
        
        if (numIngresado === numIncognito) {
            alert("¡Ganaste! ¡Has adivinado el número!");
        } else {
            alert(`Perdiste, no te quedan más intentos. El número era ${numIncognito}`);
        }
    }
}
