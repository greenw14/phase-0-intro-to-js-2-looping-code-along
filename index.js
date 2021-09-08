// Code your solutions in this file
const array = []
function writeCards(names, event) {
  for(let i = 0; i < names.length; i++) {
    array.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  debugger;}
return array
}

function countDown () {
  let countDown = 10;
  while (countDown > -1){
    console.log(countDown--);
  }
  return countDown;
}