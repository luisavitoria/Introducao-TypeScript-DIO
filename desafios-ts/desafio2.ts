// Como podemos melhorar o esse código usando TS? 

let pessoa1: {nome: string, idade:number, profissao: string} = {
    nome: "maria",
    idade: 29,
    profissao: 'atriz'
};

enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}


let pessoa2: Humano = {
    nome: 'Roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
}


let pessoa3: Humano = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}