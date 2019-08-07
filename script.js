/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');


let word1= 'Dylan';
let word2 = 'Isreal';
let num1 = 2;
let num2 = 3;

const fullName = `${word1} ${word2}`
console.log(fullName)

let example = 'Hello world!';

console.log(example)

document.getElementById('example').innerText = example


const personalInformation = {
  firstName: 'Dylan',
  lastName: 'Israel'
}

const {firstName, lastName} = personalInformation;

console.log(`${firstName} ${lastName}`);

const {firstName1: fn, lastName1: ln} = personalInformation;

console.log(`${fn} ${ln}`);