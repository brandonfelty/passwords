const arg = process.argv[2];

const printResult = (result) => {
  console.log(result);
};

const letterChecker = (vowel) => {
  switch(vowel) {
    case "a":
      return "4";
    case "e":
      return "3";
    case "o":
      return "0";
    case "l":
      return "1";
    default:
      return vowel;
  }
};

const obfuscate = (string) => {
  let result = "";

  for (let letter of string) {
    result += letterChecker(letter);
  }

  printResult(result);
};

obfuscate(arg);