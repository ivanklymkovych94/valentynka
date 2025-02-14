document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    const container = document.querySelector(".container");

    card.style.transition = "top 0.5s";

    const showCard = (event) => {
        event.stopPropagation();
        card.style.top = "-90px";
    };

    const hideCard = () => {
        setTimeout(() => {
            card.style.top = "0";
        }, 300); 
    };

    // Події для миші
    container.addEventListener("mouseenter", showCard);
    container.addEventListener("mouseleave", hideCard);
    container.addEventListener("click", showCard);
    document.body.addEventListener("click", hideCard, true);

    // Події для сенсорних пристроїв
    container.addEventListener("touchstart", showCard);
    document.body.addEventListener("touchstart", hideCard, true);
});
