document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const card = document.querySelector(".card");
    const body = document.querySelector("body");
    const trigger = document.querySelector("#trigger");

    card.style.transition = "top 0.5s";

    const showCard = (event) => {
        event.stopPropagation(); // Запобігає закриттю одразу після відкриття
        card.style.top = "-90px";
        trigger.checked = true; // Активує чекбокс для роботи CSS-анімації
    };

    const hideCard = () => {
        setTimeout(() => {
            card.style.top = "0";
            trigger.checked = false; // Деактивує чекбокс
        }, 200);
    };

    // Події для миші
    container.addEventListener("mouseenter", showCard);
    container.addEventListener("mouseleave", hideCard);
    container.addEventListener("click", showCard);
    body.addEventListener("click", hideCard, true);

    // Події для сенсорних пристроїв
    container.addEventListener("touchstart", showCard);
    body.addEventListener("touchstart", hideCard, true);
});
