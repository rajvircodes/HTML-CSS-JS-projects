let shop = document.getElementById('shop');

let shopItemData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    desc: "High-quality wireless headphones with noise cancellation.",
    img: "images/img-01.jpg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    desc: "Stylish smart watch with health and fitness tracking special watch",
    img: "images/1_4616627d-19c6-448d-9c89-85e13cdfded3.webp"
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1499,
    desc: "Ergonomic gaming mouse with RGB lighting and fast response.",
    img: "images/img-02.jpg"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 2599,
    desc: "Portable Bluetooth speaker with powerful bass and clear sound.",
    img: "images/img-03.webp"
  }
];

let basket = [{
  id: "dkjsl",
  item: 1
}];

let generateShop = () => {
  return shop.innerHTML = shopItemData.map((x) => {
    let { id, name, price, desc, img } = x;
    return `
      <div class="item" id=product-id-${id}>
        <img src=${img} alt="${name}" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
        
        <div class="price-quantity">
          <h2>$ ${price}</h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
            <div class="quantity" id=${id}>0</div>
            <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
          </div>
        </div>
        </div>
      </div>
    `;
  }).join("");
};

generateShop();

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search ? search.item : 0;
};

let increment = (id) => {
  let selectedItem = id;

  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1
    });

    
  } else {
    search.item += 1;
  }

  

  update(selectedItem);
};

let decrement = (id) => {
  let selectedItem = id;

  let search = basket.find((x) => x.id === selectedItem);
  
  if (search === undefined) return;

  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  
  basket = basket.filter((x) => x.item !== 0);

  update(selectedItem);
};