// Casses
/*
    Data Modifiers
    public 
    private
    protected
*/
class Character {
    private name?: string; // ? significa que é opcional, por isso não precisa passar no construtor.
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p1 = new Character("Ryu", 10, 98);
p1.attack();

// SubClasses
class Magician extends Character {
    magicPoints: number;
    constructor(
        name: string,
        stregth: number,
        skill: number,
        magicPoints: number
    ){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p2 = new Magician("Mago", 09, 30, 100);