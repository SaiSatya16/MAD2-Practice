let a = [1,2,3];
console.log(`${typeof(a)}: ${a} with length = ${a.length}`);
console.log(a[0]);

a.length = 10;
console.log(`${typeof(a)}: ${a} with length = ${a.length}`);

/// Iteration
let a1 = [1,'b', c => c+1];
a1.length = 5;
for(let i =0; i<a1.length; i++){
  console.log(`a1 : ${a1[i]} of type ${typeof(a1[i])}`);
}

for(const i in a1){
  console.log(`a1 : ${a1[i]} of type ${typeof(a1[i])}`);
}

for(const i of a1){
  console.log(`a1 : ${i} of type ${typeof(i)}`);
}

///Creating array with holes

let y = new Array(5);
y[1] = 10;
y[3] = 'w';
for (const [k,v] of y.entries()){
  console.log(`index : ${k}, value : ${v} of type ${typeof(v)}`);
}

let z = [1,2,3];
let z1 = [-1,5, ...z,9,0,-3];
console.log(z);
console.log(z1);

let z3 = z1.find(t => t <0);

console.log(z3);

 z3 = z1.filter(t => t <0);
console.log(z3);
console.log(z1);
console.log(z1.map(i => i>0 ? '+' : '-'));

console.log(z1);
console.log(z1.reduce((a,i) => a+i,0));

console.log(z1.sort());

console.log(z1.sort((a, b) => a-b));

//object destructuring
const person ={
  firstname: "Satya",
  lastname : "J",
  age : "19",
  city : "Hyd"
};

console.log(person);

const {firstname:fn, city:c} = person;
console.log(fn);
console.log(c)
const {lastname,age} = person;
console.log(lastname);
console.log(age);

const {firstname, ...rem} = person;
console.log(firstname);
console.log(rem);


/* output
object: 1,2,3 with length = 3
collections.js:3 1
collections.js:6 object: 1,2,3,,,,,,, with length = 10
collections.js:12 a1 : 1 of type number
collections.js:12 a1 : b of type string
collections.js:12 a1 : c => c+1 of type function
2collections.js:12 a1 : undefined of type undefined
collections.js:16 a1 : 1 of type number
collections.js:16 a1 : b of type string
collections.js:16 a1 : c => c+1 of type function
collections.js:20 a1 : 1 of type number
collections.js:20 a1 : b of type string
collections.js:20 a1 : c => c+1 of type function
2collections.js:20 a1 : undefined of type undefined
collections.js:29 index : 0, value : undefined of type undefined
collections.js:29 index : 1, value : 10 of type number
collections.js:29 index : 2, value : undefined of type undefined
collections.js:29 index : 3, value : w of type string
collections.js:29 index : 4, value : undefined of type undefined
collections.js:34 (3) [1, 2, 3]
collections.js:35 (8) [-1, 5, 1, 2, 3, 9, 0, -3]
collections.js:39 -1
collections.js:42 (2) [-1, -3]
collections.js:43 (8) [-1, 5, 1, 2, 3, 9, 0, -3]
collections.js:44 (8) ['-', '+', '+', '+', '+', '+', '-', '-']
collections.js:46 (8) [-1, 5, 1, 2, 3, 9, 0, -3]
collections.js:47 16
collections.js:49 (8) [-1, -3, 0, 1, 2, 3, 5, 9]
collections.js:51 (8) [-3, -1, 0, 1, 2, 3, 5, 9]
collections.js:61 {firstname: 'Satya', lastname: 'J', age: '19', city: 'Hyd'}
collections.js:64 Satya
collections.js:65 Hyd
collections.js:67 J
collections.js:68 19
collections.js:71 Satya
collections.js:72 {lastname: 'J', age: '19', city: 'Hyd'} */ 
