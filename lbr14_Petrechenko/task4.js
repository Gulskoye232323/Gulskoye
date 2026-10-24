
const person = {
    firstName: "Михайло",
    lastName: "Петренко",
    age: 18
};

person.email = "student@gmail.com";

delete person.age;

console.log(person);