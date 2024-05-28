// DOM

// Propiedades
// getElementById (agarra un elemento mediante el atributo ID) 
// const title = document.getElementById('title');


// querySelector (toma el primer elemento que coincida con el selector)
// const menuNavigation = document.querySelector('nav ul li a');
// console.log(menuNavigation);

// querySelectorAll (toma todos los elementos que coincidan con el selector)
// const menu = document.querySelectorAll('nav ul li a');
// console.log(menu);

// textContent (modifica el contenido de un elemento)
// title.textContent = 'Modificando el titulo del DOM mediante Javascript';

// innerHTML (modifica el contenido HTML de un elemento)
// title.innerHTML = `<div><h2>Hola Mundo</h2></div>`;


// propiedad style (permite modificar el estilo de un elemento)
// title.style.backgroundColor = 'red';

// classList.add (permite agregar clases a un elemento)
// title.classList.add('card', 'card-red');
// classList.remove (permite quitar clases de un elemento)
// title.classList.remove('card');
// classList.toggle (permite agregar y quitar clases de un elemento si ya existen o no)
// title.classList.toggle('prueba');

// DOM traversing
// const menuNavigation = document.querySelector('nav');
// children (permite acceder a los elementos hijos de un elemento)
// console.log(menuNavigation.children[0].children[1]);

// parentElement (permite acceder al elemento padre de un elemento)
// const listItem = document.querySelector('nav ul li');
// console.log(listItem.parentElement.parentElement);

/* Ejemplo de creacion de un elemento mediante el DOM.
    Estaremos creando un elemento <p> y le agregaremos un contenido. Al cargar la pagina, esta solicitará que ingrese su nombre. Una vez ingresado un valor, el elemento <p> se renderizará con el valor ingresado por el usuario. Si el usuario no ingresa un valor, el elemento <p> se renderizará con un nombre vacío.
*/
//createElement: permite crear un elemento HTML a partir de un string 
const element = document.createElement('p');
const container = document.getElementById('container');

let name = prompt('Ingrese su nombre');

if (!name) {
    name = '';
}

// Agregar contenido
element.textContent = `Bienvenido, ${name}`;

// Agregar atributos (opcionales)
element.classList.add('firstClass', 'secondClass');
element.setAttribute('id', 'firstID');

// Renderizar elemento
//appendChild: permite agregar un elemento como hijo de otro elemento y renderizarlo
container.appendChild(element);