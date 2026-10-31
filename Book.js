class Book {
constructor(title, author, year) {
this.title = title;
this.author = author;
this.year = year;
}

get title() {
    return this._title;
}

set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
        throw new Error("Назва книги не може бути порожньою");
    }
    this._title = value;
}

get author() {
    return this._author;
}

set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
        throw new Error("Автор не може бути порожнім");
    }
    this._author = value;
}

get year() {
    return this._year;
}

set year(value) {
    if (!Number.isInteger(value) || value < 1 || value > new Date().getFullYear()) {
        throw new Error("Неправильний рік видання");
    }
    this._year = value;
}

printInfo() {
    console.log("Назва: " + this.title);
    console.log("Автор: " + this.author);
    console.log("Рік видання: " + this.year);
}

static findOldestBook(books) {
    let oldest = books[0];

    for (let i = 1; i < books.length; i++) {
        if (books[i].year < oldest.year) {
            oldest = books[i];
        }
    }

    return oldest;
}

}

module.exports = Book;