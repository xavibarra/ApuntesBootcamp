// Que es un operador?

// En JS, un operador es un symbolo especial que nos ayuda a ejecutar operaciones en operandos.
// Ejemplo:

const add = 2 + 3;
console.log(add);

// Aca cicos, el operador "+" es un symbolo matematico de operacion.  Caso de suma que te suma 2+3

// JS Tipo de Operadores
// Lista que aprenderemos hoy

// Assignment Operator
// Arithemic Operator
// Copmarison Operator
// Logical Operators
// Bitwise Operators
// String Operators
// Other Operators

// JS Assignment Operators
// Si miramos el ejemplo en la linea 6, el operador de asignacion "=" es lo que usamos para apuntar/asignar la operacion matematica con la variable "add"...

console.log("Assignment Operators");
console.table([
  {
    operator: "=",
    name: "Assignment operator",
    example: "a = 7; // 7",
  },
  {
    operator: "+=",
    name: "Addition operator",
    example: "a += 5; // a = a + 5",
  },
  {
    operator: "-=",
    name: "Subtraction Assignment",
    example: "a -= 2; // a = a - 2",
  },
  {
    operator: "*=",
    name: "Multiplication Assignment",
    example: "a *= 3; // a = a * 3",
  },
  {
    operator: "/=",
    name: "Division Assignment",
    example: "a /= 2; // a = a / 2",
  },
  {
    operator: "%=",
    name: "Remainder Assignment",
    example: "a %= 2; // a = a % 2",
  },
  {
    operator: "**=",
    name: "Exponentiation Assignment",
    example: "a **= 2; // a = a**2",
  },
]);

//Ejercicio

let num;
let str;
let obj;

num = 8
str = "8"

console.log(num == str);
console.log(num === str);
console.log(num < 18);
console.log(num > 18);
console.log(num >= 18);

const edad = parseInt(prompt("¿Cuál es tu edad?"));
if (edad <= 5) {
    alert("Entrada gratuita");
}
else if (edad < 15) {
    alert("Entrada con un descuento del 20%");
}
else if (edad >= 15 && edad < 60) {
    alert("Entrada sin descuento");
}
else if (edad > 60) {
    alert("Entrada con un descuento del 40%");
}
let hacker1="Jhon";
let hacker2="Steve";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length){
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
	console.log(`It seems that the navigator has the longest name, ${hacker2.length} characters.`);
}
else if (hacker1.length = hacker2.length){
	console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

for (let i=0; i<hacker1.length;i++){
	console.log(hacker1[i])
}
for (let i=hacker2.length-1;i>=0;i--){
	console.log(hacker2[i])
}
