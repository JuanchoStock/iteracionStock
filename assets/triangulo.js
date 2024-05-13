// Triangulo de #. Para este ejercicio, construir un programa que permita 
// armar un trianguloformado con #, de la siguiente manera:


// #
// ##
// ###
// ####
// #####

const altura = 5;
let triangulo = [];
let i = 0;

for ( i; i <= altura; i ++ ){
  let linea = Array(i).fill('#').join('');
  
  triangulo.push(linea);
}
triangulo.forEach(linea => console.log(linea));