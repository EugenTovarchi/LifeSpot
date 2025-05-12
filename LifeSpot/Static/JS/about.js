let reviews = [];
function takeReview() {
    const name = prompt("Введите ваше имя: ") || "anonymous";
    const textReview = prompt("Оставьте ваш комментарий: ");

    if (textReview) {
        const newReview =
        {
            name: name,
            textReview: textReview,
            date: new Date().toLocaleDateString()
        };

        reviews.unshift(newReview);

        if (reviews.length > 5) {
            reviews = reviews.slice(0, 5);
        }
        updateReviewDisplay(newReview);
    }
}

const updateReviewDisplay = review =>
{
    document.getElementsByClassName('reviews')[0].innerHTML +=
        '<div class="review-text">\n' +
        `<p> <i> <b>${review.name}</b> \t ${review.date}</i></p>` +
        `<p>${review.textReview}</p>` +
        '</div>';
}


window.onload = function ()
{
    updateReviewDisplay();
}
