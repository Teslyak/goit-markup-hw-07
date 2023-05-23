
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

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const key of colors) {
//   if (key.hex) {
//     console.log(hexColors.push(colors[key]));
//   }
  
  
// }
// const person = {
//   firstName: "John",
//   age: 30,
// };
// const { firstName: personName } = person;
// console.log(personName);

// const object = {
//   name: "John",
//   country: "Ukraine",
//   age: 25

// }

// const { name, country, age } = object;


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// let arrValues = [];
// function getAllPropValues(propName) {
//   // Change code below this line
// for (const element of products) {
//   if (element[propName]) {
    
//    arrValues.push(element[propName]);
//   }
    
// }
  
// return arrValues;
//   // Change code above this line
// }

// // console.log(getAllPropValues("name") );
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice  = 0;
//   for (const product of products) {
//   // console.log(product.price);
// if (product.name === productName) {
//   totalPrice += (product.price * product.quantity);
// }
  
// }

// return totalPrice;
//   // Change code above this line
// }
// console.log(calculateTotalPrice("Radar"));

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {today: {high: todayHigh, low: todayLow, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, tomorrow: {high, low, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const testObject = { ...data, completed, category, priority };
//   console.log(testObject);
//   return testObject;
//   // Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// // console.log(makeTask({}));

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
    
//     return "Returning all books";
//   },
//   addBook(bookName) {
    
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {

//     return `Deleting book ${bookName}`;
//   },

//   updateBook(oldName, newName) {
//   return `Updating book ${oldName} to ${newName}`
//   },
//   // Change code above this line
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
//  console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// const atTheOldToad = {
//   // Change code below this line
//   potions: [],


//   // Change code above this line
// };
// console.log(atTheOldToad);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions() {
//   return this.potions;
// }
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     return this.potions;

//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potinsIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potinsIndex, 1)
//     return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionsIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionsIndex, 1, newName);
//     return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));


// Exemple 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
// if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
      
//     }
//     this.potions.push(newPotion)
//     return this.potions;
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);
//         return this.potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return this.potions;
//       }
//     }

    
//       return `Potion ${oldName} is not in inventory!`;
    

    
//   },
//   // Change code above this line
// };
// // console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// // console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// // console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// // console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// // console.log(atTheOldToad.removePotion("Dragon breath"));
// // console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));

// const fnA function (x) {
//   delete x;
//   return x;
// }
  
//   fnA(1);
//=====Модуль 4
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   callback (pizzaName)
//   return callback (pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line
 
// makePizza("Ultracheese", function eatPizza(pizzaName,) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!pizzaPalace.pizzas.includes(pizzaName)) {
//       onError(pizzaName);
//       return onError(pizzaName);
//     }
//     onSuccess(pizzaName);
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `There is no pizza with a name ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError)) ;
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (numbers, index) {
//       if (numbers > value) {
//       filteredNumbers.push(numbers);
//     }
//     })
  
    
  

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (orderedItems, index) {
//     totalPrice += orderedItems;
    
//   })

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// const arr = [2, 4, 6];
// const result = arr.filter((el) => el * 2);
// console.log(result);

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];
// const allCourses = students.flatMap(student => student.courses);
// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// console.log(uniqueCourses);

// function changeEven(numbers, value) {
//   // Change code below this line
//   const  arrNew = [];
//     numbers.forEach(el => { if (el % 2 === 0) arrNew.push((el + value)) });
//   return (arrNew);
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const getUserNames = users => {
  
//     const arrName = users.map(el => el.name);
    
// return arrName;
// };
  
// console.log(getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ]));

function ev(element){return element>5;}
var a = [1,3,7,4,8,2];
console.log(a.filter(ev));