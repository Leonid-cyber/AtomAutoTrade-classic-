
// =====================================================
// ======= ФУНКЦИИ =====================================
// =====================================================

// === СТРЕЛОЧНЫЕ ФУНКЦИИ ===

// // Создание функции и передача туда аргументов
// let arrowFunctionSum = (number1, number2, number3) => number1 * number2 * number3;
// console.log(arrowFunctionSum(2, 2, 2));

// Создание функции выводящей случайные числа
// let index = 0;
// let showRandomNumber2 = (count) => {for (;index < count;) index++, console.log(Math.random());}
// let showRandomNumber3 = (count) => {if (0 < count) count--, console.log(Math.random()), showRandomNumber2(count)};
// console.log(showRandomNumber2(10));
// console.log(showRandomNumber3(10));

// === ДЕКЛАРАТИВНЫЕ ФУНКЦИИ ===

// Создание функции
// function calcSumm(numberOne = 0, numberTwo = 0, numberThree = 0) {
//     let numberSumm = numberOne + numberTwo + numberThree;
//    if (!(numberOne && numberTwo && numberThree)) {
//         console.log('Введите все слагаемые!');
//    } else {
//         console.log('Сумма: ' + numberSumm);
//    }
// }
// Вызов функции
// calcSumm(0, 0, 0);

// Создание функции с параметрами
// function showMessage(num) {
//     console.log(num);
//     let timeID = setTimeout(showMessage, 100, num * 2);
//     if (num > 60000) {
//         clearTimeout(timeID);
//         console.log('END');
//     }
// }
// Вызов функции и передача в её параметры - аргументов
// showMessage(2);

// === Планирование вызова функции ===

// Вызов функции с заданным интервалом
// let result = 0;
// function showNumber(num) {
//     result +=num;
//     console.log(result);
//     if (result > 60000) {
//         clearInterval(timeID);
//         console.log('END');
//     }
// }
// let timeID = setInterval(showNumber, 100, 5000);

// Остановка вызова функции
// let numberErected = 1;
// function autoNumberErected(number = 1) {
//     numberErected = numberErected * number;
//     console.log(numberErected);
//     if (numberErected >= 64) {
//         clearInterval(stopTime);
//         console.log("STOP!!!");
//     }
// }
// let stopTime = setInterval(autoNumberErected, 500, 2);

// Объединение данных в одну строку
// function unionNumbers(number1, number2) {
//     return `Первое число: ${(number1)}, второе: ${number2}!`;
// }
// function showMessage(message) {
//     console.log(message);
// }

// Выполнение действия функцией
// function initialMessage(number1, number2) {
//     showMessage(unionNumbers(number1, number2));
// }
// initialMessage(10, 'просто тыква')

// Возврат значения функцией
// function calcNumberErected(number, degree) {
//     let numberErected = 1;
//     for (let i = 0; i < degree; i++) {
//         numberErected = numberErected * number;
//     }
//     return numberErected;
// }
// function calcNumberErectedInDegree(number, degree, degreeInDegree) {
//     let NumberErectedInDegree = 1;
//     for (let i = 0; i < degreeInDegree; i++) {
//         NumberErectedInDegree = NumberErectedInDegree * calcNumberErected(number, degree);
//     }
//     return NumberErectedInDegree;
// }
// function showResult(number, degree, degreeInDegree) {
//     console.log('Degree in degree: ' + calcNumberErectedInDegree(number, degree, degreeInDegree));
// }
// showResult(8, 3, 3);



// ================================================================
// ======= УСЛОВНЫЕ ОПЕРАТОРЫ =====================================
// ================================================================

// if (2 > 1) {
//     function showMessage() {
//         console.log('Message666!');
//     }

// }
// showMessage();

// let showMessage = function showMessage () {
//     console.log('Message666!');
// }
// if (2 > 1) {
//     showMessage();
// }
// showMessage();



// =====================================================
// ======= ОБЪЕКТЫ =====================================
// =====================================================

// Создание объекта и запись имени ключа объекта через переменные
// let brain = 'stupid', leavers = 'earth leaver';
// let earthParametr = {
//     diameter: 12038,
//     water: 80,
//     ground: 20,
//     [leavers]: 'human',
//     [brain + ' human']: true,
//     'human population': {
//         men: 3.5,
//         woman: 3.5,
//         children: 1,
//     }
// };
// Обращение к значению ключа через ключ
// console.log(earthParametr['human population']['men']);
// console.log(earthParametr['stupid human']);

// // Передача значения ключа в объекте через параметры функции
// // Задаём название ключа
// let colorCar = "Цвет", count = 'Выпущено';
// // Создаем функцию с параметрами
// function car(color, type, clereance, counter, city) {
//     return {
//         [colorCar]: color,
//         type: type,
//         clereance: clereance,
//         [count]: 1024,
//         counter,
//         [city]: 'Vologda',
//     };
// }
// // Кладём в переменную вызов функции и аргументы для неё же
// let theCar = car('red', 'sedan', 150, 'Russia', 'Город');
// // Вызываем функцию через переменную
// console.log(theCar);

// === Редактирование объекта ===

// let userInfo = {
//     name: 'Katya',
// };
// // Добавление пары ключ-значение
// userInfo['age'] = 30;
// userInfo['breakDance'] = true;
// // Добавление в объект - объекта
// userInfo['adress'] ={
//     city: 'Muha ne letala',
//     street: 'po-Navoznoi',
//     home: 35,
// };

// console.log('До:'); // Объект до изменений
// console.log(userInfo); // Объект до изменений
// console.log(userInfo['adress']); // Объект до изменений

// // Удаление ключа и его значения
// delete userInfo['breakDance'];
// // Удаление ключа в объекте объекта
// delete userInfo['adress']['home'];
// // Изменение значения ключа
// userInfo['age'] = 25;

// console.log('После:'); // Объект после изменений
// console.log(userInfo); // Объект после изменений
// console.log(userInfo['adress']); // Объект после изменений

// // Копирование объекта
// let carInfo = {
//     car: 'Logan',
//     weight: 1280,
// };
// console.log('Оригинал:');
// console.log(carInfo);
// let carInfoCopy = carInfo;
// console.log('Копия:');
// console.log(carInfoCopy);
// console.log('Изменённая копия:');
// carInfoCopy['car'] = 'Shevrole';
// console.log(carInfo);

// // Метод работы с объектом, для копирования объектов
// // Создаем изначальный объект
// let carInfo = {
//     car: 'Logan',
//     weight: 1280,
//     year: 2014,
//     type: 'sedan',
// };
// // Копируем объект через метод Object.assign
// let carInfoCopy = Object.assign({}, carInfo);
// carInfoCopy['type'] = 'pikap';
// carInfoCopy['car'] = 'shevrole';
// console.log(carInfo);
// console.log(carInfoCopy);

// // Копирование с добавлением пары ключ-значение
// let carInfo = {
//     car: 'Logan',
//     weight: 1280,
// };
// console.log(carInfo);
// Object.assign(carInfo, {['year set']: 2014, type: 'sedan'})
// console.log(carInfo);

// // Добавление нескольких новых свойств
// let carInfo = {
//     car: 'Logan',
//     weight: 1280,
//     tracks: undefined,
// };
// Object.assign(carInfo, {['year set']: 2014, type: 'sedan'})
// delete carInfo['car'];

// === Проверка на наличие ключа в объекте ===

// // Только на операторе IF
// if (carInfo['car']) {
//     console.log(carInfo['car']);
// }
// //  Условное ветвеление и оператор in
// if ('car' in carInfo) {
//     console.log(carInfo['car']);
// }
// Только на опреаторе ?
// console.log(carInfo?.['car']);
// Только на операторе IF, else для примера
// if (carInfo['tracks']) {
//     console.log(carInfo['tracks']);
// } else {
//     console.log('Я не знаю, что отсутвует: свойство или его значение!');
// }
//  Условное ветвеление и оператор in
// if ('tracks' in carInfo) {
//     console.log(carInfo['tracks'] + ' Свойство есть, но значение не определено!');
// }

// // Создаем новый объект
// let carInfo = {
//     car: 'Logan',
//     weight: 1280,
//     'functions': {
//         showPropertyInString: function() {
//             console.log(`Модель: ${carInfo.car}, год выпуска: ${carInfo['year set']}, масса: ${carInfo['weight']}`);
//         },
//     },
//     tracks: undefined,
//     showPropertyInStringShort2() {
//         console.log(`Модель: ${this.car}, год выпуска: ${this['year set']}, масса: ${this['weight']}`);
//     },
// };
// Object.assign(carInfo, {['year set']: 2014, type: 'sedan'});
// // Цикл для прохождения по всем свойствам объекта (key зарезервирован javascript)
// // и вывод ключей и их значений
// for (let key in carInfo) {
//     console.log(key); // выводит имя ключа
//     console.log(carInfo[key]); // выводит значения ключа
// }
// // Обращение к функции в объекте запускает саму функцию
// carInfo['functions'].showPropertyInString();
// this подразумевает объект в котором находится функция 
// (обращается к первому родителькому объекту)
// carInfo.showPropertyInStringShort2();
// Объект не копируется, копируется только ссылка на него
// Удаляется ссылка на объект, а не сам объект
// Метод this будет работать т.к. ссылается на родителя, а не на конкретную переменную
// let carInfoCopy = carInfo; 
// carInfo = null; // Обнуляем изначальную переменную
// carInfoCopy.showPropertyInStringShort2(); // Функция с this
// carInfoCopy['functions'].showPropertyInString(); // Функция без this

// === КОНСТРУКТОВ ОБЪЕКТОВ ===

// // Функция-конструктор позволяет создать множество однотипных объектов
// // Имя функции пишется с большой буквы для понимая разработчиками для чего она
// // При вызове функции используется оператор new который вернет объект с 
// // переданными аргументами в виде значений ключей
// function UserInfo(name, age, height, weight) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.weight = weight;
// }
// let newSomeObject = new UserInfo('Саня', 24, 180, 75);
// console.log(newSomeObject);
// console.log(new UserInfo('Катюша', 35, 94, 115));
// // Имя ключа userAge вот так передать нельзя
// let userName = 'Имя: ', userAge = 'Возраст: ', userHeight = 'Рост:', userWeight = 'Вес:';
// function UserInfo(name, age, height, weight) {
//     this.userName = name;
//     this.userAge = age; // не работает!
//     this.userHeight = height;
//     this.userWeight = weight;
// }
// console.log(new UserInfo('Саня', 24, 180, 75));
// console.log(new UserInfo('Катюша', 35, 94, 115));

// Домашка
// let cityGropal = {
//     population: 2000000,
//     citizen: 'Гропали',
//     drag: false,
//     // police: null,
// };
// let cityPupki = {};
// Object.assign(cityPupki,cityGropal);
// // let cityPupki = Object.assign({}, cityGropal);
// cityPupki.population = 35000;
// cityPupki['Drag and rock-n-roll'] = true;
// // cityPupki.police = null;
// function showGropal() {
//     console.log(cityGropal);
//     console.log(cityPupki);
// }
// showGropal();
// if ('police' in cityPupki && 'police' in cityGropal) {
//     console.log('This is police!');
// } else {
//     console.log('This is no police!');
// }

// let women = {};
// women.name = 'Anjelika';
// women.age = 38;
// women.name = 'Petrovich?';
// delete women.name;
// console.log(women);



// =====================================================
// ======= ТИПЫ ДАННЫХ =================================
// =====================================================

// === ЧИСЛА ===

// let someNumber = 4.5, shortNumber = 145e-6, sixteenNumber = 0xFF;
// let twoNumber = 0b11111111, eigthNumber = 0o377;
// // Автоматический перевод в десятичную систему счисления
// console.log('Обычное число: ' + someNumber);
// console.log('Стандартный вид числа 145e-6 в десятичной: ' + shortNumber);
// console.log(`Шестандцатиричное число 0xFF в десятичной: ` + sixteenNumber);
// console.log(`Двоичное число 0b11111111 в десятичной: ` + twoNumber);
// console.log(`Восьмиричное число 0o377 в десятичной: ` + eigthNumber);
// // Вывод чисел в разных системах счисления
// // По умолчанию используется десятичная система счисления
// let someNumber2 = 255; // В десятичной
// console.log('Десятичный вид числа: ' + someNumber2.toString(10));
// console.log(`Шестандцатиричный вид числа ${someNumber2}: ${someNumber2.toString(16)}`);
// console.log(`Восьмиричный вид числа ${someNumber2}: ${someNumber2.toString(8)}`);
// console.log(`Двоичный вид числа ${someNumber2}: ${someNumber2.toString(2)}`);

