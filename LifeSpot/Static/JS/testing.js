// // Создаем объект Map
// let myMap = new Map();
// myMap.set("Германия", "Берлин")
// myMap.set("Швеция", "Стокгольм")
// myMap.set(1, "Москва")
//
// let newArray = [];
// // Перебор Map в цикле for
// for (let result of myMap){
//     newArray.push(result);
// }
// console.log(newArray);
//
// let newArrayOfStrings = [];
// // Перебор Map с помощью Array.from
// // Позволяет на лету выполнять операции с парой ключ-значение
// Array.from(myMap, ([key,value]) => newArrayOfStrings.push(`${key} - ${value}`) );
// console.log(newArrayOfStrings);

const saveInput= function (){
    // Вытащим значение текстового поля (как у нас уже делается при фильтрации)
    let currentText = document.documentElement.getElementsByTagName('input')[0].value.toLocaleString();
    // Покажем окно с прошлым и новым значением
    alert("Last text: " + this.lastText + '\n'+ 'New input: ' + currentText);

    // Сохраним новое значение в контекст
    this.lastText = currentText;
}