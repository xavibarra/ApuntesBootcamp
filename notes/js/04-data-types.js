//DATOS PRIMITIVOS

//Numeros
console.log(8);
console.log(8.5);
// nan === not a number
let f = "hello";
console.log(8 / f); //Nan

//Strings
console.log("8"); //Esto no se parsea como un number, por las comillas
console.log("Hola");
console.log('Hola');

//Booleans TRUE - FALSE
console.log(true);
console.log(false);

//null
console.log(null);

//undefined esto no es lo mismo que no poner nada en la variable 
let xavi = undefined;
// let xavi = "";

console.log(typeof xavi);

//Symbol
let barcelona = Symbol("borne");
console.log(typeof barcelona);

//Datos no primitivos
//arrays y objects

//Array
console.log("This is my cool table of Funk artists");
console.table([
    "Daft Punk",
    "Marc Rebillet",
    "Anderson Paak",
    "Silk Sonic",
    "Los amigos invisibles"
]);

console.log("This is my cool table of Funk artists");
console.log("Mix of primirive table");
console.table([
    "Daft Punk",
    5,
    false,
    "Silk Sonic",
    undefined
]);

console.log("Artistas españoles");
console.table([
    "Estopa",
    "Bustamante",
    "Canto del Loco",
    "Rosalia",
    "Alejando Sanz"
]);


//objects

console.log("My bio");
console.table({
    firstName: "Xavi",
    lasName: "barrachina",
    ocuppation: "Student",
    hobbies: ["Climb", "Surfing", "Running"],
    skills: {
        surfing: "Excelent",
        Climb: "Normal",
        Guitar: ["acoustic", "electronic"],
        instruments:{
            percussion: ["drums", "toms"],
            string:["guitar", "bass", "cuatro"]
        }
        
    }
});

//Array of objects
const movies=[
    {
        movie: "Wolf of Wallstreet",
        genre: ["Drama", "Action", "Comedy"],
        director: ["Martin Scorsese"],
        location: ["NY"],
        actors: ["Jonah Hill", "Margo Robbie", "Leo di Caprio"],
        year: 2010
    },
    {
        movie: "Fight Club",
        genre: ["Drama", "Noir", "comdy", "Action"],
        director: ["David Fincher"],
        location: ["Los Angels, California"],
        actors: ["Bradd Pitt", "Edward Norton"],
        year: 1999,
    },
    {
        movie: "The Neon Demon",
        genre: ["Aleix", "Thriller"],
        director: ["Nicolas Winding"],
        location: ["Copenhagen"],
        actors: ["Elle Fanning"],
        year: 2016,
    },
];

console.log(movies[0].actors[1]);
console.log("My favourite actor of Wolf of Wallstreet is " + movies[0].actors[1]);

//Modern way
console.log(`My fav actor of wolf of wallstreet is ${movies[0].actors[1]}`);

const MyBio = {
    firstName: "Xavi",
    lastName: "Barrachina",
    citiesIlIvedIn: ["Sitges", "Ciudad de Panamá"],
    age: 23,
    dob: "September, 20",
    drinkAlcohol: true,
}
console.log(`Bebo alcohol: ${MyBio.drinkAlcohol}`);
const Favbooks = [
    {
        bookName: "Reina Roja",
        genre: ["Ficción", "Misterio", "suspense"],
        author: "Juan Gómez-Jurado",
        year:2018,
        ISBN:"9788466664417"
    },
    {
        bookName: "Se lo que estas pensando",
        genre: ["Misterio","Suspense"],
        author: "John Verdon",
        year:2010,
        ISBN:"9780307588920"
    },
    {
        bookName: "El juego del alma",
        genre: ["Ficción", "Misterio"],
        author: "Javier Castillo",
        year:2021,
        ISBN:"9788491293545"
    },
]


console.log(`My fav book is: ${Favbooks[1].bookName}`);