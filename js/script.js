// Desarrollar al menos 3 botones en el navegador que
// represente un cambio de tema de la página. Al pulsar cada uno
// de los botones, los colores principales de la página cambiarán.
// (Por ejemplo, hay un botón rojo, uno azul y uno verde y uno
// que ponga reset. Si pulsas el azul, los colores principales de la
// página, los cuales eran inicialmente negro y blanco, se
// tornarán azul y celeste. Al pulsar reset volverá al negro y
// blanco original

// switch case para las opciones de la pagina y sus cambios de color
function cambiarTema(color) {
    switch (color) {
        case 'rojo':
            document.body.style.backgroundColor = 'red';
            document.body.style.color = 'white';
            break;
        case 'azul':
            document.body.style.backgroundColor = 'blue';
            document.body.style.color = 'lightblue';
            break;
        case 'verde':
            document.body.style.backgroundColor = 'green';
            document.body.style.color = 'lightgreen';
            break;
        case 'reset':
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            break;
    }
}


// Busco los elementos por el id y les añaado el evento con addEventListener--> añado la funcion cambiarTema(color)

document.getElementById('btnRojo').addEventListener('click', () => cambiarTema('rojo'));
document.getElementById('btnAzul').addEventListener('click', () => cambiarTema('azul'));
document.getElementById('btnVerde').addEventListener('click', () => cambiarTema('verde'));
document.getElementById('btnReset').addEventListener('click', () => cambiarTema('reset'));





  

