// DOM

// Propiedades
// getElementById (agarra un elemento mediante el atributo ID) 
/* En el siguiente ejemplo estamos declarando una variable title que tomara el elemento con el ID title en el HTML*/
const title = document.getElementById('title');


// querySelector (toma el primer elemento que coincida con el selector)
/* En el siguiente ejemplo estamos declarando una variable menuNavigation que tomara el primer elemento que coincida con el selector nav ul li a en el HTML. Es decir, el primer a que aparezca en el HTML bajo la ruta descrita por el selector.*/
const menuNavigation = document.querySelector('nav ul li a');
console.log(menuNavigation);

// querySelectorAll (toma todos los elementos que coincidan con el selector)
/* 
    En el siguiente ejemplo estamos declarando una variable menu que tomara todos los elementos que coincidan con el selector nav ul li a en el HTML. Es decir, todos los a que aparezcan en el HTML bajo la ruta descrita por el selector.
*/
const menu = document.querySelectorAll('nav ul li a');
console.log(menu);

// textContent (modifica el contenido de un elemento). Al utilizar textContent, se puede agregar texto o modificar el texto de un elemento.
title.textContent = 'Modificando el titulo del DOM mediante Javascript';

// innerHTML (modifica el contenido HTML de un elemento). Al utilizar innerHTML, se puede agregar contenido HTML o modificar el contenido HTML de un elemento.
title.innerHTML = `<div><h2>Hola Mundo</h2></div>`;


// propiedad style (permite modificar el estilo de un elemento)
title.style.backgroundColor = 'red';

// classList.add (permite agregar clases a un elemento)
title.classList.add('main-title', 'title-red');
// classList.remove (permite quitar clases de un elemento)
title.classList.remove('main-title');
// classList.toggle (permite agregar y quitar clases de un elemento si ya existen o no)
title.classList.toggle('title-red');

// DOM traversing (permite navegar entre elementos)
const menuNav = document.querySelector('nav');
// children (permite acceder a los elementos hijos de un elemento) 
console.log(menuNav.children[0].children[1]);

// parentElement (permite acceder al elemento padre de un elemento)
const listItem = document.querySelector('nav ul li');
console.log(listItem.parentElement.parentElement);

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