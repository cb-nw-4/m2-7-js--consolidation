// 😋
let body = document.querySelector('body');
let maindiv = document.createElement('div');
// let topdiv = document.createElement('div');
let subheader = document.createElement('div');
let header = document.createElement('div'); 
let whitediv = document.createElement('div'); 
let headerText = document.createElement('h1');
let headerYear = document.createElement('h2');
let yearButton1 = document.createElement('div');
let yearButton2 = document.createElement('div');
let yearButtonAnchor1 = document.createElement('a');
let yearButtonAnchor2 = document.createElement('a');
let numbersListDiv = document.createElement('div');
let numbersList1 = document.createElement('a');
let numbersList2 = document.createElement('a');
let numbersList3 = document.createElement('a');
let numbersList4 = document.createElement('a');
let numbersList5 = document.createElement('a');
let numbersList6 = document.createElement('a');
let numbersList7 = document.createElement('a');
let numbersList8 = document.createElement('a');
let numbersList9 = document.createElement('a');
let numbersList10 = document.createElement('a');
let pinkAreaPlaceolderText = document.createElement('p');
let foodContainer = document.createElement('div');
let foodSubContainer1 = document.createElement('div');
let foodSubContainer2 = document.createElement('div');

// body.appendChild(topdiv);
// topdiv.appendChild(subheader);
header.setAttribute("class","header");
body.appendChild(header);
headerText.setAttribute("class","cccc");
headerText.innerText="GrubHub";
header.appendChild(headerText);
headerYear.setAttribute("Class","believe"); 
headerYear.innerText="2018"; // Will be changed later
header.appendChild(headerYear);

subheader.setAttribute("class","subheader");
body.appendChild(subheader);
yearButton1.setAttribute("class","bivrip"); 
yearButton2.setAttribute("class","bivrip"); 
subheader.appendChild(yearButton1);
subheader.appendChild(yearButton2);
yearButtonAnchor1.setAttribute("class","boom");
yearButtonAnchor2.setAttribute("class","boom");
yearButton1.appendChild(yearButtonAnchor1);
yearButton2.appendChild(yearButtonAnchor2);
yearButtonAnchor1.innerText="2018";
yearButtonAnchor2.innerText="2019";

numbersListDiv.setAttribute("class","listdiv");
body.appendChild(numbersListDiv);
numbersList1.setAttribute("class","that");
numbersList1.setAttribute("id","1");
numbersListDiv.appendChild(numbersList1);
numbersList1.innerText="1";
numbersList2.setAttribute("class","that");
numbersList2.setAttribute("id","2");
numbersListDiv.appendChild(numbersList2);
numbersList2.innerText="2";
numbersList3.setAttribute("class","that");
numbersList3.setAttribute("id","3");
numbersListDiv.appendChild(numbersList3);
numbersList3.innerText="3";
numbersList4.setAttribute("class","that");
numbersList4.setAttribute("id","4");
numbersListDiv.appendChild(numbersList4);
numbersList4.innerText="4";
numbersList5.setAttribute("class","that");
numbersList5.setAttribute("id","5");
numbersListDiv.appendChild(numbersList5);
numbersList5.innerText="5";
numbersList6.setAttribute("class","that");
numbersList6.setAttribute("id","6");
numbersListDiv.appendChild(numbersList6);
numbersList6.innerText="6";
numbersList7.setAttribute("class","that");
numbersList7.setAttribute("id","7");
numbersListDiv.appendChild(numbersList7);
numbersList7.innerText="7";
numbersList8.setAttribute("class","that");
numbersList8.setAttribute("id","8");
numbersListDiv.appendChild(numbersList8);
numbersList8.innerText="8";
numbersList9.setAttribute("class","that");
numbersList9.setAttribute("id","9");
numbersListDiv.appendChild(numbersList9);
numbersList9.innerText="9";
numbersList10.setAttribute("class","that");
numbersList10.setAttribute("id","10");
numbersListDiv.appendChild(numbersList10);
numbersList10.innerText="10";

