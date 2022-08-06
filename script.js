// Confirm User Opacity change 
let mainUserNameContainer = document.querySelector(".userNameMain__container");
let userNameInput = document.querySelector("#userName__input")
let userNameText = document.querySelector("#userName__text")
let userNameContainer = document.querySelector(".confirmUser__container")
userNameInput.addEventListener("input",()=>{
    userNameText.textContent = userNameInput.value;
    userNameInput.value != ""? userNameContainer.style.opacity = "1": userNameContainer.style.opacity = "0" 
})
// Confirmation of user name
let confirmUserName = document.querySelector(".confirmUser__yes")
let cancelUserName = document.querySelector(".confirmUser__no")

confirmUserName.addEventListener("click", () =>{
mainUserNameContainer.style.cssText = "transform:translate3d(-500px,0px,0px); opacity:0";
})