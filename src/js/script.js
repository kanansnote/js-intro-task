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


// ilk indeks? start r?q?m ver?r?k ?lav? üstün? 1 g?lm?k,
// maksimum neç?y?d?k hesablanma h?ddini qeyd olunmaqla

// let arr = [1,3,6,8,1,57,87];
// for (let i=4; i <=arr.length-1; i ++) {
//   console.log("salam, indexin deyeri budur:", arr[i]);
// }

// let arr = [1,3,6,8,1,57,87];
// for (let i=4; i <=15; i ++) {
//   console.log("salam, indexin deyeri budur:", i)
// }

// let i=0;
// while (i<=10){
//   console.log("salam");
//   i++;
// }

// let i=0;
// while (i<=arr.length-1){
//   console.log(arr[i]);
//   i++;
// }

// let i=0;

// do {
// console.log("salam", i);
// i++

// } while (i>10);


// for (const  iterrator of arr) {
//   console.log (iterrator)
// }


//  adini v? soyadini consola çixart

//  let person ={
//    name: "Rahib",
//    surname: "Rzayev",
//  };
//  for (const key in person {
//    console.log(key.person[key])
//  }

// Task 8

// function longestWord(text) {
//     const arr=text.split(' ');
//     console.log(arr);
//     let result=arr[0];

//     for (let i=0; i < arr.length; i++) {
//         if (result.length < arr[i].length) {
//             result=arr[i];
//         }
//     }

//     console.log(result);
// }

// longestWord('Web Development Tutorial');

// Task 9

// const arr=[1, 2, 3, 4];

// const arr2=[...arr];

// const text='1, 2, 3, 4';

// console.log(arr == arr2);
// console.log(arr == text);
// console.log(arr2 == text);