maindiv.setAttribute("class","maindiv");
body.appendChild(maindiv);
maindiv.style.flex="4";
pinkAreaPlaceolderText.setAttribute("class","eeee"); 
pinkAreaPlaceolderText.innerText="Hover over a# !";
maindiv.appendChild(pinkAreaPlaceolderText); // goes out with click
foodContainer.setAttribute("class","other-stuff");
foodContainer.style.display="flex";
// maindiv.appendChild(foodContainer);
foodSubContainer1.setAttribute("class","aaaa");
foodSubContainer1.innerText="1"; 
foodContainer.appendChild(foodSubContainer1); 
foodSubContainer2.setAttribute("class","bbbb");
foodSubContainer2.innerText="Example example example"; 
// foodContainer.appendChild(foodSubContainer2); 

yearButton1.addEventListener('click',()=> { 
    headerYear.innerText="2018"; 
    yearButtonAnchor2.style.background="transparent";
    yearButtonAnchor2.style.border="3px solid var(--ksu-purple)";
    yearButtonAnchor2.style.color="var(--ksu-purple)";
    yearButtonAnchor1.style.background="var(--ksu-purple)"; 
    yearButtonAnchor1.style.borderColor="transparent";
    yearButtonAnchor1.style.color="white";
});

yearButton2.addEventListener('click',()=> { 
    headerYear.innerText="2019"; 
    yearButtonAnchor1.style.background="transparent";
    yearButtonAnchor1.style.border="3px solid var(--ksu-purple)";
    yearButtonAnchor1.style.color="var(--ksu-purple)";
    yearButtonAnchor2.style.background="var(--ksu-purple)"; 
    yearButtonAnchor2.style.borderColor="transparent";
    yearButtonAnchor2.style.color="white";
}); 

numbersList1.addEventListener('mouseover', foodFinder);
numbersList1.addEventListener('mouseout', resetOnMouseout ); 
numbersList2.addEventListener('mouseover', foodFinder);
numbersList2.addEventListener('mouseout', resetOnMouseout ); 
numbersList3.addEventListener('mouseover', foodFinder);
numbersList3.addEventListener('mouseout', resetOnMouseout ); 
numbersList4.addEventListener('mouseover', foodFinder);
numbersList4.addEventListener('mouseout', resetOnMouseout ); 
numbersList5.addEventListener('mouseover', foodFinder);
numbersList5.addEventListener('mouseout', resetOnMouseout ); 
numbersList6.addEventListener('mouseover', foodFinder);
numbersList6.addEventListener('mouseout', resetOnMouseout ); 
numbersList7.addEventListener('mouseover', foodFinder);
numbersList7.addEventListener('mouseout', resetOnMouseout ); 
numbersList8.addEventListener('mouseover', foodFinder);
numbersList8.addEventListener('mouseout', resetOnMouseout ); 
numbersList9.addEventListener('mouseover', foodFinder);
numbersList9.addEventListener('mouseout', resetOnMouseout ); 
numbersList10.addEventListener('mouseover', foodFinder);
numbersList10.addEventListener('mouseout', resetOnMouseout ); 

function foodFinder (event) { 
    let year = headerYear.innerText; 
    maindiv.removeChild(pinkAreaPlaceolderText); 
    maindiv.appendChild(foodContainer);
    foodContainer.appendChild(foodSubContainer2);
    foodSubContainer1.innerText=event.target.id; 
    foodSubContainer2.innerText="";
    topTenList[year].forEach ((element)=> { 
        if( element["id"]===event.target.id) { 
            foodSubContainer2.innerText=element["name"];
        }; 
    });
}; 

function resetOnMouseout () { 
    maindiv.appendChild(pinkAreaPlaceolderText);
    maindiv.removeChild(foodContainer);
    foodContainer.removeChild(foodSubContainer2);
};