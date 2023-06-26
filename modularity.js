//import {c} from './module1.js';
//console.log(c);
import {c, energy} from './module1.js';
console.log(c);
console.log(energy(10));

// read only view of exported variables
import {p, incp} from './module1.js';
console.log(p);
//p++; 
incp();
console.log(p);

/*
OUTPUT

299792458
modularity.js:5 898755178736817700
modularity.js:9 0
modularity.js:12 1 */