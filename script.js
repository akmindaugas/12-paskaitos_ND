var input;
var number;
var bePVM;
var PVM;

do {
    input = prompt("Kokia prekės kaina?");
    number = parseFloat(input);
} while (isNaN(number) || number < 0);

bePVM = number / 1.21;
PVM = number - bePVM;

console.log("Sako, kad prekės kaina yra: " + number);
console.log("Tai čia su PVM kaina");
console.log("PVM bus: " + PVM);
console.log("Be PVM kaina: " + bePVM);
console.log("Suapvalinus turime, PVM: " + PVM.toFixed(2));
console.log("O prekė, be PVM suapvalinus: " + bePVM.toFixed(2));

--------------------------------------------------------------
//antra dalis
-------------------------------------------------------------

var personazai = ['Jon Snow', 'Cersei Lannister', 'Daenerys Targaryen', 'Theon Greyjoy', 'Tyrion Lannister', 'Arya Stark'];


console.log(personazai[0]); //pirmas 
console.log(personazai[personazai.length -1]); //paskutinis

input = prompt ("Įveskite skaičių nuo 1 iki 6");

console.log (personazai[input]);

