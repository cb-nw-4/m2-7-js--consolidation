// 😋
headerYear = document.getElementById("header-year");
btn2018 = document.getElementById("btn-2018");
btn2019 = document.getElementById("btn-2019");
triNum = document.getElementById("triangle-num");
foodBox = document.getElementById("food-box");
hoverMessage = document.getElementById("hidden-message");

triNum.style.display = "none";
foodBox.style.display = "none";

btn2018.addEventListener("click", btnClicked);
btn2019.addEventListener("click", btnClicked);
let chosenYear = 2018;
function btnClicked(e) {
    if (e.target === btn2018) {
        chosenYear = 2018;
    } else {
        chosenYear= 2019;
    }
    headerYear.innerHTML = chosenYear;
    btn2018.classList.toggle("active");
    btn2019.classList.toggle("active");
}

btn1 = document.getElementById("num1");
btn2 = document.getElementById("num2");
btn3 = document.getElementById("num3");
btn4 = document.getElementById("num4");
btn5 = document.getElementById("num5");
btn6 = document.getElementById("num6");
btn7 = document.getElementById("num7");
btn8 = document.getElementById("num8");
btn9 = document.getElementById("num9");
btn10 = document.getElementById("num10");

function hoverNum(){
    hoverMessage.style.display = "none";
    triNum.style.display = "block";
    triNum.innerHTML = rowItem.id;
    foodBox.style.display = "block";
    foodBox.innerHTML = rowItem.name;
}

function mouseOut() {
    hoverMessage.style.display = "block";
    triNum.style.display = "none";
    foodBox.style.display = "none";
}

btn1.addEventListener("mouseover", btn1Func);
function btn1Func(){
    rowItem = topTenList[chosenYear][0];
    hoverNum();
}
btn1.addEventListener("mouseout", mouseOut);

btn2.addEventListener("mouseover", btn2Func);
function btn2Func(){
    rowItem = topTenList[chosenYear][1];
    hoverNum();
}
btn2.addEventListener("mouseout", mouseOut);

btn3.addEventListener("mouseover", btn3Func);
function btn3Func(){
    rowItem = topTenList[chosenYear][2];
    hoverNum();
}
btn3.addEventListener("mouseout", mouseOut);

btn4.addEventListener("mouseover", btn4Func);
function btn4Func(){
    rowItem = topTenList[chosenYear][3];
    hoverNum();
}
btn4.addEventListener("mouseout", mouseOut);

btn5.addEventListener("mouseover", btn5Func);
function btn5Func(){
    rowItem = topTenList[chosenYear][4];
    hoverNum();
}
btn5.addEventListener("mouseout", mouseOut);

btn6.addEventListener("mouseover", btn6Func);
function btn6Func(){
    rowItem = topTenList[chosenYear][5];
    hoverNum();
}
btn6.addEventListener("mouseout", mouseOut);

btn7.addEventListener("mouseover", btn7Func);
function btn7Func(){
    rowItem = topTenList[chosenYear][6];
    hoverNum();
}
btn7.addEventListener("mouseout", mouseOut);

btn8.addEventListener("mouseover", btn8Func);
function btn8Func(){
    rowItem = topTenList[chosenYear][7];
    hoverNum();
}
btn8.addEventListener("mouseout", mouseOut);

btn9.addEventListener("mouseover", btn9Func);
function btn9Func(){
    rowItem = topTenList[chosenYear][8];
    hoverNum();
}
btn9.addEventListener("mouseout", mouseOut);

btn10.addEventListener("mouseover", btn10Func);
function btn10Func(){
    rowItem = topTenList[chosenYear][9];
    hoverNum();
}
btn10.addEventListener("mouseout", mouseOut);






