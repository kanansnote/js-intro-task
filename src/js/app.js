const number = prompt('Ədədi daxil edin');

if (number == "") {
    alert("Ədəd daxil edilməyib");
} else if (isNaN(Number(number))) {
    alert("Daxil edilən simvol ədəd deyil");
} else if (number % 2 == 0) {
    alert("Daxil edilən ədəd cütdür");
} else {
    alert('Daxil edilən ədəd tək ədəddir');
}

// else if(typeof Number(eded) !== "number") birinci else if şərtinin yerində ola bilərdi.


// p301 task

// console.log("JS Intro".length); // first

// second
// const squareWidth = 10;
// const squareLength = 15;
// const squareArea = squareHeight * squareWidth;

// alert(squareArea);

// third-one
// const x = 5; // triangleLeft
// const y = 9; // triangleRight
// const z = 12; // triangleBottom

// const s = 1 / 2 * (x + y + z); // semiperimeter
// const aRoot = s * (s - x) * (s - y) * (s - z); // area root
// const a = Math.sqrt(aRoot); // area
// alert(a);

// third-two

// const x = prompt('Enter triangle left side value'); // triangleLeft
// const y = prompt('Enter triangle right side value'); // triangleRight
// const z = prompt('Enter triangle bottom side value'); // triangleBottom

// const s = 1 / 2 * (x + y + z); // semiperimeter
// const aRoot = s * (s - x) * (s - y) * (s - z); // area root
// const a = Math.sqrt(aRoot); // area
// alert(a);