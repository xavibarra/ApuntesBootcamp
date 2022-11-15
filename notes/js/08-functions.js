

//Example function with arrow

let sum = (a,b) => {
    let result = a + b;
    return result;
}

let resultOfAdd = sum(5, 60)
console.log(resultOfAdd);
// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera. 
//Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.
let livesIn = {
    livesInCity: false,
    livesInTown: true
};
const ej2 = (name, age, livesIn) => {
    let live;
    if (livesIn.livesInCity) {
        live = "una ciudad"
    }
    else {
        live="un pueblo"
    }
    return (`${name} tiene ${age} y vive en ${live} `)
}


console.log(ej2("xavi",23,{livesIn}))

//OTRA MANERA DEL MISMO EJERCICIO

const miFuncion = (name, age, livesIn) => livesIn.livesInCity ? `${name} tiene ${age} y vive en la ciudad` : `${name} tiene ${age} y vive en un pueblo`

//CON SWITCH

const miFuncion2 = (name, age, livesIn) => {
    let tcity;
    switch (true) {
        case livesIn.livesInCity:
            tcity = "una ciudad";
            break;
        case livesIn.livesInTown:
            tcity = "un pueblo";
            break;
    }
    return `${name} tiene ${age} y vive en ${tcity} `
}

console.log(miFuncion2("hola", 40, {livesInCity:false, livesInTown:true}));