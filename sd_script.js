// Author: Sheela Aprameya
// Date: 03/19/2024  

// Filename: sd_script.js

"use strict";

var itemCardId = new Array("choc-chip-card", "dbl-choc-chip-card","brownies-card");
var itemImg = new Array("chocolate chip cookies on a plate.jpg","double chocolate chip cookies on a plate.jpg", "brownies on a plate.jpg");
var itemAltTxt = new Array("chocolate chip cookies on a plate", "double chocolate chip cookies on a plate", "brownies on a plate");
var itemId = new Array("choc-chip", "dbl-choc-chip", "brownies");
var itemTitle = new Array("Classic Chocolate<br>Chip Cookies", "Double Chocolate<br>Chip Cookies", "Brownies");
var itemPrice = new Array(2.85, 2.85, 4.25);
var itemButton;
var orderButton = document.getElementById("order-button");

var addedItemImg = Array();
var addedItemTitle = Array();
var addedItemPrice = Array();
var addedItemQty = Array();

var cartHeader = '<table class="cart" id="cart"><tbody><tr><th>Item</th><th>Description</th><th>Unit Price</th><th>Quantity</th><th>Item Price</th></tr>';
var grandTotal = 0;
var item = document.getElementById("menu-main");
var aside = document.getElementById("aside");
item.innerHTML = "";
for(var i = 0; i<itemCardId.length; i++){
    item.innerHTML += '<article class="item-card" id="' + itemCardId[i] + '">'+
    '<img src="' + itemImg[i] + '" alt="'+ itemAltTxt[i] + '" class = "item-img" id = "' + itemId[i] + '">' +
    '<h3 class="item-title" id="title">' + itemTitle[i] + '</h3> ' +
    '<div class="price">'+'$' + itemPrice[i] + '</div>' + 
    '<button class="order-button" id="' + (i+1) + '"> <a href="sd_cart.html">Add to cart</a></button>';
}
item.innerHTML += '</article>';

function orderAction(event){
    // event.preventDefault();
    alert("Thank you for shopping with us.");
    window.location = "index.html";
    return false;
    
}