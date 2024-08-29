// =================== Завдання 1 ========================

// let num = parseFloat(prompt('Введіть число:'));

// if (num >= 55 && num <= 109) {
//     alert('Чило потрапляє в діапазон від 55 до 109.');
// }

// else {
//     alert('Число не потрапляє в діапазон від 55 до 109.');
// }

// =================== Завдання 2 ============================

// let age = parseInt(prompt('Введіть скільки вам років?'));

// if (age > 0 && age <= 16) {
//     alert('Дитина.');
// }

// else if (age >= 17 && age <= 60) {
//     alert('Дорослий.');
// }

// else if (age >= 61 && age <= 100) {
//     alert('Пенсионер.');
// }

// else {
//     alert('Введений некорректний вік!');
// }

// ===================== Завдання 3 =======================

// let name = prompt("Введіть ваше ім'я:");
// let lastName = prompt("Введіть ваше прізвище:");

// let num1 = name.length;
// let num2 = lastName.length;

// if (num1 > 7 && num2 > 8) {
//     alert(num1 + num2);
// }

// else {
//     alert('Упс!');
// }

// ===================== Завдання 4 ===========================

let lang = prompt("Введіть яку мову використовувати: (ua, en, pl, fr).");
let month = parseInt(prompt("Введіть номер місяця від 1 до 12:"));

switch (lang) {
    case 'ua':
        if (month === 1) {
            alert("Січень");
        }

        else if (month === 2) {
            alert("Лютий");
        }

        else if (month === 3) {
            alert("Березень");
        }

        else if (month === 4) {
            alert("Квітень");
        }

        else if (month === 5) {
            alert("Травень");
        }

        else if (month === 6) {
            alert("Червень");
        }

        else if (month === 7) {
            alert("Липень");
        }

        else if (month === 8) {
            alert("Серпень");
        }

        else if (month === 9) {
            alert("Вересень");
        }

        else if (month === 10) {
            alert("Жовтень");
        }
        else if (month === 11) {
            alert("Листопад");
        }

        else if (month === 12) {
            alert("Грудень");
        }
        else {
            alert('Введене некорректне число!');
        }
        break;
    case 'en':
        if (month === 1) {
            alert("January");
        }

        else if (month === 2) {
            alert("February");
        }

        else if (month === 3) {
            alert("March");
        }

        else if (month === 4) {
            alert("April");
        }

        else if (month === 5) {
            alert("May");
        }

        else if (month === 6) {
            alert("June");
        }

        else if (month === 7) {
            alert("July");
        }

        else if (month === 8) {
            alert("August");
        }

        else if (month === 9) {
            alert("September");
        }

        else if (month === 10) {
            alert("October");
        }
        else if (month === 11) {
            alert("November");
        }

        else if (month === 12) {
            alert("December");
        }
        else {
            alert('Введене некорректне число!');
        }
        break;
    case 'pl':
        if (month === 1) {
            alert("Styczeń");
        }

        else if (month === 2) {
            alert("Luty");
        }

        else if (month === 3) {
            alert("Marzec");
        }

        else if (month === 4) {
            alert("Kwiecień");
        }

        else if (month === 5) {
            alert("Maj");
        }

        else if (month === 6) {
            alert("Czerwiec");
        }

        else if (month === 7) {
            alert("Lipiec");
        }

        else if (month === 8) {
            alert("Sierpień");
        }

        else if (month === 9) {
            alert("Wrzesień");
        }

        else if (month === 10) {
            alert("Październik");
        }
        else if (month === 11) {
            alert("Listopad");
        }

        else if (month === 12) {
            alert("Grudzień");
        }
        else {
            alert('Введене некорректне число!');
        }
        break;
    case 'fr':
        if (month === 1) {
            alert("Janvier");
        }

        else if (month === 2) {
            alert("Février");
        }

        else if (month === 3) {
            alert("Mars");
        }

        else if (month === 4) {
            alert("Avril");
        }

        else if (month === 5) {
            alert("Mai");
        }

        else if (month === 6) {
            alert("Juin");
        }

        else if (month === 7) {
            alert("Juillet");
        }

        else if (month === 8) {
            alert("Août");
        }

        else if (month === 9) {
            alert("Septembre");
        }

        else if (month === 10) {
            alert("Octobre");
        }
        else if (month === 11) {
            alert("Novembre");
        }

        else if (month === 12) {
            alert("Décembre");
        }
        else {
            alert('Введене некорректне число!');
        }
        break;
    default: 
        alert('Введене некорректне значення мови!');
}