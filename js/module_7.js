// const button = document.querySelector(".btn");

// const division = document.getElementById("division");

// console.log(division);

// button.addEventListener("click", () => {
//     // division.textContent = "START";
//     // division.style.transform = "rotate(300deg)";
//     division.classList.add("anime");
// });
// division.innerHTML = `<span>NEW TEXT</span>`;

// const format = document.querySelector(".format-btn");
// format.addEventListener("click", () => {
//     // division.style.display = "flex";
//     // division.style.justifyContent = "center";
//     // division.style.alignItems = "center";
//     division.classList.toggle("format");
// });

// class CreateItems {
//     constructor(div1, button1, button2) {
//         this.div1 = div1;
//         this.button1 = button1;
//         this.button2 = button2;
//     }
//     colorDiv(color, width, height) {
//         this.div1.style.backgroundColor = color;
//         this.div1.style.width = `${width}px`;
//         this.div1.style.height = `${height}px`;
//     }
//     colorButton(color, width, height) {
//         this.button1.style.width = `${width}px`;
//         this.button1.style.height = `${height}px`;
//         this.button1.style.backgroundColor = color;
//         this.button2.style.backgroundColor = color;
//     }
//     textButton1(text) {
//         this.button1.textContent = text;
//     }
//     textButton2(text) {
//         this.button2.textContent = text;
//     }
//     render(tag) {
//         tag.append(this.div1, this.button1, this.button2);
//     }
// }

// const d1 = document.createElement("div");
// const b2 = document.createElement("button");
// const b3 = document.createElement("button");
// console.log(d1, b2, b3);
// const myBox = new CreateItems(d1, b2, b3);
// myBox.colorDiv("green", 200, 200);
// myBox.colorButton("yellow", 120, 36);
// myBox.textButton1("click");
// myBox.textButton2("format");
// console.log(myBox);

// myBox.render(document.body);

const newButton = document.querySelector(".new-btn");
console.log(newButton);

class Button {
    constructor(element) {
        this.element = element;
    }
    center() {
        this.element.style.display = "block";
        this.element.style.marginLeft = "auto";
        this.element.style.marginRight = "auto";
        this.element.style.width = "140px";
        this.element.style.textAlign = "center";
    }
}

const secondButton = new Button(newButton);

secondButton.center();

const square = document.querySelector(".circle");

const qbutton = new Button(square);
qbutton.center();

class Form {
    constructor(form, input1, input2, input3, button) {
        this.form = form;
        this.input1 = input1;
        this.input2 = input2;
        this.input3 = input3;
        this.button = button;
    }
    create(formPlace) {
        this.button.textContent = "Submit";
        this.form.append(this.input1, this.input2, this.input3, this.button);
        formPlace.appendChild(this.form);
        this.form.style.border = "1px solid black";
        this.form.style.padding = "12px";
        this.form.style.display = "flex";
        this.form.style.flexDirection = "column";
        this.form.style.gap = "12px";
        this.form.style.width = "300px";
    }
}

const myForm = new Form(
    document.createElement("form"),
    document.createElement("input"),
    document.createElement("input"),
    document.createElement("input"),
    document.createElement("button")
);
myForm.create(document.body);

const newArr = ["menu", "about", "contacts", "email"];
const nav = document.querySelector(".navigation");
console.log(nav);
const menu = document.createElement("ul");
menu.classList.add("menuList");
console.log(menu);
newArr.forEach((item, idx, arr) => {
    menu.insertAdjacentHTML(
        "beforeend",
        `<li class="menuItem">
    <a href="#" class="ashka">${item}</a>
</li>
`
    );
});
console.log(menu);
nav.appendChild(menu);
menu.addEventListener("click", onMenuItemClick);
function onMenuItemClick(event) {
    Array.from(event.currentTarget.children).forEach((item) => {
        if (item.firstElementChild.classList.contains("active")) {
            item.firstElementChild.classList.remove("active");
        }
    });
    if (event.target.classList.contains("ashka")) {
        event.target.classList.add("active");
    }
}
menu.addEventListener("mouseover", onMouseOver);
function onMouseOver(event) {
    if (event.target.classList.contains("ashka")) {
        event.target.classList.add("hover");
        console.log("hover");
    }
}
menu.addEventListener("mouseout", onMouseOut);
function onMouseOut(event) {
    if (
        event.target.classList.contains("ashka") &&
        event.target.classList.contains("hover")
    ) {
        event.target.classList.remove("hover");
        console.log("hover");
    }
}
const newBtn = document.querySelector(".newBtn");
const backDrop = document.querySelector(".backDrop");
console.log(newBtn);
newBtn.addEventListener("click", onBtnClick);
function onBtnClick() {
    backDrop.classList.add("open");
    document.body.addEventListener("keydown", onEscPress);
}
const closeBtn = document.querySelector(".modalButton");
closeBtn.addEventListener("click", onClose);
function onClose() {
    backDrop.classList.remove("open");
    document.body.removeEventListener("keydown", onEscPress);
}

function onEscPress(event) {
    if (event.code === "Escape") {
        backDrop.classList.remove("open");
        console.log("escape");
        document.body.removeEventListener("keydown", onEscPress);
    }
}
backDrop.addEventListener("click", onBackDropClick);
function onBackDropClick(event) {
    if (event.currentTarget === event.target) {
        backDrop.classList.remove("open");
    }
}
const form = document.querySelector(".form");
console.log(form);
form.addEventListener("submit", onFormSumit);
function onFormSumit(event) {
    event.preventDefault();
    document.querySelector("#pass").textContent =
        event.currentTarget.elements.pass.value;
    document.querySelector("#name").textContent =
        event.currentTarget.elements.name.value;
    document.querySelector("#mail").textContent =
        event.currentTarget.elements.email.value;
    console.log(event.currentTarget.elements.terms.checked);
    document.querySelector("#checkbox").textContent = event.currentTarget
        .elements.terms.checked
        ? "yes"
        : "no";
}

const slider = document.querySelector(".slider");
const sliderRaw = document.querySelector(".slider-raw");
const sliderImg = document.querySelector(".slider-img");
const prewBtn = document.querySelector(".prew");
const nextBtn = document.querySelector(".next");
const slideWidth = sliderImg.getBoundingClientRect().width;
console.log(slideWidth);
const slideGap = parseFloat(getComputedStyle(sliderRaw).gridColumnGap);
console.log(slideGap);
const sliderRawWidth = sliderRaw.getBoundingClientRect().width;
console.log(sliderRawWidth);

prewBtn.addEventListener("click", onPrewBtnClick);
nextBtn.addEventListener("click", onNextBtnClick);

let slideCounter = 0;
function onPrewBtnClick(event) {
    slideCounter += slideWidth + slideGap;
    if (slideCounter === 0) {
        prewBtn.classList.add("disable");
    }
    if (sliderRawWidth > Math.abs(slideCounter) - slideGap) {
        nextBtn.classList.remove("disable");
    }
    sliderRaw.style.transform = `translateX(${slideCounter}px)`;
}
function onNextBtnClick(event) {
    slideCounter -= slideWidth + slideGap;
    if (slideCounter < 0) {
        prewBtn.classList.remove("disable");
    }
    if (sliderRawWidth === Math.abs(slideCounter) - slideGap) {
        nextBtn.classList.add("disable");
    }
    console.log(slideGap);
    console.log(slideCounter);
    console.log(sliderRawWidth);
    sliderRaw.style.transform = `translateX(${slideCounter}px)`;
}
