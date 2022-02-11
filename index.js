const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};


//make list of store items
const storeItems = document.querySelector('.store--item-list')
const cartItemList = document.querySelector('.cart--item-list')
const total = document.querySelector('.total-number')


function renderStoreItems() {
for(const item of state.items) {
let listItemInStore = document.createElement('li')
listItemInStore.innerHTML = `<div class="store--item-icon">
<img src="assets/icons/${item.id}.svg" alt="${item.name}" />
</div>
<button>Add to cart</button>`
storeItems.append(listItemInStore)

//make buttons add to cart
const button = listItemInStore.querySelector('button')
button.addEventListener('click', function() {
if(state.cart.filter(x => x.name === item.name).length === 1) {
    for(let itemInCart of state.cart){
      if(itemInCart.name === item.name) {
        itemInCart.quantity++
      }
    }
  }
  else{
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    }
 
    state.cart.push(cartItem) 
  }
    renderCartItems()
    renderTotal()
})
}
}




function renderCartItems() {
cartItemList.innerHTML = ""

  for(let itemInCart of state.cart){
  let cartItem = document.createElement('li')
  cartItem.innerHTML = `<img
  class="cart--item-icon"
  src="assets/icons/${itemInCart.id}.svg"
  alt="${itemInCart.name}"
/>
<p>${itemInCart.name}</p>
<button class="quantity-btn remove-btn center">-</button>
<span class="quantity-text center">${itemInCart.quantity}</span>
<button class="quantity-btn add-btn center">+</button>`
cartItemList.append(cartItem)

const addButton = cartItem.querySelector('.add-btn')
const removeButton = cartItem.querySelector('.remove-btn')

addButton.addEventListener('click', function() {
          itemInCart.quantity++
      renderCartItems()
      renderTotal()
  })

removeButton.addEventListener('click', function() {
    itemInCart.quantity--
    if(itemInCart.quantity === 0) {
      state.cart.splice(state.cart.indexOf(itemInCart),1)
    }   
renderCartItems()
renderTotal()
})

}

}


function renderTotal() {
  let totalNumber = 0
 for(let itemInCart of state.cart){
  totalNumber += (itemInCart.quantity * itemInCart.price)
 }
  total.innerText = `£${totalNumber.toFixed(2)}`
}



renderStoreItems()



