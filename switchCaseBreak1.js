//Define a variable by asking the user to give it a value
let number = (prompt("between 1 and 5, what's your favorite number?"));

//Definig variable that will be use according to the user's answer
const stupid = (("NO!!! I said a NUMBER between 1 and 5 :@ !!!"));
const odd = ((number)+ " is ok, but not my favorite...");
const even = ((number)+ " is a terrible number, I hate that !!");
const five = ((number)+ " is my favorite number, you seem so cool!");

//depending on the user answer, alert will pop (previous variables will be used here)
switch (number) {
    case '1':
    case '3':
        alert (odd);
        break;
    case '2':
    case '4':
        alert (even);
        break;
    case '5':
        alert (five);
        break;
    default:
        alert (stupid);
}
