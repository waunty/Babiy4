const readline = require('readline');

// Створення алфавіту за допомогою циклів
const alphabet = [];

// Додавання літер від a до z через їхні ASCII-коди
for (let i = 97; i <= 122; i++) {
alphabet.push(String.fromCharCode(i)); // від 'a' (97) до 'z' (122)
}

// Додавання літер від A до Z
for (let i = 65; i <= 90; i++) {
alphabet.push(String.fromCharCode(i)); // від 'A' (65) до 'Z' (90)
}

// Функція шифрування
function caesarEncrypt(text, shift) {
return text.split('').map(char => {
let index = alphabet.indexOf(char);
if (index === -1) return char; // Якщо символ не знайдений в реєстрі, то залишається без змін
let newIndex = (index + shift) % alphabet.length;
if (newIndex < 0) newIndex += alphabet.length; // Для від'ємних зсувів
return alphabet[newIndex];
}).join('');
}

// Функція дешифрування
function caesarDecrypt(text, shift) {
return caesarEncrypt(text, -shift);
}

// Налаштування для вводу даних з консолі
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Запит тексту та зсуву
rl.question('Введіть текст для шифрування: ', (text) => {
rl.question('Введіть зсув: ', (shift) => {
shift = parseInt(shift, 10); // Перетворення введеного зсуву на число

// Шифр
const encryptedText = caesarEncrypt(text, shift);
console.log('Зашифрований текст:', encryptedText);

// Розшифрування
const decryptedText = caesarDecrypt(encryptedText, shift);
console.log('Розшифрований текст:', decryptedText);

rl.close();
});
});