// // Округление чисел в большую или меньшую сторону
// // Округление в меньшую сторону
// let someNumberFloor = Math.floor(3.7);
// console.log(someNumberFloor);
// // Округление в большую сторону
// let someNumberRound = Math.round(3.7);
// console.log(someNumberRound);
// Окркугление до нужного числа после запятой
// // Округление до целого числа
// let someNumber4 = Math.round(5.6);
// console.log('Целое число: ' + someNumber4);
// // Округление до десятых
// let someNumber1 = Math.round(5.845 * 10) / 10;
// console.log(someNumber1);
// // Округление до сотых
// let someNumber2 = Math.round(5.845 * 100) / 100;
// console.log(someNumber2);
// // Округление до тысячных
// let someNumber3 = Math.round(5.8455 * 1000) / 1000;
// console.log(someNumber3);
// // Округление и возврат числа с фиксировнным количесвом знаков после запятой
// let someNumber = 9.985654;
// console.log('Три знака после запятой: ' + someNumber.toFixed(3));
// console.log('Два знака после запятой: ' + someNumber.toFixed(2));
// console.log('Один знак после запятой: ' + someNumber.toFixed(1));

// // Проблема неточных вычислений
// let someNumber = Math.round(1.005 * 100) / 100;
// console.log(someNumber + ' вместо 1.01!');
// let someNumber2 = 12.35;
// console.log(someNumber2.toFixed(1) + ' вместо 12.4!');
// let someNumber3 = 0.1 + 0.3 === 0.3;
// console.log(someNumber3);
// // Решение
// let suorceNumber = 1.005 + Number.EPSILON;
// let resultNumber = Math.round(suorceNumber * 100) / 100;
// console.log(resultNumber + ' как и нужно 1.01!');

// // Проверка на тип данных NaN
// if (25 + 'Hellow!' !== NaN) {
//     console.log('This is not NaN!');
// }
// console.log(isNaN(25 + 'Hellow!'));

// // Проверка на тип данных Infinity
// console.log(isFinite('235'));
// console.log(isFinite('Hellow!'));
// console.log(isFinite(10 / 0));

// // Преобразование в число
// // Имеем строку
// let someNumber = '9.891';
// console.log(typeof someNumber);
// // Преобразуем в число через унарный операнд +
// someNumber = +someNumber;
// console.log(typeof someNumber);
// // Преобразуем в число через объект Number()
// someNumber = Number(someNumber);
// console.log(typeof someNumber);
// // Можем работать как с числом
// console.log(Number(someNumber.toFixed(3)));

// Преобразование числа с буквами в число
// // Объект читает ЦЕЛОЕ число до возникновения ошибки чтения
// valueOne = parseInt("199.9854ppm");
// console.log(valueOne);
// console.log(typeof valueOne);
// // Объект читает ЦЕЛОЕ И ДРОБНОЕ число до возникновения ошибки чтения
// valueTwo = parseFloat("199.9854ppm");
// console.log(valueTwo);
// console.log(typeof valueTwo);
// // С буквами в начале не работает т.к. считывает числа слева направо
// valueThree = parseFloat("ppm199.9854");
// console.log(valueThree);
// console.log(typeof valueThree);
// // Ищет число в выбранной системе счисления
// valueFour = parseInt('0xff', 16);
// console.log(valueFour);
// console.log(typeof valueFour);

// // Объект Math.random возвращает псевдослучайное число от 0 до < 1
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// // Объект Math.max возвращает наибольшее и наименьшее число из чисел соотвественно
// console.log(Math.max(1, 2, 81, 3 , 5, -2));
// console.log(Math.min(1, 2, 81, 3 , 5, -2));
// // Объект Math.abs возвращает модуль числа
// console.log(Math.abs(-9.1));
// // Объект Math.pow возводит указанное основание в указанную степень
// console.log(Math.pow(2, 8));

// Работа со знаниями
// Функция округляет заданное количество рандомных чисел с заданной точностью
// И выводит их через заданный интервал времени
// function showRandomNumber(count, float) {
//     let randomNumber, floatNumber = 1;
//     if (float < 0) float = Math.abs(float);
//     for (let i = 0; i < float; i++) {
//         floatNumber = floatNumber * 10;
//     };
//     for (let i = 0; i < count; i++) {
//         randomNumber = Math.random();
//         randomNumber = Math.round(randomNumber * floatNumber) / floatNumber;
//         console.log(randomNumber);
//     };
// }
// setInterval(showRandomNumber, 3000, 1, 0);

// === СТРОКИ ===

// // Форматирование строк
// let longMessage = 'Длинную строку\nможно переносить\nпри помощи спец\nсимволов\u{1F16D}.';
// console.log(longMessage);
// let longMessage2 = `А также при
// помощи \"ввода\"
// и обратных
// кавычек!`;
// console.log(longMessage2);
// let longMessage3 = 'У нескольких\n\tстрок\\ так\\ же\n\t\tможно выставлять\n\t\t\tтабуляцию сколько нужно';
// console.log(longMessage3);
// // Изменение регистра букв
// let longMessage = 'Считаем длинну строки!';
// console.log(longMessage.toUpperCase());
// console.log(longMessage.toLowerCase());

// // Длинна строки
// let longMessage = 'Считаем длинну строки!';
// console.log('Длинна строки: ' + longMessage.length);
// let firstNumber = longMessage[0];
// console.log('Первый символ строки: ' + firstNumber);
// let ordinalNumber = longMessage[3];
// console.log('Третий символ строки: ' + ordinalNumber);
// let lastSymbol = longMessage[longMessage.length - 1];
// console.log('Последний символ строки: ' + lastSymbol);
// // char - внутреняя переменная Js
// // Выводим все числа при помощи цикла
// for (const char of longMessage) {
//     console.log(char);
// };

// // Поиск по строке
// let longMessage = 'Считаем длинну строки!';
// // Возвращает индекс искомого элемента
// console.log(longMessage.indexOf('нну'));
// // Начинаем поиск с 3 символа
// console.log(longMessage.indexOf('и', 3));
// // возвращает false или true
// console.log(longMessage.includes('и', 3));
// // Поиск только с начала и с указанного символа или с конца строки
// console.log(longMessage.startsWith('чит', 1));
// console.log(longMessage.endsWith('!'));
// console.log(longMessage.startsWith('чИт', 1));

// // Регистронезависимый поиск
// let longMessage = 'СчИтаЕм дЛиНну сТрОки!';
// let searchText = 'ТАем';
// Переводим всё в нижний регистр и ищем
// console.log(longMessage.toLowerCase().includes(searchText.toLowerCase()));

// // Получение части строки методом slice
// let longMessage = 'СчИтаЕм дЛиНну сТрОки!';
// console.log(longMessage.slice(1, 5));
// console.log(longMessage.slice(-5, -1));
// console.log(longMessage.slice(-7));

// // Сравнение строк
// console.log('АБВГД' == 'АБВГД');
// // Буквы ближе к началу алфавита "весят" больше
// console.log('A' < 'B');
// // Строчные буквы "весят" больше
// console.log('A' < 'a');
// // Длинная строка "весит" больше
// console.log('ABC' < 'ABCD');

// Домзад
// let text = 'Большое будущее';
// console.log(text.indexOf('д'));
// console.log(text[10]);
// let text = 'Большое будущее';
// console.log(text.toUpperCase());
// let text = 'Большое будущее';
// console.log(text.indexOf('буду'));
// console.log(text.slice(8, 12));
// let text = 'Большое будущее';
// console.log(text.includes('ьшое', 3));



// =====================================================
// ======= МАССИВЫ =====================================
// =====================================================

// Конструктор массивов
// let someArray = new Array();
// Объявление массива
// let someArray = [];
// Заполнение массива
// let someArray = [
//     'Оля',
//     'Геля',
//     'Стас',
//     'Крокодил',
//     { 'Курят': true, 'Наркотят': true, rock: false,},
//     function () {
//         console.log('Hello!');
//     },
//     true,
// ];
// Обращение к элементам массива
// console.log(someArray[0]);
// console.log(someArray[2]);
// console.log(someArray[4]['Наркотят']);
// console.log(someArray[4].rock);
// Вызов функции в объекте
// someArray[5]();

// Многомерный массив
// let someMatrix = [
//     [1, 2, 3,],
//     [4, 5, 6,],
//     [7, 8, 9,],
// ]
// Обращение к элементам многомерного массива
// console.log(someMatrix[1][2]);
// console.log(someMatrix.length);
// console.log(someMatrix);
// let copySomeMatrix = someMatrix;
// copySomeMatrix.length = 2;
// console.log(someMatrix);

// let someArray = [
//     'Оля',
//     'Геля',
//     'Стас',
//     'Крокодил',
//     { 'Курят': true, 'Наркотят': true, rock: false,},
//     function () {
//         console.log('Hello!');
//     },
//     true,
// ];
// // Замена элементов в массиве
// someArray[2] = 'Теперь тут Пупка';
// // Добавление/замена нового элемента в конкретную ячейку
// console.log(someArray.length);
// someArray[7] = 'bigCow';

// // Добавление элементов в стек массива
// let someMatrix = [-1, 0, 1, 2, 3, 4,];
// // Добавление в конец массива
// someMatrix.push(5, 6);
// console.log(someMatrix);
// // Удаление первого элемента в массиве
// someMatrix.shift();
// console.log(someMatrix);
// // Удаление последнего элемента в массиве
// someMatrix.pop();
// console.log(someMatrix);
// // Добавление элементов в конец массива
// someMatrix.unshift(-3, -2, -1);
// console.log(someMatrix);

// // Изменения внутри массива
// let someArray = [
//     0, 1, 2, 3, 4, 5, 6,
// ]
// // Очистка только значения ячейки, с сохранением длинны массива
// delete someArray[1];
// console.log(someArray[1]);
// console.log(someArray);
// Удаление значения и позиции в массиве
// someArray.splice(0, 3);
// console.log(someArray);
// Запоминание удаленного в переменную
// let removeSomeArray = someArray.splice(0, 3);
// console.log(removeSomeArray);
// console.log(someArray);

// === РАБОТА СО СТЭКОМ МАССИВА ===

// let someArray2 = [
//         0, 1, 2, 3, 4, 5, 6, 'End!'
//     ]
// // Добавление элемента в конец массива
// someArray2.push('End2', 'End3');
// // Добавление и удаление элементов в начале массива
// someArray2.unshift('Добавлен unshit-ом');
// console.log(someArray2);
// someArray2.shift();
// // Добавление и удаление последнего элемента в массиве (самые быстрые методы)
// someArray2.push('Добавлен push-ом');
// console.log(someArray2);
// someArray2.pop();

// console.log('Изначальный массив:');
// console.log(someArray2);
// // Замена элементов в массиве, с какой позиции начать, сколько удалить, на что заменить
// someArray2.splice(2, 3, 'Два','Три','Четыре');
// console.log('Замена');
// console.log(someArray2);
// // Добавление элементов в массив, "0" во второй позиции означает добавление, без удаления
// someArray2.splice(6, 0, 5.5, 5.65);
// console.log('Добавление');
// console.log(someArray2);
// // Удаление элементов, минус ведет отсчет с конца массива, но последовательность удаления от начала к концу!
// someArray2.splice(-3, 3);
// console.log('Удаление');
// console.log(someArray2);

// // Копирование массивов
// let someArray3 = [
//         0, 1, 2, 3, 4, 5, 6, 'End!'
//     ]
// console.log(someArray3);
// let someArray3copy = someArray3.slice(0, 7);
// console.log(someArray3copy);
// let someArray3copy2 = someArray3.slice(-3, -1);
// console.log(someArray3copy2);
// // Полная копия
// let someArray3copy3 = someArray3.slice();
// console.log(someArray3copy3);
// // Копия с дополнением
// let newSomeArray = someArray3.concat('Post End', 'Post-Post End');
// console.log(newSomeArray);

// === ПОИСК ПО МАССИВУ ===

