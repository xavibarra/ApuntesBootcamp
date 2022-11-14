let number = 6;
//La variable number tiene un valor de 6

//var, let, const [RESERVED KEYWORDS]

var x;
let y;

//Hemos declarado las variables x y pero estan vacias ya que no hemos asignado ningun valor a la variable, mismo resultado que si asignamos undefined
y = "hola";
console.log(y);
y = 8;
console.log(y);

// Las variables pueden ser nombradas con: letras, _, $, no se puede nombrar variables con numeros, tampoco palabras reservadas ej new
let a = "hola";
let _a = "hola";
let $a = "hola";

console.log(a, _a, $a);



//VAR, esta manera de declarar variables ya no se usa, puede ser reasignada como let.

//LET, se puede reasignar, es decir darle otro valor,se puede delcarar sin valor y luego darle un valor.

//CONST, no se puede reasignar, no se puede declarar sin ningun valor, esto SI: const variable ="", esto NO const variable
let hobbie;
const nombre = "Xavi";
const apellido = "Barrachina";
const edad = 23;
hobbie = "me gusta mucho escalar";
console.log(`Hola mi nombre es ${nombre} ${apellido}, tengo ${edad} años y ${hobbie} ` );
hobbie = "me gusta mucho ir en bici";
console.log(`Hola mi nombre es ${nombre} ${apellido}, tengo ${edad} años y ${hobbie} ` );
hobbie = "me gusta mucho hacer surf";
console.log(`Hola mi nombre es ${nombre} ${apellido}, tengo ${edad} años y ${hobbie} ` );
hobbie = "me gusta mucho ir a correr";
console.log(`Hola mi nombre es ${nombre} ${apellido}, tengo ${edad} años y ${hobbie} ` );
hobbie = "me gusta mucho esquiar";
console.log(`Hola mi nombre es ${nombre} ${apellido}, tengo ${edad} años y ${hobbie} ` );
