const container = document.getElementById("product-container");
const search = document.getElementById("search");

let currentCategory = "All";

function displayProducts() {

const keyword = search.value.toLowerCase();

const filtered = products.filter(product => {

const searchMatch =
product.name.toLowerCase().includes(keyword) ||
product.category.toLowerCase().includes(keyword);

const categoryMatch =
currentCategory === "All" ||
product.category === currentCategory ||
product.badge === currentCategory;

return searchMatch && categoryMatch;

});

container.innerHTML = "";

filtered.forEach(product => {

container.innerHTML += `

<div class="product">

<span class="badge">${product.badge}</span>

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p class="price">${product.price}</p>

<p>${product.description}</p>

<div class="sizes">

${product.sizes.map(size=>`<span class="size">${size}</span>`).join("")}

</div>

<div class="buttons">

<a class="buy" href="#">

Buy Now

</a>

<a class="whatsapp"

target="_blank"

href="https://wa.me/91YOURNUMBER?text=Hi%20I%20want%20${encodeURIComponent(product.name)}">

WhatsApp

</a>

</div>

</div>

</div>

`;

});

}

displayProducts();

search.addEventListener("keyup",displayProducts);

document.querySelectorAll(".filters button").forEach(button=>{

button.addEventListener("click",()=>{

document.querySelectorAll(".filters button")

.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

currentCategory = button.innerText;

displayProducts();

});

});
