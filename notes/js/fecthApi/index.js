// document.querySelector('#getText').addEventListener('click', getText);
//creamos función
const getText = () => {
    //llamamos al metodo fetch y le pasamos una url del recurso que eueremos usar
    fetch('sample.txt')
        //recibimos info de la llamada por parte del fetch y dentro de la promesa llamamos a una expresión para poder manipular la info que recibimos, es decir, pasar el texto a string
        .then((response) => response.text())
        //limpiamo bien el texto y se lo inyectamos a la parte correspondiente mediante
        .then((cleanText) => { document.querySelector('#output').innerHTML += cleanText })
        //por si acaso hay algun error
        .catch ((error) => console.log(error));
}
//creamos el evento de que se ejecute la función al hacer click en el botón
document.querySelector('#getText').addEventListener('click', getText);


//Llamamos a un archivo Json dentro de la maquina

const getJson = () => {
    fetch('users.json')
        .then((response) =>response.json())
        .then((users) => {
            let userData = "";
            users.forEach((user) => {
                userData += `
                <ul>
                <li>${user.name}</li>
                <li>${user.email}</li>
                <li>${user.id}</li>
                </ul>
                `;
            });
            document.querySelector('#output').innerHTML += userData;   
        })
        .catch((error) => console.log(error));
};
document.querySelector('#getJson').addEventListener('click', getJson);

//llamar a una API externa
const externalApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        let externalApiInfo = "";
        res.forEach((post) => {
          externalApiInfo += `
                <div class="card" style="width: 15rem">
                  <img
                      class="card-img-top"
                      src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltde04169680d1e8d6/6333adfb110d52448841a252/GettyImages-1243560834.jpg"
                      alt="A cool image about the Wu"
                  />
                  <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <p class="card-text">
                          ${post.body}
                      </p>
                  </div>
                </div>
                `;
        });
        document.querySelector("#output").innerHTML += externalApiInfo;
      })
      .catch((error) => console.log(error));
  };
document.querySelector('#getExternalApiInfo').addEventListener("click", externalApi);
  
//enviar un mensaje al endpoint de jsonplaceholder para poder emitir indo dentro del request:
const addPost = (preventForm) => {
    preventForm.preventDefault(); //esto sirve para cuando hacemos clic en submit no recargue la página

    //nos tremos los valores de los inputs
    let title = document.querySelector('#title').value;
    let body = document.querySelector('#body').value;

    //vamos a usar el fetch() para poder enviar info al endpoint
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "text/plain, application/json",
        },
        body:JSON.stringify({title: title, body:body})  //el valor de body y title son las dos constntes declaradas anteriormente que casusualmente tienen el mismo nombre
    })
        .then((response)=> response.json() )
        .then((formData)=> console.log(formData)) 
        .catch ((error) => console.log(error));
};
 document.querySelector("#addPost").addEventListener("submit", addPost)