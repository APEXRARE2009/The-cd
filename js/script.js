let num1 = document.querySelector(".content__block-input-num1");
let num2 = document.querySelector(".content__block-input-num2");
let btn = document.querySelector(".content__block-output-btn");
let output = document.querySelector(".content__block-output-num");

btn.addEventListener("click", () => {
    output.classList.add("click-output-op");
    setTimeout(() => {
        checkCorrect();
        output.classList.remove("click-output-op");
    }, 280);
});

function checkInputs() {
    let isDigit = false;
    let isControl = false;

    if (event.key >= 0 && event.key <= 9) {
        isDigit = true;
    } else {
        isDigit = false;
    }

    if (event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "Backspace") {
        isControl = true;
    } else {
        isControl = false;
    }


    if (isDigit == false && isControl == false) {
        event.preventDefault();
    }
};

num1.addEventListener("keydown", (event) => {
    checkInputs();
});

num2.addEventListener("keydown", (event) => {
    checkInputs();
});

function checkCorrect() {
    if (num1.value == "" && num2.value == "") {
        alert("ВВедите данные!");
    } else if (num1.value == "") {
        alert("ВВедите данные в Num 1!");
    } else if (num2.value == "") {
        alert("ВВедите данные в Num 2!");
    } else if (num2.value == 0) {
        alert("На ноль делить нельзя!");
    } else {
        getValue();
    }
};

function getValue() {
    let num1Value = num1.value;
    let num2Value = num2.value;
    let gcd = findLCM(num1Value, num2Value);
    console.log(gcd);
    setTimeout(() => {
        output.classList.add("hover-output-num");
    }, 200);
    output.textContent = gcd;
}

function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
}

function findGCD(a, b) {
    if (b === 0) {
        return a;
    }
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
