const navToggle = () => {
    const nav = document.getElementById("nav");
    const hamburger = document.getElementById("hamburger");

    hamburger.dataset.active == "false" ? hamburger.dataset.active = "true" : hamburger.dataset.active = "false";
    nav.classList.toggle("-translate-y-full");
}

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", navToggle);
