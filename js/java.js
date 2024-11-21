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

// I did this first on my Greetings website b4 transferring over

// tutorial # 6
/*
const button = document.querySelector('#button');

console.log("#button node type is: " + button.nodeType);
console.log("#button node name is: " + button.nodeName);
console.log("#button has child nodes: " + button.hasChildNodes());

const clonedButton = button.cloneNode(true);
console.log(clonedButton) */

// tutorial # 7
/*
const list = document.querySelector("#list");

console.log('the parent node is:', list.parentNode);
console.log('the parent node is:', list.parentElement.parentElement);

console.log(list.children); */

// tutorial # 8
/*
const list = document.querySelector("#list");

console.log('list next sibling is', list.nextSibling)
console.log('list next element sibling is', list.nextElementSibling)

console.log('list previous sibling is', list.previousSibling)
console.log('list previous element sibling is', list.previousElementSibling)

list.previousElementSibling.querySelector('p').innerHTML += '<br/> Nuhuh'; */

// Tutorial # 9

// var li = document.querySelector('#list li');

// li.addEventListener('click', function(e){
//     console.log(e.target);
//     console.log(e);
// })

var btns = document.querySelectorAll("#section .btn");

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){

       
        const bt = e.target.parentElement;
        bt.parentNode.removeChild(bt)
    

    })
})

const link = document.querySelector('#section a')

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to', e.target.textContent, ' was prevented')
})