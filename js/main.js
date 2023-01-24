const elInput = document.querySelector(".input");
const elResult = document.querySelector(".text");
const elForm = document.querySelector(".form");
const elBtnTheme = document.querySelector("#btn-id");

const elBody = document.querySelector(".body")


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let num = elInput.value

    switch (true) {
        case (num == 1):
            elResult.textContent = "Dushanba";
            break;
        case (num == 2):
            elResult.textContent = "Seshanba";
            break;
        case (num == 3):
            elResult.textContent = "Chorshanba";
            break;
        case (num == 4):
            elResult.textContent = "Payshanba";
            break;
        case (num == 5):
            elResult.textContent = "Juma";
            break;
        case (num == 6):
            elResult.textContent = "Shanba";
            break;
        case (num == 7):
            elResult.textContent = "Yakshanba";
            break;
        default:
            elResult.textContent = "7 dan kichik son kiriting";
            break;
    }

})
let theme = 'light';

elBtnTheme.addEventListener("click", function () {



    if( theme === 'dark'){
        elBtnTheme.textContent = "Dark mode";
        elBody.classList = "white-mode";
        elResult.classList = "text-white";
        theme = 'light';
    }
     else {
        elBtnTheme.textContent = "Light mode";
        elBody.classList = "dark-mode";
        elResult.classList = "text-dark";
         theme = 'dark'; 
    }



   
})








//elBtnWhite.addEventListener("click", function () {
//    elBody.classList = "white-mode";
//    elResult.classList = "text-white"
//})

















 //if( num == 1 ){
    //    elResult.textContent = "Dushanba";
    //}
    //else if ( num == 2){
    //    elResult.textContent = "Seshanba";
    //}
    //else if ( num == 3){
    //    elResult.textContent = "Chorshanba";
    //}
    //else if ( num == 4){
    //    elResult.textContent = "Payshanba";
    //}
    //else if ( num == 5){
    //    elResult.textContent = "Juma";
    //}
    //else if ( num == 6){
    //    elResult.textContent = "Shanba";
    //}
    //else if ( num == 7){
    //    elResult.textContent = "Yakshanba";
    //}
    //else{
    //    elResult.textContent = "7 dan kichik son kiriting";
    //}