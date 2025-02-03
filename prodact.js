const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .cartjs");


// filterable-cards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // filterableCards
    filterableCards.forEach(cartjs => {

        cartjs.classList.add("hide");
        // filter or all is selected
        if (cartjs.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            cartjs.classList.remove("hide");
        }
    });
};

// filter button 
filterButtons.forEach(button => button.addEventListener("click", filterCards));