// console.log('hello word');
//ES5
var a = 10;
console. log (a);
//ES6
const b = 5;
let c = 4;
// console.log(c);

//++ --
// b = 10;
// console.log(b++);
c = 100
// console.log(c++);

// Типа данных
// const number = 10;
// console.log(typeof number);
// const string ='Hello'
// console.log(typeof string);
// const boolTrue = true;//1
// console.log(boolTrue);
// const boolFalse = false;//0
// console.log( typeof boolFalse);

// const obj = {key: 'value'}
// console.log( typeof obj);
// const array = [1,2,3, {name:'Alex'}]
// console.log( typeof array);

//-----------------------------
//object
const obj ={
     name: 'Alex', 
     age: 18

}
//console.log(obj);
console.log(obj.name, obj.age);

const user = {
    login: 'alex',
    password: '123',
    username: 'alex_01',
    followers: [
        {
            username:'Irina',
            age:20
        },
        {
            username: 'Oleg',
            age: 28
        }


        
    ],
    follows:[
        {
            username: 'Irina',
            age: 20
        },
        {
            username: 'Oleg',
            age: 28
        }
    ],
    avatar: 'images'
}
// console.log(user);
// console.log("username:" +user.username);
// console.log("followers:" + user.followers.length);

//Масив
const mass = [1,2,3,4,5]
console.log(mass [2]);

const arr = [{username: 'Alex'}, [1,2,3,,4,5], 'string']
console.log(arr[1]);


//Операторы
const num1 = 15;
const num2 = 10;

// console.log(m=num1 + num2);
// console.log(m=num1 - num2);
// console.log(m=num1 * num2);
// console.log(m=num1 / num2);

// console.log(2*(num1 + num2) - num1);

// let messange = 'Hello, '+' dear  '+ 'Alex'
// console.log(message);

// let message1 = `Hello, dear ${`Alex`}`
// console.log(message1);

//-------------------------

// let size = 'M';
// let euSize = 0;

// if(size === '5'){
//     euSize = 36;
// }else if ( size === 'M'){
//     euSize = 40;
// }else if (size === 'L'){
//     euSize = 48;
// }else{
//     euSize = -1
// }


//switch case
let size = 'S'

switch (size) {
    case 'S':
        console.log('Small');
        break;
        case 'M':
        console.log('Medium');
        break;
        case 'L':
        console.log('Large');
        breake;
    default:
        console.log('unknow size');
}
