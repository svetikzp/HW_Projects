const num1 = parseFloat(prompt("Enter first number: ")); 
const num2 = parseFloat(prompt("Enter second number: ")); 
const num3 = parseFloat(prompt("Enter third number: "));

    if ((num1 >= num2) && (num1 >=num3)) {
       max = num1;
    }
    else if ((num2 >= num1) && (num2 >= num3)) {
       max = num2;
    }
  else{
    max = num3;
  }
alert(max);