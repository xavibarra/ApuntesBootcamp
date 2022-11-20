//Ejemplo 
function greet() {
    console.log("Hello world");
}

//metodo setTimeout
            // setTimeout(greet, 3000); //tarda 3 segundo es hacer la función

function showTime() {
    //return new date and time
    let dateTime = new Date();
    //return the current local time
    let time = dateTime.toLocaleTimeString();
    console.log(time);

    //usar settimeout - display every 3 seconds
    setTimeout(showTime, 3000);

}
            // showTime();

//Clear time out

let count = 0;
function increaseCount() {
    count += 1
    console.log(count);
}
let id = setTimeout(increaseCount, 3000);
clearTimeout(id);
            // console.log('metodo setTimeout frenando');


//setTimeout con parametros
//setTimeout(funcion, milisegundos, param1, param2, param3...)
//Ejemplo, programa para mostrar el nombre en consola

function greetWithParams(name, lastName) {
    console.log("Hello" + " "+name+" "+lastName);
}
            // setTimeout(greetWithParams, 2000, "xavi", "Barrachina");

//function

function greetCallBack(name) {
    console.log(`Hello ${name}`);
}

        // greetCallBack("xavi")

//function callback
function greetCallBackTwo(name, callback) {
    console.log(`Hello ${name}`);
    callback();
} 
//function to be referenced inside the function greetCallBackTwo, la funcion que vamos a crear callMe(); es la funcion que vamos a pasarle como arguento a la función greetCallBackTwo()
function callMe() {
    console.log("Call me");
}
//llamar a la función greetCallBackTwo() y dentro de los parentesis vamos a pasar el parametro de name y una función como argumento para trabajar el callback

        // greetCallBackTwo("xavi", callMe)

//en la función inicial delcaramos dos cosas, un parametro y un argumento funcion

function greetCallBackThree() {
    console.log('Hello world');
}
function sayMyName(name) {
    console.log(`Hello ${name}`);
}

                // setTimeout(greetCallBackThree, 3000);
                // sayMyName("Xavi");
//Como podemos ver, la primera funcion sale en consola 3 segundos despues de la segunda

//Ejemplo callback pasandole una funcion

function greetCallBackFour(name, myFunction) {
    console.log("Hello students!");
    //ejecutar esta funcion despues de un tiempo
    myFunction(name)
}
//creamos la funcion callback que va a recibir la función greetcallbackfour()
function sayName(name) {  //esta es la funcion que ira en el sitio de myFunction
    console.log(`Hello there ${name}`);
}

                //setTimeout(greetCallBackFour, 5000, "xavi", sayName) //1. nombre de la funcion 2.Tiempo 3. paramentro (nombre) 4. paramentro función




//promise tiene dos argumentos, resolve y reject si la promesa regresa con exito se llamama a resolve() y sino reject()
//Ejemplo - promesa
let promiseStatus = true;
let countValue = new Promise((resolve, reject) => {
    if (promiseStatus) {
        resolve("There are oreos")
    }
    else {
        reject("There are no oreos")
    }
})

                // console.log(countValue);


//EJEMLO promises - chining .then
let countValue2 = new Promise((resolve, reject) => {
    resolve("Promise is resolved")
});
// estos .then se ejecutan solo si la pomesa se cumple

countValue2.then(function successValue(result){
    console.log(result);
}).then(function successValue1() {
    console.log("Hemos llamado varias veces a funciones multiples con la expsndion de la promesa then");
})


//El .catch() es lo contrario del .then
// .finally() se ejecuta tanto si se resuelve la promesa como si no


