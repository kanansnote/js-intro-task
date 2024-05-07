// Task 1

// const number = prompt('Ədədi daxil edin');

// if (number == "") {
//     alert("Ədəd daxil edilməyib");
// } else if (isNaN(Number(number))) {
//     alert("Daxil edilən simvol ədəd deyil");
// } else if (number % 2 == 0) {
//     alert("Daxil edilən ədəd cütdür");
// } else {
//     alert('Daxil edilən ədəd tək ədəddir');
// }

// else if(typeof Number(eded) !== "number") birinci else if şərtinin yerində ola bilərdi.

// Task 2

// function maskCard(txt) {
//     let text = String(txt);
//     const last = text.slice(-4);
//     const result = last.padStart(text.length,"*");
//     console.log(result);
// };

// maskCard(4169738512342785);
// maskCard(4169738512341234);

// Task 3

// const mail = "Hello@garage.az";

// function correctMail(mail){
//     // my code
//     // const enteredMailName = String(mail);
//     // const emailNameTrimmed = enteredMailName.trim();
//     // const firstLetterUppercased = emailNameTrimmed.slice(0, 1).toUpperCase();
//     // const otherLettersLowercased = emailNameTrimmed.slice(1, 16).toLowerCase();
//     // console.log(firstLetterUppercased + otherLettersLowercased)

//     // the correct code
//     let lower = mail.toLowerCase().trim();
//     let result = lower.replace(lower[0], lower[0].toUpperCase());
//     console.log(result);
// }

// correctMail("hEllo@Garage.az    ");
// correctMail("  HELLO@garage.az ");
// correctMail("HellO@GARAGE.az   ");
// correctMail("front@GARAGE.az   ");

// Task 4 

// function convert(money) {
//     let commaReplaced = money.replace(',', '.');
//     let currencyReplaced = commaReplaced.replace('AZN', 'TL');
//     console.log(currencyReplaced);
// }

// convert("450,65 AZN");
// // "450.65 TL";

// Task 5

// function checkCard(cardNumber) {

//     // if card is starting 4169 and ending with 7385, , else it is other banks' card

//     if(cardNumber.startsWith("4169") && cardNumber.endsWith("1515")) {
//         console.log("It's a kapital bank's card");
//     } else {
//         console.log("It's other banks' card");
//     }
// }

// checkCard("416973851515");
// checkCard("126973851515");
// checkCard("416973851516");

// Task 6

// const number = prompt("Enter the number");
// console.log('Garage Academy 💪🏻'.repeat(number));

// Task 7

// x = 13.45;
// console.log(x.toFixed(1));