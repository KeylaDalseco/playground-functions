// Desafio 1 - Crie a função compareTrue
const compareTrue = function (parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  } return false;
};
const girafa = true;
const elefante = true;
const macaco = false;

compareTrue(girafa, macaco);
compareTrue(macaco, elefante);
compareTrue(girafa, elefante);

// Desafio 2 - Crie a função splitSentence
const splitSentence = function (string) {
  return string.split(' ');
};
splitSentence('go Trybe');

// Desafio 3 - Crie a função concatName
const concatName = function (array) {
  return `${array[array.length - 1]}, ${array[0]}`;
};
const nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
concatName(nomes);

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => (wins * 3) + ties;
footballPoints(14, 8);

// Desafio 5 - Crie a função highestCount

const highestCount = function (array) {
  let maiorNumero = array[0];
  let quantidade = 0;
  for (let i in array) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (let i2 in array) {
    if (array[i2] === maiorNumero) {
      quantidade += 1;
    }
  }
  return quantidade;
};
let numeros = [-2, -2, -1];
highestCount(numeros);

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, altura) => (base * altura) / 2;
const calcRectangleArea = (base, altura) => (base * altura);
const calcAllAreas = function (base, altura, forma) {
  let resultado = 0;
  if (forma === 'triângulo') {
    resultado = `O valor da área do triângulo é de: ${calcTriangleArea(base, altura)}`;
  } else if (forma === 'retângulo') {
    resultado = `O valor da área do retângulo é de: ${calcRectangleArea(base, altura)}`;
  } else if (forma !== 'retângulo' || forma !== 'triângulo') {
    resultado = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return resultado;
};
calcAllAreas(10, 50, 'retângulo');
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let distancias = '';
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);

  if (distancia1 < distancia2) {
    distancias = 'cat1';
  } else if (distancia1 > distancia2) {
    distancias = 'cat2';
  } else {
    distancias = 'os gatos trombam e o rato foge';
  }
  return distancias;
};
catAndMouse(1, 0, 2);
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array) => {
  resultado = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      resultado.push('fizz');
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      resultado.push('buzz');
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
};
const numbersArray = [2, 15, 7, 9, 45];
fizzBuzz(numbersArray);
// Desafio 9 - Crie a função encode e a função decode

const encode = (string) => {
    let arrayNumeros = string.split('');

  for (index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] === 'a') {
      arrayNumeros[index] = 1;
    } else if (arrayNumeros[index] === 'e') {
      arrayNumeros[index] = 2;
    } else if (arrayNumeros[index] === 'i') {
      arrayNumeros[index] = 3;
    } else if (arrayNumeros[index] === 'o') {
      arrayNumeros[index] = 4;
    } else if (arrayNumeros[index] === 'u') {
      arrayNumeros[index] = 5;
    }
  }
  return arrayNumeros.join('');
};
// console.log(encode('hi there!'));

const decode = (string) => {
  let arrayLetras = string.split('');

  for (index = 0; index < arrayLetras.length; index += 1) {
    if (arrayLetras[index] === 1) {
      arrayLetras[index] = 'a';
    } else if (arrayLetras[index] === 2) {
      arrayLetras[index] = 'e';
    } else if (arrayLetras[index] === 3) {
      arrayLetras[index] = 'i';
    } else if (arrayLetras[index] === 4) {
      arrayLetras[index] = 'o';
    } else if (arrayLetras[index] === 5) {
      arrayLetras[index] = 'u';
    }
  }
  return arrayLetras.join('');
};
// console.log(decode('h3 th2r2!'));
// Desafio 10 - Crie a função techList
function techList (array, string) { //o array deve receber nome de tecnologias e a string recebe um nome

}
techList([]);
// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
