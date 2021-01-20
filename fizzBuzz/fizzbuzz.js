let Fizz = [ ];
let Buzz = [ ];
let FizzBuzz = [ ];
let Other  = [ ];

for (let i = 1; i <= 200; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // do something
        FizzBuzz.push(i)
     } else if (i % 3 === 0) {
         // do something
         Fizz.push(i)
     } else if (i % 5 === 0) {
        // do something
        Buzz.push(i)
     } else {
         // do something
         Other.push(i)
    }
}

console.log("Total Number of Fizz = "      + Fizz.length);
console.log("Total Number of Buzz = "      + Buzz.length);
console.log("Total Number of FizzBuzz = "  + FizzBuzz.length);
console.log("Total Number of Other = "    + Other.length);
