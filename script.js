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

// stringify превращает нужный обьект в нужный формат

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = "Ann";
console.log(persone);
console.log(clone);

// Обратная ситуация (из JSON формата в простой обьект) (parse)

console.log(JSON.parse(JSON.stringify(persone))); // - получили обьект





