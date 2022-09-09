let num1 = prompt("Enter first number: ");
num1 = Number(num1);

let num2 = prompt("Enter second number: ");
num2 = Number(num2);


let operator = prompt('sign  (/,+,*,-)');


switch (operator) {
    case '+':
        alert (num1 + num2);
        break;
    case '-':
        alert (num1 - num2);
        break;
    case '/':
    if (num2 !==0) {
              alert (num1 / num2);
    }
        else {
            alert("You cannot devide on zero");
        }

        break;
    case '*':
        alert (num1 * num2);
}
        
     
