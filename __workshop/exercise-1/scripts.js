const headerYear = document.querySelector('.header-year');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const top10Area = document.querySelector('.top10-area');
const instructionText = document.querySelector('.instruction-text');
const idNum = document.querySelector('.id-num');
const foodItem = document.querySelector('.food-item');

function handleBtn1Click() {
    selectedYear = '2018';
    button1.classList.add('active');
    button2.classList.remove('active');
    headerYear.innerText = selectedYear;
}

function handleBtn2Click() {
    selectedYear = '2019';
    button2.classList.add('active');
    button1.classList.remove('active');
    headerYear.innerText = selectedYear;
}

function mouseLeave(event) {
    instructionText.style.display = 'block';
    idNum.style.display = 'none';
    foodItem.style.display = 'none';
}

function top10Hover(event) {

    if (event.target.className.startsWith('that')) {
        instructionText.style.display = 'none';
        idNum.style.display = 'flex';
        foodItem.style.display = 'flex';

        let top10Num = Number(event.target.id.split('-')[1]);
        idNum.innerText = top10Num + 1;
        foodItem.innerText = topTenList[selectedYear][top10Num].name;
    }
}

// initialization stuff
let selectedYear = '2018';
button1.classList.add('active');
headerYear.innerText = selectedYear;
idNum.style.display = 'none';
foodItem.style.display = 'none';

// create top 10 buttons
for (i = 0; i < 10; i++) {
    newDiv = document.createElement('div');
    newDiv.classList.add('that');
    newDiv.id = 'that-' + i;
    newDiv.innerText = i + 1;
    top10Area.appendChild(newDiv);
}

// add mouse event listeners
top10Area.addEventListener('mouseover', top10Hover);
top10Area.addEventListener('mouseleave', mouseLeave);

// add click event listeners to year buttons
button1.addEventListener('click', handleBtn1Click);
button2.addEventListener('click', handleBtn2Click);
