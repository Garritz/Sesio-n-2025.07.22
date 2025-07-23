// ARCHIVO SECRETO DE SUPERHÉROE

// 1. Crear el objeto superhéroe
let superheroe = {
    nombre: "Chapulín Colorado",
    edad: 25,
    habilidades: ["Chipote chillón", "Pastillas de chiquitolina", "Antenitas de vinil"],
    activo: true,
    saludo: function() {
        return `Soy yo, el ${this.nombre}! Ah, y tengo ${this.edad} años.`;
    }
};

// 2. Calcular edad aleatoria entre 20 y 40 usando Math
let edadAleatoria = Math.random() * (40 - 20) + 20;
let edadRedondeada = Math.round(edadAleatoria);
superheroe.edad = edadRedondeada;

// 3. Acceso a propiedades y saludo
console.log(superheroe.saludo());
console.log(`Mis habilidades son: ${superheroe.habilidades.join(", ")}.`);
console.log(`Mi edad fue asignada aleatoriamente: ${superheroe["edad"]}`);

// 4. Manipulación con String
let primeraLetra = superheroe.nombre.charAt(0);
console.log(`Primera letra de mi nombre: ${primeraLetra}`);

// Comparación primitivo vs objeto
let nombrePrimitivo = superheroe.nombre;
let nombreObjeto = new String(superheroe.nombre);

console.log(`¿Nombre como objeto? ${typeof nombreObjeto === 'object'}`);
console.log(`¿Nombre primitivo? ${typeof nombrePrimitivo === 'string'}`);