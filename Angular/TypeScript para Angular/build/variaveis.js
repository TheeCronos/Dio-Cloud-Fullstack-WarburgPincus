"use strict";
// Tipos primitivos: boolean, number, string
let ligado = false;
let nome = "vinicius";
let indade = 30;
let altura = 1.75;
// Tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
// Tipos abrangentes: any, void
let retorno;
let retornoView;
// Tipo objeto - sem previsibilidade
let produto = {
    name: "vinicius",
    cidade: "DF",
    idade: 27
};
let meuProduto = {
    nome: "tenis",
    preco: 89.99,
    unidades: 5
};
// Arrays
let dados = ["vinicius", "micaele"];
let dados2 = ["vinicius", "micaele"];
// Arrays Mult Tipos
let infos = ["vinicius", 27]; // Pode ser em qualquer ordem dos tipos. Ex.: string depois number, ou number depois string.
// Tuplas
let boleto = ["agua conta", 199.90, 32454]; // Tem que respeitar a ordem dos tipos, diferente do Array Mult Types.
// Arrays Métodos (Mesmos do JavaScript)
// Datas
let aniversario = new Date("2023-11-01 15:00");
console.log(aniversario.toString());
