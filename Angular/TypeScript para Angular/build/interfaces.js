"use strict";
const bot1 = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1.name = "roblotnik");
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello ${this.name}`;
    }
}
const p = new Pessoa(1, "vinicius");
console.log(p.sayHello());
// Quando utilizar?
// Type: Para tipar os objetos.
// Interface: Quando estiver trabalhando com classes.