// let someArray4 = [
//         0, 1, 2, 3, 4, 5, 6, 'End!', 'Цыпочки', 'Тёлочки', 'Ёлочки',
//     ]
// // Возвращает index (номер позиции, он же порядковый номер), начиная поиск с указанной позиции СЛЕВА на право, возврат -1 значит не найден
// console.log(someArray4.indexOf('Тёлочки', 3));
// // Возвращает index (номер позиции, он же порядковый номер), начиная поиск с указанной позиции СПРАВА на лево, возврат -1 значит не найден
// console.log(someArray4.lastIndexOf('Цыпочки', -2));
// // Ищет указанное значение в массиве, если находит - возвращает true
// console.log(someArray4.includes('Цыпочки'));
// console.log(someArray4.includes('2'));

// let someArray5 = [
//     { type: 'car', weight: '1800kg'},
//     { type: 'car-little', weight: '750kg'},
//     { type: 'car-big', weight: '2300kg'},
//     { type: 'track', weight: '15000kg'},
//     { type: 'bus', weight: '6000kg'},
//     { type: 'car', weight: '910kg'},
//     { type: 'car-pickup', weight: '21000kg'},
//     { type: 'plane', weight: '103kg'},
// ];
// // Поиск по массиву с объектами, ищет до первого совпадения
// let resultFound = someArray5.find(function (item, index, array) {
//     return item.type === 'car';
// });
// console.log(resultFound);
// // То же самое, но со стрелочными функциями
// let resultFound2 = someArray5.find(item => item.type === 'car');
// console.log(resultFound2);
// // Возвращает индекс искомого элемента
// let resultFound3 = someArray5.findIndex(function (item, index, array) {
//     return item.type === 'track';
// })
// console.log(resultFound3);
// То же самое, но со стрелочными функциями
// let resultFound4 = someArray5.find(item => item.type === 'track');
// console.log(resultFound4);
// Возвращает массив из всех элементов удовлетворяющих заданному условию
// let resultFound5 = someArray5.filter(function (item, index, array) {
//     return item.type == 'car';
// });
// console.log(resultFound5);

// Возвращает массив из всех элементов удовлетворяющих заданному условию "начинается с"
// let someArray6 = [
//     'car',
//     'bus',
//     'car-big',
//     'plane',
//     'tank',
//     'car-little',
//     'car-pickup',
//     'car-end'
// ];
// let resultFound7 = someArray6.filter(function (tomato) {
//     return tomato.startsWith('car');
// });
// console.log(resultFound7);

// РАБОТА СО ЗНАНИЯМИ
// let someArray = [
//     'car',
//     'bus',
//     'car-big',
//     'plane',
//     'tank',
//     'car-little',
//     'car-pickup',
//     'car-end',
//     'cucumber',
//     'center',
// ];
// let resultFound8 = someArray.filter(function (tomato) {
//     return tomato.startsWith('car');
// });
// console.log(resultFound8);

// function predicate(item, index, array) {
//         return item.startsWith('car') && index > 5;
// }
// console.log(someArray.filter(predicate));

// СОРТИРОВКИ МАССИВОВ
// // Генератор случайных чисел
// function getRandomNumber(minNumber, maxNumber, float = 0) {
//     resultNumber = minNumber + Math.random() * (maxNumber - minNumber);
//     return resultNumber.toFixed(float);
// }
// // Пустой массив
// let randomArray = [];
// // Наполнение массива случайными числами
// for (let index = 0; index < 18; index++) {
//     randomArray.push(getRandomNumber(1, 100, 0.1))
// };
// console.log('Исходный массив:');
// console.log(randomArray);
// // Сортировка элементов массива как строк
// randomArray.sort();
// console.log('Сортировка как строк:');
// console.log(randomArray);
// console.log('Сортирует в обратном порядке');
// console.log(randomArray.reverse());
// // Сортировка с требуемыми параметрами:
// // Идет сравнение первого и следующего элемента
// // И если возвращается true - меняет порядок элементов
// function sortOnlyNumber(first, second) {
//     return first - second;
//             // Не работает
//             // if (first > second) return 1;
//             // if (first == second) return 0;
//             // if (first < second) return -1;
// };
// randomArray.sort(sortOnlyNumber);
// console.log('Сортировка как чисел:');
// console.log(randomArray);
// // // Тоже, но в стрелочной
// // randomArray.sort((first, second) => first - second);
// // console.log('Сортировка как чисел в строчной функции:');
// // console.log(randomArray);
// // Обработка каждого элемента массива и возвращение нового элемента в новый массив
// let resultMapArray = randomArray.map((item, index, array) => item + 'i');
// console.log(resultMapArray);
// let resultMapArray2 = randomArray.map((item, index, array) => item[0] + 'g');
// console.log(resultMapArray2);

// // Преобразование строки в массив с заданным разделителем, сколько преобразовать
// let someString = '46*93*32*84*80*58*45*97*70*96*92*78';
// console.log(someString);
// console.log(typeof(someString));

// let someArray = someString.split('*', 6);
// console.log(someArray);
// console.log(typeof(someArray));

// // Преобразование массива в строку с заданным разделителем, сколько преобразовать
// let someString2 = someArray.join(',')
// console.log(someString2);
// console.log(typeof(someString2));
// // или преобразовать массив в строку без указания разделителя
// console.log(String(someArray));

// // Проверка на массив или объект
// let object = {1:1, 2:2, 3:3};
// let someArray = [1, 2, 3];
// console.log(typeof(object));
// console.log(typeof(someArray));
// if (Array.isArray(object)) {
//     console.log('It is array!');
// } else {
//     console.log('It is not array!!!');
// }
// if (Array.isArray(someArray)) {
//     console.log('It is array!');
// } else {
//     console.log('It is not array');
// }

// ПЕРЕБОР ЭЛЕМЕНТОВ МАССИВА
// Генератор случайных чисел
// function getRandomNumber(minNumber, maxNumber, float = 0) {
//     resultNumber = minNumber + Math.random() * (maxNumber - minNumber);
//     return +resultNumber.toFixed(float);
// }
// // Пустой массив
// let randomArray = [];
// // Наполнение массива случайными числами
// for (let index = 0; index < 7; index++) {
//     randomArray.push(getRandomNumber(1, 100, 1));
// };
// console.log('Исходный массив длинной ' + randomArray.length + ' элементов:');
// console.log(randomArray);
// // Перебор каждого элемента
// console.log('Вывод каждого значения массива');
// for (let index = 0; index < randomArray.length; index++) {
//     console.log(randomArray[index]);
// };
// // Обращение к каждому значению элемента через цикл
// for (let someVar of randomArray) {
//     someVar = +someVar + 300;
//     console.log(someVar);
// }
// Полноценный метод перебора, выполняет функцию для каждого элемента массива, сам массив не меняется
// randomArray.forEach(function (item, index, array) {
//     item = item * 10;
//     console.log(item);
// })
// console.log('Обработанный массив длинной ' + randomArray.length + ' элементов:');
// console.log(randomArray);
// Перебор с сохранением информации с предыдущей итерации


// // Работа со знаниями
// // Генератор случайных чисел
// function getRandomNumber(minNumber, maxNumber, float = 0) {
//     resultNumber = minNumber + Math.random() * (maxNumber - minNumber);
//     return +resultNumber.toFixed(float);
// }
// let randomNumberFirst, randomNumberSecond;
// // Пустой массив
// let randomArray = [];
// // Наполнение массива случайными числами
// addNumber: for (let index = 0; 0 <= index && index < 7; index++) {
//     randomNumberFirst = getRandomNumber(0, 10, 0);
//     if (randomNumberFirst !== randomNumberSecond) {
//         randomNumberSecond = randomNumberFirst;
//         randomArray.push(randomNumberFirst);
//         continue addNumber;
//     }
//     index--;
// };
// console.log('Исходный массив длинной ' + randomArray.length + ' элементов:');
// console.log(randomArray);
// // randomArray.forEach(calcRandomArray);
// randomArray.sort((first, second) => first - second);
// console.log('Сортированный:');
// console.log(randomArray);

// Домашка
// function searchingPaste(array, searched, paste) {
//     findIndex = array.indexOf(searched, 0);
//     array.splice(findIndex, 1, paste)
// }
// let users = ['Ваня', 'Иштван', 'Санька', 'Барабулька', 'Валя'];
// users.push('Оля');
// searchingPaste(users, 'Оля', 'Петрушка');
// let removed = users.shift();
// users.unshift('Маша','Паша')
// console.log(removed);
// console.log(users);

// let users = ['Ваня', 'Иштван', 'Санька', 'Барабулька', 'Валя'];
// let findIndex = users.indexOf('Иштван', 0);
// let searched = users.splice(findIndex, 1);
// console.log(searched);
// console.log(users);

// let string = 'Вася,Кен,Иван,Оля,Петя';
// let someVar = string.split(',');
// console.log(someVar);



// console.log(navigator.userAgent);
// console.log(location.href);
// location.href = 'https://www.google.ru';
// alert('Собака вас заждалась!');
// let promtResult;
// if (confirm('Ты собака некрещёная?')) {
//     promtResult = prompt('А кто ты?');
// }
// console.log(promtResult);



// =====================================================
// ======= РАБОТА С ОБЪЕКТОМ DOM =======================
// =====================================================

// === Доступ к элементам DOM ===

// // Получение всей страницы в переменную
// let htmlElement = document.documentElement;
// console.log(htmlElement);
// // Получение различных узлов в переменную
// let headElement = document.head;
// console.log(headElement);

// Получение первого и последнего узла в выбраном элемента
// let bodyElement = document.body;
// console.log(bodyElement);
// Получение первого узла
// let firstCHildBodyElement = bodyElement.firstChild;
// console.log(firstCHildBodyElement);
// Получение последнего узла
// let lastCHildBodyElement = bodyElement.lastChild;
// console.log(lastCHildBodyElement);
// // Получаем в коллекцию все узлы элемента Body
// Коллекция постоянно меняется и доступна только для чтения!!!
// let childBody = bodyElement.childNodes;
// console.log(childBody);
// // Проверяем существование дочерних узлов
// console.log(bodyElement.hasChildNodes());

// // Перебор коллекции, т.к. методы для массивов не работают
// const bodyElement = document.body;
// const childNodes = bodyElement.childNodes;
// for (let node of childNodes) {
//     console.log(node);
// }

// Навигация по документу DOM

// // Получаем объект body
// const bodyElement = document.body;
// console.log(bodyElement);
// // Получаем соседние и родительские узлы
// const previousSiblingNode = bodyElement.previousSibling;
// console.log(previousSiblingNode);
// const nextSiblingNode = bodyElement.nextSibling;
// console.log(nextSiblingNode);
// const parentNode = bodyElement.parentNode;
// console.log(parentNode);

// const bodyElement = document.body;
// // Таким образом получаем все дочерние узлы
// const childNodes = bodyElement.childNodes;
// console.log(childNodes);
// // А таким дочерние узлы-элементы
// const bodyChildren = bodyElement.children;
// console.log(bodyChildren);
// // Получаем первый и последний дочерний узлы-элементы
// console.log(bodyElement.firstElementChild);
// console.log(bodyElement.lastElementChild);
// Получаем первый и последний родительский узлы-элементы
// console.log(bodyElement.previousElementSibling);
// console.log(bodyElement.nextElementSibling);
// console.log(bodyElement.parentElement);

// !!!Поиск нужного элемента на странице!!!

