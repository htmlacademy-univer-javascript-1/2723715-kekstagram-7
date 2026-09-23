// Напишите здесь функции из задания 2.20.

let getLength = (str, num) => {
    if (str.length <= num) {
        return true;
    } else {
        return false;
    }
}

let getPalindrome = (str) => {
    str = str.toLowerCase();
    str = str.replaceAll(" ","");
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]    
    }
    if (newStr === str){
        return true;
    } else {
        return false;
    }
}


console.log(getPalindrome('Лёша на полке клопа нашёл'));


let getNumber = (input) => {
    let a = 0;
    if (typeof input === "number") {
        input = String(input);
        a = 1;
    }
    let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let newInput = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] in numberArray) {
            newInput += input[i];
        }
    }
    if (a == 1) {
        return Number(newInput);
    }
    return newInput;
}

console.log(typeof getNumber(2024));
console.log(typeof getNumber("фдуоатфоиафро137561976ыалфоатошйы рыйфио 12476 тлвоыфтыа 118"));
