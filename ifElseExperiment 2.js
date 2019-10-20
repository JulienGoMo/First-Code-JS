//Define variable that will prompt in case the user doesnt enter a correct value
const stupid = ("no no no! I said between 1 and 10!");

//Define variable that asks the user to enter a value between 1 and 10
let number = prompt("pick a number between 1 and 10");

//If a correct value was entered, it will alert the user that his value will be increased by 200%
//If user didn't enter a value between 1 and 10, an alert pops informing the user he didn't enter a correct value
if ((number >=1) &&(number <= 10)) {
    alert ("I'm going to add 200% to your number");
} else (alert (stupid));

//give a new vaalue to (number), so it's increasing it by 200%
number *= 3;

//define 2 constant that will be called for the final alert, depending on the final value of (number)
const resEven = ("your number is " + (number) + ", and is an even number");
const resOdd = ("your number is " + (number) + ", and is an odd number");

//if value of (number) is odd, will alert calling back const resOdd
//Else (If (number) is not odd), the number is even, so an alert calling back (resEven) will pop
if (number==1,3,5,7,9,11,13,15,17,19,21,23,25,27,29){
    alert (resOdd);
} else (alert(resEven));

alert(number);
