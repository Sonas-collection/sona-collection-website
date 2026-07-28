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
  
if (filtered.length === 0) {
    container.innerHTML = `
        <div style="text-align:center;padding:50px;font-size:20px;">
            No products found.
        </div>
    `;
    return;
}
  
filtered.forEach(product => {

container.innerHTML += `

<div class="product">

<span class="badge">${product.badge}</span>

<img
src="${product.image}"
alt="${product.name}"
class="product-image"
data-id="${product.id}">

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

const popup = document.getElementById("product-popup");
const popupImage = document.getElementById("popup-image");
const popupName = document.getElementById("popup-name");
const popupPrice = document.getElementById("popup-price");
const popupDescription = document.getElementById("popup-description");
const popupSizes = document.getElementById("popup-sizes");
const popupWhatsapp = document.getElementById("popup-whatsapp");
const closePopup = document.querySelector(".close-popup");

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

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("product-image")) {

        const id = Number(e.target.dataset.id);

        const product = products.find(p => p.id === id);

        popup.classList.add("active");

        popupImage.src = product.image;
        popupName.innerText = product.name;
        popupPrice.innerText = product.price;
        popupDescription.innerText = product.description;

        popupSizes.innerHTML = product.sizes
            .map(size => `<span>${size}</span>`)
            .join("");

        popupWhatsapp.href =
            `https://wa.me/91YOURNUMBER?text=Hi, I want ${encodeURIComponent(product.name)}`;

    }

});

closePopup.addEventListener("click", () => {

    popup.classList.remove("active");

});

popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.classList.remove("active");

    }

});

// ================= COLLECTION CARDS =================

document.querySelectorAll(".collection-card").forEach(card => {

    card.addEventListener("click", () => {

        const title = card.querySelector("h3").innerText;

        currentCategory = title;

        document.querySelectorAll(".filters button").forEach(btn => {

            btn.classList.remove("active");

            if (btn.innerText === title) {
                btn.classList.add("active");
            }

        });

        displayProducts();

        document.getElementById("products").scrollIntoView({
            behavior: "smooth"
        });

    });

});
