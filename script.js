console.log("Hello console!");
///- scope - change - var/let
var x1 = 10;
{
  console.log(x1);
  var x2 = 30;
}
console.log(x2);

let y1 = 10;
{
  console.log(y1);
  let y2 = 30;
}
//console.log(y2);

///-Strings
let s = "Satya";
console.log(s);
console.log(s.length);
console.log(s[0]);
console.log(s.substring(2,4));

///-Templates
let st = `${s} World`;
console.log(st);

///- Operators coercion
console.log(3+4);
console.log('3'+'4');
console.log('3'+4);
console.log('3'*'4');

///- Loose and Strict Equality
console.log(3==4);
console.log(3==3);
console.log('3'==3);

///- Strict Equality
console.log(3==="3");

///conditions

let x = 3;
if(x==5){
  console.log("correct");
}
else{
  console.log("NO")
}

///iterations
for(let x=0; x<5; x++){
  console.log(x);
}

const v = [1, 2, 3, 4];
for(const x of v){
  console.log(x);
}

///functions
function add(x,y) {
  return x+y;
}
console.log(typeof(add));
console.log(add(2,3));
add.v = {'a':3, 'b': 6};
console.log(add.v);
console.log(add.v.a);

///arrow function
let add1 = (x,y) => (x+y);

///anonymous function
console.log(function(x,y){return x+y; }
(2,3));

//assigning to variables
let add2 = function(x,y){return x+y;};

/* OUTPUT
script.js:1 Hello console!
script.js:5 10
script.js:8 30
script.js:12 10
script.js:19 Satya
script.js:20 5
script.js:21 S
script.js:22 ty
script.js:26 Satya World
script.js:29 7
script.js:30 34
script.js:31 34
script.js:32 12
script.js:35 false
script.js:36 true
script.js:37 true
script.js:40 false */ 


