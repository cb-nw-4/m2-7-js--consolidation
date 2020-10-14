// 😋
let body = document.querySelector("body")
let header = document.createElement("div");
header.setAttribute("class", "dddd")
header.setAttribute("id", "header");
body.appendChild(header);

let yearHeader = document.createElement("p");
yearHeader.setAttribute("class", "believe");
yearHeader.setAttribute("id", "yearHeader");
header.appendChild(yearHeader);

let titleHeader = document.createElement("h1");
titleHeader.setAttribute("class", "cccc");
titleHeader.setAttribute("id", "titleHeader");
header.appendChild(titleHeader);

titleHeader.innerText = "Grubhub";

let yearSection = document.createElement("div");
yearSection.setAttribute("class", "bacon");
yearSection.setAttribute("id", "yearSection");
body.appendChild(yearSection);

let button2018 = document.createElement("button");
button2018.setAttribute("class", "bivrip");
button2018.setAttribute("id", "button2018");
yearSection.appendChild(button2018);

button2018.innerText = "2018";

let button2019 = document.createElement("button");
button2019.setAttribute("class", "boom");
button2019.setAttribute("id", "button2019");
yearSection.appendChild(button2019);

button2019.innerText = "2019";

let listSection = document.createElement("ul");
listSection.setAttribute("class", "what-now");
listSection.setAttribute("id", "listSection");
body.appendChild(listSection);

createList();

function createList() {
    for (let i = 1; i <= 10; i++) {
        let listItems = document.createElement("li");
        listItems.setAttribute("class", "that");
        listItems.setAttribute("id", i);
        listSection.appendChild(listItems);
        listItems.innerHTML = i;
    }
};

let contentSection = document.createElement("div");
contentSection.setAttribute("class", "other-stuff");
contentSection.setAttribute("id", "contentSection");
body.appendChild(contentSection);

let contentIntro = document.createElement("p");
contentIntro.setAttribute("class", "eeee");
contentIntro.setAttribute("id", "intro");
contentSection.appendChild(contentIntro);

contentIntro.innerText = "hover over a #!"; //edit in function

let itemNumber = document.createElement("p");
itemNumber.setAttribute("class", "aaaa");
itemNumber.setAttribute("id", "itemNumber");
contentSection.appendChild(itemNumber);

itemNumber.innerText = "1"; // edit in function

itemNumber.style.display = "none"; //edit in function

let itemContent = document.createElement("div");
itemContent.setAttribute("class", "bbbb");
itemContent.setAttribute("id", "itemContent");
contentSection.appendChild(itemContent);

itemContent.style.display = "none"; // edit in function

let itemDesc = document.createElement("p");
itemDesc.setAttribute("class", "cccc");
itemDesc.setAttribute("id", "itemDesc");
itemContent.appendChild(itemDesc);

document.getElementById("button2018").addEventListener("click", contentGen2018)

document.getElementById("button2019").addEventListener("click", contentGen2019)

let listItems = document.querySelectorAll("li");

let topTen2018 = topTenList[2018];
let topTen2019 = topTenList[2019];

function contentGen2018 () {
    yearHeader.innerText = "2018";
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("mouseover", function() {
                setupContent();
            for (let j = 0; j < topTen2018.length; j++) {
            if (listItems[i].id === topTen2018[j]['id']) {
                itemDesc.innerText = topTen2018[j]['name'];
                itemNumber.innerText = topTen2018[j]['id'];
            }
        }
    });
}
listSection.addEventListener("mouseout", function() {
    removeContent();
});
}   

function contentGen2019 () {
    yearHeader.innerText = "2019";
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("mouseover", function() {
            for (let j = 0; j < topTen2019.length; j++) {
                setupContent();
            if (listItems[i].id === topTen2019[j]['id']) {
                itemDesc.innerText = topTen2019[j]['name'];
                itemNumber.innerText = topTen2019[j]['id'];
            }
        }
    });   
}
listSection.addEventListener("mouseout", function() {
    removeContent();
});
}

function setupContent() {
    itemNumber.style.display = "block"; //edit in function
    itemContent.style.display = "block"; // edit in function
    contentIntro.style.display = "none";
}

function removeContent() {
    itemNumber.style.display = "none"; //edit in function
    itemContent.style.display = "none"; // edit in function
    contentIntro.style.display = "block";
}

