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

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    
      message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
    }
    console.log(message);
  // Change code above this line
  return message;
}

makeTransaction(3000, 5, 23000) ;
