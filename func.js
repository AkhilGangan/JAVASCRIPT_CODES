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

// Not part of function I am practicing down
//Not primitive datatype i.e. object
//let employee = {
//     name: "Akhil",
//     ID: 530,
//     Address: "Sakinaka",
//     City: "Mumbai",
//     // "Cit y": "Mumbai",
// }
// console.log(employee);
// console.log(employee.Address);

// Arrays
//let names = [1, 2, undefined, "Akhil", null]; //or other option down
// console.log(names[3]);

// String operator
// console.log("Akhil " + "Gangan");
// // Ternary operator
// const isValid = 10 % 2 === 0 ? "Even" : "ODD";
// console.log(isValid);

// Types of conversions
/* 1 Implicit conversion - Js will automatically convert the type
   2 Explicit conversion - we manually convert the type*/

  /* console.log(2 + '3');//concat as number is converted into string
   console.log(true + '3');//concat
   console.log('4'-'2');//Converted string into number and result 2
   console.log('4'*'2');
   console.log('4'/'2');
   console.log('Akhil'-'Gangan');//result NaN = Not a Number because non numeric string
   console.log('4'- true);//true =1 , false=0, null=0
   console.log('4'- false);//true =1 , false=0, null=0
   console.log('4'- null);//true =1 , false=0, null=0
   console.log(5 + undefined);//If we used undefined with any of operator like number boolean null the result is NaN(not a number)*/

    //explicit
  /* //Number Global methods
   console.log(Number('5'));//Using this method we convert boolean, string into numberic type
   console.log(Number(''));//Using this method we convert boolean, string into numberic type
   console.log(Number(true));//Using this method we convert boolean, string into numberic type
   //another option intead of number
   console.log(parseInt('5'));
   console.log(parseFloat('5.43'));//for floating numbers used parsedfloat
   //String Global methods
   console.log(String(5));
   console.log(String(true));
   console.log(String(null));
   console.log(String(undefined));
   console.log((500).toString());//will not work on null and undefined
   //Global boolean method 
   console.log(Boolean(10));//null ,undefined, 0,'', NaN will give false and rest will give true
   console.log(Boolean(null));
   console.log(Boolean(undefined));
   console.log(Boolean(0));
   console.log(Boolean(''));//if spaces and letters are there in string then value is true
   console.log(Boolean(NaN));*/

//    Equality 
// two types - 1 == Allows coercion when types are different , 2 === does not allow 
// Examples
const var1 ='hey';
const var2 ='hey';
console.log(var1==var2);
console.log(var1===var2);
const var3 =10;
const var4 ='10';
console.log(var3==var4);
console.log(var3===var4);
