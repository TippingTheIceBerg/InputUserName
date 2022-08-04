let userNameInput = document.querySelector("#userName__input")
let userNameText = document.querySelector("#userName__text")
let confirmUser = document.querySelector(".confirmUser__container")
userNameInput.addEventListener("input",()=>{
    userNameText.textContent = userNameInput.value;
    userNameInput.value != ""? confirmUser.style.opacity = "1": confirmUser.style.opacity = "0"
    
})
console.log(userNameInput.value);
console.log(userNameText)