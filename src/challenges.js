// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true) {
  return true; 
} 
  return false; 
}


// Desafio 2
function calcArea(base, height) {
  return  (base * height) / 2;

} 
(calcArea(10, 50));
(calcArea(5, 2));
(calcArea(51, 1));

// Desafio 3
function splitSentence(separador) {
  let splitSpeparater = separador.split(' ');
    return splitSpeparater
} 

// Desafio 4
function concatName(names) {
  let captureNames = names[names.length-1]+ ', '+ names[0];
  return captureNames
}


// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
