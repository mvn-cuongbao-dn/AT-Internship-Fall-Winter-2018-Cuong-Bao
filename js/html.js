'use strict';

let cartQuantity = document.getElementById('cart-quantity');
let cartList = document.getElementById('cart-list');

(function fillListIn(data) {
  let products = fetchedData();
  let items = data.map(function(item, key) {
  let disabled;    

  for (let i = 0; i < products.length; i++) {
    if (products[i] == item.id) {
      disabled = 'disabled';
    }
  }

  return (
    '<li id="product-'+ item.id +'" class="cart-item">' +
      '<figure class="product-figure" data-id="'+ item.id +'">' +
        '<img class="cart-img" src="'+ item.src +'" alt="">' +
        '<figcaption class="cart-content">' +
            '<h3 class="cart-title">Title: '+ item.title +'</h3>' +
            '<p class="cart-desc">Description: ' + item.desc + '</p>' + 
            '<span class="cart-price">$'+ item.price +'</span>' +
        '</figcaption>' +
        '<button class="cart-btn" '+ disabled +'>Add To Card</button>' +
      '</figure>' +
    '</li>');
  }).join('');
  
  cartQuantity.innerHTML = products.length;
  cartList.innerHTML = items;
})(data);

let addBtns = document.getElementsByClassName('cart-btn');
for (let i = 0; i < addBtns.length; i++) {
  addBtns[i].addEventListener('click', function() {
    this.disabled = true;
    let products = fetchedData();
    products.push(+this.parentElement.getAttribute('data-id'));
    cartQuantity.innerHTML = products.length;
    localStorage.setItem('products', JSON.stringify(products));
  });
}
