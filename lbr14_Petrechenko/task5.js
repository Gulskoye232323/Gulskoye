
const users = [
    {
        name: "Іван",
        email: "ivan@gmail.com",
        age: 20
    },
    {
        name: "Олег",
        email: "oleg@gmail.com",
        age: 19
    },
    {
        name: "Анна",
        email: "anna@gmail.com",
        age: 21
    }
];

for (const user of users) {
    const { name, email, age } = user;

    console.log("Ім'я:", name);
    console.log("Пошта:", email);
    console.log("Вік:", age);
    console.log("----------------");
}