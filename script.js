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

//default parameters
function add2(numArray = []) {
  let total = 0;
  numArray.forEach((element) => {
    total = + element;
  });
  console.log(total);
}

add()


//includes
let numArray = [1,2,3,4,5,6]

console.log(numArray.includes(2)) //returns true if numArray contains 2, not supported by IE

//let & const
//why let and const?

if(false) {
  var five = 5;
}
 console.log(five) //var variables are hoisted, and hence this console statement never throws error

if(false) {
  let six = 6;
}

//console.log(six) //throws error if you uncomment

const seven = 7;

console.log(seven);

seven = 8;//throws error


//import & export
import { data } from './example.js';

/*
makes code more modular
*/

let updatedData = data;

console.log(data)


//padStart() && padEnd()

let myName = 'kiran'
console.log(example.padStart(10, 'a')) //aaaaakiran five a's and kiran total char sum up to 10

let myName2 = 'kiran kumar';
console.log(example.padEnd(10, 'a')) //output: kiran kumar  because kiran kumar accounts for more than 10 letters and hence no a's appended

/*
similarly in padEnd a's append at the end of the string
*/
console.log(example.padStart(1)) //our string is clearly larger than 1 and hence nothing happens in this case




//classes
import { Animal, Cat } from './animal.js';

let cat = new Animal('cat', 'four');

console.log(cat.type)//cat
console.log(cat.legs)//four

cat.legs = 3;

console.log(cat.legs);//3

console.log(cat.makeNoise); //prints 'Loud Noise'

console.log(Animal.return10);; //access static methods

console.log(cat.metaaData); //get metaData getter class

cat = new Cat('Cat', 4);

console.log(cat.metaData);


//Trailing Commas
function addingFun(param1,) {
  const example = {
    name: 'kiran',
  }
  
  console.log(example)
}


//promisses, async & await
const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

function getTop100Campers() {
  
}

getTop100Campers();





