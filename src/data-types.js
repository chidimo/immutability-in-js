console.log('data-types')

// Primitive types
console.log('Primitives: immutable')
console.log(typeof 5) // number
console.log(typeof 'name') // string
console.log(typeof (1 < 2)) // boolean
console.log(typeof undefined) // undefined
console.log(typeof Symbol('js')) // symbol
console.log(typeof BigInt(900719925474)) // bigint

// String.prototype.match should return an array, which is an "object" type
// when that object doesn't exist, we get null
console.log('null: a special case')
console.log('aeiou'.match(/[x]/gi)) // null
console.log('xyzabc'.match(/[x]/gi)) // [ 'x' ]

console.log('Objects: mutable')
console.log(typeof null) // object
console.log(typeof [0, 1]) // object
console.log(typeof {name: 'name'}) // object
const f = () => ({})
console.log(typeof f) // function

// Primitives are immutable
// Changing the value of b doesn't change the value of a
console.log('Immutability demo')
let a = 5;
let b = a
console.log(`a: ${a}; b: ${b}`) // a: 5; b: 5
b = 7
console.log(`a: ${a}; b: ${b}`) // a: 5; b: 7

// Objects are mutable
// Changing the name property in d also changes it in c
console.log('Mutability demo')
let c = { name: 'some name'}
let d = c;
console.log(`c: ${JSON.stringify(c)}; d: ${JSON.stringify(d)}`) // {"name":"some name"}; d: {"name":"some name"}
d.name = 'new name'
console.log(`c: ${JSON.stringify(c)}; d: ${JSON.stringify(d)}`) // {"name":"new name"}; d: {"name":"new name"}
