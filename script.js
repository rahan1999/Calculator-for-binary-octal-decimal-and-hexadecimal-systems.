let numberProvided = 110;
let numberBi = [];
let numberDeci = 0;

console.log(5 % 2);

let deciToBi = () => {
  while (numberProvided > 1) {
    numberProvided = Math.floor(numberProvided);
    numberBi.unshift(numberProvided % 2);

    numberProvided = numberProvided / 2;
  }
};

deciToBi();

let biToDeci = () => {
  let bufor = [];

  for (let i = 0; i < numberBi.length; i++) {
    bufor.unshift(numberBi[i]);
  }

  for (i = 0; i < bufor.length; i++) {
    numberDeci = numberDeci + bufor[i] ** i;
  }
};

biToDeci();
