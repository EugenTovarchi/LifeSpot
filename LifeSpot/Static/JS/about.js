const allComment = [];

function Comment() {
    this.userName = prompt("Как вас зовут ?")
    if (this.userName == null || this.userName === "")
        return

    this.date = new Date().toLocaleString();
    this.userAgent = window.navigator.userAgent;

    this.text = prompt("Напишите свой отзыв")
    if (this.text == null || this.text === "")
        return
}


/*Запросим пользовательский ввод
 и сохраним отзыв в объект*/


function addComment() {

    let comment = new Comment();
    if (!comment) return;

    allComment.push(comment);

    let rateComment = confirm("Желаете чтобы ваш комментарий оценили другие?");

    if (rateComment) {
        comment.rate = 0;
    } else {
        console.log("Комментарий не будет оцениваться!")
    }
    writeReview(comment)
}

//document.querySelector('.review-button button').addEventListener('click', addComment);

function addLike (id) {
    let element = document.getElementById(id);
    // Преобразуем текст элемента в массив, разбив его по пробелам (так как счётчик лайков у нас отделен от символа ❤️пробелом)
    let array = element.innerText.split(' ')
    // Вытащим искомое значение счётчика и сразу же преобразуем его в число, так как
    // при сложении любого значения со строкой в JS будет строка, а нам этого не требуется
    let resultNum = parseInt(array[array.length - 1], 10);

    // Увеличим счётчик
    resultNum += 1

    // Сохраним измененное значение обратно в массив
    array[array.length - 1] = `${resultNum}`

    // Обновим текст элемента
    element.innerText = array.join(' ')
}

//Пишем отзывы
const writeReview = (comment) => {
    let likeCounter = '';

    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${comment['userName']}</b>  ${comment['date']}</i></p>` +
        `<p>${comment['text']}</p>` + '</div>';

    if (comment.hasOwnProperty('rate')) {
        let commentId = Math.random();
        likeCounter += '<button id="' + commentId + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${comment.rate}</button>`

        document.getElementsByClassName('reviews')[0].innerHTML += '<div class="review-text">' +
            `${likeCounter}` +
            `<p>Рейтинг отзыва: ${comment['rate']}</p>` + '</div>';

    }
}

function addImageToSlide() {
    const someText = "TEST!";
    const parentOfSlide = document.getElementById("slide");
    parentOfSlide.innerHTML = `<div><p>${someText}</p></div>`;
}
