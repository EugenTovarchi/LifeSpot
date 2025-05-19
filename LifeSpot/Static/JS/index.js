let checker = function (newVisit)
{
    if(window.sessionStorage.getItem("userAge")>= 18)
    {
        if(newVisit)
        {
            alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + new Date().toLocaleString());
        }
        else
        {
            alert("Наши трансляции не предназначены для лиц моложе 18 лет. ВыL будете перенаправлены");
            window.location.href = "http://www.google.com"
        }
    }
}

function handlingSession ()
{
    if (!sessionStorage.getItem("startDate"))
    {
        sessionStorage.setItem("startDate", new Date().toLocaleString())
    }
    if(!sessionStorage.getItem("userAgent"))
    {
        sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }
    if(!sessionStorage.getItem("userAge"))
    {
        sessionStorage.setItem("userAge", prompt("Введите ваш возраст:"))
        initEnter();
    }
}

function initEnter ()
{
    let newVisit = {
        userAgent:sessionStorage.getItem("userAgent"),
        startDate:sessionStorage.getItem("starDate"),
        userAge:sessionStorage.getItem("userAge")
    }
    checker(newVisit);
}

/*
* Вывод данных сессии в консоль
 */
let sessionLog = function (){
    console.log("Начало сессии: " + sessionStorage.getItem("startDate"))
    console.log("Ваш пользователя:"+ sessionStorage.getItem("userAge"))
    console.log("Данные клиента:" + sessionStorage.getItem("userAgent"))
}
/*
* Функция для фильтрации контента
* Будет вызываться благодаря атрибуту oninput на index.html.
* */

function filterContent(){
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++ ){
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if(!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())){
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Всплывающее окно будет показано по таймауту
* 
* */
// setTimeout(() =>
//     alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
// 7000);




