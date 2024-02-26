import animals from "./data.js";

const filter = document.querySelector(".filter");
const filterBtn = document.querySelector(".filter-button");
const animalList = document.querySelector(".animal-list");
const selectInput = document.querySelector(".select");
let filteredArr = null;
let prevFilter = filteredArr;

function renderAnimals(animals) {
    animalList.insertAdjacentHTML("beforeend", animals);
}
const markup = animals
    .map((item) => {
        return `<li class="item" id="${item.id}">
    <img src="${item.url}" alt="" class="image" />
    <div class = "info-wrapper"><h2 class="title">${item.name}</h2>
    <p class="size">${item.size}</p>
    <p class="type">${item.type}</p>
    </div>
</li>`;
    })
    .join("");
renderAnimals(markup);

filter.addEventListener("input", onInputChange);
function onInputChange(event) {
    console.log(prevFilter);
    console.log(filteredArr.length);
    const result =
        filteredArr.length > 0
            ? filteredArr
            : event.currentTarget.value.trim === ""
            ? prevFilter
            : animals;
    filteredArr = result.filter((item) => {
        return item.size.includes(event.currentTarget.value);
    });

    animalList.innerHTML = filteredArr
        .map((item) => {
            return `<li class="item" id="${item.id}">
<img src="${item.url}" alt="" class="image" />
<div class = "info-wrapper"><h2 class="title">${item.name}</h2>
<p class="size">${item.size}</p>
<p class="type">${item.type}</p>
</div>
</li>`;
        })
        .join("");
}
filterBtn.addEventListener("click", onFoilterBtnClick);
function onFoilterBtnClick() {
    filteredArr = animals.filter((item) => {
        return item.size.includes(filter.value);
    });

    animalList.innerHTML = filteredArr
        .map((item) => {
            return `<li class="item" id="${item.id}">
<img src="${item.url}" alt="" class="image" />
<div class = "info-wrapper"><h2 class="title">${item.name}</h2>
<p class="size">${item.size}</p>
<p class="type">${item.type}</p>
</div>
</li>`;
        })
        .join("");
}
selectInput.addEventListener("change", onSelectChange);
function onSelectChange(event) {
    filteredArr = animals.filter((item) => {
        return item.type.includes(event.currentTarget.value);
    });
    prevFilter = filteredArr;
    animalList.innerHTML = filteredArr
        .map((item) => {
            return `<li class="item" id="${item.id}">
<img src="${item.url}" alt="" class="image" />
<div class = "info-wrapper"><h2 class="title">${item.name}</h2>
<p class="size">${item.size}</p>
<p class="type">${item.type}</p>
</div>
</li>`;
        })
        .join("");
    console.log(event.currentTarget.value);
}
