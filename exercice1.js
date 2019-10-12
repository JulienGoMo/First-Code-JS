//first ex: use of template literal
const city='Palm Beach';
const name='Julien';
let full=`I live in ${city} and my name is ${name}!`;
console.log(full);

//giving type to a value
const a=Number('5');
console.log(a*2);

//input
const first=prompt('Type your name');

//convert celsius to fahrenheit
const tempCel = Number(prompt('Enter you value'));
let faren = (tempCel)*9/5+35;
console.log(tempCel + 'degrees celicius equals to ' + faren + 'degrees Fahrenheit');
alert(tempCel + ' degrees celicius equals to ' + faren + 'degrees Fahrenheit');