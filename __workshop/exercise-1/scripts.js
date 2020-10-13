// 😋
let currentyear = "2018";

function yearChange(event){
    if ((currentyear === "2018") && (event.target.innerHTML === "2019")) {
        currentyear="2019";
        document.querySelector(".backgroundyear").innerHTML = "2019";
    }
    else if ((currentyear === "2019") && (event.target.innerHTML === "2018")){
        currentyear="2018";
        document.querySelector(".backgroundyear").innerHTML = "2018";
    }
}
function displayfood(event){
    let id = event.target.innerHTML - 1;
    document.querySelector(".instructions").classList.add("fooddesc")
    document.querySelector(".instructions").innerHTML = topTenList[currentyear][id].name;
    document.querySelector("#bignum").classList.add("bignum")
    document.querySelector(".bignum").innerHTML = topTenList[currentyear][id].id;
}

let btns = document.querySelectorAll(".margin");
btns.forEach(btn=> {
    btn.addEventListener("click", yearChange);
})

let nums = document.querySelectorAll("li");
nums.forEach(numCircle => {
    numCircle.addEventListener("click", displayfood);
})