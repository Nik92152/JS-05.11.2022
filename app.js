// let age = null;

// if (!isNaN(age)) {
//     console.log(" Выпей пивка");
// }
// else if (age<21){
//     console.log("Иди домой");
// }
// else {
//     console.log("Очко")
// }

// const WhoisUser = "";

// const typeofsuer = WhoisUser ? "Администратор": "Пользователь";
// console.log(typeofsuer);

// const User="Admin".toLowerCase();

// switch (User) {
//     case ("admin"):
//         console.log("Yoy're admin");
//         break;
//     case "user":
//         console.log("Yoy're user");
//         break;
//     case "bot":
//         console.log("Yoy're bot");
//         break;
//     default:
//         console.log("Who are you, warrior?");
//         break;
// }

let i=0;
const ln=10;
let message='';
while(i<ln){
    i++;
    message +=`${i},`;
}
console.log(message);