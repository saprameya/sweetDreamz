"use strict";

var itemCardId = new Array("choc-chip-card", "dbl-choc-chip-card","brownies-card");
var itemImg = new Array("chocolate chip cookies on a plate.png","double chocolate chip cookies on a plate.png", "brownies on a plate.png");
var itemAltTxt = new Array("chocolate chip cookies on a plate", "double chocolate chip cookies on a plate", "brownies on a plate");
var itemId = new Array("choc-chip", "dbl-choc-chip", "brownies");
var itemTitle = new Array("Classic Chocolate<br>Chip Cookies", "Double Chocolate<br>Chip Cookies", "Brownies");
var itemPrice = new Array(2.85, 2.85, 4.25);
var itemButton;


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
    // '<button onclick ="addToCart(this)" type="submit" class="order-button" id="' + (i+1) + '">Add to cart</button>';
}
item.innerHTML += '</article>';

// if(itemCardId.length < 4){
//     item.innerHTML += "<article></article>"
// }


// var cart = document.getElementById("shopping-cart");


// function addToCart(item){

//     for (var i = 0; i < itemCardId.length; i++){
//         if(item.id == i+1){
//             addedItemImg.push(itemImg[i]);
//             addedItemTitle.push(itemTitle[i]);
//             addedItemPrice.push(itemPrice[i]);
//             // addedItemQty.push(1);
//         }
//     }
    
//     showCart();
// }

// function showCart(){
//     var cartItems = "";
//     grandTotal = 0;
//     for(var i = 0; i < addedItemImg.length; i++){

//         var itemTotal = addedItemPrice[i]*2;
//         cartItems += 
//         '<tr>'+ 
//         '<td><image src = "' +  addedItemImg[i] + '" ></td>' +
//         '<td>' + addedItemTitle[i] + '</td>' +
//         '<td>' + '$'+addedItemPrice[i] + '</td>'+
//         '<td>' + 2 + '</td>'+
//         '<td>' + '$'+ itemTotal.toFixed(2) + '</td>'+
//         '</tr>';
        
//         grandTotal += parseFloat(itemTotal);
//     }



//     // alert(addedItemTitle[i]);
//     cart.innerHTML = cartHeader + cartItems + '<tr>'+ 
//     '<th>Total</th>' + '<td></td>' + '<td></td>'+ '<td></td>' +
//     '<td>'+ '$'+grandTotal.toFixed(2) +'</td>' + '</tr></table>'
//     // alert(cart.innerHTML);
//     cart.style.display = "block";   

// }