function filterContent() { 

    let inputValue = inputParseFunction();
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector(".video-title").innerText;

        if (!videoText.toLowerCase().includes(inputValue.toLowerCase())) {
            elements[i].style.display = 'none'; // Скрыть, если не подходит
        }
        else {
            elements[i].style.display = 'inline-block'; // Показать, если подходит           
        }
    }
}