// // Поиск по селектору класса
// const searchedElement1 = document.querySelectorAll('.homework__item');
// console.log(searchedElement1);
// // Поиск по селектору тега
// const searchedElement2 = document.querySelectorAll('li');
// console.log(searchedElement2);
// // Поиск по селектору тега и класса
// const searchedElement3 = document.querySelectorAll('li.shop__item');
// console.log(searchedElement3);
// // Поиск по тегу первого уровня вложенности
// const searchedElement4 = document.querySelectorAll('.homework>li');
// console.log(searchedElement4);
// // Поиск сразу нескольких классов
// const searchedElement5 = document.querySelectorAll('.homework__cook, .to-do-list__item');
// console.log(searchedElement5);
// // Поиск по вложенным классам
// const searchedElement6 = document.querySelectorAll('.homework__cook .homework__cook-item');
// console.log(searchedElement6);
// // Поиск по ID тегу
// const searchedElement7 = document.querySelectorAll('#homeworkItem');
// console.log(searchedElement7);
// // Поиск по произвольному атрибуту
// const searchedElement7 = document.querySelectorAll('[data-item]');
// console.log(searchedElement7);
// // Поиск по произвольному атрибуту со конкретным значением
// const searchedElement8 = document.querySelectorAll('[data-item="chtoItoZaTeg"]');
// console.log(searchedElement8);
// // Получение конкретного элемента коллекции
// const searchedElement9 = document.querySelectorAll('li');
// console.log(searchedElement9[2]);
// // Перебор коллекции
// const searchedElement10 = document.querySelectorAll('li');
// searchedElement10.forEach(item => {
//     console.log(item);
// })
// // Поиск не только в объекте document
// const searchedElement11 = document.querySelectorAll('.homework');
// console.log(searchedElement11);
// const searchedElement12 = searchedElement11[0].querySelectorAll('li');
// console.log(searchedElement12);
// // Поиск до первого совпадения
// const searchedElement13 = document.querySelector('li');
// console.log(searchedElement13);
// console.log(document.querySelector('ul'));
// console.log(document.querySelector('.to-do-list__item'));
// // Получение объекта по уникальному ID
// const searchedElement14 = document.getElementById('pinkom-pod-zad');
// console.log(searchedElement14);
// // Получение живой коллекции элементов, т.е. не только на момент вызова функции
// // Получение по тегу
// console.log(document.getElementsByTagName('ul'));
// // Получение по классу
// console.log(document.getElementsByClassName('homework__item'));
// // Получение по значению атрибута name
// console.log(document.getElementsByName('komu'));
// // Возвращает родителя по указанному селектору ищя снизу по иерархии html
// const someChild = document.querySelector('.homework__cook-item');
// console.log(someChild);
// const parentList = someChild.closest('.to-do-list');
// console.log(parentList);
// // Проверяет, соответсвует ли элемент указанному CSS селектору
// const searchedElement15 = document.querySelectorAll('.shop__item');
// console.log(searchedElement15);
// for (let elem of searchedElement15) {
//     if (elem.matches('[class$="shop__item_first"]')) {
//         console.log('ПЕРВЫЙ!');
//     }
//     else if (elem.matches('[class$="shop__item"]')) {
//         console.log('Не первый!');
//     }
// }
// // применение свойств навигации
// const searchedElement16 = document.querySelector('h1');
// const searchedElement17 = searchedElement16.nextElementSibling;
// console.log(searchedElement17);

// !!!Изменение HTML!!!

// // Получение содержимого объекта
// const textElement = document.querySelector('h1');
// console.log(textElement);
// const textElementAddContent = textElement.innerHTML;
// console.log(textElementAddContent);
// // Изменение содержимого объекта
// textElement.innerHTML = 'Что купить и сделать сегодня:';
// // Добавление к содержимому объекта
// const textElement2 = document.querySelector('.main-title');
// const textElementAddContent2 = textElement2.innerHTML;
// console.log(textElementAddContent2);
// textElement2.innerHTML = `Привет! Посмотри что купить и <mark>${textElementAddContent2}</mark>`;
// console.log(textElement2);
// // Полное изменение всего объекта, а не только содержимого
// const textElement3 = document.querySelector('.main-title');
// const textElementAddContent3 = textElement3.outerHTML;
// console.log(textElementAddContent3);
// textElement3.outerHTML = `<h6>Вы берете кредит под <mark>1</mark>0000% годовых?</h6>`;
// console.log(textElement3.outerHTML);
// // Получение только текста из элемениа и вывод только как текста
// const textElement4 = document.querySelector('.main-title');
// const textElementAddContent4 = textElement4.textContent;
// console.log(textElementAddContent4);
// textElement4.textContent = `<h6>Вы берете кредит под <mark>1</mark>0000% годовых?</h6>`;
// console.log(textElement4.textContent);
// // Содержимое текстового узла или коммментария и его изменение
// const textElement5 = document.querySelector('h1');
// const getComment = textElement5.nextSibling;
// console.log(getComment);
// console.log(getComment.data);
// getComment.data = 'А что произошло? Смотри HTML!';
// console.log(getComment.data);

// Создание и вставка элементов в HTML!!!

// Только для вставки элементов и безопасной вставки текста(теги читаются как текст)
// const someElement = document.querySelector('.homework');
// const newSomeElement = document.createElement('div');
// newSomeElement.innerHTML = '<h4>Это <mark>новый блок</mark>, который можно добавить куда угодно!</h3>';
// // Вставка до блока
// someElement.before(newSomeElement);
// // Вставка после блока
// someElement.after(newSomeElement);
// Перед содержимым блока
// someElement.prepend(newSomeElement);
// После содержимого блока
// someElement.append(newSomeElement);
// // Вставка элементов и текста с чтением тегов, перый аргумент - куда, второй - что
// const someElement = document.querySelector('.shop');
// // Вставка перед объектом
// someElement.insertAdjacentHTML(
//     "beforebegin",
//     `<h6 class="huita">Вставлено перед shop!</h6>`
// );
// // Вставка после объкета
// someElement.insertAdjacentHTML(
//     "afterend",
//     `<h6 class="huita">Вставлено после shop!</h6>`
// );
// // Вставка внутрь объекта перед содержимым
// someElement.insertAdjacentHTML(
//     "afterbegin",
//     `<li class="shop__item">Вставлено через js, на первое место в списке!</li>`
// );
// // Вставка внутрь объекта в конец содержимого
// someElement.insertAdjacentHTML(
//     "beforeend",
//     `<li class="shop__item">Вставлено через js, на последнее место в списке!</li>`
// );

// // Перенос узлов, с удалением со старого места
// const someBlock = document.querySelector('h1');
// const outerBlock = document.querySelector('.shop');
// outerBlock.append(someBlock);

// // Копирование узлов, без удалением со старого места
// const someBlock = document.querySelector('h1');
// // true - вместе с содержимым, это глубокое клонирование
// const cloneSomeBlock = someBlock.cloneNode(true);
// const outerBlock = document.querySelector('.shop');
// outerBlock.append(cloneSomeBlock);

// // Удаление объекта и узлов
// const someBlock = document.querySelector('h1');
// someBlock.remove();

// Изменение классов

// // Получаем класс объекта(ов)
// const someBlock = document.querySelector('.shop li');
// const classNameSomeBlock = someBlock.className;
// console.log(classNameSomeBlock);

// // Добавляем и изменяем классы объекта
// const someBlock = document.querySelector('h1');
// console.log(someBlock.className);
// // Добавить класс
// someBlock.classList.add('main-title--active');
// console.log(someBlock.className);
// // Удалить класс
// someBlock.classList.remove('main-title--active');
// // Добавить класс если его нет, или если есть - удалить
// someBlock.classList.toggle('main-title--active');
// // Проверяет, есть ли искомый класс у объекта
// console.log(someBlock.classList.contains('main-title--active'));
// // Для метода classList можно использовать циклы перебора
// for (let className of someBlock.classList) {
//     console.log(className + ' В цикле');
// };

// Добавляем и изменяем CSS стили

// const someBlock = document.querySelector('h1');
// someBlock.style.border = 'solid 1px red';
// someBlock.style.color = 'orange';
// someBlock.style.paddingTop = '1rem';
// someBlock.style.fontSize = '10rem';
// // Получаем значение свойства CSS
// console.log('Получено свойство: ' + someBlock.style.color);
// // Cброс значения
// someBlock.style.fontSize = '';
// // Добавление нескольких стилей одновременно, перезаписывает ВСЕ стили, 
// // которые были в атрибуте style
// const someBlock = document.querySelector('h1');
// someBlock.style.cssText = `
//     color: red;
//     font-style: italic;
//     border-bottom: dotted;
//     background: blue;
//     padding: 20px;
// `;

// // Получение вычесленных стилей, только чтение
// const someElement = document.querySelector('.shop li');
// const currentStyleElement = getComputedStyle(someElement);
// console.log(currentStyleElement.border);
// console.log(currentStyleElement.fontSize);
// console.log(currentStyleElement.width);
// // Стиль псевдоэлементов
// const currentStyleBeforeElement = getComputedStyle(someElement, '::before');
// console.log(currentStyleBeforeElement.height);

// // Преобразование для дальнейшей работы
// const someElement = document.querySelector('.shop li');
// const currentStyleElement = getComputedStyle(someElement);
// const paddingLeft = parseInt(currentStyleElement.fontSize);
// console.log(paddingLeft);

// // Получение тегов
// const someAtribut = document.querySelector('.to-do-list a');
// console.log(someAtribut.href);
// // Узнать досупные свойства для элемента
// console.dir(someAtribut);

// // Атрибуты и свойства
// const someElement2 = document.querySelector('.main a');
// console.log(someElement2);
// // Проверка на наличие атрибута
// console.log(someElement2.hasAttribute('href'));
// // Получение атрибута
// console.log(someElement2.getAttribute('href'));
// // Установка значения атрибута, какой и значение
// someElement2.setAttribute('target', 'blank');
// console.log(someElement2.target);
// // Удаление атрибута
// someElement2.removeAttribute('target');
// console.log(someElement2.hasAttribute('target'));

// // Атрибуты начинающиеся с data- зарезервированы для использования
// const someElement2 = document.querySelector('.to-do-list');
// console.log(someElement2);
// console.log(someElement2.dataset.somevalue);
// // Перезаписываем атрибут
// someElement2.dataset.somevalue = '0';
// console.log(someElement2.dataset.somevalue);
// // Узнаем тег у текущего объекта
// console.log(someElement2.tagName);
// // Скрываем объект не убираем из html
// someElement2.hidden = true;
// console.log(someElement2.hidden);



// Работа со знаниями
// // Вывод в окне случайных чисел
// function getRandomNumber(minNumber, maxNumber, float = 0) {
//     resultNumber = minNumber + Math.random() * (maxNumber - minNumber);
//     resultNumber = +resultNumber.toFixed(float);
//     return resultNumber;
// };
// function createBlockWithRandomNumber() {
//     document.querySelector('section.main').insertAdjacentHTML(
//         "beforeend",
//         `<section class="random-number">Random number:<br><span> </span></section>`
//     );
//     document.querySelector('.random-number').style.cssText = `
//         /* position */
//         width: 50%;
//         padding: 1rem;
//         /* text */
//         text-align: center;
//         color: gray;
//         font-size: 1.5rem;
//         /* border */
//         border: solid 1px;
//         border-radius: 1rem;
//         background: rgb(195 195 195);
//     `;
// }
// function showBlockWithRandomNumber(minNumber, maxNumber, float, interval = 100) {
//     createBlockWithRandomNumber();
//     setInterval(() => { 
//         document.querySelector('.random-number span').innerHTML = getRandomNumber(minNumber, maxNumber, float);
//     }, interval);
// };
// showBlockWithRandomNumber(0, 3, 0, 100);
// // Дискотека века
// function getRandomNumber(minNumber = 0, maxNumber = 255, float = 0) {
//     resultNumber = minNumber + Math.random() * (maxNumber - minNumber);
//     resultNumber = +resultNumber.toFixed(float);
//     return resultNumber;
// };
// function createRGBAcolors(red = 0, green = 0, blue = 0) {
//     red = getRandomNumber();
//     green = getRandomNumber();
//     blue = getRandomNumber();
//     alpha = getRandomNumber(0.2, 1, 1);
//     return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
// }
// function createBlockWithRandomColors() {
//     document.querySelector('section.main').insertAdjacentHTML(
//         "beforeend",
//         `<section class="random-colors"></section>`
//     );
//     document.querySelector('.random-colors').style.cssText = `
//         /* position */
//         width: 100%;
//         height: 10rem;
//         /* border */
//         border-radius: 1rem;
//     `;
// }
// function showBlockWithRandomColor(interval = 100) {
//     createBlockWithRandomColors()
//     setInterval(() => {
//         document.querySelector('.random-colors').style.background = createRGBAcolors();
//     }, interval);
// };
// function showRandomColorBody(interval = 100) {
//     createBlockWithRandomColors()
//     setInterval(() => {
//         document.querySelector('body').style.background = createRGBAcolors();
//         document.querySelector('body').style.color = createRGBAcolors();
//     }, interval);
// };
// showBlockWithRandomColor(100);
// showRandomColorBody(200);


// Среди случайных чисел ищет нужную сумму из двух чисел

