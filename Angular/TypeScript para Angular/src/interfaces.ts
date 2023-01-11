// Interfaces (type x interface)
type robot = {
    id: number | string;
    name: string;
}

interface robot2 {
    readonly id: number | string; // Readonly: somente leitura
    name: string;

    sayHello(): string;
}

const bot1: robot = {
    id: 1,
    name: "megaman",
}

const bot2: robot2 = {
    id: 1,
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

console.log(bot1.name = "roblotnik");
console.log(bot2);

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `hello ${this.name}`;
    }
}

const p = new Pessoa(1, "vinicius");
console.log(p.sayHello());
// Quando utilizar?
// Type: Para tipar os objetos.
// Interface: Quando estiver trabalhando com classes.