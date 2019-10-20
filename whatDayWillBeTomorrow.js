const today = prompt ("what\'s the day today?");
let nextDay = "mardi";

switch (today) {
  case 'monday':
    nextDay = "tuesday"
    alert ("tomorrow we will be " + (nextDay))
    break;
  case 'tuesday':
    nextDay = "wednesday"
    alert ("tomorrow we will be " + (nextDay))
    break;
  case 'wednesday':
    nextDay = "tuesday"
    alert ("tomorrow we will be " + (nextDay))
    break;
  case 'thursday':
    nextDay = "tuesday"
    alert ("tomorrow we will be " + (nextDay))
    break;
  case 'friday':
    nextDay = "wednesday"
    alert ("tomorrow we will be " + (nextDay))
    break;
  case 'saturday':
    nextDay = "tuesday"
    alert ("tomorrow we will be " + (nextDay))
    break;
  case 'sunday':
    nextDay = "tuesday"
    alert ("tomorrow we will be " + (nextDay))
    break;
  default:
    alert ("you didn't enter a day");
}