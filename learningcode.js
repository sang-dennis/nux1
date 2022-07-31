// interpolation , expresiions ${}
/*let name = "Codecademy";
console.log(`Hello, ${name}`);

// let keyword
let count = 10;
console.log(count)

let age = 7;
// String concatenation
'Tommy is ' + age + ' years old.';
// String interpolation
`Tommy is ${age} years old.`;

// string.length
let message = 'good nite';
console.log(message.length);
// Prints: 9
console.log('howdy'.length);
// Prints: 5

// math.random()
console.log(Math.random());
// Prints: 0 - 0.9

// remainder/modulo
// calculates # of weeks in a year, rounds down to nearest integer
const weeksInYear = Math.floor(365/7);
// calcuates the number of days left over after 365 is divded by 7
const daysLeftOver = 365 % 7 ;
console.log(`A year has ${weeksInYear} weeks and ${daysLeftOver} days`);

// es6 Arrow function (2 arguments)
// object
// template literals
const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt
    }

    const intro = `My name is ${person.name} and the color of my shirt is ${person.shirt}`
    return intro
}

console.log(introducer('Sang', 'Black'))

const numbers = [1, 2, 3, 4, 5, 6];
for (const number of numbers) {
    console.log(number)
}*/

const double = (numbers) => {
    let result=[]
    for (const number of numbers) {
        result.push(number * 2)
    }

    return result
}

console.log(double([1, 2, 3, 4, 5, 6]))