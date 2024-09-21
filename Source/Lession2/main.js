// function

// Decleration function
function sayHello(name){
    // console.log(`Xin chào ${name}`);
    return `Xin chào ${name}`
}

var result = sayHello("chinhpd5");
// console.log(result);

// Expression function
var sayHello2 = function(name){
    return `Chào mừng bạn ${name}`
}

// console.log(sayHello2("Long"));

// Arrow function => (es6)

var sayHello3 = (name,age) => {
    return `Bạn ${name}, Tuổi: ${age}`
}

// console.log(sayHello3("chinhpd5",20));
var sayHello4 = name => `Xin chào ${name}`

console.log(sayHello4("chinpd5"));

// Default parameter

var total = (a=0,b=0) => a + b;
// console.log(total(10,20));

// Destructuring
var arr = [1,2,3,4];
var [a,,c] = arr;
// console.log(a); //1
// console.log(b); //2
// console.log(c); //3
// console.log(d); //4

var info ={
    name: "truongdx",
    age: 19,
    child:{
        name: "truongcon"
    }
}

var{name,age,child:{anme: childName}} = info;
// console.log(name);
// console.log(age);
// console.log(childName);

const showInfo = ({name, age, child:{name: childName}}) =>{
    // console.log(name);
    // console.log(age);
    // console.log(child);
}

showInfo(info);

// REST ... : Phần còn lại

var arr = [1,2,3,4,5];

var [first, ...REST] = arr;
console.log(REST);//1,2,3,4,5
console.log(first);//1

var info ={
    name: "chinhpd5",
    age: 20,
    child:{
        name: "chinhpd6"
    }
}

var {name, ...restObj}= info

// console.log(name);
// console.log(restObj);

var sum = (a,...rest)=>{
    // console.log(rest);
    // let total =0;
    rest.forEach((item,index)=>{
        // console.log(item);
        // console.log(index);
        a += item;
    })
    return a
    
}
// console.log(sum(1,2,3,4,5));

// console.log(sum(1,2,3,4,5,6,7,8,9));

var arr1 = [1,2,3];
var arr2 = [4,5,6];

// console.log(arr1.concat(arr2));
// push

var newArr = [... arr1, ...arr2];
// console.log(newArr);

var obj1={
    name: "truongdx",
    age: 19
}

var obj2 = {
    name: "truongdx"
}

var newObj = {...obj1, ... obj2}
// console.log(newObj);

// var a = 1;
// var b = a;
// a = 2;
// console.log(b);//1

// Biến tham chiếu
// var a = {value: 1};
// var b = a; // gán vị trí nhớ của a cho b, (a và b cùng trỏ đến 1 ô nhớ)
// a.value = 2; // khi thay đổi giá trị của a thì b cũng thay đổi theo
// console.log(b.value); // 2


// deep clone
var a = {value: 1};
var b = {...a}; // 1
a.value = 2;
console.log(b.value); // 1

// Nullish

var text = "truong"; // undefined, null

// text = text ?? 'default value';
text ??= 'default'; // text không có giá trị => text = default

// console.log(text);

// optional chaining
var obj ={
    name: "truongdx"
}

console.log((obj.name)); // truongdx
console.log((obj.name)); // undefined
console.log((obj.child?.name));

// if(obj.child){
//     console.log((obj.child.name));
//     if(obj.child.name){
//         console.log(obj.child.name.value);
//     }
// }


// module import export
import title, {home,greeting} from './service.js';

console.log(title);
console.log(home);
greeting();




