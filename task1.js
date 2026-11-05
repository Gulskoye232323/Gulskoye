
class Character {
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }

    // Метод атаки
    attack(target) {
        console.log(this.name + " атакує " + target.name + "!");

        target.health = target.health - this.attackPower;

        if (target.health < 0) {
            target.health = 0;
        }

        console.log("Здоров'я " + target.name + ": " + target.health + " HP");
    }

    // Показує стан персонажа
    showStatus() {
        console.log(this.name + ": " + this.health + " HP");
    }

    // Перевіряє, чи живий персонаж
    isAlive() {
        if (this.health > 0) {
            return true;
        } else {
            return false;
        }
    }
}


// Клас гравця
class Player extends Character {
    constructor(name, health, attackPower) {
        super(name, health, attackPower);

        this.inventory = ["Меч", "Щит", "Зілля здоров'я"];
    }

    // Показує інвентар
    showInventory() {
        console.log("Інвентар:");

        for (let i = 0; i < this.inventory.length; i++) {
            console.log("- " + this.inventory[i]);
        }
    }
}


// Клас монстра
class Monster extends Character {
    constructor(name, health, attackPower) {
        super(name, health, attackPower);
    }
}


// Створення гравця та монстра
const player = new Player("Герой", 100, 20);
const monster = new Monster("Гоблін", 80, 15);


// Початок гри
console.log("===== БИТВА З МОНСТРОМ =====\n");

console.log("Гравець:");
player.showStatus();
console.log("Сила атаки: " + player.attackPower);

console.log("");

player.showInventory();

console.log("\nМонстр:");
monster.showStatus();
console.log("Сила атаки: " + monster.attackPower);


// Початок битви
let round = 1;

while (player.isAlive() && monster.isAlive()) {
    console.log("\n===== РАУНД " + round + " =====\n");

    // Спочатку атакує гравець
    player.attack(monster);

    // Якщо монстр живий, він атакує гравця
    if (monster.isAlive()) {
        console.log("");
        monster.attack(player);
    }

    // Показуємо стан після раунду
    console.log("\nСтан персонажів:");
    player.showStatus();
    monster.showStatus();

    round++;
}


// Визначення переможця
console.log("\n===== КІНЕЦЬ БИТВИ =====");

if (player.isAlive()) {
    console.log("🏆 ПЕРЕМОГА!");
    console.log(player.name + " переміг " + monster.name + "!");
} else {
    console.log("💀 ПОРАЗКА!");
    console.log(monster.name + " переміг " + player.name + "!");
}