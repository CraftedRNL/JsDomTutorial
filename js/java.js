// Tutorial # 2

/*document.getElementById('divid');

var section1 = document.getElementById('divid');

section1

var text1 = document.getElementById('list');

text1*/

// Tutorial # 3

/*document.getElementById('divid');


var buttons = document.getElementsByClassName('btn')

buttons

buttons[0]

buttons[1]

var divs = document.getElementsByTagName('div');

divs

for (let i = 0; i < divs.length; i++) {
    console.log(divs[i]);
}
console.log(Array.isArray(divs));
console.log(Array.isArray(Array.from(divs)));

Array.from(buttons).forEach(function(item){

    console.log(item)
})*/

// Tutorial # 4
/*
const list = document.querySelector('#list li:nth-child(2) .div');
// console.log(list);

var list2 = document.querySelector('#list li .div')
// console.log(list2)

list2 = document.querySelectorAll('#list li .div')
// console.log(list2)

Array.from(list2).forEach(function(list){
    console.log(list)
})*/

// tutorial 5
/*const list = document.querySelector('#list li:nth-child(2) .div');

var list2 = document.querySelectorAll('#list li .div')

Array.from(list2).forEach(function(list){
   list.textContent += ('book title');
})

const divlist = document.querySelector("#list");
// divlist.innerHTML = '<h1> Some lists or some more </h1>'
divlist.innerHTML += '<p> this is how you add html </p>'
*/

