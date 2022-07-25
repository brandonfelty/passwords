const arg = process.argv[2];

const obfuscate = (string) => {
  let result = "";
  //console.log(string)
  for (let i = 0; i < string.length; i++) {
    // console.log('result', result);
    // console.log(string[i])
    if (string[i] === "a") {
      result += "4";
      i++;
    }; 
    if (string[i] === "e") {
      //result -= string[i];
      result += "3";
      i++;
    }; 
    if (string[i] === "o") {
      //result -= string[i];
      result += "0";
      i++;
    }; 
    if (string[i] === "l") {
      //result -= string[i];
      result += "1";
      i++;
    }; 
    if (string[i]) result += string[i];
  }
  console.log(result);
};

obfuscate(arg);