
// console.log(0 || ('0' && {}));

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee ;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message);

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18 ;

//   // Change code above this line
//     console.log (passed);
//     return passed;
    
// }
// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37)
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = SAVED_PASSWORD === password ;
//     console.log(isMatch);
//   // Change code above this line
//   return isMatch;
// }

// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
    
//       message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//     }
//     console.log(message);
//   // Change code above this line
//   return message;
// }

// makeTransaction(3000, 5, 23000) ;

//
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[19];
// console.log(lastElement);

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;
// console.log(result);

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if (message.length <= maxLength) {
//   result = message;
// } else if (message.length > maxLength) {
//   result = message.slice(0 , maxLength) + "...";
//   }
//   console.log(message);
//   console.log(message.length);
//   /// Change code above this line
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);

// let login = prompt("Enter you login");
// let password;
// if (!login) {
//   console.log ("Скасовано");
// } else if (login === "Адмін") {
//   password = prompt("Enter you password");
//   if (password === "Я адмін") {
//     console.log("Здрастуйте!");
//   } else {
//     console.log("Невірний пароль");
//   }
// } else {
//   console.log("Я вас не знаю");
// }

// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0];
//   console.log(firstElement);
//   const endElement = array[array.length - 1];
//   console.log(endElement);
//   const array2 = [firstElement , endElement];
//   console.table(array2);
// return array2  ;
//   // Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5]);

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   message = message.split(" ").length;
//   const totalPrice = message * pricePerWord;
// console.log(totalPrice);
// return totalPrice

//    // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);

// function slugify(title) {
//   // Change code below this line
//   let slug = " ";
//   slug = title.toLowerCase().split(" ").join("-");
  
// return slug;

//   // Change code above this line
// }

// slugify("Arrays for begginers");



// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0 , 2) ;
// const nonExtremeEls = fruits.slice(1, 5) ;
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
 
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);
// // Change this line

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let newArray = firstArray.concat(secondArray);
//   newArray = newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray.slice(0, newArray.length);
// console.log(newArray);
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);

// function calculateTotal(number) {
//  // Change code below this line
//   let totalSumNumber = 0;
//   for (i = 1; i <= number; i += 1) {
//     totalSumNumber += i;
    
//   }
//  console.log(totalSumNumber);
// }
// calculateTotal(10);


//   // Change code above this line

// function findLongestWord(string) {
//   let arrayWords = string.split(" ");
//   let bigWord = arrayWords[0];
//   for (i = 1; i < arrayWords.length; i +=1 ) {
    
//     if (bigWord.length < arrayWords[i].length) {
//       bigWord = arrayWords[i];
//     }
    
//   }
//   return bigWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   console.log(numbers);
//   return numbers;
  
// }

//   // Change code above this line

// createArrayOfNumbers(29, 34);

// createArrayOfNumbers(14, 17);

// function filterArray(numbers, value) {
//    // Change code below this line
//   let newArray = [];
//   for (const number of numbers) {
//     // console.log(number);
//     if (number > value) {
//       newArray.push(number);
//     }
// }

// console.log(newArray);
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0];
//   console.log(firstElement);
//   const endElement = array[array.length - 1];
//   console.log(endElement);
//   const array2 = [firstElement , endElement];
//   console.table(array2);
// return array2  ;
//   // Change code above this line
// }

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];

//   for (const element of array1) {
//   if (array2.includes(element)) {
//     newArray.push(element);
// }
//  // Change code above this line
//   }
//   return newArray;
//  }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// const fruits = ["Яблуко", "Груша", "Апельсин"];
// const shoppingCart = fruits;
// shoppingCart.push("Банан");
// console.log(fruits.length);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const element of order) {
    
//     total += element;
//   }

//   // Change code above this line
 
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function includes(array, value) {
//   // Change code below this line
  
//   for (let i = 0; i <= array.length; i += 1 ) {
  
// if ( value === array[i]) {
//   return true;
// }
    
//   }

//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));

// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = [];

// const exm = [...langs].sort((a, b) => a.localeCompare(b))
//   console.log('example', exm);

// for (let i = 0; i < langs.length; i += 1) {
//   let max = langs[i];
//     if (result.includes(max)) {
      
//       continue;
      
//   }
    
//     for (let j = i; j < langs.length; j += 1) {
//         if (max > langs[j] && !result.includes(langs[j])) {
//           max = langs[j];
//           langs.push(langs[i]);
          
//       }
      
//   }
  
//   result.push(max);
  
// }
// console.log(result);
// console.log(langs);


// // Push повертає нову довжину масиву. Результат буде 1
// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//     for (let i = min; i <= max; i += 2) {
//       return arr.push(i)
//     }
// }

// const arr = ['start', 1, 2, 3, 'end'];
// //shift
// const item = arr.shift();
// console.log(arr);
// console.log(arr.shift());

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const arrKey = [];
//   for (const key in object) {
 
// if (object.hasOwnProperty(key) ) {
//   arrKey.push(key);
//   propCount = arrKey.length
// }
  
// }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }));

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// const arrKeys = Object.keys(object);
//   for (const key of arrKeys) {
//       propCount += 1;
//     }
  

//   return propCount;
//   // Change code above this line
// }
// countProps({ name: "Mango", age: 2 })

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const arrSalaries = Object.values(salaries);
// for (const key of arrSalaries ) {
//   totalSalary += key;
// }
  
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const key of colors) {
  if (key.hex) {
    console.log(hexColors.push(colors[key]));
  }
  
  
}