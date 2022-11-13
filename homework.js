// 1-ое задание
// let i=0;
// let N=8;
// while (i<=N){
//     console.log("Чёрный чердак чернее чем чёрная ночь");
//     i++;
// }


// Задание 2

// let N = 350;
// let M = 25;
// let D=0;

// for (var i=0; N>M;i++){
//     D = N/2;
//     N=D;
    
// }
// console.log(i);

// Задание 3

let a = 1800;
let b = 2020;
let c = 1961;
counterNumbers=0;
counterYears=0;
counteriter=0;
// while (a!=c) {
//    a++;
//     counter++;
// }
// console.log("Год первого полёта человека в космос:",c, /*Как перенсти кол-во итераций на след. строчку?*/
// "Произведённое количество итераций:",counterNumbers);

for (let y = a; y<=b;y++){
    
    if (( y % 100 == 0) && (y % 400 == 0)) {
        counterYears++;
        break;
    } 
    else if( y % 4 == 0) {
        counterYears++;
    }
    counteriter++;
}
console.log("Количество вискокосных годов:",counterYears, "Количество итераций:",counteriter);
       
