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

/* searcher bg appearence */

const searcherBar = document.querySelector("#searcher");

searcherBar.addEventListener("click", () => {
    searcherBar.classList.toggle("active");
    searcherBar.classList.toggle("show");
});

/* searcher products */

const product = document.querySelectorAll(".product");

searcherBar.addEventListener("keyup", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    product.forEach((prod) => {
        const title = prod.querySelector("h3").textContent.toLocaleLowerCase();
        const description = prod.querySelector("p").textContent.toLocaleLowerCase();
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            prod.classList.add("show");
        }
        else {
            prod.classList.remove("show");
        }
    });
});