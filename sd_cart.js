"use strict";

var cartItem = document.getElementById("cart");
var addedItem = itemImg[0];

var qty = 3;
var itemTotal = (itemPrice[0]*qty).toFixed(2);
var grandTotal = 0;

cartItem.innerHTML = '<tr><th>Item</th><th>Description</th><th>Unit Price</th><th>Quantity</th><th>Item Price</th></tr>';
cartItem.innerHTML += '<tr>'+ 
'<td><image src = "' + addedItem + '" ></td>' +
'<td>' + itemTitle[0] + '</td>' +
'<td>' + '$'+itemPrice[0] + '</td>' +
'<td>' + qty + '</td>'+
'<td>' + '$'+itemTotal + '</td>'+
'</tr>';
grandTotal += parseFloat(itemTotal);

addedItem = itemImg[2];
qty = 1;
cartItem.innerHTML += '<tr>'+ 
'<td><image src = "' + addedItem + '" ></td>' +
'<td>' + itemTitle[2] + '</td>' +
'<td>' + '$'+itemPrice[2] + '</td>' +
'<td>' + qty + '</td>'+
'<td>' + '$'+itemTotal + '</td>'+
'</tr>';
grandTotal += parseFloat(itemTotal);

cartItem.innerHTML += '<tr>'+ 
'<th>Total</th>' + '<td></td>' + '<td></td>'+ '<td></td>' +
'<td>'+ '$'+grandTotal.toFixed(2) +'</td>' + '</tr>' 