// // Генератор случайных чисел
// function getRandomNumber(minNumber, maxNumber, float = 0) {
//     resultNumber = minNumber + Math.random() * (maxNumber - minNumber);
//     return +resultNumber.toFixed(float);
// }
// // Создание массива с случайными числами
// function createArrayWithRundomNumber(minNumber, maxNumber, float, lengthArray) {
//     let randomArray = [], randomNumberFirst, randomNumberSecond;
//     addNumber: for (let index = 0; 0 <= index && index < lengthArray; index++) {
//         randomNumberFirst = getRandomNumber(minNumber, maxNumber, float);
//         if (randomNumberFirst !== randomNumberSecond) {
//             randomNumberSecond = randomNumberFirst;
//             randomArray.push(randomNumberFirst);
//             continue addNumber;
//         }
//         index--;
//         };               
//     return randomArray;
// }
// // Поиск заданной суммы из двух чисел
// function showIndexesTermsSum(currentArray, searchedSumm) {
//     for (let numberOne = 0; numberOne < currentArray.length; numberOne++) {
//         for (let numberTwo = 0; numberTwo < currentArray.length; numberTwo++) {
//             if (numberOne !== numberTwo) {
//                 if (currentArray[numberOne] + currentArray[numberTwo] == searchedSumm) {
//                     return [numberOne, numberTwo];
//                 };
//             };
//         };
//     };
//     return console.log('Сумма не может быть составлена!');
// };
// Поиск всех комбинаций из двух чисел для заданной суммы 
// function showAllIndexesTermsSum(item, index, currentArray, searchedSumm = 4) {
//     let numberOne = index;
//     for (let numberTwo = 0; numberTwo < currentArray.length; numberTwo++) {
//         if (numberTwo !== numberOne) {
//             if (currentArray[index] + currentArray[numberOne] == searchedSumm) {
//                 searchedIndexes.push(numberOne, numberTwo);
//             }; 
//         };
//     };
// };

// let randomArray = createArrayWithRundomNumber(1, 3, 0, 4);
// console.log(randomArray);
// console.log(showIndexesTermsSum(randomArray, 4));
// let searchedIndexes = [];
// randomArray.forEach(showAllIndexesTermsSum(item, index, currentArray, 5));
// console.log(searchedIndexes);



// let searchedIndexes = [];
// randomArray.forEach(function (item, index, array, searchedSumm = 4) {
//     let numberOne = index;
//     for (let numberTwo = 0; numberTwo < array.length; numberTwo++) {
//         if (numberTwo !== numberOne) {
//             if (array[numberTwo] + array[numberOne] == searchedSumm) {
//                 searchedIndexes.push(numberOne, numberTwo);
//                 // console.log(searchedIndexes);
//             }
//         }
//     }
// })

// randomArray.forEach(function (item, index, array) {
//     item = item * 10;
//     console.log(item);
// })

// console.log(`Найдена сумма: ${searchedSumm}, индексы слагаемых: ${numberOne}, ${numberTwo}`);



// =================================================================
// ======= РАЗМЕРЫ, КООРДИНАТЫ И ПРОКРУТКА DOM-ЭЛЕМЕНТОВ ===========
// =================================================================

// // Получение только для чтения размеров окна браузера
// // без полосы прокрутки (доступная ширина)
// const mainElement = document.documentElement;
// const mainElementWidth = mainElement.clientWidth;
// const mainElementHeight = mainElement.clientHeight;
// console.log(mainElement);
// console.log(mainElementWidth);
// console.log(mainElementHeight);
// // Или так
// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);
// // Получение размеров окна с полосой прокрутки
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// // Метод получения размеров всей страницы вместе с прокручиваемой частью
// let scrollWidth = Math.max(
//     document.body.scrollWidth, document.documentElement.scrollWidth,
//     document.body.offsetWidth, document.documentElement.offsetWidth,
//     document.body.clientWidth, document.documentElement.clientWidth
// );
// let scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
// );
// console.log(scrollWidth);
// console.log(scrollHeight);

// // Получение прокрученных пикселей с начала страницы
// // Сверху
// console.log(window.pageYOffset);
// // Слева
// console.log(window.pageXOffset);

// === УПРАВЛЕНИЕ ПРОКРУТКОЙ ===

// // Прокрутка страницы c любого места на заданное количество пикселей
// function setScrollBy() {
//     // сколько отступить слева и сверху
//     window.scrollBy(0, 100);
//     // Смотрим на сколько переместилось
//     const windowScrollTop = window.pageYOffset;
//     console.log(windowScrollTop);
// };
// // Прокрутка страницы на абсолютные координаты
// // Упрощённый вариант
// function setScrollTo() {
//     // На кактие координаты переместить слева и сверху (в пикселях)
//     window.scrollTo(0, 50);
//     // Смотрим на сколько переместилось
//     const windowScrollTop = window.pageYOffset;
//     console.log(windowScrollTop);
// };
// // С дополнительными опциями (не работают в Safari)
// function setScrollToOptions() {
//     // На кактие координаты переместить слева и сверху (в пикселях)
//     window.scrollTo({
//         top: 120,
//         left: 40,
//         behavior: 'smooth' // Плавно переместит до нужного места
//     });
//     // Смотрим на сколько переместилось
//     const windowScrollTop = window.pageYOffset;
//     console.log(windowScrollTop);
// };

// // Прокрутка до конкретного элемента.
// // Если аргументом передать true (по умолчанию), то верхний край элемента и окна совмещаются
// // Если false - нижний с нижним
// // Упрощённый вариант
// function setScrollIntiView(top) {
//     const homeworkSelected = document.querySelector('.homework');
//     homeworkSelected.scrollIntoView(top);
// }
// // // С дополнительными опциями (не работают в Safari)
// function setScrollIntiView(top) {
//     const homeworkSelected = document.querySelector('.homework');
//     homeworkSelected.scrollIntoView({
//         // вертикальное расположение
//         block: 'center',
//         // горизонтальное расположение
//         inline: 'nearest',
//         // плавность прокрутки
//         behaivor: 'smooth'
//     });
// }

// // Запрет прокрутки
// function setEnableDisableScroll() {
//     document.body.style.overflow = 'hidden';
//     document.body.classList.toggle('scroll-lock');
// }

// === СПОСОБЫ ПОДСЧЁТА РАЗМЕРОВ ЭЛЕМЕНТОВ HTML

// // Узнаем относительно чего спозиционирован объект
// const someBlock = document.querySelector('.homework');
// console.log(someBlock);
// // Узнаем родителя
// const elemOffsetParent = someBlock.offsetParent;
// console.log(elemOffsetParent);
// // Получаем координаты относительно предка элемента
// console.log(someBlock.offsetLeft);
// console.log(someBlock.offsetTop);

// // Узнаём общие размеры ЭЛЕМЕНТОВ (те же значения что и при border-box: box-sizing)
// const someBlock2 = document.querySelector('.homework');
// // Ширина
// console.log(someBlock2.offsetWidth);
// // Высота
// console.log(someBlock2.offsetHeight);

// // Узнаём отсупы внутренней части элемента от внешней 
// // (то есть отступы до контентной части элемента HTML)
// const someBlock3 = document.querySelector('.homework');
// // Ширина
// console.log(someBlock2.clientTop);
// // Высота
// console.log(someBlock2.clientLeft);

// // Размеры контентной части элемента
// // (без скоролов и  отступов)
// const someBlock4 = document.querySelector('.homework');
// console.log(someBlock4.clientWidth);
// console.log(someBlock4.clientHeight);

// // Размеры всей контентной части, даже если она скрыта скролом 
// // (то есть не ширина "окна" просмотра контента, а именно сколько 
// // за этим "окном" занимает места в пикселях весь контент)
// const someBlock5 = document.querySelector('.homework');
// console.log(someBlock5.scrollWidth);
// console.log(someBlock5.scrollHeight);

// // Координаты прокрученой области с возможностью перезаписи
// // Прокрутка на нужную позицию в элементе
// // Разница?
// const someBlock5 = document.querySelector('.homework');
// someBlock5.scrollTop = 1000;
// someBlock5.scrollLeft = 1000;
// const elementScrollTop = someBlock5.scrollTop;
// const elementScrollLeft = someBlock5.scrollLeft;
// console.log(elementScrollTop);
// console.log(elementScrollLeft);

// === ВАЖНО! ===

// Методы измеряющие координаты относительно окна браузера обозначаются 
// ClientX или ClientY
// Методы измеряющие координаты относительно document.body (от верхнего левого угла)
// обозначаются pageX или PageY

// 


// ==========================================================================
// ======= СОБЫТИЯ ==========================================================
// ==========================================================================

// // Один из способов назначить событие на действие - атрибутом HTML onclick

// // Основной - использовать событие onclick, т.е. при нажатии левой кнопки мыши
// const buttonWithOnclick1 = document.querySelector('.button-onclick')
// // Назначаем обработчик событию onclick по элементу .button-onclick
// buttonWithOnclick1.onclick = function () {
//     buttonWithOnclick1.insertAdjacentHTML(
//         "afterend",
//         `<button class="button-onclick-lazy" onclick="document.querySelector('.button-onclick-lazy').remove()">Бесполезная кнопка</button>`
//         );
// }
// // Второй вариант
// const buttonWithOnclick2 = document.querySelector('.main')
// function showFishText() {
//     buttonWithOnclick2.insertAdjacentHTML(
//         "beforeend",
//         `<p class="fish-text">Противоположная точка зрения подразумевает, что реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Лишь некоторые особенности внутренней политики неоднозначны и будут подвергнуты целой серии независимых исследований. Банальные, но неопровержимые выводы, а также действия представителей оппозиции, вне зависимости от их уровня, должны быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Прежде всего, консультация с широким активом играет определяющее значение для форм воздействия. Принимая во внимание показатели успешности, укрепление и развитие внутренней структуры однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. Не следует, однако, забывать, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании распределения внутренних резервов и ресурсов. Картельные сговоры не допускают ситуации, при которой непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов. В частности, граница обучения кадров предопределяет высокую востребованность своевременного выполнения сверхзадачи. Приятно, граждане, наблюдать, как непосредственные участники технического прогресса и по сей день остаются уделом либералов, которые жаждут быть подвергнуты целой серии независимых исследований. Предварительные выводы неутешительны: убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение экспериментов, поражающих по своей масштабности и грандиозности. Банальные, но неопровержимые выводы, а также некоторые особенности внутренней политики неоднозначны и будут ограничены исключительно образом мышления. Равным образом, сложившаяся структура организации однозначно определяет каждого участника как способного принимать собственные решения касаемо кластеризации усилий. Внезапно, действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены сами себе. Наше дело не так однозначно, как может показаться: высокотехнологичная концепция общественного уклада не оставляет шанса для вывода текущих активов.
//         <button class="button-scroll-up">Улетаем вверх</button>
//         </p>`
//         );
//     document.querySelector('.fish-text').style.background = "#dddddd";
//     document.querySelector('.fish-text').style.padding = "0.5rem";
// }
// buttonWithOnclick2.onclick = showFishText;

// // Добавление нескльких обработчиков на одно событие
// const buttonWithOnclick3 = document.querySelector('.button-onclick-more');
// buttonWithOnclick3.addEventListener('click', function () {
//     console.log('Это действие выполнится первым!');
// });
// buttonWithOnclick3.addEventListener('click', function () {
//     console.log('Это действие выполнится вторым!');
// });
// // Так же можно использовать отдельную функцию
// function showPadding() {
//     buttonWithOnclick3.style.padding = "0.5rem"
//     buttonWithOnclick3.style.borderRadius = "2rem"
// }
// // И добавлять ещё одним событием
// buttonWithOnclick3.addEventListener('click', showPadding);
// // Удаление события, событие выполняется только один раз
// function showBackground() {
//     buttonWithOnclick3.style.background = "red";
//     console.log('Тык!');
//     // Удаляем событие
//     buttonWithOnclick3.removeEventListener('click', showBackground);
// }
// buttonWithOnclick3.addEventListener('click', showBackground);

// Так же обработчик событий addEventListener имеет опции
// // Передача опций через объект
// const buttonWithOnclick4 = document.querySelector('.button-onclick-more');
// const optionsForAddEventListener = {
//     // Срабатать на фазе погружения - true, иначе - на фазе всплытия
//     'capture': false,
//     // Удаление сразу после срабатывания, работает как remove
//     'once': false,
//     // Никода не вызывать PreventDefault()
//     'passive': false
// }
// function showBigFont() {
//     buttonWithOnclick4.style.fontSize = '2rem'
// }
// buttonWithOnclick4.addEventListener('click', showBigFont, optionsForAddEventListener);
// // Запись опций напрямую
// buttonWithOnclick4.addEventListener('click', showBigFont, {
//     'capture': false,
//     'once': false,
//     'passive': false
// });

