let xx = {'a':5, 'b': 'hello'};
console.log(xx);
xx.add = function(x,y){
  return x+y;
}
console.log(`xx is type of ${typeof(xx)}`);
console.log(`xx.add is type of ${typeof(xx.add)}`);
console.log(`evaluate the function xx.add(3,4) gives ${xx.add(3,4)}`); 

xx.f = function(x){
  return this.a + x;
}

console.log(xx.f(10));

//copying

let l = {a:1,b:2};
let ss = l;
console.log(l);
console.log(ss);
l.a = 5;

console.log(l);
console.log(ss);

// l changes then s also changes

let m = {...l};
l.a = 8;
console.log(l);
console.log(ss);
console.log(m);

/* OUTPUT
{a: 5, b: 'hello'}a: 5add: ƒ (x,y)b: "hello"f: ƒ (x)[[Prototype]]: Object
object.js:6 xx is type of object
object.js:7 xx.add is type of function
object.js:8 evaluate the function xx.add(3,4) gives 7
object.js:14 15
object.js:20 {a: 1, b: 2}
object.js:21 {a: 1, b: 2}
object.js:24 {a: 5, b: 2}
object.js:25 {a: 5, b: 2}
object.js:31 {a: 8, b: 2}
object.js:32 {a: 8, b: 2}
object.js:33 {a: 5, b: 2} */ 
