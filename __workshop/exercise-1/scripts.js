// 😋

let band=document.getElementById('numBand');
let banner=document.getElementById('believe');
let triangle=document.getElementById('triangle');
let foodster=document.getElementById('foodster');
let button1=document.getElementById('b1');
let button2=document.getElementById('b2');
let defaultText=document.querySelector('.defaultText');
triangle.style.display="none";
foodster.style.display="none";
banner.style.visibility="hidden";

button1.addEventListener('click',obj);
button2.addEventListener('click',obj);


let v2019=topTenList[2019];
let v2018=topTenList[2018];
let year='';
let check=''

for(let i=1;i<=10;i++){
    let number=document.createElement('p');
    number.innerText=i;
    number.setAttribute('id', i);
    number.setAttribute('class', 'numbers');
    number.addEventListener('mouseover',displayRank);
    band.appendChild(number);
}

function obj(event){
    let clickID=event.target.id;
    //console.log(clickID);
    if(clickID==='b1'){
        year=topTenList[2018];
        //console.log(year);
        button1.style.background="#5b2a86";
        button1.style.color="white";
        banner.style.visibility="visible";
        banner.innerText="2018";
        check=true;
        button2.style.background="transparent";
        button2.style.color="#5b2a86";
    }
    else if(clickID==='b2'){
        year=topTenList[2019];
        //console.log(year);
        button2.style.background="#5b2a86";
        button2.style.color="white";
        banner.style.visibility="visible";
        banner.innerText="2019";
        check=false;
        button1.style.background="transparent";
        button1.style.color="#5b2a86";
    } 
}



function displayRank(event){
    let hoverID= event.target.id;
    
    if(hoverID){
        obj;
        switch(check){
            case true:
                //console.log(year);
                defaultText.style.display="none";
                triangle.style.display="block";
                foodster.style.display="block";
                triangle.innerText=year[hoverID-1].id;
                foodster.innerText=year[hoverID-1].name;
                break;
        
            case false:
                //console.log(year);
                defaultText.style.display="none";
                triangle.style.display="block";
                foodster.style.display="block";
                triangle.innerText=year[hoverID-1].id;
                foodster.innerText=year[hoverID-1].name;
                break;
            default:
                year=[];
        }
    }
    else{
        defaultText.style.display="block";
        triangle.style.display="none";
        foodster.style.display="none";  
    }
}


