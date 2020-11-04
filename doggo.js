console.log("Hello doggo")

const wonderfulPetBtn = document.querySelector(".wonderful-pet");
const containerEl = document.querySelector('.container');
const saveButton = document.querySelector('.save')

console.log(wonderfulPetBtn);
console.log(containerEl);

const onWonderfulBtnClick = () => {
    console.log("YOU CLICKED ME!")
    containerEl.style.backgroundColor = "green"
}

const onSaveBtnClick = () => {
    console.log("YOU CLICKED ME!")
    containerEl.style.backgroundColor = "aqua"
}

wonderfulPetBtn.addEventListener('click', onWonderfulBtnClick);
saveButton.addEventListener('click', onSaveBtnClick);





