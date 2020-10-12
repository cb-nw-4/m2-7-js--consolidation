const twoThousandNineteen = document.getElementById('btn1');
const twoThousandEighteen = document.getElementById('btn2');
const year = document.querySelector('.year');
const number = document.querySelector('.num');
number.style.display = 'none';
const food = document.querySelector('.food');
food.style.display = 'none';
const hoverText = document.getElementById('hoverText');
const numsToHoverNode = document.querySelectorAll('.nums');
let numsToHoverArr = Array.from(numsToHoverNode);

twoThousandNineteen.addEventListener('click', switchToNineteen);
twoThousandEighteen.addEventListener('click', switchToEighteen); 

function toggleYear(node, isClicked) {
    if (isClicked === true) {
        year.innerHTML = node.innerText;
        node.style.background = '#5b2a86';
        node.style.color = 'white';
    }
    else if (isClicked === false) {
        node.style.background = 'transparent';
    }
}

function switchToNineteen() {
    toggleYear(twoThousandNineteen, true);
    toggleYear(twoThousandEighteen, false)
    changeRankingText();
}

function switchToEighteen() {
    toggleYear(twoThousandEighteen, true);
    toggleYear(twoThousandNineteen, false);
    changeRankingText();
}

function changeRankingText() {
    numsToHoverArr.forEach(element => {element.addEventListener('mouseover', function viewItems() {
        hoverText.style.display = 'none';
        number.style.display = 'inline-block';
        food.style.display = 'inline-block';
        number.innerHTML = `${numsToHoverArr.indexOf(element) + 1}`;
        const foodName1 = topTenList['2018'][numsToHoverArr.indexOf(element)]['name'];
        const foodName2 = topTenList['2019'][numsToHoverArr.indexOf(element)]['name'];
        if (year.innerHTML === twoThousandEighteen.innerText) {
            food.innerHTML = foodName1;
        }
        else if (year.innerHTML === twoThousandNineteen.innerText) {
            food.innerHTML = foodName2;
        }
    })});
    numsToHoverArr.forEach(element => {element.addEventListener('mouseout', function() {
        hoverText.style.display = 'inline-block';
        number.style.display = 'none';
        food.style.display = 'none';
    })});
}