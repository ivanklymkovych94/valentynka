document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");

    document.querySelector(".container").addEventListener("mouseenter", () => card.style.top = "-90px");
    document.querySelector(".container").addEventListener("mouseleave", () => card.style.top = "0");
    document.querySelector(".container").addEventListener("click", () => card.style.top = "-90px");
    document.body.addEventListener("click", () => card.style.top = "0", true);

    card.style.transition = "top 0.5s";
});
