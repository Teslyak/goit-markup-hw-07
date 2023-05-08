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



const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

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

function filterArray(numbers, value) {
   // Change code below this line
  let newArray = [];
  for (const number of numbers) {
    // console.log(number);
    if (number > value) {
      newArray.push(number);
    }
}

console.log(newArray);
  // Change code above this line
}
filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);

function getExtremeElements(array) {
  // Change code below this line
  const firstElement = array[0];
  console.log(firstElement);
  const endElement = array[array.length - 1];
  console.log(endElement);
  const array2 = [firstElement , endElement];
  console.table(array2);
return array2  ;
  // Change code above this line
}