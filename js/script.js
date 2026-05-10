/* ------------------------------
   Contact Form Validation
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields before submitting.");
                event.preventDefault();
            } else {
                alert("Thank you! Your message has been submitted.");
            }
        });
    }
});

/* ------------------------------
   Product Search Filter
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("productSearch");
    const searchBtn = document.getElementById("searchBtn");

    if (searchInput && searchBtn) {
        searchBtn.addEventListener("click", () => {
            const query = searchInput.value.toLowerCase();
            const products = document.querySelectorAll("article");

            products.forEach(product => {
                const text = product.innerText.toLowerCase();
                product.style.display = text.includes(query) ? "block" : "none";
            });
        });
    }
});
