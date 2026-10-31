const player = {
    name: "Герой",
    health: 100,
    attack: 20
};

const monster = {
    name: "Гоблін",
    health: 80,
    attack: 15
};

const inventory = ["Меч", "Щит", "Зілля здоров'я"];

function showStatus() {
    console.log("\nГравець: " + player.name);
    console.log("Здоров'я: " + player.health + " HP");

    console.log("\nМонстр: " + monster.name);
    console.log("Здоров'я: " + monster.health + " HP");
}

function attack() {
    console.log(player.name + " атакує монстра!");

    monster.health = monster.health - player.attack;

    if (monster.health < 0) {
        monster.health = 0;
    }

    console.log("Здоров'я монстра: " + monster.health + " HP");
}

function monsterAttack() {
    console.log(monster.name + " атакує героя!");

    player.health = player.health - monster.attack;

    if (player.health < 0) {
        player.health = 0;
    }

    console.log("Здоров'я героя: " + player.health + " HP");
}

console.log('Гра "Битва з монстром"');

console.log("\nІнвентар гравця:");
for (let i = 0; i < inventory.length; i++) {
    console.log(inventory[i]);
}

showStatus();

let round = 1;

while (player.health > 0 && monster.health > 0) {
    console.log("\n=== Раунд " + round + " ===");

    attack();

    if (monster.health > 0) {
        monsterAttack();
    }

    round++;
}

console.log("\n=== Кінець гри ===");

if (player.health > 0 && monster.health <= 0) {
    console.log("Перемога!");
    console.log(player.name + " переміг монстра!");
} else {
    console.log("Поразка!");
    console.log(player.name + " програв монстру.");
}

showStatus();