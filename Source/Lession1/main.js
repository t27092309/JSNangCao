// Biến var let const

// camelCase
var myName = "truongdx";

// PascalCase
var MyName = "truongdx";

// Khai báo biến
var myAge = 18;
var myAge = 19;

let myAddress = "Hà Nội";



// Phạm vi (scope)
// global scope (var let)
let a = 10; //var

{
    // console.log(a);
}

// block scope (if else, switch case, for)
{
    var b = 20; // can
    let c = 30; // can't
}
// console.log(c);

// local scope (function)
// function sayHello(){
//     var d = 40;
    // let d = 40;
    // var let đều không dùng được
// }
// console.log(d);

// Hoisting

// e = 60;
// console.log(e);
// var e;

// console.log(f);
// let f;

// - Kiểu dữ liệu
/**
 * Kiểu dữ liệu nguyên thủy
 * string: '' "" ``
 * number: 1, -2, 1.5
 * boolean: true, false
 * null
 * undefined
 * symbol
 * bigInt
 * 
 * Kiểu dữ liêuj phức tạp
 * array
 * object
 */

/**
 * Toán tử số học: + - * / ** % ++ --
 * Toán tử gán: = += -= *= ...
 * Toán tử so sánh: > < >= <= != == ===
 * Toán tử logic && || !
 */

// Cú pháp
// Điều kiện: if else, switch case, toán tử 3 ngôi
var result = (1 != true) ? "Đúng" : "Sai";

// console.log(result);
// Vòng lặp: for, for in, for of, foreach, while, do while

// DOM(Document Object Model)

// 1. Element
/**
 * id, class, tag
 * css selectors
 */
var h1Heading = document.getElementById("heading");
// console.log({key : h1Heading});
var h1Headings = document.getElementsByClassName("title");
// console.log(h1Headings);

var pElements = document.getElementsByClassName("paragraph");
// console.log(pElements);

// Error
// pElements.foreach(function(item){
//     console.log(item);
// })

// for(var i = 0; i < pElements.length; i++){
//     console.log(pElements[i]);
// }

// ---- Css selectors
// var h1Heading = document.querySelector('#heading') // id
// var h1Heading = document.querySelector('.title') // class
// var h1Heading = document.querySelector('p') // tag
// console.log(h1Heading);

// var pElements = document.querySelectorAll('.paragraph');
// console.log(pElements);

// pElements.foreach(function(item){
//     console.log(item);
// })

// 2. Attribute
// var h1Heading = document.querySelector('#heading') // id

// console.log(h1Heading.id);
// h1Heading.id = "heading-2";
// h1Heading.style.color = "red";

// h1Heading.setAttribute("data", "Truongdx05");
// console.log(h1Heading.getAttribute("data"));

// 3. Text
var h1Heading = document.querySelector('#heading'); //id
console.log(h1Heading.innerText);
console.log(h1Heading.textContent);

h1Heading.innerHTML = '<i> Hello </i>'; 




