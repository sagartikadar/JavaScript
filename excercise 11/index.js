let num = prompt("Enter a number");
let arr = [];
if (num < 1) {
  alert("Invalid Number!!! Please enter a valid number!");
} else {
  for (i = 0; i < num; i++) {
    arr.push(i + 1);
  }
  const red = (a, b) => {
    return a * b;
  };
  let fact = arr.reduce(red);

  alert("The factorial of the number using reduce is " + fact);

  let fact1 = 1;
  for (i = 0; i < arr.length; i++) {
    fact1 = arr[i] * fact1;
  }
  alert("The factorial of the number using for loop is " + fact1);
}
