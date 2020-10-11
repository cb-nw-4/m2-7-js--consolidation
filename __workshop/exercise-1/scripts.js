// 😋



let topTen = [];

let topContainer = document.getElementById('top');
let topBar = document.createElement('div');
topContainer.appendChild(topBar);

let button2018 = document.getElementById('2018');
let button2019 = document.getElementById('2019');


let divList = document.querySelectorAll('#fav');
let divOther = document.getElementById('otherStuff');

let divOtherC = document.createElement('div');
let divOtherId = document.createElement('div');


let currentId = 2018;

const handleClic = (event) => {

    const { id } = event.target;

    topBar.classList.add('believe');
    topBar.innerHTML = id;

    divOther.classList.add('eeee');
    selectTopTen(id);
    toggleButton(id);

}


const selectTopTen = (id) => {

    topTen = topTenList[id];

    topTen.forEach((element, i) => {

        divList[i].addEventListener("mouseover", function() {
            divOther.innerHTML = '';

            divOtherId.innerHTML = element.id;
            divOtherId.classList.add('aaaa');
            divOther.appendChild(divOtherId);
            divOtherId.style.display = 'block';

            divOtherC.innerHTML = element.name;
            divOtherC.classList.add('bbbb');
            divOtherC.style.display = 'block';
            divOther.appendChild(divOtherC);

        })

        divList[i].addEventListener("mouseout", function() {
            divOther.innerHTML = 'hover over a #!';
            divOtherId.style.display = 'none';
            divOtherC.style.display = 'none';
        })

    });

}

const toggleButton = () => {

    if (currentId == '2018') {
        currentId = '2019';
        button2018.classList.add('active');
        button2019.classList.remove('active');

    } else if (currentId == '2019') {
        currentId = '2018';

        button2018.classList.remove('active');
        button2019.classList.add('active');
    }
}


button2018.addEventListener('click', handleClic)
button2019.addEventListener('click', handleClic)