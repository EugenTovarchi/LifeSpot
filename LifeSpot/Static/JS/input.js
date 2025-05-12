function sessionLog()
{
    for ([key, value] of session)
    {
        console.log(key +":" + value)
    }
}

// создадим объект Map для хранения сессии
let session = new Map();
// Обработка сессии (объявлено через declaration)
//function handleSession() {
//    // создадим объект Map для хранения сессии
//    let session = new Map();
//    // Сохраним UserAgent
//    session.set("userAgent", window.navigator.userAgent)

//    // Запросим возраст пользователя и тоже сохраним
//    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

//    // Проверка на возраст и сохранение сессии
//    if (session.get("age") >= 18) {
//        let startDate = new Date().toLocaleString();

//        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
//        session.set("startDate", startDate)
//    }
//    else
//    {
//        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
//        window.location.href = "http://www.google.com"
//    }

//    // Теперь мы возвращаем объект сессии
//    return session;
//}

function handleSession(checkAge)
{
    
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)
    
    session.set("startDate", new Date().toLocaleString())
    
    checkAge();
    // Теперь мы возвращаем объект сессии
    return session;
}

function checkAge()
{
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    // Проверка на возраст и сохранение сессии
    if (session.get("age") >= 18)
    {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + session.get("startDate"));
        inviteToInstagram()
    }
    else
    {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }

    function inviteToInstagram()
    {
        setTimeout(function ()
        {
            if (confirm('Вступайте в наш Instagram!\nНажмите OK, чтобы перейти.'))
            {
                window.open('https://www.instagram.com/', '_blank');
            }
        }, 2000);
    } 
}