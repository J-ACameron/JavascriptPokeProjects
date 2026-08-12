
const typeList = [ "Fire", "Water", "Grass", "Electric", "Fairy", "Dark", "Poison"];
pokemonList = {

Darmanitan: {
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    level: 0,
    type: 0,
    img: "https://img.pokemondb.net/artwork/darmanitan-standard.jpg",
},

Grimmsnarl: {
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    level: 0,
    type: 0,
    img: "https://img.pokemondb.net/artwork/grimmsnarl.jpg",

},

Gliscor: {
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    level: 0,
    type: 0,
    img: "https://img.pokemondb.net/artwork/gliscor.jpg",
},

Jigglypuff: {
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    level: 0,
    type: 0,
    img: "https://img.pokemondb.net/artwork/jigglypuff.jpg",
},

Trapinch: {
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    level: 0,
    type: 0,
    img: "https://img.pokemondb.net/artwork/trapinch.jpg",
}
}

let keys = Object.keys(pokemonList);



function generateCard(){

let randHP = Math.floor(Math.random() * 100);
let randAttack = Math.floor(Math.random() * 100);
let randDefense = Math.floor(Math.random() * 100);
let randSpeed = Math.floor(Math.random() * 100);
let randLevel = Math.floor(Math.random() * 100);
let randMon = keys[Math.floor(Math.random() * keys.length)]
let randnumType = Math.floor(Math.random() * typeList.length);
let randType = typeList[randnumType]

document.getElementById("name").textContent = `Name: ${randMon}`
document.getElementById("type").textContent = `Type: ${randType}`
document.getElementById("level").textContent = `Level ${randLevel}`
document.getElementById("img").src = pokemonList[randMon].img 
document.getElementById("hp").textContent = `HP: ${randHP}`
document.getElementById("attack").textContent = `Attack : ${randAttack}`
document.getElementById("defense").textContent = `Defense: ${randDefense}`
document.getElementById("speed").textContent = `Speed: ${randSpeed}`

const currentCard = {
name :document.getElementById("name").textContent,
type :document.getElementById("type").textContent,
level: document.getElementById("level").textContent ,
img: document.getElementById("img").src,
hp: document.getElementById("hp").textContent ,
attack: document.getElementById("attack").textContent,
defense: document.getElementById("defense").textContent,
speed: document.getElementById("speed").textContent 
}
}

function saveCard(){

    let collection = JSON.parse(localStorage.getItem("pokemonCollection"));
    collection.push(currentCard);
    localStorage.setItem('pokemonCollection', JSON.stringify(collection));
}

function viewCollection(){


}