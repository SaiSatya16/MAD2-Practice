//const d1 = document.getElementById('d1');
//d1.innerHTML = "welcome to d1";
async function demo(){
  console.log("just starting");
  await new Promise(r => setTimeout(r, 2000));
  const d1 = document.getElementById('d1');
  d1.innerHTML = "welcome to d1";
  console.log("after 2 seconds");
  await new Promise(r => setTimeout(r, 2000));
  const d2 = document.getElementById('d2');
  d2.innerHTML = "goodbye from d2";
  console.log("After 4 seconds");

}
demo();

let x =0;
const d3 = document.getElementById('d3');
d3.innerHTML = `Click Count: ${x}`;
d3.addEventListener('click', e => {
  x++;
  d3.innerHTML = `Click Count: ${x}`
  d3.style.fontSize = `${x+10}px`;
})