let button = document.querySelector(".start-button");

let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");

if (button.innerHTML === "") {
    button.innerHTML = "Night Mode";
} else {
    button.innerHTML = "Day Mode"
}

button.addEventListener("click", checkCondition);

function checkCondition() {
    if(button.innerHTML === "Night Mode") {
        nightModeChange();
    } else {
        dayModeChange();
    }
}

function nightModeChange() {
    let divs = document.querySelectorAll(".discription-box");
    
    img2.classList.add("img22");
    img3.classList.add("img33");
    img4.classList.add("img44");
    img5.classList.add("img55");
    
    for(let i = 0; i<divs.length; i++) {
        divs[i].classList.add("change-color");
        button.innerHTML = "Day Mode";
    }
}

function dayModeChange() {
    let divs = document.querySelectorAll(".discription-box");

    img2.classList.remove("img22");
    img3.classList.remove("img33");
    img4.classList.remove("img44");
    img5.classList.remove("img55");

    for (let i =0; i<divs.length; i++) {
        divs[i].classList.remove("change-color");
        button.innerHTML = "Night Mode";
    }
}