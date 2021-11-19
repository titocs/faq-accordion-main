"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const cardHeaders = document.getElementsByClassName("card-heading");
    for(const cardHeader of cardHeaders) {
        const cardBody = cardHeader.nextElementSibling;
        cardBody.classList.add("card-body-none"); 
        cardHeader.addEventListener("click", (event) => {
            for(const cardHeader of cardHeaders) {
                const cardBody = cardHeader.nextElementSibling;
                const cardHeaderImg = cardHeader.querySelector("img");
                const cardHeadingH2 = cardHeader.querySelector("h2");
                if(cardHeader != event.currentTarget) {
                    cardBody.classList.add("card-body-none");
                    cardHeaderImg.classList.remove("img-rotation");
           
                    cardHeadingH2.classList.remove("card-heading-h2");
                }
                else{
                    cardBody.classList.toggle("card-body-none");
                    cardHeaderImg.classList.toggle("img-rotation");
                    cardHeadingH2.classList.toggle("card-heading-h2");
                }
            }
        });
    };
});
