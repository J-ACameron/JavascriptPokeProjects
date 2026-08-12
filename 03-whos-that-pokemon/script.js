const pokemonList = [
    {
    name: "Darmanitan",
    img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/555.png"
    },
    {
    name: "Stakataka",
    img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/805.png"
    },
    {
    name: "Regigigas",
    img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/486.png"
    },
    {
    name : "Grimmsnarl",
    img: "https://static.wikia.nocookie.net/pkmncollectors/images/3/31/Grimmsnarl.png/revision/latest?cb=20200623225445"
    },
    {
    name : "Guzzlord",
    img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/799.png"
    },
    {
    name: "Stonjourner",
    img: "https://img.pokemondb.net/artwork/stonjourner.jpg"
    }
]

let randomIndex;
let randomMon;
let guessAmount = 0;
const image = document.getElementByClass("Pokemon-img");


function startGame(){

    randomIndex = Math.floor(Math.random() * pokemonList.length)
    randomMon = pokemonList[randomIndex]

    image.src = randomMon.img;
    // image.style.filter = "brightness(0)";
}   

function checkGuess(){

let result = ''
let hint = ''
let guess = document.getElementById("Guess").value

    if(guess.toUpperCase() === randomMon.name.toUpperCase()){
        result = "Correct";
        image.style.filter = "brightness(1)"
    }else if(guess.length > randomMon.name.length){
        result = "Wrong! Too many letters!";
    }else if(guess.length < randomMon.name.length){
        result = "Wrong! Too little letters!"
    }else{
        result = "Wrong!";
    }
    guessAmount++


    if(guessAmount >= 5){
        result = `Wrong! The first letter of the Pokemon is ${randomMon.name[0]}`
    }
    

    document.getElementById("results").textContent = result;

}

