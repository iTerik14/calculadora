const switchh = document.querySelector('.switch');
const slider = document.querySelector('.slider');
const circle = document.querySelector('.circle');
const cir = document.querySelectorAll(".cir");

const slid = ["0", "1.15em", "2.35em"]


slider.addEventListener('click', (e) => {
    if (e.target.classList.contains("cir1")) {
        console.log(e.target.className);
        circle.style.transform = `translateX(${slid[0]})`;
        document.body.classList = "";
    }
    if (e.target.classList.contains("cir2")) {
        console.log(e.target.className);
        circle.style.transform = `translateX(${slid[1]})`;
        document.body.classList = "";
        document.body.classList.add("slid1");
    }
    if (e.target.classList.contains("cir3")) {
        console.log(e.target.className);
        circle.style.transform = `translateX(${slid[2]})`;
        document.body.classList = "";
        document.body.classList.add("slid2");
    }
});



const number = document.querySelector(".number");
const result = document.querySelector(".result");

const btns = document.querySelector(".calc-buttons");
// const btnsNum = document.querySelectorAll(".calc-buttons .num");

let numAnterior = 0;
let numActual = 0;
let res = 0;


btns.addEventListener('click', (e) => {
    res = number.textContent
    if (e.target.classList.contains("reset")) {
        number.innerHTML = "";
        result.innerHTML = "";
    }

    if (e.target.classList.contains("num")) {
        number.textContent = parseFloat(number.textContent + e.target.textContent);
    }

    if (e.target.classList.contains("op")) {
        if(e.target.textContent === "+"){
            number.textContent += "+";
        }

        if(e.target.textContent === "-"){
            number.textContent += "-";
        }

        if(e.target.textContent === "*"){
            number.textContent += "*";
        }

        if(e.target.textContent === "/"){
            number.textContent += "/";
        }
    }

    if (e.target.classList.contains("del")) {
        borrarDigito();
    }

    if (e.target.classList.contains("igual")) {
        result.textContent = res;
    }
});


// function delRep(str, op) {
//     let pos1 = str.indexOf(op);
//     return str.replaceAll("++", op);
// }

// console.log(delRep("466++55+++++", "+"));

function borrarDigito() {
    number.innerHTML = number.innerHTML.slice(0, -1);
}


