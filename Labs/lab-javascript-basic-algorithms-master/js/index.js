// Iteration 1: Names and Input
let hacker1="Jhon";
let hacker2="Steve";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
	console.log(`It seems that the navigator has the longest name, ${hacker2.length} characters.`);
}
else if (hacker1.length === hacker2.length){
	console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let reservedName = "";

for (let i = 0; i < hacker1.length; i++) {
	reservedName += hacker1[i].toUpperCase() + " ";
	
}
console.log(reservedName);

let reverseName = "";

//Option 1
for (let i=hacker2.length-1;i>=0;i--){
	reverseName += hacker2[i];
}
console.log(reverseName);

// Option 2
const reservedNameSimplified = hacker2.split("").reverse().join("");
console.log(reservedNameSimplified);

if (hacker1 > hacker2) {
	console.log("The driver's name goes first.");
}
else if (hacker1 < hacker2) {
	console.log("Yo, the navigator goes first definitely.");
}
else {
	console.log("What?! You both have the same name?");
}

//BONUS 1
let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laudantium in nam, ex quis ea minus dolore eaque! Sint voluptatem quis distinctio error et in eligendi culpa, facilis asperiores expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, dolor voluptatibus possimus libero maiores nam eveniet ea atque dolores cupiditate, ipsum accusantium minima itaque corrupti non blanditiis nesciunt iste necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam quasi debitis modi itaque! Nostrum minus ut voluptatum, non culpa totam tenetur minima aspernatur, veniam molestias temporibus quaerat molestiae beatae!"

function etFindingWithFilter(wordToFind) {
	return wordToFind.split("").filter((word) => word === "et").lenght;
}
console.log(etFindingWithFilter(lorem))

// BONUS 2
let phraseToCheck = "Amor, Roma";
let pharseToCheckPalindrome = phraseToCheck.split("").reverse().join("");
if (pharseToCheckPalindrome.toLowerCase() == pharseToCheckPalindrome.toLowerCase()) {
	console.log("THE STRING IS A PALINDROME");
}
else {
	console.log("THE STRING IS NOT A PALINDROME");
}