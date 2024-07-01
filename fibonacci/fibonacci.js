console.log(
  "\n========================================================================================================"
);
console.log("FIBONACCI OUTPUT\n");
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
console.log("RESULT :", fibonacci(10));
console.log(`
PSEUDOCODE
IF NUM < 2
    THEN OUTPUT NUM
ELSE OUTPUT FIBONACCI(NUM - 1) + FIBONACCI(NUM -2)
`);

console.log(
  "\n========================================================================================================"
);

console.log(
  "\n========================================================================================================"
);
console.log("FINDING GCD OUTPUT\n");
function findingGcd(number1, number2) {
  let num1 = number1;
  let num2 = number2;
  let result;
  while (number1 != number2) {
    if (number1 > number2) {
      result = number1 -= number2;
    } else {
      result = number2 -= number1;
    }
  }

  console.log(`Number1: ${num1} \nNumber2: ${num2} \nResullt: ${result}`);
}
findingGcd(60, 72);

console.log(`
PSUEDOCODE

BEGIN
NUMBER number1, number2 , gcd = 1, i
while (number1 != number2) THEN
    IF number1 > number2 THEN
        result = number1 -= number2;
    ELSE result = number2 -= number1;
  
END FOR
OUTPUT Number1: num1 \nNumber2: num2 \nResullt: result
END
`);

console.log(
  "\n========================================================================================================"
);