// // Объект события
// const buttonWithOnclick4 = document.querySelector('.button-onclick-more');
// function showMoreIhfoForClickButton(event) {
//     console.log('Тип события: ' + event.type);
//     console.log('На каком объекте сработало событие:');
//     console.log(event.target);
//     console.log('На каком объекте сработало событие:???');
//     console.log(event.currentTarget);
//     console.log('Координаты по X: ' + event.clientX);
//     console.log('Координаты по Y: ' + event.clientY);
// }
// buttonWithOnclick4.addEventListener('click', showMoreIhfoForClickButton, {'once': true})
// buttonWithOnclick4.addEventListener('mouseenter', showMoreIhfoForClickButton, {'once': true})

// Всплытие события: событие сработавшее в дочернем блоке вызовет событие и в родительком блоке
// const parentBlock = document.querySelector('.block-parent')
// const childrenBlock = document.querySelector('.block-children')
// const childrenChildrenBlock = document.querySelector('.block-children-children')
// function showLogMessage3() {
//     console.log('Я событие дочернее-дочернего');
//     childrenChildrenBlock.style.margin = '1rem';
//     childrenChildrenBlock.style.transition = '2s';
// }
// function showLogMessage2() {
//     console.log('Я событие дочернего');
//     childrenBlock.style.margin = '1rem';
//     childrenBlock.style.transition = '2s';
// }
// function showLogMessage1() {
//     console.log('Я событие родителя');
//     parentBlock.style.padding = '1rem';
//     parentBlock.style.transition = '2s';
// }
// parentBlock.addEventListener('click', showLogMessage1);
// childrenBlock.addEventListener('click', showLogMessage2);
// childrenChildrenBlock.addEventListener('click', showLogMessage3);

// // Для остановки всплытия используется stopPropagation
// // Во время погружения есть возможность изменить порядок срабатывания событий
// const parentBlock = document.querySelector('.block-parent')
// const childrenBlock = document.querySelector('.block-children')
// const childrenChildrenBlock = document.querySelector('.block-children-children')
// // Функция с аргументом event
// function showLogMessage3(event) {
//     console.log('Я событие дочернее-дочернего');
//     childrenChildrenBlock.style.margin = '1rem';
//     childrenChildrenBlock.style.transition = '2s';
//     // Остановка всплытия
//     // event.stopPropagation();
// }
// function showLogMessage2() {
//     console.log('Я событие дочернего, и я сработал первым!');
//     childrenBlock.style.margin = '1rem';
//     childrenBlock.style.transition = '2s';
// }
// function showLogMessage1() {
//     console.log('Я событие родителя');
//     parentBlock.style.padding = '1rem';
//     // parentBlock.style.transition = '2s';
// }
// parentBlock.addEventListener('click', showLogMessage1);
// // Срабатывание события на фазе погружения
// childrenBlock.addEventListener('click', showLogMessage2, {'capture': true});
// childrenChildrenBlock.addEventListener('click', showLogMessage3);
// this в вызванной функции обработчиком событий будет ссылаться на элемент в котором произошло событие

// // Делегирование событий
// // Для того чтобы не слушать событие на каждой кнопке, 
// // можно делегировать это событие блоку-родителю
// const blockParent = document.querySelector('.block-parent2');
// // Создаем функцию для выполнения по событию
// function showLogMessage() {
//     console.log('А событие то не на кнопке!');
// }
// // Добавляем событию по клику
// blockParent.addEventListener('click', function (event) {
//     // Проверяем откуда поступило событие
//     if (event.target.closest('.button-general-event')) {
//         // Выполняем функцию для выполнения по событию
//         showLogMessage();
//     }
//     if (event.target.closest('.block-children')) {
//         showLogMessage();
//     }
// });

// // Работа со знаниями. Бургер меню.
// const menuBody = document.querySelector('.burger-menu');
// document.addEventListener('click', openCloseMenu);
// function openCloseMenu(event) {
//     if (event.target.closest('.burger-menu__button')) {
//         menuBody.classList.toggle('burger-menu--active');
//         // console.log('Open menu!');
//     };
//     if (!event.target.closest('.burger-menu__button')) {
//         menuBody.classList.remove('burger-menu--active');
//         // console.log('Close menu!');
//     }
// }

// ----- Действия браузера по умолчанию -----

// Отмена стандартного дейсвтия браузера при обнаружении события
// const linkGo = document.querySelector('.no-going-link');
// linkGo.addEventListener('click', stopLink);
// function stopLink(event) {
//     document.body.querySelector('.block-for-burger-menu').style.background = 'red';
//     event.preventDefault();
// }
// // При записи в укороченном виде необходимо писать
// linkGo.onclick = function () {
//     document.body.querySelector('.block-for-burger-menu').style.background = 'red';
//     return false;
// }
// Опция passive: true внутри addEventListener сообщает браузеру, что функция 
// не будет изменять значение по умолчанию, а значит действие будет выполнено 
// стразу же. Полезно на тачскринах, чтобы перемещение работало сразу же, не 
// дожидаясь загрузки всех обработчиков и событий, которые могли бы менять 
// значение по умолчанию. Нельзя использовать passive: true и event.preventDefault()
// В одной функции или одном обработчике

// ----- Простые и комплексные события -----

// // Простые события мыши
// const eventsOfMouse = document.body.querySelector('.move-block');
// eventsOfMouse.addEventListener('mousedown', function (event) {
//     console.log('Зажата кнопка: ' + event.which);
// })
// eventsOfMouse.addEventListener('mouseup', function (event) {
//     console.log('Отпущена кнопка: ' + event.which);
// })
// eventsOfMouse.addEventListener('contextmenu', function () {
//     console.log('Вызвано контекстное меню!');
// })
// Эти события всплывают
// eventsOfMouse.addEventListener('mouseover', function (event) {
//     // На какой элемент пришел
//     console.log(event.target);
//     // Откуда элемент пришёл
//     console.log(event.relatedTarget);
//     console.log('Курсор навели на элемент!');
// })
// eventsOfMouse.addEventListener('mouseout', function (event) {
//     // Откуда элемент пришёл
//     console.log(event.target);
//     // На какой элемент пришел
//     console.log(event.relatedTarget);
//     console.log('Курсор убрали с элемента!');
// })
// // Срабатывает только при наведении/уведении на родительский элемент eventsOfMouse, 
// // наведение но дочерние не вызовет это событие
// eventsOfMouse.addEventListener('mouseenter', function (event) {
//     console.log('Курсор навели на элемент 2!');
// })
// eventsOfMouse.addEventListener('mouseleave', function (event) {
//     console.log('Курсор убрали с элемента 2!');
// })
// eventsOfMouse.addEventListener('mousemove', function () {
//     console.log('Мышь движжется над элементом!');
// })
// // Комплексное событие
// const eventsOfMouse = document.body.querySelector('.move-block');
// // Вызывается при срабатывании "mousedown" и "mouseup" над одним элементом
// // основной кнопкой мыши
// eventsOfMouse.addEventListener('click', function () {
//     console.log('Тык!');
// })
// // Срабатывает при двойном тыке
// eventsOfMouse.addEventListener('dblclick', function () {
//     console.log('ДВОЙНОЙ тык!');
// })

// // Работа со знаниями
// const eventsOfMouse = document.body.querySelector('.move-block');
// eventsOfMouse.addEventListener('mousemove', function (event) {
//     eventsOfMouse.innerHTML = 
//     `Координаты X: ${event.clientX}<br>Координаты Y: ${event.clientY}`;
// })

// События клавиатуры
// // Событие клавиатуры вешается на документ
// document.addEventListener('keydown', function (event) {
//     console.log(`Удерживается кнопка: ${event.code} с учётом регистра и раскладки: ${event.key}`);
// })
// document.addEventListener('keyup', function (event) {
//     console.log(`Отпущена кнопка: ${event.code} с учётом регистра и раскладки: ${event.key}`);
// })
// // Выполнение действий при зажатии нескольких клавиш
// document.addEventListener('keydown', function (event) {
//     if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey))
//     console.log('Combination for undo!')
// })

// События прокрутки
// window.addEventListener('scroll', function (event) {
//     console.log(`${scrollY}px`);
//     console.log(`${pageYOffset}px`);
// })

// ----- СОБЫТИЯ ЗАГРУЗКИ СТРАНИЦЫ -----

// Состояние загрузки document.readyState:
// Документ загружается - loading
// Документ был полностью прочитан - interactive
// Документ прочитан, и ресурсы загружены - complete

// // Срабатывает когда браузер полностью загрузил HTML и построил DOM дерево
// // Но не загрузил стили и внешний контент такой как <img>
// document.addEventListener('DOMContentLoaded', function (event) {
//     console.log('DOM загружен и построен, а ресурсы ещё нет');
//     console.log(document.readyState);
// })
// // Браузер загрузил HTML, построил DOM-дерево и загрузил внешние ресурсы
// window.addEventListener('load', function (event) {
//     console.log('А теперь загружены и ресурсы!');
//     console.log(document.readyState);
// })

// // Событие покидания пользователем страницы, 
// // происходит когда пользователь закрывает страницу
// window.addEventListener('beforeunload', function (event) {
//     event.preventDefault()
//     event.returnValue = '';
// })
// // Происходит в фоновом режиме когда пользователь закрыл страницу
// // Нужно в основом для отправки метрики
// window.addEventListener('unload', function (event) {
// })

// Домашка
// Сделать форму поиска открывающуюся по кнопке со счетчиком 
// введеных символов и закрывающуюся по клику вне её и по клавише Escape

// --------------------------------------
// ------ Свойства и методы форм --------
// --------------------------------------

// Получение всех форм на странице
// console.log(document.forms);
// Обращение к конкретной форме
// console.log(document.forms[0]);
// Обращение по значению атрибуту, в данном случае name
// console.log(document.forms.formForEvents);
// document.forms - это живая коллекция
// querySelectorAll - это статичная коллекция
// Все элементы формы
// console.log(document.forms.formForEvents.elements);
// У формы всегда должен быть атрибут name!
// Он нужен в том числе для отправки данных на сервер

// Получаем форму на странице в константу
// const eventsForm = document.forms.formForEvents
// Получаем конкретный элемент формы
// const textarea = eventsForm.textForm
// console.log(textarea);
// Получаем коллекцию радиокнопок
// console.log(eventsForm.group1);
// Получаем форму элемента
// console.log(textarea.form);

// // Значения текстовых форм можно получить через input.value и input.cheked
// const eventsForm = document.forms.formForEvents
// // Текстовые формы
// const textarea = eventsForm.textForm
// const textareaField = eventsForm.textareaForm
// // Радио и чекбоксы
// const inputRadioButton = eventsForm.group1
// const inputCheckbox = eventsForm.checkboxForm
// // Прочее
// const inputFile = eventsForm.fileForm
// const inputRange = eventsForm.rangeForm
// const inputSelect = eventsForm.selectForm
// // Получаем значения текстовых полей
// console.log(textarea.value);
// console.log(textareaField.value);
// // Перезапись содержимого поля
// textarea.value = 'А теперь это сделано из JS!'
// textareaField.value = 'И тут тоже!'
// console.log(textarea.value);
// console.log(textareaField.value);

// // Получение значений радио
// console.log(inputRadioButton);
// for (const element of inputRadioButton) {
//     // Радио включена
//     console.log(element.value);
//     // Отмечена ли радио
//     console.log(element.checked);
// }
// // Изменение значения тега value
// inputRadioButton[1].value = 'VasheNazvanie'
// // Изменение выбранного радио
// inputRadioButton[2].checked = true


// // Получение значений чекбоксов
// console.log(inputCheckbox);
// for (const element of inputCheckbox) {
//     // Чекбокс включен
//     console.log(element.value);
//     // Отмечен ли чекбокс
//     console.log(element.checked);
// }
// // Изменение значения тега value
// inputCheckbox[1].value = 'VasheNazvanieTegaValue'
// // Изменение выбранного чекбокса
// inputCheckbox[2].checked = true

