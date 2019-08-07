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

console.log(`${fn} ${ln}`);//why this is not working?



/**
Array destructuring
*/
let names = ['Dylan', 'Coding God', 'Israel']

let [first] = names

console.log(first)

first = 'kiran'

console.log(names[0])

/**
Object Literal
*/
function addressMaker(city, state) {
  const newAdress = {city, state}//we don;t have to write {city: city, state: state}
  
  console.log(newAdress)
}

addressMaker('Austin', 'Texas')

function newAddressMaker(address) {
  const {city, state} = address;
  const newAddress1 = {
    city,
    state
  };
  
  console.log(`${newAddress1.city} ${newAddress1.state}`)
}

newAddressMaker({city: 'Austin', state: 'Texas'})



//For of Loop

let incomes = [62000, 63000, 75000]
let total = 0;

for (const income of incomes) {
  total += income
}

console.log(total)

let name = 'Kiran'

for(let char of name) {
  console.log(char)
}