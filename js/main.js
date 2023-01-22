const elInput = document.querySelector(".input");
const elResult = document.querySelector(".text");
const elForm  = document.querySelector(".form");
const elBtnDark  = document.querySelector(".dark");
const elBtnWhite  = document.querySelector(".white");
const elBody = document.querySelector(".body")


elForm.addEventListener ( "submit", function(evt){
    evt.preventDefault();

    let num = elInput.value

    if( num == 1 ){
        elResult.textContent = "Dushanba";
    }
    else if ( num == 2){
        elResult.textContent = "Seshanba";
    }
    else if ( num == 3){
        elResult.textContent = "Chorshanba";
    }
    else if ( num == 4){
        elResult.textContent = "Payshanba";
    }
    else if ( num == 5){
        elResult.textContent = "Juma";
    }
    else if ( num == 6){
        elResult.textContent = "Shanba";
    }
    else if ( num == 7){
        elResult.textContent = "Yakshanba";
    }
    else{
        elResult.textContent = "7 dan kichik son kiriting";
    }
})

elBtnDark.addEventListener ("click", function(){
   
    elBody.classList = "dark-mode";
    elResult.classList = "text-dark"
})

elBtnWhite.addEventListener ("click", function(){
    elBody.classList = "white-mode";
    elResult.classList = "text-white"
})