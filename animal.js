export class Animal {
  constructor (type, legs) {
    this.type = type;
    this.legs = legs;
  }
  
  makeNoise(sound = 'Loud Noise') {
    console.log(sound)
  }
  
  static return10() {
    return 10;
  }
  
  get metaData() {
    return `Type: ${this.type}, legs: ${this.legs}`;
  }
}


export class Cat extends Animal {
  
  constructor(type, legs, tail) {
    super(type, legs); //need to updated super class
    this.tail = tail;
    
  }
  
  makeNoise(sound = 'noise') {//method overriding
    console.log(sound)
  }

}