"use strict"

// JSON - современный формат передачи данных (JavaScript object notation)

const persone = {
    name: "Alex",
    tel: "+5653367895",
    parents: {
        mom: "Olga",
        dad: "Mike"
    }
};

// stringify превращает нужный обьект в нужный формат подходящий для json

console.log(JSON.stringify(persone.parents));


const clone = JSON.parse(JSON.stringify(persone)); // - создали глубокий клон и он не зависит от основного обьекта
clone.parents.mom = "Ann";
console.log(persone);
console.log(clone);

// Обратная ситуация (из JSON формата в простой обьект) (parse)

console.log(JSON.parse(JSON.stringify(persone))); // - получили обьект





