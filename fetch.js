fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then(response => response.json()) // Convertir la respuesta recibida en un archivo json
    .then(json => console.log(json.userId)) // #2
    .catch(e => console.log(e)) // Captura del error

/* #2:
 * Manipular ese archivo json, en este caso mostrando por consola aunque se podría 
 * guardar en alguna variable para su posterior utilización
 */