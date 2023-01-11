// Funções
function addNumber(x: number, y: number): number {
    return x + y;
}

let soma: number = addNumber(4, 7);
console.log(soma);

function addToHello(name: string): string {
    return `Hello ${name}`;
}

console.log(addToHello("Vinicius"));

// Funções Mult Tipos
function CallToPhone(phone: number | string): number | string{
    return phone;
}

console.log(CallToPhone(1613245345));

// Funções Assincronas ou Async Function
async function getDatabase(id: number): Promise<string> {
    return "Vinicius"
}