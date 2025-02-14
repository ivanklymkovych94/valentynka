document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    const container = document.querySelector(".container");


    card.style.transition = "top 0.5s";

 
    const showCard = () => card.style.top = "-90px";
    

    const hideCard = () => card.style.top = "0";

  
    container.addEventListener("mouseenter", showCard);
    container.addEventListener("mouseleave", hideCard);
    container.addEventListener("click", showCard);
    document.body.addEventListener("click", hideCard, true);


    container.addEventListener("touchstart", showCard);
    document.body.addEventListener("touchend", hideCard, true);
});
