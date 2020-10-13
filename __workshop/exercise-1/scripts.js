// 😋
const numbersContainer = document.getElementById("numbersContainer");

const year2018 = document.getElementById("2018");
const year2019 = document.getElementById("2019");

let opacityYear = document.getElementById("bigYear");

let triangeNum = document.getElementById("triangleNumber");

let rectangle = document.getElementById("showFoodName");

let currentYear = topTenList[2018];

triangeNum.style.display = "none";
rectangle.style.display = "none";

function createTop10Buttons() {
  for (let i = 1; i < 11; i++) {
    let newElem = document.createElement("div");
    let content = document.createTextNode(`${i}`);
    newElem.appendChild(content);
    newElem.setAttribute("class", "that");
    newElem.setAttribute("id", i);
    numbersContainer.appendChild(newElem);
    newElem.addEventListener("mouseover", () => {
      document.querySelector(".eeee").style.display = "none";
      triangeNum.innerText = `${currentYear[i - 1].id}`;
      rectangle.innerText = `${currentYear[i - 1].name}`;
      triangeNum.style.display = "block";
      rectangle.style.display = "block";
    });
  }
}
createTop10Buttons();

function yearIs2018() {
  opacityYear.innerText = "2018";
  currentYear = topTenList[2018];
}

function yearIs2019() {
  opacityYear.innerText = "2019";
  currentYear = topTenList[2019];
}

year2018.addEventListener("click", yearIs2018);
year2019.addEventListener("click", yearIs2019);
