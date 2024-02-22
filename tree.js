let numberfortree;

while (true) {
    numberfortree = prompt("Please enter the tree's height");

    if (numberfortree <= 0) {
        alert("Длина должна быть представлена положительным числом");
    } 
    if (numberfortree == 1) {
        alert("Длина слишком мала");
    }
    if (numberfortree > 1) {
        break;
    }
}

let aa, oo;

for (let i = 0; i < numberfortree; i++) {
    aa = i * 2 + 1;
    oo = numberfortree - i - 1;
    console.log(
        `${" ".repeat(oo)}${"a".repeat(aa)}`
    );
}
