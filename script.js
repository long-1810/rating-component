const submitButton = document.getElementsByClassName("submit")[0];
const submitContainer = document.getElementsByClassName("submit-container")[0]
const ratingContainer = document.getElementsByClassName("rating-container")[0]
const ratings = [...document.getElementsByClassName("rating-score")]
const ratingTitle = document.getElementsByClassName("rating")[0]

submitButton.addEventListener("click", () => {
    ratingContainer.classList.add("hidden");
    submitContainer.classList.remove("hidden");
})

ratings.forEach(rating => {
    rating.addEventListener("click", () => {
        ratingTitle.innerHTML = `You selected ${rating.innerHTML} out of 5` 
    })
});

