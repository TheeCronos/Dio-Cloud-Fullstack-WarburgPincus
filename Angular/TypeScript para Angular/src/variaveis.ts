// Tipos primitivos: boolean, number, string
let ligado:boolean = false;
let nome:string = "vinicius";
let indade:number = 30;
let altura:number = 1.75;

// Tipos especiais: null, undefined
let nulo:null = null;
let indefinido:undefined = undefined;

// Tipos abrangentes: any, void
let retorno:void
let retornoView:any

// Tipo objeto - sem previsibilidade
let produto:object = {
    name: "vinicius",
    cidade: "DF",
    idade: 27
}

// Tipo objeto tipado
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "tenis",
    preco: 89.99,
    unidades: 5
}

// Arrays
let dados: string[] = ["vinicius", "micaele"];
let dados2: Array<string> = ["vinicius", "micaele"];

// Arrays Mult Tipos
let infos: (string | number)[] = ["vinicius", 27]; // Pode ser em qualquer ordem dos tipos. Ex.: string depois number, ou number depois string.

// Tuplas
let boleto:[string, number, number] = ["agua conta", 199.90, 32454] // Tem que respeitar a ordem dos tipos, diferente do Array Mult Types.

// Arrays Métodos (Mesmos do JavaScript)

// Datas
let aniversario:Date = new Date("2023-11-01 15:00");
console.log(aniversario.toString());