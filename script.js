let select;
let numberProvided = 59;
let numberBi = [];
let numberOct = [];
let numberDeci = 0;
let numberSede = [3, "b"];
const hex = ["a", "b", "c", "d", "e", "f"];

console.log(5 % 2);

//2-10

let deciToBi = () => {
  while (numberProvided >= 1) {
    numberProvided = Math.floor(numberProvided);
    numberBi.unshift(numberProvided % 2);

    numberProvided = numberProvided / 2;
  }
};

let biToDeci = () => {
  let bufor = [];

  for (let i = 0; i < numberBi.length; i++) {
    bufor.unshift(numberBi[i]);
  }

  for (i = 0; i < bufor.length; i++) {
    numberDeci = numberDeci + bufor[i] * 2 ** i;
  }
};

//8-10

let deciToOcta = () => {
  while (numberProvided > 1) {
    numberProvided = Math.floor(numberProvided);
    numberOct.unshift(numberProvided % 8);

    numberProvided = numberProvided / 8;
  }
};

let octaToDeci = () => {
  let bufor = [];

  for (let i = 0; i < numberOct.length; i++) {
    bufor.unshift(numberOct[i]);
  }

  for (i = 0; i < bufor.length; i++) {
    numberDeci = numberDeci + bufor[i] * 8 ** i;
  }
};

//16-10

let deciToSede = () => {
  while (numberProvided > 1) {
    numberProvided = Math.floor(numberProvided);

    if (numberProvided % 16 > 9) {
      numberSede.unshift(hex[(numberProvided % 16) - 10]);
    } else {
      numberSede.unshift(numberProvided % 16);
    }

    numberProvided = numberProvided / 16;
  }
};

let sedeToDeci = () => {
  let bufor = [];

  for (let i = 0; i < numberSede.length; i++) {
    if (isNaN(numberSede[i])) {
      bufor.unshift(hex.indexOf(numberSede[i]) + 10);
    } else {
      bufor.unshift(numberSede[i]);
    }
  }

  for (i = 0; i < bufor.length; i++) {
    numberDeci = numberDeci + bufor[i] * 16 ** i;
  }
};

sedeToDeci();
console.log(numberDeci);
