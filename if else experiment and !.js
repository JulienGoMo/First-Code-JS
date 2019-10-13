//Define constants variables that will be used to prompt alert messages
const over = ('Your number is positive');
const under = ('Your number is negative');
const exact = ('Your number is 0');
const stupid = ('You haven\'t entered a number between -100 and 100');

//Define a variable asking the user to chose a number
let number = (prompt('Enter a number between -100 and 100'));

//Condition of the different prompt messages
if (!(number > -100) && (number < 0)) {
    alert (over);
} 
else if (!(number > 0) && (number < 100)) {
    alert (under);
}
else if (number == 0) {
    alert (exact);
}
else {
    alert (stupid);
}