// // Получение значения input file
// Менять значение нельзя, только очистить
// console.log(inputFile.value);
// // Получение значения range
// console.log(inputRange);
// console.log(inputRange.value);
// setTimeout(() => {
//     console.log(inputRange.value);
// }, 2000);

// // Получение всех атрибутов option внутри выбранного select
// console.log(inputSelect.options);
// // Получение текущего значения атрибута select
// // Вернёт значение value
// console.log(inputSelect.value);
// // Получения ИНДЕКСА выбранного сейчас option
// console.log(inputSelect.selectedIndex);
// console.log('Или так: ' + inputSelect.options.selectedIndex);
// // Получение текста любого option
// for (const element of inputSelect) {
//     // Текст элемента
//     console.log(element.text);
//     // Выбран ли текущий элемент option
//     console.log(element.selected);
//     // Индекс текущего option
//     console.log(element.index);
// }
// // Задаем выбранный option
// inputSelect[2].selected = true
// // Или изменив index
// inputSelect.selectedIndex = 3
// // Так же можно указать выбранный option через значение value
// inputSelect.value = 'first'

// // Создание новых атрибутов option
// // Через конструктор option
// // Текст внутри option
// const text = 'New! Paragraph 6'
// // Значение тега value
// const value = 6
// // Будет ли установлен атрибут selected в HTML
// const defaultSelected = false
// // Будет ли выбран option
// const selected = true
// const someNewOption = new Option(text, value, defaultSelected, selected);
// console.log(someNewOption);
// // Добавляем в контейнер select
// inputSelect.append(someNewOption)

// ------------------------------------
// ----- СОБЫТИЯ ФОРМ И ЭЛЕМЕНТОВ -----
// ------------------------------------

// const eventsForm = document.forms.formForEvents
// const textarea = eventsForm.textForm
// const textareaField = eventsForm.textareaForm

// // Событие фокус происходит при тыке на элемент ввода
// textarea.value = '';
// textarea.addEventListener('focus', function () {
//     textarea.placeholder = "Фокус сработал!"
// })
// // Срабатывает когда фокус пропадает, например при тыке вне поля
// textarea.addEventListener('blur', function () {
//     textarea.placeholder = "Фокус убран!"
//     setTimeout(() => {
//         textarea.placeholder = 'Тыкни меня!'
//     }, 2000);
// })
// // Автоматический фокус при загрузке страницы
// // .focus .blur делают фокусировку/убирают фокус на элементе
// textarea.focus()
// setTimeout(() => {
//     textarea.blur()
// }, 5000);

// Установка tabindex
// 0 ставит элемент при переключении по табу в один ряд с другими элементами
// -1 игнорирует элемент при переключении табом (при клике мышкой по блоку с таким индексом можно прописать CSS правило)

// Текущий элемент с фокусом
// console.log(document.activeElement);

// Всплывающие события фокусировки
// const eventsForm = document.forms.formForEvents
// const textarea = eventsForm.textForm
// const textareaField = eventsForm.textareaForm
// // Здесь всплытия не происходит
// eventsForm.addEventListener('focus', function () {
//     eventsForm.classList.add('--active')
// })
// // Решение
// eventsForm.addEventListener('focus', function () {
//     eventsForm.classList.add('--active')
//     setTimeout(() => {
//         eventsForm.classList.remove('--active')
//     }, 3000);
// }, {'capture': true})
// // Второй вариант решения
// eventsForm.addEventListener('focusin', function () {
//     eventsForm.classList.add('--active')
//     setTimeout(() => {
//         eventsForm.classList.remove('--active')
//     }, 1000);
// })

// Событие changae
// Срабатывает после завершения изменения формы

// // Получаем форму на странице в константу
// const eventsForm = document.forms.formForEvents
// // Получаем конкретный элемент формы
// const textarea = eventsForm.textForm
// const radioButtons = eventsForm.group1
// const select = eventsForm.selectForm
// const file = eventsForm.fileForm
// // // Текстовые поля
// // textarea.value = ""
// // textarea.addEventListener('change', function () {
// //     textarea.value = "Изменения завершены!"
// //     setTimeout(() => {
// //         textarea.value = ""
// //     }, 2000);
// // })
// // // Событие изменения значения(а не завершения измений)
// // // Срабатывает каждый раз при изменении значения
// // textarea.addEventListener('input', function (event) {
// //     console.log(`Value: ${textarea.value}`);
// // })

// // Тег option
// select.addEventListener('change', function () {
//     document.getElementById('selectForm').after('Изменения произошли!')
// })

// // Тег file
// file.addEventListener('change', function () {
//     console.log('Файл выбран!');
// })

// // Событие изменение радиокнопок
// const eventsForm = document.forms.formForEvents
// const radioButtons = eventsForm.group1
// document.querySelectorAll('input[type="radio"][name="group1"]').forEach(radio => {
//     radio.addEventListener('change', function () {
//         console.log(radio.value),
//         console.log(radio)
//     })
// });
// // Событие изменение даты
// const eventsForm = document.forms.formForEvents
// const date = eventsForm.dateForm
// date.addEventListener('change', function () {
//     console.log(date.value);
// })


// // События copy, paste, cut
// const eventsForm = document.forms.formForEvents
// const textarea = eventsForm.textForm
// textarea.addEventListener('copy', function (event) {
//     console.log('Скопировано!');
// })
// textarea.addEventListener('paste', function (event) {
//     console.log('Событие сработало, но вставка отменена!');
//     event.preventDefault()
// })
// textarea.addEventListener('cut', function (event) {
//     console.log('Вырезано!');
// })

// // События отправки формы - submit
// // В основном нужно для проверки данных перед отправкой на сервер и формирования самой отправляемой формы
// const eventsForm = document.forms.formForEvents
// const textarea = eventsForm.textForm
// const submit = eventsForm.submitForm

// eventsForm.addEventListener('submit', function (event) {
//     console.log('Событие сработало! Форма проверяется...');
//     if (textarea.value) {
//         console.log('Первое поле ввода должно быть пустым!');
//         // Отменяем отправку формы
//         event.preventDefault()
//     }
// })
// // Так же можно сделать отправку формы по другим условиям

// textarea.addEventListener('blur', function (event) {
//     eventsForm.submit()
//     console.log('Форма отправлена!');
// })

// // Показ превью загруженного изображения
// const eventsForm = document.forms.formForEvents
// // const file = eventsForm.fileForm
// // eventsForm.addEventListener('change', function (event) {
// //     let selectedFile = eventsForm.files[0]
// //     let fileURL = URL.createObjectURL(selectedFile)
// //     file.parentElement.insertAdjacentHTML(
// //         'beforeend',
// //         `<div>
// //             <img src="${fileURL}" alt=""></img>
// //         </div>`
// //     )
// // })






// // В новой странице
// function playFiealdBlock() {
//    const playFieldBlock = document.querySelector('.play-field__field')
// function showCoordinates(event) {
//     this.innerHTML = `<p class="play-field__text">Координаты по X:${event.clientX}<br>Координаты по Y:${event.clientY}</p>`
// }
// function showPressedMouseWithDoubleClick(event) {
//     this.innerHTML = `<p class="play-field__text">ДВОЙНОЙ КЛИК</p>`
// }
// function showPressedMouseButton(event) {
//     this.innerHTML = `<p class="play-field__text">Зажата кнопка мыши: ${event.button}</p>`
//     this.oncontextmenu = function () {return false;}
// }
// function showMouseButtonReleased(event) {
//     this.innerHTML = `<p class="play-field__text">Отпущена кнопка мыши: ${event.button}</p>`
// }
// function showPressedKeyboardButton(event) {
//     playFieldBlock.innerHTML = `<p class="play-field__text">Зажата кнопка на клавиатуре: ${event.code}<br>С учётом регистра и раскладки: ${event.key}</p>`
// }
// function showKeyboardButtonReleased(event) {
//     playFieldBlock.innerHTML = `<p class="play-field__text">Отпущена кнопка на клавиатуре: ${event.code} с учётом регистра и раскладки: ${event.key}</p>`
// }
// playFieldBlock.addEventListener('mousemove', showCoordinates);
// playFieldBlock.addEventListener('mousedown', showPressedMouseButton);
// playFieldBlock.addEventListener('mouseup', showMouseButtonReleased);
// playFieldBlock.addEventListener('dblclick', showPressedMouseWithDoubleClick)
// document.addEventListener('keydown', showPressedKeyboardButton);
// document.addEventListener('keyup', showKeyboardButtonReleased);
// const checkingEventBubblingBlock = document.querySelector('.checking-event-bubbling');
// let stopBubbling = false;
// checkingEventBubblingBlock.querySelector('.checking-event-bubbling__parent').addEventListener('click', function (event) {
//     checkingEventBubblingBlock.querySelector('.checking-event-bubbling__parent-focus').classList.remove('checking-event-bubbling_disable')
//     checkingEventBubblingBlock.querySelector('.checking-event-bubbling__child-focus').classList.add('checking-event-bubbling_disable')
//     checkingEventBubblingBlock.querySelector('.checking-event-bubbling__child-child-focus').classList.add('checking-event-bubbling_disable')
//     if (stopBubbling) {
//         event.stopPropagation()
//     }
// })
// checkingEventBubblingBlock.querySelector('.checking-event-bubbling__child').addEventListener('click', function (event) {
//     checkingEventBubblingBlock.querySelector('.checking-event-bubbling__parent-focus').classList.add('checking-event-bubbling_disable')
//     checkingEventBubblingBlock.querySelector('.checking-event-bubbling__child-focus').classList.remove('checking-event-bubbling_disable')
//     checkingEventBubblingBlock.querySelector('.checking-event-bubbling__child-child-focus').classList.add('checking-event-bubbling_disable')
//     if (stopBubbling) {
//         event.stopPropagation()
//     }
// })
// checkingEventBubblingBlock.querySelector('.checking-event-bubbling__child-child').addEventListener('click', function (event) {
//     checkingEventBubblingBlock.querySelector('.checking-event-bubbling__parent-focus').classList.add('checking-event-bubbling_disable')
//     checkingEventBubblingBlock.querySelector('.checking-event-bubbling__child-focus').classList.add('checking-event-bubbling_disable')
//     checkingEventBubblingBlock.querySelector('.checking-event-bubbling__child-child-focus').classList.remove('checking-event-bubbling_disable')
//     if (stopBubbling) {
//         event.stopPropagation();
//     }
// })
// document.querySelector('[data-button="stopBubbling"]').addEventListener('click', function (event) {
//     stopBubbling = true;
// })
// document.querySelector('[data-button="run-bubbling"]').addEventListener('click', function (event) {
//     stopBubbling = false;
// })

// }
// playFiealdBlock()

// // -------------
// // SIMPLE - GAME
// // -------------

// function simpleGame() {

// const blockControls = document.querySelector('.game-control')
// const blockScreen = document.querySelector('.simple-game__game-screen')
// const aim = blockScreen.querySelector('.aim')
// let stoppingTheGame, score = 0

// blockControls.addEventListener('click', gameControl);

// function gameControl(event) {
//     aimCoordinteX = aim.offsetLeft
//     aimCoordinteY = aim.offsetTop
//     aimStep = 10;
//     checkTargetHit(aimCoordinteX , aimCoordinteY)
//     if (event.target.closest('.game-control__restart')) {
//         resetGame()
//         stoppingTheGame = true
//     }
//     if (event.target.closest('.game-control__start')) {
//         showMovingTarget()
//         stoppingTheGame = false
//     }
//     if (event.target.closest('.game-control__up')) {
//         aimCoordinteY -= aimStep;
//         aimCoordinteY = showCoordinateY(aimCoordinteY)
//     }
//     if (event.target.closest('.game-control__down')) {
//         aimCoordinteY += aimStep;
//         aimCoordinteY = showCoordinateY(aimCoordinteY)
//     }
//     if (event.target.closest('.game-control__left')) {
//         aimCoordinteX -= aimStep;
//         aimCoordinteX = showCoordinateX(aimCoordinteX);
//     }
//     if (event.target.closest('.game-control__right')) {
//         aimCoordinteX += aimStep;
//         aimCoordinteX = showCoordinateX(aimCoordinteX);
//     }
//     if (event.target.closest('.game-control__center')) {
//         prikolPipiska()
//     }
// }
// function resetGame(aimCoordinteX , aimCoordinteY) {
//     setTimeout(() => {
//         showMovingTarget(true)
//         aim.style.left = `0px`
//         aim.style.top = `0px`
//         document.querySelector('.simple-game__time').innerHTML = `Жми старт!`;
//         score = 0
//         document.querySelector('.simple-game__score').innerHTML = `Очки: ${score}`;
//     }, 50);
    
