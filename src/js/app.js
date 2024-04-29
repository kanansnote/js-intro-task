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