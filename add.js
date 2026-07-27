const productContainer = document.getElementById("product-container");

function loadProducts() {

productContainer.innerHTML = "";

products.forEach(product => {

productContainer.innerHTML += `

<div class="product">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<span class="badge">${product.badge}</span>

<h3>${product.name}</h3>

<p class="price">${product.price}</p>

<div class="sizes">

${product.sizes.map(size=>`<span class="size">${size}</span>`).join("")}

</div>

<div class="buttons">

<a href="#" class="buy">Buy Now</a>

<a href="https://wa.me/91YOURNUMBER" target="_blank" class="whatsapp">

WhatsApp

</a>

</div>

</div>

</div>

`;

});

}

loadProducts();
