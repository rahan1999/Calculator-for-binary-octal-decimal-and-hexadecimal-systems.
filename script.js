let select = 2;
let numberProvided = window.prompt("Prowide a nuber");
let numberDeci = 0;
let numberToCalc = [2, 8, 10, 16];
let bufor = [];
let multiple;
const hex = ["a", "b", "c", "d", "e", "f"];

let universalToDeci = () => {
  numberProvided = numberProvided.split("");

  for (let i = 0; i < numberProvided.length; i++) {
    bufor.unshift(numberProvided[i]);
  }

  for (i = 0; i < bufor.length; i++) {
    numberDeci = numberDeci + bufor[i] * multiple ** i;
  }
};

let universalFromDeci = (devide) => {
  let result = [];
  bufor = numberDeci;

  while (bufor >= 1) {
    bufor = Math.floor(bufor);

    if (bufor % devide > 9) {
      result.unshift(hex[(bufor % 16) - 10]);
    } else {
      result.unshift(bufor % devide);
    }

    bufor = bufor / devide;
  }

  console.log(`${result.join("")} in a ${devide} system`);
};

let checkMultiply = () => {
  if (select == 1) {
    multiple = 2;

    numberToCalc.splice(0, 1);
  } else if (select == 2) {
    multiple = 8;

    numberToCalc.splice(1, 1);
  } else if (select == 3) {
    multiple = 10;
    numberDeci = numberProvided;
    numberToCalc.splice(2, 1);
  } else if (select == 4) {
    multiple = 16;

    numberToCalc.splice(3, 1);
  }

  console.log(
    `for the number ${numberProvided} in the ${multiple} system, the counterparts are:`
  );
};

let universalCalc = () => {
  checkMultiply();

  if (multiple != 10) {
    universalToDeci();
  }

  for (i = 0; i < numberToCalc.length; i++) {
    universalFromDeci(numberToCalc[i]);
  }
};

universalCalc();