// }
// function showCoordinateX(aimCoordinteX) {
//     if (aimCoordinteX < 0) {
//         return aim.style.left = `0px`
//     }
//     if (aimCoordinteX > blockScreen.clientWidth) {
//         return aim.style.left = `${blockScreen.clientWidth}px`;
//     }
//     return aim.style.left = `${aimCoordinteX}px`
// }
// function showCoordinateY(aimCoordinteY) {
//     if (aimCoordinteY < 0) {
//         return aim.style.top = `0px`
//     }
//     if (aimCoordinteY > blockScreen.clientHeight) {
//         return aim.style.top = `${blockScreen.clientHeight}px`
//     }
//     return aim.style.top = `${aimCoordinteY}px`
// }
// function getCoordinatesForTarget(targetCoordinteX, targetCoordinteY) {
//     let step = 5
//     let directionOfMovement = Math.round(0 + Math.random() * (999 - 0));
//     if (directionOfMovement >= 0 && directionOfMovement <= 249) {
//         targetCoordinteY += step;
//     }
//     if (directionOfMovement >= 250 && directionOfMovement <= 499) {
//         targetCoordinteY -= step;
//     }
//     if (directionOfMovement >= 500 && directionOfMovement <= 749) {
//         targetCoordinteX += step;
//     }
//     if (directionOfMovement >= 750 && directionOfMovement <= 999) {
//         targetCoordinteX -= step;
//     }
//     return [targetCoordinteX, targetCoordinteY]
// }
// function checkMovingTarget(targetCoordintes, target) {
//     targetCoordinteX = targetCoordintes[0];
//     targetCoordinteY = targetCoordintes[1];
//     if (targetCoordinteX < 0) {
//         targetCoordinteX = 0
//     }
//     if (targetCoordinteX > (blockScreen.clientWidth - target.clientWidth)) {
//         targetCoordinteX = blockScreen.clientWidth - target.clientWidth
//     }
//     if (targetCoordinteY < 0) {
//         targetCoordinteY = 0
//     }
//     if (targetCoordinteY > (blockScreen.clientHeight - target.clientHeight)) {
//         targetCoordinteY = blockScreen.clientHeight - target.clientHeight
//     }
//     return [targetCoordinteX, targetCoordinteY]
// }
// function showTarget(targetCoordintes, target) {
//     targetCoordinteX = targetCoordintes[0];
//     targetCoordinteY = targetCoordintes[1];
//     target.style.top = `${targetCoordinteY}px`
//     target.style.left = `${targetCoordinteX}px`
// }
// function showGameInfo(timeAllocatedForGame) {
//     if ((timeAllocatedForGame % 100) == 0) {
//         document.querySelector('.simple-game__time').innerHTML = `Оставшееся время: ${timeAllocatedForGame / 100}`;
//     }
// }
// function checkTargetHit(aimCoordinteX , aimCoordinteY) {
//     if (stoppingTheGame) {
//         return score
//     }
//     const target = blockScreen.querySelector('.target');
//     let checkX = false
//     let checkY = false
//     if (target.offsetLeft <= aimCoordinteX && aimCoordinteX <= (target.offsetLeft + target.clientWidth)) {
//         checkX = true
//     }
//     if (target.offsetTop <= aimCoordinteY && aimCoordinteY <= (target.offsetTop + target.clientHeight)) {
//         checkY = true
//     }
//     if (checkX && checkY) {
//         score++
//         document.querySelector('.simple-game__score').innerHTML = `Очки: ${score}`;
//     }
// }
// function showMovingTarget(reset = false) {
//     const target = blockScreen.querySelector('.target')
//     let targetCoordinteX = (blockScreen.clientWidth / 2) - (target.clientWidth / 2);
//     let targetCoordinteY = (blockScreen.clientHeight / 2) - (target.clientHeight / 2);
//     let timeAllocatedForGame = 1000;
//     if (reset) {
//         showTarget([targetCoordinteX, targetCoordinteY], target)
//         return
//     }
//     let newTargetPosition = setInterval(() => {
//         if (stoppingTheGame || timeAllocatedForGame <= 0) {
//             clearInterval(newTargetPosition)
//             stoppingTheGame = true;
//         }
//         targetCoordintes = getCoordinatesForTarget(targetCoordinteX, targetCoordinteY)
//         targetCoordintes = checkMovingTarget(targetCoordintes, target)
//         showTarget(targetCoordintes, target)
//         showGameInfo(timeAllocatedForGame)
//         targetCoordinteX = targetCoordintes[0]
//         targetCoordinteY = targetCoordintes[1]
//         timeAllocatedForGame-- 
//     }, 10); 
// }

// function prikolPipiska() {
//     document.body.style.background = 'url("../images/pipka.svg")';
//     document.body.style.backgroundSize = '3rem';
//     let rotation = 0
//     // transform: rotate(0.5turn);
//     setInterval(() => {
//         rotation++
//         document.body.style.transform = `rotate(${rotation}deg)`
//     }, 10);
// }

}
// simpleGame();


// // Поиск всех возможных комбинаций слагаемых заданной суммы
// function searchingAllSum(minNumber, maxNumber, float, lengthArray, unique, searchedSum) {

// // Генератор случайных чисел
// function getRandomNumber(minNumber, maxNumber, float = 0) {
//     resultNumber = minNumber + Math.random() * (maxNumber - minNumber)
//     return +resultNumber.toFixed(float)
// }
// // Создание массива с случайными уникальными числами
// function createArrayWithRundomNumber(minNumber, maxNumber, float, lengthArray, unique = false) {
//     let randomArray = [], randomNumber
//     let preventingInfiniteLoop = 0;
//     for (let numberToAdd = 0; 0 <= numberToAdd && numberToAdd < lengthArray; numberToAdd++) {
//         preventingInfiniteLoop++
//         if (preventingInfiniteLoop > 1000) {
//             return console.log('Unable to create array!');
//         }
//         randomNumber = getRandomNumber(minNumber, maxNumber, float)
//         randomArray.push(randomNumber)
//         if (unique) {
//             for (let numberCompared = 0; numberCompared < randomArray.length; numberCompared++) {
//                 if (randomNumber == randomArray[numberCompared] && numberToAdd !== numberCompared) {
//                 randomArray.pop()
//                 numberToAdd--
//                 }
//             } 
//         }
//     }
//     return randomArray;
// }
// // Поиск уникальных слагаемых суммы
// function searchForTerms(minNumber, maxNumber, float, lengthArray, unique, searchedSum) {
//     let currentArray = createArrayWithRundomNumber(minNumber, maxNumber, float, lengthArray, unique)
//     let resultArray = []
//     let currentSum = 0
//     currentArray.sort()
//     console.log(`Source array: ${currentArray}, searched sum: ${searchedSum}`)
//     termOne:for (let cursorOne = 0; cursorOne < currentArray.length; cursorOne++) {
//         currentSum = currentArray[cursorOne]
//         resultArray.push(currentArray[cursorOne])
//         termOfther:for (let cursorTwo = 0; cursorTwo < currentArray.length; cursorTwo++) {
//             if (cursorOne == cursorTwo) {
//                 continue termOfther
//             }
//             currentSum += currentArray[cursorTwo]
//             resultArray.push(currentArray[cursorTwo])
//             if (currentSum < searchedSum) {
//                 continue termOfther
//             }
//             if (currentSum > searchedSum) {
//                 currentSum -= currentArray[cursorTwo]
//                 resultArray.pop()
//                 continue termOfther
//             }
//             if (currentSum == searchedSum) {
//                 console.log(`Finded array: ${resultArray}`);
//                 resultArray = []
//                 continue termOne
//             }
//             if (currentSum != searchedSum) {
//                 console.log('Error! ' + searchedSum);
//             }
//         }
//         if (currentSum !== searchedSum) {
//             currentSum = 0
//             resultArray = []
//         }
//     }
//     return console.log('Searching done!');
// }
// // Запуск
// searchForTerms(minNumber, maxNumber, float, lengthArray, unique, searchedSum)
// }

// // searchingAllSum(0, 9, 0, 10, true, 10)

// // ----------------
// // --- СЛАЙДЕР ----
// // ----------------

// function slider() {
//     const sliderBlock = document.querySelector('.slider')
//     const sliderPreviewWindow = sliderBlock.querySelector('.slider__items')
//     const sliderItem = sliderPreviewWindow.querySelectorAll('.slider__wrapper-item')
//     const indicatorBasis = sliderBlock.querySelector('.slider__indicator-item')
//     const sliderIndicatorsBlock = sliderBlock.querySelector('.slider__indicators')
//     const itemsIndicators = sliderBlock.getElementsByClassName('slider__indicator-item')
//     let currentSerialNumberItem = 0;

//     createSliderControl()

//     function createSliderControl () {
//         createIndicators()
//         showBlockControl()
//         function createIndicators() {
//             sliderBlock.style.overflow = `hidden`
//             sliderPreviewWindow.style.overflow = `hidden`
//             sliderIndicatorsBlock.innerHTML = ``;
//             sliderItem.forEach(() => {
//                 sliderIndicatorsBlock.append(indicatorBasis.cloneNode())
//             });
//             sliderBlock.querySelectorAll('.slider__indicator-item')[currentSerialNumberItem].checked = true
//         }
//         function showBlockControl() {
//             sliderBlock.querySelectorAll('.slider__control')[0].style.display = `block`
//             sliderBlock.querySelectorAll('.slider__control')[1].style.display = `block`
//             sliderIndicatorsBlock.style.display = `flex`
//         }
//     }
//     function scrollingThroughTheImage(event) {
//         const sliderControlLeft = sliderBlock.querySelector('.slider__control-left')
//         const sliderControlRight = sliderBlock.querySelector('.slider__control-right')
//         function changeIndicators(currentSerialNumberItem) {
//             itemsIndicators[currentSerialNumberItem].checked = true
//         }
//         if (event.target == sliderControlLeft) {
//             currentSerialNumberItem -=1
//             if (currentSerialNumberItem >= 0) {
//                 setImagePosition(currentSerialNumberItem)
//             }
//             if (currentSerialNumberItem < 0) {
//                 currentSerialNumberItem = sliderItem.length - 1
//                 setImagePosition(currentSerialNumberItem)
//             }
//         }
//         if (event.target == sliderControlRight) {
//             currentSerialNumberItem +=1
//             if (currentSerialNumberItem <= sliderItem.length - 1) {
//                 setImagePosition(currentSerialNumberItem)
//             }
//             if (currentSerialNumberItem > sliderItem.length - 1) {
//                 currentSerialNumberItem = 0
//                 setImagePosition(currentSerialNumberItem)
//             }
//         }
//         changeIndicators(currentSerialNumberItem)
//     }
//     function setImagePosition(currentSerialNumberItem) {
//         sliderItem[currentSerialNumberItem].scrollIntoView({
//             block: 'nearest',
//             inline: 'center',
//             behavior: "smooth"
//         })
//     }
//     function showImage(event) {
//         for (let index = 0; index < itemsIndicators.length; index++) {
//             if (itemsIndicators[index] == event.target) {
//                 currentSerialNumberItem = index;
//                 setImagePosition(currentSerialNumberItem)
//                 break
//             }
//         }
//     }
//     function correctSizeSlider() {
//         let clientWindowHeight = document.documentElement.clientHeight
//         sliderItem.forEach((item) => {
//             let itemHeight = item.getBoundingClientRect().height
//             let itemWidth = item.getBoundingClientRect().width
//             if (itemHeight > clientWindowHeight) {
//                 let aspectRatio = itemWidth / itemHeight
//                 let resultWidth = aspectRatio * clientWindowHeight
//                 let resultPadding = (itemWidth - resultWidth) / 2
//                 item.style.paddingLeft = `${resultPadding}px`
//                 item.style.paddingRight = `${resultPadding}px`
//             }
//         })
//     }
//     window.addEventListener('load', correctSizeSlider)
//     sliderBlock.addEventListener('click', scrollingThroughTheImage)
//     sliderIndicatorsBlock.addEventListener('click', showImage)
// }

// slider()