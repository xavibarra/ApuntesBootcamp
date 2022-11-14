//Los comentarios se hacen con las dos barras
console.log("Xavi");

console.log(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[8]);

// CON ESTO PODEMOS CAMBIAR EL TEXTO DEL HTML DESDE JS:

// console.log(document.all[8].textContent = "Wu tang clan");
// console.log(document.all[8].innerText = "Wu tang clan");
console.log(document.all[8].innerHTML = "Wu tang clan");

//CON ESTO SABEMOS CUANTOS LINKS HAY EN LA PAGINA
console.log(document.links);

//PARA MOSTRAR RESULTADOS EN FORMA DE TABLA:
console.table(["Barcelona", "San José", "Ciudad de Panamá", "Amsterdam", "Helsinky", "Marrakech", "París", "Venecia"])
