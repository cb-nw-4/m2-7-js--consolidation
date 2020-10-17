// 😋
let back2018 = document.getElementById('back2018');
let back2019 = document.getElementById('back2019');
let year2018 = document.getElementById('2018');
let year2019 = document.getElementById('2019');
back2018.style.display = 'none';
back2019.style.display = 'none';

let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');
let button4 = document.getElementById('btn4');
let button5 = document.getElementById('btn5');
let button6 = document.getElementById('btn6');
let button7 = document.getElementById('btn7');
let button8 = document.getElementById('btn8');
let button9 = document.getElementById('btn9');
let button10 = document.getElementById('btn10');

let hoverName = document.getElementById('hoverName')
let number = document.getElementById('number')
let foodName = document.getElementById('foodName')
foodName.style.display = 'none';
number.style.display = 'none';


let currentYear = '2018';
function current2018() {
    currentYear = '2018';
    back2018.style.display = 'block';
    back2019.style.display = 'none';
}
function current2019() {
    currentYear = '2019';
    back2019.style.display = 'block';
    back2018.style.display = 'none';
}


function functionBtn1() {
    let object = topTenList[currentYear][0];
    hoverName.style.display = 'none'
    foodName.style.display = 'block';
    number.style.display = 'block';
    number.innerText = '1';
    foodName.innerText =  object.name;
}
function functionBtn2() {
    let object = topTenList[currentYear][1];
    hoverName.style.display = 'none'
    foodName.style.display = 'block';
    number.style.display = 'block';
    number.innerText = '2';
    foodName.innerText =  object.name;
}
function functionBtn3() {
    let object = topTenList[currentYear][2];
    hoverName.style.display = 'none'
    foodName.style.display = 'block';
    number.style.display = 'block';
    number.innerText = '3';
    foodName.innerText =  object.name;
}
function functionBtn4() {
    let object = topTenList[currentYear][3];
    hoverName.style.display = 'none'
    foodName.style.display = 'block';
    number.style.display = 'block';
    number.innerText = '4';
    foodName.innerText =  object.name;
}
function functionBtn5() {
    let object = topTenList[currentYear][4];
    hoverName.style.display = 'none'
    foodName.style.display = 'block';
    number.style.display = 'block';
    number.innerText = '5';
    foodName.innerText =  object.name;
}
function functionBtn6() {
    let object = topTenList[currentYear][5];
    hoverName.style.display = 'none'
    foodName.style.display = 'block';
    number.style.display = 'block';
    number.innerText = '6';
    foodName.innerText =  object.name;
}
function functionBtn7() {
    let object = topTenList[currentYear][6];
    hoverName.style.display = 'none'
    foodName.style.display = 'block';
    number.style.display = 'block';
    number.innerText = '7';
    foodName.innerText =  object.name;
}
function functionBtn8() {
    let object = topTenList[currentYear][7];
    hoverName.style.display = 'none'
    foodName.style.display = 'block';
    number.style.display = 'block';
    number.innerText = '8';
    foodName.innerText =  object.name;
}
function functionBtn9() {
    let object = topTenList[currentYear][8];
    hoverName.style.display = 'none'
    foodName.style.display = 'block';
    number.style.display = 'block';
    number.innerText = '9';
    foodName.innerText =  object.name;
}
function functionBtn10() {
    let object = topTenList[currentYear][9];
    hoverName.style.display = 'none'
    foodName.style.display = 'block';
    number.style.display = 'block';
    number.innerText = '10';
    foodName.innerText =  object.name;
}


year2018.addEventListener('click', current2018);
year2019.addEventListener('click', current2019);

button1.addEventListener('click', functionBtn1);
button2.addEventListener('click', functionBtn2);
button3.addEventListener('click', functionBtn3);
button4.addEventListener('click', functionBtn4);
button5.addEventListener('click', functionBtn5);
button6.addEventListener('click', functionBtn6);
button7.addEventListener('click', functionBtn7);
button8.addEventListener('click', functionBtn8);
button9.addEventListener('click', functionBtn9);
button10.addEventListener('click', functionBtn10);

