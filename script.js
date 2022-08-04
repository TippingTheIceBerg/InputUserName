let userNameInput = document.querySelector("#userName__input")
let userNameText = document.querySelector("#userName__text")

userNameInput.addEventListener("input",()=>{
    userNameText.textContent = userNameInput.value;
})
console.log(userNameInput.value);
console.log(userNameText)