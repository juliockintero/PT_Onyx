/*
4.	Dada una cadena de longitud N, compuesta únicamente de signos de agrupación y 
texto intermedio   ( "()", "{}", "[]" ), genere una función o algoritmo que determine 
si dicha cadena está estructurada correctamente, es decir, que cada carácter de apertura tenga su carácter de cerrado correspondiente.
Ej.
  [()()(){[][]}{([]{})}]	-> correcto
  ([(]{)})	-> incorrecto
[()()(){[hola][onyx]}{([juan]{})}] -> correcto
*/

const correctData = (text) => {
  let stack = [];
  let openChar = "({[";
  let closeChar = ")}]";

  // For every character in text, evaluate if the openChar already exist, it does  add to the stack array
  //If the character is closeChar,the function remove the  last opening character from the stack and evaluate if the openChar and closeChar match.
  //If they don't match, the function returns false.
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);

    if (openChar.includes(char)) {
      stack.push(char);
    } else if (closeChar.includes(char)) {
      let ultimoApertura = stack.pop();
      if (openChar.includes(ultimoApertura) !== closeChar.includes(char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(correctData("[()()(){[][]}{([]{})}]"));
console.log(correctData("([(]{)})"));
console.log(correctData("[()()(){[hola][onyx]}{([juan]{})}]"));
