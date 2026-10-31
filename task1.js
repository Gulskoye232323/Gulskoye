const Book = require("./Book");
const EBook = require("./EBook");

// Створюємо звичайні книги
const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("Лісова пісня", "Леся Українка", 1911);

// Створюємо електронну книгу
const book3 = new EBook("1984", "Джордж Орвелл", 1949, "PDF");

// Виводимо інформацію про книги
console.log("Перша книга:");
book1.printInfo();

console.log("\nДруга книга:");
book2.printInfo();

console.log("\nЕлектронна книга:");
book3.printInfo();

// Змінюємо значення за допомогою сеттерів
book1.title = "Кобзар Тараса Шевченка";
book3.format = "EPUB";

// Отримуємо значення за допомогою геттерів
console.log("\nНова назва: " + book1.title);
console.log("Новий формат: " + book3.format);

// Знаходимо найдавнішу книгу
const books = [book1, book2, book3];

const oldestBook = Book.findOldestBook(books);

console.log("\nНайдавніша книга:");
oldestBook.printInfo();

// Створюємо електронну книгу на основі звичайної
const newEBook = EBook.createEBook(book2, "PDF");

console.log("\nЕлектронна книга, створена зі звичайної:");
newEBook.printInfo();