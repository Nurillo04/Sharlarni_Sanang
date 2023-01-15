const elLeft = document.querySelector("#left");
const elRight = document.querySelector("#right");
const elInput = document.querySelector("#input");
const elBtn0 = document.querySelector("#btn0");
const elBtn1 = document.querySelector("#btn1");
const elBtn2 = document.querySelector("#btn2");
const elBtn3 = document.querySelector("#btn3");
const elBtn4 = document.querySelector("#btn4");
const elBtn5 = document.querySelector("#btn5");
const elBtn6 = document.querySelector("#btn6");
const elBtn7 = document.querySelector("#btn7");
const elBtn8 = document.querySelector("#btn8");
const elBtn9 = document.querySelector("#btn9");
const elEnterBtn = document.querySelector("#enterBtn");
const elResetBtn = document.querySelector("#resetBtn");
const a = 0;
elBtn0.addEventListener("click", function() {
    elInput.value += "0";
});
elBtn1.addEventListener("click", function() {
    elInput.value += "1";
});
elBtn2.addEventListener("click", function() {
    elInput.value += "2";
});
elBtn3.addEventListener("click", function() {
    elInput.value += "3";
});
elBtn4.addEventListener("click", function() {
    elInput.value += "4";
});
elBtn5.addEventListener("click", function() {
    elInput.value += "5";
});
elBtn6.addEventListener("click", function() {
    elInput.value += "6";
});
elBtn7.addEventListener("click", function() {
    elInput.value += "7";
});
elBtn8.addEventListener("click", function() {
    elInput.value += "8";
});
elBtn9.addEventListener("click", function() {
    elInput.value += "9";
});

function resetFunction() {
    elInput.value = "";
    elLeft.style.border = "none";
    elRight.style.border = "none";
}
elEnterBtn.addEventListener("click", function() {
    elLeft.style.border = "none";
    elRight.style.border = "none";
    let num = elInput.value;
    if (num >= 0 && num < 10) {
        elLeft.style.border = "2px solid red";
    } else if (num >= 10 && num <= 99) {
        elRight.style.border = "2px solid red";
    } else {
        alert("Iltimos 0 va 100 oralig'idagi raqam kiriting");
    }
});