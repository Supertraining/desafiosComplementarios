//EJERCICIO 1

let numero1 = parseInt(prompt(`Ingrese un numero`))
let numero2 = parseInt(prompt(`Ingrese otro numero`))

while (!isNaN(numero1) && !isNaN(numero2)) {
    let sum = numero1 + numero2
    console.log(sum)
    alert(`el resultado de la suma es ${sum}`)
    numero1 = parseInt(prompt(`Ingrese un numero`))
    numero2 = parseInt(prompt(`Ingrese otro numero`))
}
alert(`El valor ingresado debe ser un numero`)

//EJERCICIO 2

let pruebaDeIngreso = prompt("Que toma la vaca?:")
let respuestaCorrecta = pruebaDeIngreso.toLowerCase()

if (respuestaCorrecta === "agua") {
    alert("Usted posee conocimientos infinitos")
} else {
    alert("Tenga cuidado, usted puede ser fácilmente engañado")
};

//EJERCICIO 3

let actividadFisicaSemanal = parseInt(prompt("¿Cuantos minutos dedica a la realización de actividad física de manera semanal?:"))

if (actividadFisicaSemanal < 80) {
    alert(`Los ${actividadFisicaSemanal} minutos de actividad física semanal que usted realiza están por debajo del mínimo recomendado`)
}  
else if (actividadFisicaSemanal > 80 && actividadFisicaSemanal < 150)  {
    alert(`Va por buen camino, los ${actividadFisicaSemanal} minutos de actividad que usted realiza son un buen comienzo, pero la cantidad de minutos mínima semanal recomendada es de 150, esfuérzate un poco mas`)
} else if (actividadFisicaSemanal > 150 && actividadFisicaSemanal < 350) {
    alert(`Excelente! continue asi, realizando ${actividadFisicaSemanal} minutos de actividad física semanal, usted posee un menor riesgo de muerte por cualquier causa que un individuo sedentario`)
} else {
    alert(`Consulte con un profesional de la actividad física, ${actividadFisicaSemanal} minutos podrían ser demasiado para usted`)
}

//EJERCICIO 4

let numeroIngresado = parseInt(prompt("Ingresa un numero menor a 6"));
while (numeroIngresado < 6) {
    switch (numeroIngresado) {
    case 1:
        alert("Hola!!");
        break;
    case 2:
        alert("Hola!!, Hola!!");
        break;
    case 3:
        alert("Hola!!, Hola!!, Hola!!");
        break;
    case 4:
        alert("Hola!!, Hola!!, Hola!!, Hola!!");
        break;
    case 5:
        alert("Hola!!, Hola!!, Hola!!, Hola!!, Hola!!");
        break;
}
    numeroIngresado = parseInt(prompt("Ingresa un numero menor a 6"));
}
alert("El numero ingresado es mayor a 5")

//EJERCICIO 5

let nombreApellido = prompt("Ingrese su nombre y apellido")
let numeroTel = prompt("Numero telefónico")


for (let index = 0; index < 10; index++) {
    if (nombreApellido && numeroTel != "") {
    console.log(nombreApellido + ` ` + numeroTel)}
    else {
        alert("el valor ingresado esta vacío")
}
    nombreApellido = prompt("Ingrese su nombre y apellido")
    numeroTel = prompt("Numero telefónico")
    switch (index) {
        case 9:
            alert("agenda completa")
    }
}