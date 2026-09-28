// JavaScript Document
console.log("hi");

// var favButton = document.querySelector("article.productFloater:first-of-type button.fav")

// favButton.onclick = faving;

// function faving(){
//     let firstProduct = favButton.closest("article");
//     firstProduct.classList.toggle("faved");
// }

var favButtons = document.querySelectorAll("article.productFloater button:first-of-type, #koopbuttons button:first-of-type")

for (let i = 0; i < favButtons.length; i++) {
  favButtons[i].onclick = favorite;
}

function favorite(event){
    let clickedFavButton = event.target;

    let heartButton = clickedFavButton.closest("article");
    heartButton.classList.toggle("faved");


    let favlistAmount = document.querySelector("header a.counterbutton span.favcounter");
    let favlistAmountDesktop = document.querySelector("header div.desktopOnly a.counterbutton span.favcounter");

    let currentFavAmount = favlistAmount.innerHTML;

    currentFavAmount = parseInt(currentFavAmount);

    let newFavAmount;

    if(heartButton.classList.contains("faved")) {
        newFavAmount = currentFavAmount + 1;
    } else {
        newFavAmount = currentFavAmount - 1;
    }

    favlistAmount.innerHTML = newFavAmount;
    favlistAmountDesktop.innerHTML = newFavAmount;
}

var basketButtons = document.querySelectorAll("article.productFloater button:nth-of-type(2)")

for (let i = 0; i < basketButtons.length; i++) {
  basketButtons[i].onclick = addToCart;
}

function addToCart(event){
    // let clickedBasketButton = event.target;

    // let heartButton = clickedBasketButton.closest("article");
    // heartButton.classList.toggle("faved");


    let cartAmount = document.querySelector("header a.counterbutton span.cartcounter");
    let cartAmountDesktop = document.querySelector("header div.desktopOnly a.counterbutton span.cartcounter");

    let currentCartAmount = cartAmount.innerHTML;

    currentCartAmount = parseInt(currentCartAmount);

    let newCartAmount = currentCartAmount + 1;

    cartAmount.innerHTML = newCartAmount;
    cartAmountDesktop.innerHTML = newCartAmount;
}

// Nacht modus
let isNachtModusAan = false;

function toggleNachtModus() {
    if (isNachtModusAan) {
        document.documentElement.style.setProperty("--color-background", "#151515")
        document.documentElement.style.setProperty("--color-text", "#EAEAEA") 
        document.documentElement.style.setProperty("--icon-black", "#fff") 
        document.documentElement.style.setProperty("--background-image", "url(../images/581_s4756884n2ht6247-dark.webp)")
        isNachtModusAan = false;
    }
    else {
        document.documentElement.style.setProperty("--color-background", "#ffffff")
        document.documentElement.style.setProperty("--color-text", "#333")
        document.documentElement.style.setProperty("--icon-black", "#000")     
        document.documentElement.style.setProperty("--background-image", "url(../images/581_s4756884n2ht6247.webp)")
        isNachtModusAan = true;
    }
}