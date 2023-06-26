//export const c = 300000000;
function sq(x) {
  return x*x;
}

export const c = 299792458;
export function energy(m) {
  return m*sq(c);
}

export let p =0;
export function incp(){
  p++;
}