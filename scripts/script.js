// JavaScript Document
console.log("hi");

// var favButton = document.querySelector("article.productFloater:first-of-type button.fav")

// favButton.onclick = faving;

// function faving(){
//     let firstProduct = favButton.closest("article");
//     firstProduct.classList.toggle("faved");
// }

var favButtons = document.querySelectorAll("article.productFloater button:first-of-type")

for (let i = 0; i < favButtons.length; i++) {
  favButtons[i].onclick = favorite;
}

function favorite(event){
    let clickedFavButton = event.target;

    let heartButton = clickedFavButton.closest("article");
    heartButton.classList.toggle("faved");


    let favlistAmount = document.querySelector("header a.counterbutton span.favcounter");

    let currentFavAmount = favlistAmount.innerHTML;

    currentFavAmount = parseInt(currentFavAmount);

    let newFavAmount;

    if(heartButton.classList.contains("faved")) {
        newFavAmount = currentFavAmount + 1;
    } else {
        newFavAmount = currentFavAmount - 1;
    }

    favlistAmount.innerHTML = newFavAmount;
}