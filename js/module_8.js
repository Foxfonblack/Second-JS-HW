const root = document.querySelector(".root");
const root2 = document.querySelector(".root2");
const root3 = document.querySelector(".root3");
const root4 = document.querySelector(".root4");
const root5 = document.querySelector(".root5");
const lableArr = ["name", "pass", "e-mail", "tel"];
const form = document.createElement("form");

form.classList.add("new-form");

const fragment = document.createDocumentFragment();
lableArr.forEach((item) => {
    const lable = document.createElement("lable");
    lable.classList.add("new-lable");
    const input = document.createElement("input");
    input.classList.add("new-input");

    lable.textContent = item;
    lable.appendChild(input);
    fragment.append(lable);
});

const newButton = document.createElement("button");
newButton.classList.add("new-button");
newButton.textContent = "SUBMIT";
form.append(fragment, newButton);
console.log(form);

root.append(form);

root2.innerHTML = `<form action="" class="new-form">
<lable class="new-lable">NAME<input type="text" class="new-input"></lable>
<lable class="new-lable">PASS<input type="text" class="new-input"></lable>
<lable class="new-lable">EMAIL<input type="text" class="new-input"></lable>
<lable class="new-lable">TEL<input type="text" class="new-input"></lable>
<button class="new-button">Submit</button>
</form>`;

const myForm = `<form action="" class="new-form">
<lable class="new-lable">NAME<input type="text" class="new-input"></lable>
<lable class="new-lable">PASS<input type="text" class="new-input"></lable>
<lable class="new-lable">EMAIL<input type="text" class="new-input"></lable>
<lable class="new-lable">TEL<input type="text" class="new-input"></lable>
<button class="new-button">Submit</button>
</form>`;

root3.insertAdjacentHTML("beforeend", myForm);

const myLables = lableArr
    .map((item) => {
        return `<lable class="new-lable">${item}<input type="text" class="new-input"></lable>`;
    })
    .join("");

const myNewForm = `<form action="" class="new-form">${myLables}<button class="new-button">Submit</button></form>`;
root3.insertAdjacentHTML("beforeend", myNewForm);

const arrImg = [
    "images/img1.jpeg",
    "images/img2.jpeg",
    "images/img3.jpeg",
    "images/img4.jpeg",
    "images/img5.jpeg",
];

const myImgARR = arrImg
    .map((item) => {
        return `<img loading="lazy" class="image" src=${item} alt="" />`;
    })
    .join("");
root4.insertAdjacentHTML("beforeend", myImgARR);

const img = document.createElement("img");
img.src = arrImg[0];
img.width = "300";
// root3.append(img);
const textArr = [
    { inputName: "name", inputType: "text", name: "name", value: "" },
    { inputName: "mail", inputType: "text", name: "mail", value: "" },
    { inputName: "phone", inputType: "text", name: "phone", value: "" },
    { inputName: "check", inputType: "checkbox", name: "check", value: "" },
    { inputName: "agree", inputType: "radio", name: "choise", value: "agree" },
    {
        inputName: "desagree",
        inputType: "radio",
        name: "choise",
        value: "desagree",
    },
];
class Form {
    constructor(inputInfo) {
        this.inputInfo = inputInfo;
    }
    form = document.createElement("form");
    create() {
        // const fragment = document.createDocumentFragment()
        this.inputInfo.forEach((item) => {
            const lable = document.createElement("lable");
            lable.textContent = item.inputName;
            lable.classList.add("lableInput");
            const input = document.createElement("input");
            input.classList.add("formInput");
            input.type = item.inputType;
            input.name = item.name;
            input.value = item.value;
            lable.appendChild(input);
            this.form.appendChild(lable);
            lable.classList.add("new-lable");
        });
        const button = document.createElement("button");
        button.textContent = "SUBMIT";
        this.form.appendChild(button);
    }
    render(elem) {
        elem.appendChild(this.form);
    }
}
const yourForm = new Form(textArr);
yourForm.create();
yourForm.render(root5);

const data = [{ id: 1, url: "", name: "", category: "" }];
