console.log("Ejercicio 1: Creación y Acceso a Propiedades");
// Ejercicio 1: Creación y Acceso a Propiedades
// Descripción: Crea un objeto `libro` con las propiedades `titulo`, `autor` y `añoPublicacion`. Luego, accede y muestra cada una de las propiedades.

let libro = {
    titulo: "Moby Dick",
    autor: "Herman Melville",
    añoPublicacion: "1851"
};

console.log(`Título: ${libro.titulo}`);
console.log(`Autor: ${libro.autor}`);
console.log(`Año de Publicación: ${libro.añoPublicacion}`);

console.log("---------")
console.log("Ejercicio 2: Modificación de Propiedades");
// Ejercicio 2: Modificación de Propiedades
// Descripción: Crea un objeto `estudiante` con las propiedades `nombre` y `edad`. Luego, modifica la propiedad `edad` y agrega una nueva propiedad `curso`.

let estudiante = {
    nombre: "Gabriel",
    edad: 19
};

console.log(estudiante);

estudiante.edad = 20;
estudiante.curso = "Estructura de Datos";

console.log(estudiante);

console.log("---------")
console.log("Ejercicio 3: Uso de Notación de Corchetes");
// Ejercicio 3: Uso de Notación de Corchetes
// Descripción: Crea un objeto `carro` con las propiedades `marca`, `modelo` y `año`. Luego, usa la notación de corchetes para acceder a las propiedades y modificar la propiedad `modelo`.

let carro = {
    marca: "Ford",
    modelo: "Fiesta",
    año: 2005
};

console.log(carro["marca"]);
console.log(carro["modelo"]);
console.log(carro["año"]);

carro["modelo"] = "Explorer";

console.log(carro["marca"]);
console.log(carro["modelo"]);
console.log(carro["año"]);

console.log("---------")
console.log("Ejercicio 4: Iteración sobre un Objeto");
// Ejercicio 4: Iteración sobre un Objeto
// Descripción: Crea un objeto `persona` con las propiedades `nombre`, `edad` y `ciudad`. Usa un bucle `for...in` para iterar sobre las propiedades del objeto y mostrar cada una de ellas.

let persona = {
    nombre: "Gabriel",
    edad: 19,
    ciudad: "Valencia"
};

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

console.log("---------")
console.log("Ejercicio 5: Uso de Object.keys, Object.values y Object.entries");
// Ejercicio 5: Uso de Object.keys, Object.values y Object.entries
// Descripción: Crea un objeto `producto` con las propiedades `nombre`, `precio` y `stock`. Usa `Object.keys`, `Object.values` y `Object.entries` para mostrar las claves, los valores y las entradas del objeto.

let producto = {
    nombre: "Atamel",
    precio: 0.80,
    stock: 2
};

console.log("Claves:", Object.keys(producto));
console.log("Valores:", Object.values(producto));
console.log("Entradas:", Object.entries(producto));

console.log("---------")
console.log("Ejercicio 6: Propiedades Dinámicas");
// Ejercicio 6: Propiedades Dinámicas
// Descripción: Crea un objeto `empleado` con las propiedades `nombre` y `salario`. Usa una variable para acceder dinámicamente a las propiedades del objeto y modificar el `salario`.

let empleado = {
    nombre: "Gabriel",
    salario: 400
};

let cambio = "salario";

console.log(`Salario antes: ${empleado[cambio]}`);
empleado[cambio] = 8000;
console.log(`Salario después: ${empleado[cambio]}`);

console.log("---------")
console.log("Ejercicio 7: Métodos en Objetos");
// Ejercicio 7: Métodos en Objetos
// Descripción: Crea un objeto `usuario` con las propiedades `nombre` y `email`, y un método `saludar` que muestre un saludo con el nombre del usuario.

let usuario = {
    nombre: "Gabriel",
    email: "mendoza31192@gmail.com",
    saludar: function() {
        console.log(`Un saludo, ${this.nombre}`);
    }
};

usuario.saludar();

console.log("---------")
console.log("Ejercicio 8: Congelación de Objetos");
// Ejercicio 8: Congelación de Objetos
// Descripción: Crea un objeto `configuracion` con las propiedades `tema` y `idioma`. Usa `Object.freeze` para congelar el objeto y luego intenta modificar una de sus propiedades.

let configuracion = {
    tema: "blanco",
    idioma: "inglés"
};

Object.freeze(configuracion);
configuracion.idioma = "francés";

console.log(`Idioma (sin cambios): ${configuracion.idioma}`);
