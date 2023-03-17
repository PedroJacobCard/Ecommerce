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

const searchItems = document.getElementById("search-items");
const searchBox = document.getElementsByClassName("search-box")[0];
const products = document.querySelectorAll(".pro");

window.addEventListener("load", () => {
    products.forEach(element => {
        const img = element.querySelector("img").getAttribute("src");
        const h3 = element.querySelector("h3").innerText;
        const h5 = element.querySelector("h5").innerText;
        const url = element.querySelector("a").getAttribute("href");

        let card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `<img src="${img}" alt="">
        <div class="product-details">
            <h3>${h3}</h3>
            <p>${h5}</p>
        </div> `;
        
        let link = document.createElement("a");
        link.href = url;
        link.appendChild(card);
                   
        searchBox.appendChild(link);
    });
});

searchItems.addEventListener("keyup", () => {
    let filter = searchItems.value.toLocaleUpperCase();
    let a = searchBox.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++){
        let b = a[i].getElementsByClassName("product-details")[0];
        let c = b.getElementsByTagName("h3")[0];

        let textValue = c.textContent || c.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        }
        else {
            a[i].style.display = "none";
        }

        if (searchItems.value == 0) {
            
        }
    }
})