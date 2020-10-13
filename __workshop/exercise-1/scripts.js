// 😋



let topTen = [];

let topContainer = document.getElementById('top');
let topBar = document.createElement('div');
topContainer.appendChild(topBar);

//Add fonctionality to footer
let footerContainer = document.querySelector('footer');
footerContainer.style.height = '100px';
footerContainer.style.display = 'flex';
footerContainer.style.justifyContent = 'space-around';
footerContainer.style.background = 'var(--ksu-purple)';


let ul = document.querySelector('ul');


let footBar = document.createElement('div');
footerContainer.insertBefore(footBar, ul);


let footBar1 = document.createElement('div');
footBar.appendChild(footBar1);
let footBar2 = document.createElement('div');
footBar.appendChild(footBar2);
let footBar3 = document.createElement('div');
footBar.appendChild(footBar3);
footBar.classList.add('believe');
footBar.style.top = 'auto';
footBar.style.height = '100px';
footBar.style.fontSize = '200px';
footBar.style.display = 'flex';
footBar.style.justifyContent = 'space-between'


let links = document.querySelectorAll('a');
links.forEach(link => {
    link.style.textDecoration = 'none';
    link.style.color = 'var(--beau-blue)';
})

//


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

    //add Fonctionality to footer

    footBar1.innerHTML = id;

    footBar2.innerHTML = id;

    footBar3.innerHTML = id;


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


button2018.addEventListener('click', handleClic);
button2019.addEventListener('click', handleClic);