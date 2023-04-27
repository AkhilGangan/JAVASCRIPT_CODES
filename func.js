// console.log("This is Functions");

// function greet(names, greetText = "Greetings from JavaScript"){
//     let names2 = "Name2";// it is local scope inside this block and will not effect outside names 
//     console.log(greetText + " "+ names);
//     console.log(names + " is a good boy");
// }

// function sum(a,b,c){
//     d=a+b+c;
//     return d;
//     //  next line is Unreachable code as function stops after return 
//     // console.log("Function is returned");
// }

// let names = "Akhil";// it is global scope 
// let names2 = "Faizan";
// let names3 = "Jitin";
// let names4 = "Sohail";
// let greetText1 = "Good Morning";
// greet(names, greetText1);
// greet(names2, greetText1);
// greet(names3, greetText1);
// greet(names4);// by default will take above greetText value 
// console.log(names + " is a good boy");instead use functions 
// console.log(names2 + " is a good boy");
// console.log(names3 + " is a good boy");
// console.log(names4 + " is a good boy");

// return value using functions
// let returnVal = greet(names2); will show undefined in return value 
// console.log(returnVal);
// let returnVal = sum(1,2,3);
// console.log(returnVal);// will give output as 6 this is called return value using function 

// Homework* show minimum, maximum ,greater than ,less than of 2 numbers and return it as 1st number is bigger than other or not in function 

// function greater(a,b){
//     if (a > b){
//         console.log("A is maximum");
//         return a;
//     }
//     else{
//         console.log("B is maximum");
//         return b;
//     }
// }

// let biggerNum = greater(2,4);
// console.log(biggerNum);
// use return as undefined error will not show there
