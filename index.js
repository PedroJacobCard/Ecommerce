const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}


/* searcher products */

const searchBox = document.getElementsByClassName("search-box")[0];
const products = document.querySelectorAll(".pro");

window.addEventListener("load", () => {
    products.forEach(element => {
        const {img, h3, h5} = element;
        let card = document.createElement("a");
        card.innerHTML = `<img src="${img}" alt="">
        <div class="product-details">
            <h3>${h3}</h3>
            <p>${h5}</p>
        </div> `;
        searchBox.appendChild(card);
    });
});