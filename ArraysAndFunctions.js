//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array
//•	Do not use numbers to reference the last element, find it programmatically,
//•	ages[7] – ages[0] is not allowed!

function subtraction() {
  let firstNumber = ages[0];
  let index = ages.length - 1;
  let lastNumber = ages[index];
  let subtraction = lastNumber - firstNumber;
  return `${lastNumber} - ${firstNumber} = ${subtraction}`;
}
console.log(subtraction());

//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(41);
console.log(ages);
console.log(subtraction());

//1c.	Use a loop to iterate through the array and calculate the average age.
let sum = 0;
for (i = 0; i < ages.length; i++) {
  sum += ages[i];
  averageAge = sum / ages.length;
}
console.log(sum);
console.log(averageAge);

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

//2a.	Use a loop to iterate through the array and calculate the average number of letters per name.
let total = 0;
let averageNumberOfLetters;
for (i of names) {
  total += i.length;
  averageNumberOfLetters = total / names.length;
}
console.log(total);
console.log(averageNumberOfLetters);

//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatenate = '';
for (let i = 0; i < names.length; i++) {
  concatenate = concatenate.concat(names[i]);
  if (i < names.length - 1) {
    concatenate = concatenate.concat(' ');
  }
}
console.log(concatenate);
//3.	How do you access the last element of any array?
// To access an element in the array. We refer to the variable name and the index for the element we want to access.  Arrays are a zero based index, in order to access the last element of any array you take the total number of elements and subtract 1.

//4.	How do you access the first element of any array?
// To access the first element in a array we look at the name of the array and the index.  Arrays are a zero based index, so to acces the first element we would choose 0 as the index.

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths = names.length[i];
  console.log(nameLengths);
}

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
//•	The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}
fullName('Adam', 'Courigton');

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let add = 0;
function greaterThanHundred(array) {
  for (i = 0; i < array.length; i++) {
    add += array[i];
  }
  if (add > 100) {
    return true;
  } else {
    return false;
  }
}
console.log(greaterThanHundred([6, 80, 15]));

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averageOfElements(element) {
  let more = 0;
  for (i = 0; i < element.length; i++) {
    more += element[i];
  }
  return more / element.length;
}

console.log(averageOfElements([5, 10, 15, 50]));

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function highestAverage(array1, array2) {
  let more = 0;
  for (i = 0; i < array1.length; i++) {
    more += array1[i];
  }
  let aveArray1 = more / array1.length;
  let more2 = 0;
  for (i = 0; i < array2.length; i++) {
    more2 += array2[i];
  }
  let aveArray2 = more2 / array2.length;
  if (aveArray1 > aveArray2) {
    return true;
  } else {
    return false;
  }
}

console.log(highestAverage([5, 10000, 15], [5, 10, 15, 50]));

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside == true && moneyInPocket > 10.5) {
    return true;
  } else {
    return false;
  }
}

console.log(willBuyDrink(true, 1));
//13.	Create a function of your own that solves a problem.
//In comments, write what the function does and why you created it.

//My function called Mondays argument day of the week and is it a holiday.  If day of the week is monday and holiday is false.  I will get up early.

function goToWork(day, holiday) {
  if (day == 'Weekday' && holiday == false) {
    return 'Get up and go to work!';
  } else {
    return 'Sleep in today!';
  }
}

console.log(goToWork('Weekday', false));
