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
function highestCount(numbers) {
  let highestNumber = Math.max(...numbers);
  let highestNumberCount = 0;  {
    for (let index = 0; index < numbers.length; index += 1) {
      if(numbers[index] === highestNumber){
      highestNumberCount += 1;
      }
    }
   }  return highestNumberCount 

  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Test = Math.abs(cat1 - mouse)
  let cat2Test = Math.abs(cat2 - mouse)
  let mouseTest = Math.abs(cat1 - cat2)

  if(cat2Test < cat1Test) {
    return 'cat2'
  }if(cat1Test < cat2Test) {
    return "cat1"
  } else if(cat1Test === cat2Test)
    return 'os gatos trombam e o rato foge'
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