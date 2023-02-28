/* 3--Dado una cadena de texto, genere una función para encontrar el 
número de veces que se repite cada palabra, ejemplo “hello world, big WoRld” deberíamos obtener

hello - 2 veces 
world - 1 vez 
big - 1 vez
Cosas a tener en cuenta
-	Palabras en mayusculas y minusculas cuenta como la misma palabra
-	Símbolos no cuentan como palabras  “,.()!¡?¿”

*/
const getWords = (text) => {
  //We use toLowerCase() method to convert string to lowercase
  const words = text.toLowerCase().split(" ");
  const count = {};

  //For every word in words evualate if already exist.
  //If it does,the count for that word is incremented by 1.
  //If it doesn't, a new property is created in the count object with the name of the word and a value of 1.

  words.forEach((word) => {
    count[word] ? count[word]++ : (count[word] = 1);
  });
  return count;
};

console.log(getWords("Hello hello HeLLo H3llo heLL0 Onyx"));
