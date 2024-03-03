/* 1.- Declara una funcion getAllBreeds que devuelva todas las razas de perro. */
function getAllBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(razas => Object.keys(razas.message))
}


/* 2.- Declara una función getRandomDog que obtenga una imagen random de una raza. */
function getRandomDog() {
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(razas => razas.message)
}


/* 3.- Declara una función getAllImagesByBreed que obtenga todas las imágenes de una raza. */
function getAllImagesByBreed() {
    return fetch("https://dog.ceo/api/breed/komondor/images")
        .then(response => response.json())
        .then(raza => raza.message)
}


/* 4.- Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento */
function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => response.json())
        .then(raza => raza.message)
}

/* 5 */
function getGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
}


/* 6 */
function printGithubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(user => {
            document.body.innerHTML +=
                `<img src=${user.avatar_url}>
                 <p>${user.name}</p>`
            return { img: user.avatar_url, name: user.name }
        })
}


/* 7 */
function getAndPrintGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(user => {
           return  `<section>
                        <img src="${user.avatar_url}" alt="imagen de usuario">
                        <h1>${user.name}</h1>
                        <p>Public repos: ${user.public_repos}</p>
                    </section>`;
        })
}


/* 8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después llamaremos a la función getAndPrintGitHubUserProfile(username) que se ejecute cuando se pulse el botón buscar.(Esto no se testea).

      <h2>Buscar usuario GitHub</h2>
      <input id="user" type="text">
      <button id="buscar">Try it</button>
      <div id="github_user"></div>

function getAndPrintGitHubUserProfile(username) {

    return fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(user => {
            console.log(user);
            return `<section>
                   <img src="${user.avatar_url}" alt="imagen de usuario">
                   <h1>${user.name}</h1>
                   <p>Public repos: ${user.public_repos}</p>
                 </section>`;
        })
  };`

  //getAndPrintGitHubUserProfile("AdrianTerciado").then(data=>console.log(data))

`document.getElementById("buscar").addEventListener("click",function(){
  // Alert con el texto del input
  alert(document.getElementById("user").value);
  const name = document.getElementById("user").value;
  
  getAndPrintGitHubUserProfile(name)
    .then(data => document.getElementById("github_user")
    .innerHTML = data);
}); 
*/


/* 9 */

let userNames = ["AdrianTerciado", "imisstheoldpabl0", "Guille-Rubio"];

function fetchGithubUsers(array) {

    Promise.all(array.map(user => fetch(`https://api.github.com/users/${user}`)))
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                console.log(user.html_url);
                console.log(user.name);
            });
        })
}

fetchGithubUsers(userNames);