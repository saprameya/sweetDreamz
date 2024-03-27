"use strict";

var itemCardId = new Array("choc-chip-card", "dbl-choc-chip-card","brownies-card");
var itemImg = new Array("chocolate chip cookies on a plate.png","double chocolate chip cookies on a plate.png", "brownies on a plate.png");
var itemAltTxt = new Array("chocolate chip cookies on a plate", "double chocolate chip cookies on a plate", "brownies on a plate");
var itemId = new Array("choc-chip", "dbl-choc-chip", "brownies");
var itemTitle = new Array("Classic Chocolate<br>Chip Cookies", "Double Chocolate<br>Chip Cookies", "Brownies");
var itemPrice = new Array("$2.85", "$2.85", "$4.25");
var buttonNum;

var item = document.getElementById("menu-main");
item.innerHTML = "";
for(var i = 0; i<itemCardId.length; i++){
    item.innerHTML += '<article class="item-card" id="' + itemCardId[i] + '">'+
    '<img src="' + itemImg[i] + '" alt="'+ itemAltTxt[i] + '" class = "item-img" id = "' + itemId[i] + '">' +
    '<h3 class="item-title" id="title">' + itemTitle[i] + '</h3> ' +
    '<div class="price">' + itemPrice[i] + '</div>' + 
    '<button type="submit" class="order-button" id="' + (i+1) + '">Add to cart</button>';
}

item.innerHTML += '</article>'

if(itemCardId.length < 4){
    item.innerHTML += "<article></article>"
}



