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


//spread operator
let example1 = [1,2,3,4,5,6,7,8,9]

let example2 = [...example1]

console.log(example2)

let example3 = {
  firtName: 'kiran',
  lastName: 'Kumar'
}

let example4 = {...example3}

console.log(example4)
//where do we use them?

/**
* let's say we need to insert a default name if user does not have a name
*/
let defaultName = {
  name: 'kiran'
}

let newName = {
  name: 'N/A',
}
/**
then we can use spread operator
*/
newName = {
  ...newName,
  ...defaultName
}

//rest operator

//rest operator converts to array a probable replacement to arguments in function
function add(...nums) {
  console.log(nums);//outputs array
}

add(4,5,6,7,12)


function add1(...nums) {
  let total = nums.reduce((x, y) => x + y);
  
  console.log(total);
}

add1(4,5,6,7,12)