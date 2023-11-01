// Ejercicio N1
let miNombre = "Xavier";
console.log(miNombre);

//Ejercicio N2
let miApeliido = "Nochelli";
console.log(miApeliido);

//Ejercicio N3
let miEdad = 34;
console.log(miEdad);

//Ejercicio N4
let miMascota = "Batman es un perro";
console.log(miMascota);

//Ejercicio N5
let edadMascota = 12;
console.log(edadMascota);

//Ejercicio N7
let nombreCompleto = miNombre + " " + miApeliido;
console.log(nombreCompleto);

//Ejercicio N8
let textoPresentacion = "Hola mi nombre es " + miNombre + " mi apellido es " + miApeliido + " actualmente tengo la edad de " + miEdad + " tengo una mascota que se llama " + miMascota + ", su edad es de " + edadMascota + ".";
console.log(textoPresentacion);

let saludo = `Hola, me llamo ${miNombre} y tengo ${miEdad} años.`;
console.log(saludo)

//Ejercicio N9
let sumaEdades = miEdad + edadMascota;
console.log(sumaEdades);
let restaEdades = miEdad - edadMascota;
console.log(restaEdades);
let productoEdades = miEdad * edadMascota;
console.log(productoEdades);
let divisionEdades = miEdad / edadMascota;
console.log(divisionEdades);

//Ejercicio N10
let alumno = {
    nombre: "xavier",
    apellido: "nochelli",
    edad: 34,
    nacionalidad: "argentino",
    tel: 54123456789
}
console.table(alumno);
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.nacionalidad)
console.log(alumno.tel)

//Ejercicio N11
// Objeto
let mascota = {
    nombre: "batman",
    raza: "perro",
    edad: 12,
    color: "beige",
    tamaño: "pequeño"
}

console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.raza);
console.log(mascota.edad)
console.log(mascota.color);
console.log(mascota.tamaño);

//Ejercicio N12

let frutas = ["manzana", "naranja", "mandarina", "pera", "uva"];
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

//Ejercicio N13
let ingresarEdad = Number(prompt("ingresar edad"));
let mayorEdad = ingresarEdad >= 18;
// alert(mayorEdad ? "es mayor de edad " + ingresarEdad : "no es mayor de edad " + ingresarEdad);
alert(`Soy mayor de edad  ${mayorEdad}`)

//Ejercicio N14
let numeros = [1, 2, 3, 4, 5];
console.log(numeros)
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

//Ejercicio N15
let familias = [
    { nombre: "xavier", edad: 34 },
    { nombre: "rodrigo", edad: 33 },
    { nombre: "elena", edad: 32 },
    { nombre: "ezequiel", edad: 31 },
    { nombre: "daniel", edad: 30 }
]

console.log(familias);
console.log(familias[0]);
console.log(familias[1]);
console.log(familias[2]);
console.log(familias[3]);
console.log(familias[4]);

//Ejercicio N16
let textoAleatorio = "Mi fruta preferida es " + frutas[1] + "lo recomendable es comer por dia " + numeros[4] + " , mi nombre es " + familias[4].nombre;
console.log(textoAleatorio);

//Ejercicio N17
let edadPrimera = Number(prompt("ingresar Edad de la Primera Persona"));
let edadSegunda = Number(prompt("Ingresar Edad de la Segunda Persona"));
let edadesIguales = edadPrimera === edadSegunda;
// console.log("Las edades son Iguales " + edadPrimera + " " + edadSegunda);
console.log(`Las Edades son Iguales ? ${edadesIguales}`)
alert(`Las Edades son Iguales?  ${edadesIguales}`)

let soyMayor = edadPrimera > edadSegunda;
console.log("Soy Mayor " + soyMayor);
alert(`Es Mayor ${edadPrimera} que ${edadSegunda} ${soyMayor}`)

let soyMenor = edadPrimera < edadSegunda;
console.log("Soy Menor " + soyMenor);
alert(`Es Menor ${edadPrimera} que ${edadSegunda} ${soyMenor}`)

//Ejercicio N18
let años = Number(prompt("Ingrese su edad"));
let altura = Number(prompt("Ingrese su altura"));
let puedeSubir = (años >= 6 && altura >= 1.20);
// alert(puedeSubir ? "Puede subir a la atraccion" : "No puede subir a la atraccion")
alert(`Puede subir a la Atraccion: ${puedeSubir}`)
console.log(`Puede subir a la Atraccion: ${puedeSubir}`);


//Ejercicio N19
let pase = prompt("Ingrese tipo de pase:  Vip, Normal, Limitado")
console.log(pase)

let saldo = prompt("Ingrese cantidad de Saldo Disponible")
let puedePasar = ( pase === "Vip" || saldo >= 1000 );
// alert(puedePasar ? "Puede pasar" : "No puede pasar")
console.log("La persona puede pasar ", puedePasar);
alert(`La Persona puede pasar ${puedePasar}`)
